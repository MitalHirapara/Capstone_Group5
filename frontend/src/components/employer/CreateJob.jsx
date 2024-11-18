import React, { useState, useEffect } from "react";

const initialFormData = {
    title: "",
    description: "",
    location: "",
    job_type: "",
    salary_range: "",
    certificates: [],
    skills: [],
    is_active: true,
    experience_level: "",
    number_of_openings: 1,
};

const JobForm = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [locations, setLocations] = useState([]);
    const [certificates, setCertificates] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const fetchLocations = async () => {
            const response = await fetch(
                "http://127.0.0.1:8000/api/locations/"
            );
            const data = await response.json();
            setLocations(data);
        };

        const fetchCertificates = async () => {
            const response = await fetch(
                "http://127.0.0.1:8000/api/certificates/"
            );
            const data = await response.json();
            setCertificates(data);
        };

        const fetchSkills = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/skills/");
            const data = await response.json();
            setSkills(data);
        };

        fetchLocations();
        fetchCertificates();
        fetchSkills();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value.split(","),
        });
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.title || formData.title.length > 255) {
            newErrors.title =
                "Job title is required and must be less than 255 characters.";
        }
        if (!formData.description) {
            newErrors.description = "Job description is required.";
        }
        if (formData.location && formData.location.length > 255) {
            newErrors.location = "Location must be less than 255 characters.";
        }
        if (formData.job_type && formData.job_type.length > 50) {
            newErrors.job_type = "Job type must be less than 50 characters.";
        }
        if (
            !formData.salary_range ||
            formData.salary_range < 17 ||
            formData.salary_range > 150
        ) {
            newErrors.salary_range = "Salary range must be between 17 and 150.";
        }
        if (
            formData.number_of_openings < 1 ||
            formData.number_of_openings > 8
        ) {
            newErrors.number_of_openings =
                "Number of openings must be between 1 and 8.";
        }
        if (formData.certificates && formData.certificates.length > 50) {
            newErrors.certificates =
                "Certificates must be less than 50 characters.";
        }
        if (formData.skills && formData.skills.length > 50) {
            newErrors.skills = "Skills must be less than 50 characters.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const data = { ...formData, employer: 1 };
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
        <div className=" mx-auto bg-white p-8 shadow-lg shadow-slate-400	 rounded-lg ">
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
                    className={`text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg ${
                        errors.title ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.title && (
                    <p className="text-red-500 text-sm mt-1">{errors.title}</p>
                )}

                {/* Description */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Description:
                </label>
                <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className={`text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg ${
                        errors.description
                            ? "border-red-500"
                            : "border-gray-300"
                    }`}
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
                <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                >
                    {locations.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                            {loc.city}, {loc.state}
                        </option>
                    ))}
                </select>

                {/* Salary Range */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Salary Range:
                </label>
                <input
                    type="number"
                    name="salary_range"
                    value={formData.salary_range}
                    onChange={handleChange}
                    min="17"
                    max="150"
                    step="0.01"
                    className={`text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg ${
                        errors.salary_range
                            ? "border-red-500"
                            : "border-gray-300"
                    }`}
                />
                {errors.salary_range && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.salary_range}
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
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Permanent">Permanent</option>
                </select>

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
                    <option value="Entry level">Entry level</option>
                    <option value="Mid-senior level">Mid-senior level</option>
                    <option value="Senior level">Senior level</option>
                </select>

                {/* Certificates */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Certificates:
                </label>
                <select
                    name="certificates"
                    value={formData.certificates}
                    onChange={handleSelectChange}
                    multiple
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                >
                    {certificates.map((cert) => (
                        <option key={cert.id} value={cert.id}>
                            {cert.certificate_name}
                        </option>
                    ))}
                </select>

                {/* Skills */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Skills:
                </label>
                <select
                    name="skills"
                    value={formData.skills}
                    onChange={handleSelectChange}
                    multiple
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                >
                    {skills.map((skill) => (
                        <option key={skill.id} value={skill.id}>
                            {skill.skill_name}
                        </option>
                    ))}
                </select>

                {/* Number of Openings */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Number of Openings:
                </label>
                <input
                    type="number"
                    name="number_of_openings"
                    value={formData.number_of_openings}
                    onChange={handleChange}
                    min="1"
                    max="8"
                    className={`text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg ${
                        errors.number_of_openings
                            ? "border-red-500"
                            : "border-gray-300"
                    }`}
                />
                {errors.number_of_openings && (
                    <p className="text-red-500 text-sm mt-1">
                        {errors.number_of_openings}
                    </p>
                )}

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
