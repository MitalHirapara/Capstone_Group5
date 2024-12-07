import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditJobPage = () => {
    const { jobId } = useParams();
    const [job, setJob] = useState(null);
    const [locations, setLocations] = useState([]);
    const [industries, setIndustries] = useState([]);
    const [skills, setSkills] = useState([]);
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch job details by ID
                const jobResponse = await fetch(
                    `http://127.0.0.1:8000/job/detail/${jobId}/`
                );
                if (!jobResponse.ok) throw new Error("Failed to fetch job");
                const jobData = await jobResponse.json();
                setJob(jobData);

                // Fetch locations, industries, skills, and certificates (optional, adjust based on your backend setup)
                const locationResponse = await fetch(
                    "http://127.0.0.1:8000/api/locations/"
                );
                const locationData = await locationResponse.json();
                setLocations(locationData);

                const industryResponse = await fetch(
                    "http://127.0.0.1:8000/api/industries/"
                );
                const industryData = await industryResponse.json();
                setIndustries(industryData);

                const skillResponse = await fetch(
                    "http://127.0.0.1:8000/api/skills/"
                );
                const skillData = await skillResponse.json();
                setSkills(skillData);

                const certificateResponse = await fetch(
                    "http://127.0.0.1:8000/api/certificates/"
                );
                const certificateData = await certificateResponse.json();
                setCertificates(certificateData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [jobId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedJob = {
            title: job.title,
            short_description: job.short_description,
            description: job.description,
            location: job.location,
            job_type: job.job_type,
            min_salary: job.min_salary,
            max_salary: job.max_salary,
            certificates: job.certificates,
            skill: job.skill,
            industry: job.industry,
            experience_level: job.experience_level,
            number_of_openings: job.number_of_openings,
        };

        const response = await fetch(`http://127.0.0.1:8000/job/${job.id}/`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedJob),
        });

        if (response.ok) {
            navigate("/jobs"); // Navigate back to job list
        } else {
            alert("Failed to update job");
        }
    };

    return (
        <div className="p-8">
            <h2 className="text-2xl font-semibold text-center">Edit Job</h2>
            <form onSubmit={handleUpdate} className="mt-6 space-y-4">
                {/* Job Title */}
                <input
                    type="text"
                    value={job.title}
                    onChange={(e) => setJob({ ...job, title: e.target.value })}
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    placeholder="Job Title"
                    required
                />

                {/* Short Description */}
                <input
                    type="text"
                    value={job.short_description}
                    onChange={(e) =>
                        setJob({ ...job, short_description: e.target.value })
                    }
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    placeholder="Short Description"
                />

                {/* Full Description */}
                <textarea
                    value={job.description}
                    onChange={(e) =>
                        setJob({ ...job, description: e.target.value })
                    }
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    placeholder="Full Job Description"
                    rows="4"
                    required
                />

                {/* Location */}
                <select
                    value={job.location}
                    onChange={(e) =>
                        setJob({ ...job, location: e.target.value })
                    }
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    required
                >
                    <option value="">Select Location</option>
                    {locations.map((location) => (
                        <option key={location.id} value={location.id}>
                            {location.name}
                        </option>
                    ))}
                </select>

                {/* Job Type */}
                <select
                    value={job.job_type}
                    onChange={(e) =>
                        setJob({ ...job, job_type: e.target.value })
                    }
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    required
                >
                    <option value="fulltime">Full-Time</option>
                    <option value="parttime">Part-Time</option>
                    <option value="contract">Contract</option>
                    <option value="permanent">Permanent</option>
                </select>

                {/* Salary Range */}
                <div className="flex space-x-4">
                    <input
                        type="number"
                        value={job.min_salary}
                        onChange={(e) =>
                            setJob({ ...job, min_salary: e.target.value })
                        }
                        className="w-full border border-gray-300 p-2 rounded-lg"
                        placeholder="Min Salary"
                    />
                    <input
                        type="number"
                        value={job.max_salary}
                        onChange={(e) =>
                            setJob({ ...job, max_salary: e.target.value })
                        }
                        className="w-full border border-gray-300 p-2 rounded-lg"
                        placeholder="Max Salary"
                    />
                </div>

                {/* Certificates (Multi-Select) */}
                <select
                    multiple
                    value={job.certificates}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            certificates: Array.from(
                                e.target.selectedOptions,
                                (option) => option.value
                            ),
                        })
                    }
                    className="w-full border border-gray-300 p-2 rounded-lg"
                >
                    {certificates.map((certificate) => (
                        <option key={certificate.id} value={certificate.id}>
                            {certificate.name}
                        </option>
                    ))}
                </select>

                {/* Skills (Multi-Select) */}
                <select
                    multiple
                    value={job.skill}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            skill: Array.from(
                                e.target.selectedOptions,
                                (option) => option.value
                            ),
                        })
                    }
                    className="w-full border border-gray-300 p-2 rounded-lg"
                >
                    {skills.map((skill) => (
                        <option key={skill.id} value={skill.id}>
                            {skill.name}
                        </option>
                    ))}
                </select>

                {/* Industry */}
                <select
                    value={job.industry}
                    onChange={(e) =>
                        setJob({ ...job, industry: e.target.value })
                    }
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    required
                >
                    <option value="">Select Industry</option>
                    {industries.map((industry) => (
                        <option key={industry.id} value={industry.id}>
                            {industry.name}
                        </option>
                    ))}
                </select>

                {/* Experience Level */}
                <select
                    value={job.experience_level}
                    onChange={(e) =>
                        setJob({ ...job, experience_level: e.target.value })
                    }
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    required
                >
                    <option value="entry">Entry Level</option>
                    <option value="intermediate">Intermediate Level</option>
                    <option value="midsenior">Mid-Senior Level</option>
                    <option value="senior">Senior Level</option>
                </select>

                {/* Number of Openings */}
                <input
                    type="number"
                    value={job.number_of_openings}
                    onChange={(e) =>
                        setJob({ ...job, number_of_openings: e.target.value })
                    }
                    className="w-full border border-gray-300 p-2 rounded-lg"
                    placeholder="Number of Openings"
                    required
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                    Update Job
                </button>
            </form>
        </div>
    );
};

export default EditJobPage;
