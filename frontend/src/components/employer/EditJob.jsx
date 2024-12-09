import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditJobPage = () => {
    const { id } = useParams();
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
                    `http://127.0.0.1:8000/job/detail/${id}/`
                );
                if (!jobResponse.ok) throw new Error("Failed to fetch job");
                const jobData = await jobResponse.json();

                // Fetch other data
                const [locationData, industryData, skillData, certificateData] =
                    await Promise.all([
                        fetch("http://127.0.0.1:8000/api/locations/").then(
                            (res) => res.json()
                        ),
                        fetch("http://127.0.0.1:8000/api/industries/").then(
                            (res) => res.json()
                        ),
                        fetch("http://127.0.0.1:8000/api/skills/").then((res) =>
                            res.json()
                        ),
                        fetch("http://127.0.0.1:8000/api/certificates/").then(
                            (res) => res.json()
                        ),
                    ]);

                setLocations(locationData);
                setIndustries(industryData);
                setSkills(skillData);
                setCertificates(certificateData);

                // Preprocess job data for default values
                setJob({
                    ...jobData,
                    location: jobData.location.id,
                    industry: jobData.industry_id,
                    certificates: jobData.certificates.map((cert) => cert.id),
                    skill: jobData.skill.map((skill) => skill.id),
                });
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;
    if (!job) return <div>No job data available.</div>;

    const handleUpdate = async (e) => {
        e.preventDefault();
        const updatedJob = {
            title: job.title,
            short_description: job.short_description,
            description: job.description,
            location: parseInt(job.location),
            job_type: job.job_type,
            min_salary: job.min_salary,
            max_salary: job.max_salary,
            certificates: job.certificates.map((cert) => parseInt(cert)),
            skill: job.skill.map((skill) => parseInt(skill)),
            industry: parseInt(job.industry),
            experience_level: job.experience_level,
            number_of_openings: job.number_of_openings,
        };

        const response = await fetch(
            `http://127.0.0.1:8000/job/update/${id}/`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedJob),
            }
        );

        if (response.ok) {
            alert("job updated successfully!");
            navigate("/manage-jobs"); // Navigate back to job list
        } else {
            alert("Failed to update job");
        }
    };

    return (
        <div className="mx-auto bg-white p-8 shadow-lg shadow-slate-400 rounded-lg text-slate-950">
            <h2 className="text-2xl font-semibold mb-6 text-slate-950">
                Edit Job Posting
            </h2>
            <form onSubmit={handleUpdate} className="space-y-6">
                {/* Job Title */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Job Title:
                </label>
                <input
                    type="text"
                    value={job.title}
                    onChange={(e) => setJob({ ...job, title: e.target.value })}
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                    placeholder="Job Title"
                    required
                />

                {/* Short Description */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Short Description:
                </label>
                <input
                    type="text"
                    value={job.short_description}
                    onChange={(e) =>
                        setJob({ ...job, short_description: e.target.value })
                    }
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                    placeholder="Short Description"
                />

                {/* Full Description */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Full Job Description:
                </label>
                <textarea
                    value={job.description}
                    onChange={(e) =>
                        setJob({ ...job, description: e.target.value })
                    }
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                    placeholder="Full Job Description"
                    rows="4"
                    required
                />

                {/* Location */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Location:
                </label>
                <select
                    value={job.location}
                    onChange={(e) =>
                        setJob({ ...job, location: parseInt(e.target.value) })
                    }
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                    required
                >
                    <option className="text-slate-800" value="">
                        Select Location
                    </option>
                    {locations.map((location) => (
                        <option
                            className="text-slate-800"
                            key={location.id}
                            value={location.id}
                        >
                            {location.name}
                        </option>
                    ))}
                </select>

                {/* Job Type */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Job Type:
                </label>
                <select
                    value={job.job_type}
                    onChange={(e) =>
                        setJob({ ...job, job_type: e.target.value })
                    }
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                    required
                >
                    <option value="fulltime">Full-Time</option>
                    <option value="parttime">Part-Time</option>
                    <option value="contract">Contract</option>
                    <option value="permanent">Permanent</option>
                </select>

                {/* Salary Range */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Salary Range:
                </label>
                <div className="flex space-x-4">
                    <input
                        type="number"
                        value={job.min_salary}
                        onChange={(e) =>
                            setJob({
                                ...job,
                                min_salary: parseInt(e.target.value),
                            })
                        }
                        className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                        placeholder="Min Salary"
                    />
                    <input
                        type="number"
                        value={job.max_salary}
                        onChange={(e) =>
                            setJob({
                                ...job,
                                max_salary: parseInt(e.target.value),
                            })
                        }
                        className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                        placeholder="Max Salary"
                    />
                </div>

                {/* Certificates (Multi-Select) */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Certificates:
                </label>
                <select
                    multiple
                    value={job.certificates}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            certificates: Array.from(
                                e.target.selectedOptions,
                                (option) => parseInt(option.value)
                            ),
                        })
                    }
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                >
                    {certificates.map((certificate) => (
                        <option key={certificate.id} value={certificate.id}>
                            {certificate.certificate_name}
                        </option>
                    ))}
                </select>

                {/* Skills (Multi-Select) */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Skills:
                </label>
                <select
                    multiple
                    value={job.skill}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            skill: Array.from(
                                e.target.selectedOptions,
                                (option) => parseInt(option.value)
                            ),
                        })
                    }
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                >
                    {skills.map((skill) => (
                        <option key={skill.id} value={skill.id}>
                            {skill.skill_name}
                        </option>
                    ))}
                </select>

                {/* Industry */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Industry:
                </label>
                <select
                    value={job.industry}
                    onChange={(e) =>
                        setJob({ ...job, industry: parseInt(e.target.value) })
                    }
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
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
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Experience Level:
                </label>
                <select
                    value={job.experience_level}
                    onChange={(e) =>
                        setJob({ ...job, experience_level: e.target.value })
                    }
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                    required
                >
                    <option value="entry">Entry Level</option>
                    <option value="intermediate">Intermediate Level</option>
                    <option value="midsenior">Mid-Senior Level</option>
                    <option value="senior">Senior Level</option>
                </select>

                {/* Number of Openings */}
                <label className="text-slate-800 block text-sm font-medium mb-1">
                    Number of Openings:
                </label>
                <input
                    type="number"
                    value={job.number_of_openings}
                    onChange={(e) =>
                        setJob({
                            ...job,
                            number_of_openings: parseInt(e.target.value),
                        })
                    }
                    className="text-slate-800 w-full px-4 py-2 mt-0 border border-slate-400 rounded-lg"
                    placeholder="Number of Openings"
                    required
                />

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                    Update Job
                </button>
            </form>
        </div>
    );
};

export default EditJobPage;
