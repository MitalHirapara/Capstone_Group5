import React, { useState, useEffect } from "react";
import MarkdownEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";
import ReactMarkdown from "react-markdown"; // To render Markdown

const initialFormData = {
    title: "",
    short_description: "", // New field
    description: "",
    location: null,
    job_type: "",
    salary_min: "",
    salary_max: "",
    certificates: [],
    skills: [],
    is_active: true,
    experience_level: "",
    number_of_openings: 1,
    industry: null,
};

const JobForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [locations, setLocations] = useState([]);
    const [certificates, setCertificates] = useState([]);
    const [skills, setSkills] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const fetchLocations = fetch(
                "http://127.0.0.1:8000/api/locations/"
            );
            const fetchCertificates = fetch(
                "http://127.0.0.1:8000/api/certificates/"
            );
            const fetchSkills = fetch("http://127.0.0.1:8000/api/skills/");
            const fetchIndustries = fetch(
                "http://127.0.0.1:8000/api/industries/"
            );

            const [locationsRes, certificatesRes, skillsRes, industriesRes] =
                await Promise.all([
                    fetchLocations,
                    fetchCertificates,
                    fetchSkills,
                    fetchIndustries,
                ]);

            setLocations(await locationsRes.json());
            setCertificates(await certificatesRes.json());
            setSkills(await skillsRes.json());
            setIndustries(await industriesRes.json());
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSelectChange = (value, name) => {
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleMarkdownChange = ({ text }) => {
        setFormData({ ...formData, description: text });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.title) {
            newErrors.title = "Job title is required.";
        }
        if (!formData.short_description) {
            newErrors.short_description = "Short description is required.";
        }
        if (!formData.description) {
            newErrors.description = "Description is required.";
        }
        if (!formData.salary_min || !formData.salary_max) {
            newErrors.salary = "Both salary range fields are required.";
        } else if (Number(formData.salary_min) >= Number(formData.salary_max)) {
            newErrors.salary =
                "Minimum salary must be less than maximum salary.";
        }
        if (!formData.location) {
            newErrors.location = "Location is required.";
        }
        if (!formData.industry) {
            newErrors.industry = "Industry is required.";
        }
        if (!formData.job_type) {
            newErrors.job_type = "Job type is required.";
        }
        if (!formData.experience_level) {
            newErrors.experience_level = "Experience level is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const data = {
                ...formData,
                location_id: formData.location?.value, // sending the ID for location
                industry_id: formData.industry?.value, // sending the ID for industry
                skill_ids: formData.skills.map((skill) => skill.value), // sending array of skill IDs
                certificate_ids: formData.certificates.map(
                    (cert) => cert.value
                ), // sending array of certificate IDs
                employer_id: 9, // ensure this is a valid ID
            };
            const response = await fetch("http://127.0.0.1:8000/job/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                setShowSuccessAlert(true);
                setFormData(initialFormData); // Reset the form on success

                // Hide the success alert after 3 seconds
                setTimeout(() => {
                    setShowSuccessAlert(false);
                }, 3000);
            }
        }
    };

    return (
        <div className=" mx-auto bg-white p-8 shadow-lg shadow-slate-400 rounded-lg">
            {showSuccessAlert && (
                <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                    Job post successfully created!
                </div>
            )}
            <h2 className="text-2xl font-semibold mb-6 text-slate-950">
                Create Job Posting
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Job Title */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Job Title:
                </label>
                <input
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                />
                {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}

                {/* Short Description */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Short Description:
                </label>
                <input
                    name="short_description"
                    value={formData.short_description}
                    onChange={handleChange}
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                />
                {errors.short_description && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.short_description}
                    </p>
                )}

                {/* Description */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Description:
                </label>
                <MarkdownEditor
                    value={formData.description}
                    onChange={handleMarkdownChange}
                    style={{ height: "200px" }}
                    renderHTML={(text) => <>{text}</>} // Ensures the markdown is rendered correctly
                />
                <div className="mt-4">
                    <h3 className="font-semibold text-slate-800 text-lg">
                        Preview:
                    </h3>
                    <div className="preview-container text-slate-800">
                        <ReactMarkdown>{formData.description}</ReactMarkdown>
                    </div>
                </div>
                {errors.description && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.description}
                    </p>
                )}

                {/* Location */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Location:
                </label>
                <Select
                    options={locations.map((loc) => ({
                        label: `${loc.city}, ${loc.state}`,
                        value: loc.id,
                    }))}
                    onChange={(value) => handleSelectChange(value, "location")}
                    value={formData.location}
                    className="text-slate-800"
                />
                {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.location}
                    </p>
                )}

                {/* Job Type */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Job Type:
                </label>
                <select
                    name="job_type"
                    value={formData.job_type}
                    onChange={handleChange}
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                >
                    <option value="">Select Job Type</option>
                    <option value="fulltime">Full Time</option>
                    <option value="parttime">Part Time</option>
                    <option value="contract">Contract</option>
                    <option value="permanent">Permanent</option>
                </select>
                {errors.job_type && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.job_type}
                    </p>
                )}

                {/* Experience Level */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Experience Level:
                </label>
                <select
                    name="experience_level"
                    value={formData.experience_level}
                    onChange={handleChange}
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                >
                    <option value="">Select Experience Level</option>
                    <option value="entry">Junior</option>
                    <option value="intermediate">Junior</option>
                    <option value="midsenior">Mid-Level</option>
                    <option value="senior">Senior</option>
                </select>
                {errors.experience_level && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.experience_level}
                    </p>
                )}

                {/* Industry */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Industry:
                </label>
                <Select
                    options={industries.map((ind) => ({
                        label: ind.name,
                        value: ind.id,
                    }))}
                    onChange={(value) => handleSelectChange(value, "industry")}
                    value={formData.industry}
                    className="text-slate-800"
                />
                {errors.industry && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.industry}
                    </p>
                )}

                {/* Salary Range */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-slate-800 block text-sm font-medium mb-1">
                            Minimum Salary:
                        </label>
                        <input
                            type="number"
                            name="salary_min"
                            value={formData.salary_min}
                            onChange={handleChange}
                            className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="text-slate-800 block text-sm font-medium mb-1">
                            Maximum Salary:
                        </label>
                        <input
                            type="number"
                            name="salary_max"
                            value={formData.salary_max}
                            onChange={handleChange}
                            className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                        />
                    </div>
                </div>
                {errors.salary && (
                    <p className="text-red-500 text-sm mt-1">{errors.salary}</p>
                )}

                {/* Certificates */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Certificates:
                </label>
                <Select
                    isMulti
                    options={certificates.map((cert) => ({
                        label: cert.certificate_name,
                        value: cert.id,
                    }))}
                    onChange={(value) =>
                        handleSelectChange(value, "certificates")
                    }
                    value={formData.certificates}
                    className="text-slate-800"
                />

                {/* Skills */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Skills:
                </label>
                <Select
                    isMulti
                    options={skills.map((skill) => ({
                        label: skill.skill_name,
                        value: skill.id,
                    }))}
                    onChange={(value) => handleSelectChange(value, "skills")}
                    value={formData.skills}
                    className="text-slate-800"
                />

                {/* Number of Openings and Active Status */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="text-slate-800 block text-sm font-medium mb-1">
                            Number of Openings:
                        </label>
                        <input
                            type="number"
                            name="number_of_openings"
                            value={formData.number_of_openings}
                            onChange={handleChange}
                            className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                        />
                    </div>

                    <div>
                        <label className="text-slate-800 block text-sm font-medium mb-1">
                            Active Status:
                        </label>
                        <select
                            name="is_active"
                            value={formData.is_active}
                            onChange={handleChange}
                            className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                        >
                            <option value={true}>Active</option>
                            <option value={false}>Inactive</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default JobForm;
