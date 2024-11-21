import React, { useState, useEffect } from "react";
import MarkdownEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";
import Select from "react-select";

const initialFormData = {
    title: "",
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

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const data = {
                ...formData,
                location: formData.location.value,
                industry: formData.industry.value,
                certificates: formData.certificates.map((cert) => cert.value),
                skills: formData.skills.map((skill) => skill.value),
                employer: 1,
            };
            const response = await fetch("http://127.0.0.1:8000/job/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            if (response.ok) setFormData(initialFormData);
        }
    };

    return (
        <div className=" mx-auto bg-white p-8 shadow-lg shadow-slate-400 rounded-lg">
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

                {/* Description */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Description:
                </label>
                <MarkdownEditor
                    value={formData.description}
                    onChange={handleMarkdownChange}
                    style={{ height: "200px" }}
                />
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
                />
                {errors.location && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.location}
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
                />
                {errors.industry && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.industry}
                    </p>
                )}

                {/* Salary Range */}
                <div className="flex space-x-4">
                    <div>
                        <label className="text-slate-800 block text-sm font-medium mb-1">
                            Minimum Salary:
                        </label>
                        <input
                            type="number"
                            name="salary_min"
                            value={formData.salary_min}
                            onChange={handleChange}
                            className="text-slate-800 px-4 py-2 mt-0 border border-slate-400 rounded-lg"
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
                            className="text-slate-800 px-4 py-2 mt-0 border border-slate-400 rounded-lg"
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
                />

                {/* Number of Openings */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Number of Openings:
                </label>
                <input
                    type="number"
                    name="number_of_openings"
                    value={formData.number_of_openings}
                    onChange={handleChange}
                    className="text-slate-800 px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                />

                {/* Active Status */}
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
