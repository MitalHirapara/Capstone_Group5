import React, { useState } from "react";

const initialFormData = {
    title: "",
    description: "",
    location: "",
    job_type: "",
    salary_range: "",
    certificates: "",
    skills: "",
    is_active: true,
};
const JobForm = () => {
    const [formData, setFormData] = useState(initialFormData);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
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
        if (formData.salary_range && formData.salary_range.length > 50) {
            newErrors.salary_range =
                "Salary range must be less than 50 characters.";
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
            let data = { ...formData, employer: 1 };
            console.log("Form Data Submitted:", data);
            let response = await fetch("http://127.0.0.1:8000/job/create/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }).catch((err) => {
                console.log(err.response.data);
            });
            console.log(response);
            if (response.ok) setFormData(initialFormData);
        }
    };

    return (
        <div className=" mx-auto bg-white p-8 shadow-lg shadow-slate-400	 rounded-lg ">
            <h2 className="text-2xl font-semibold mb-6 text-slate-950">
                Create Job Posting
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 ">
                <div>
                    <label className="text-slate-800 block  text-sm font-medium mb-1">
                        Job Title
                    </label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className={`text-slate-800 w-full px-4 py-2 border border-slate-400 rounded-lg ${
                            errors.title ? "border-red-500" : "border-gray-300"
                        }`}
                        type="text"
                        placeholder="Enter job title"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.title}
                        </p>
                    )}
                </div>

                <div>
                    <label className="text-slate-800 block text-sm font-medium mb-1">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className={`text-slate-800 w-full px-4 py-2 border border-slate-400 rounded-lg ${
                            errors.description
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        placeholder="Enter job description"
                        rows="4"
                    />
                    {errors.description && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.description}
                        </p>
                    )}
                </div>

                <div>
                    <label className="text-slate-800 block text-sm font-medium mb-1">
                        Location
                    </label>
                    <input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`text-slate-800 w-full px-4 py-2 border border-slate-400 rounded-lg ${
                            errors.location
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        type="text"
                        placeholder="Enter job location"
                    />
                    {errors.location && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.location}
                        </p>
                    )}
                </div>

                <div>
                    <label className="text-slate-800 block text-sm font-medium mb-1">
                        Job Type
                    </label>
                    <input
                        name="job_type"
                        value={formData.job_type}
                        onChange={handleChange}
                        className={`text-slate-800 w-full px-4 py-2 border border-slate-400 rounded-lg ${
                            errors.job_type
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        type="text"
                        placeholder="Enter job type (e.g. Full-time, Part-time)"
                    />
                    {errors.job_type && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.job_type}
                        </p>
                    )}
                </div>

                <div>
                    <label className="text-slate-800 block text-sm font-medium mb-1">
                        Salary Range
                    </label>
                    <input
                        name="salary_range"
                        value={formData.salary_range}
                        onChange={handleChange}
                        className={`text-slate-800 w-full px-4 py-2 border border-slate-400 rounded-lg ${
                            errors.salary_range
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        type="text"
                        placeholder="Enter salary range (e.g. $40k - $60k)"
                    />
                    {errors.salary_range && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.salary_range}
                        </p>
                    )}
                </div>

                <div>
                    <label className="text-slate-800 block text-sm font-medium mb-1">
                        Certificates
                    </label>
                    <input
                        name="certificates"
                        value={formData.certificates}
                        onChange={handleChange}
                        className={`text-slate-800 w-full px-4 py-2 border border-slate-400 rounded-lg ${
                            errors.certificates
                                ? "border-red-500"
                                : "border-gray-300"
                        }`}
                        type="text"
                        placeholder="Enter certificates (if any)"
                    />
                    {errors.certificates && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.certificates}
                        </p>
                    )}
                </div>

                <div>
                    <label className="text-slate-800 block text-sm font-medium mb-1">
                        Skills
                    </label>
                    <input
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        className={`text-slate-800 w-full px-4 py-2 border border-slate-400 rounded-lg ${
                            errors.skills ? "border-red-500" : "border-gray-300"
                        }`}
                        type="text"
                        placeholder="Enter skills (e.g. Python, React)"
                    />
                    {errors.skills && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.skills}
                        </p>
                    )}
                </div>

                <div>
                    <label className="text-slate-800 block text-sm font-medium mb-1">
                        Active Status
                    </label>
                    <select
                        name="is_active"
                        value={formData.is_active}
                        onChange={handleChange}
                        className="text-slate-800 w-full px-4 py-2 border border-slate-400 rounded-lg "
                    >
                        <option value={true}>Active</option>
                        <option value={false}>Inactive</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-slate-950 text-white rounded-lg hover:bg-slate-500 transition duration-300"
                >
                    Submit Job Post
                </button>
            </form>
        </div>
    );
};

export default JobForm;
