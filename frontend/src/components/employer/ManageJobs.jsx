import React, { useEffect, useState } from "react";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentJob, setCurrentJob] = useState(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/job/jobs");
                if (!response.ok) throw new Error("Failed to fetch jobs");
                const data = await response.json();
                setJobs(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    const handleDelete = async (id) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this job?"
        );
        if (confirmed) {
            const response = await fetch(
                `http://127.0.0.1:8000/job/job/${id}/`,
                {
                    method: "DELETE",
                }
            );
            if (response.ok) {
                setJobs(jobs.filter((job) => job.id !== id));
            } else {
                alert("Failed to delete job.");
            }
        }
    };

    const handleEdit = (job) => {
        setCurrentJob(job);
        setIsEditModalOpen(true);
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        const response = await fetch(
            `http://127.0.0.1:8000/job/job/${currentJob.id}/`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(currentJob),
            }
        );
        if (response.ok) {
            const updatedJob = await response.json();
            setJobs(
                jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
            );
            setIsEditModalOpen(false);
            setCurrentJob(null);
        } else {
            alert("Failed to update job.");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentJob({ ...currentJob, [name]: value });
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className=" mx-auto bg-white p-8 shadow-lg shadow-slate-500	 rounded-lg ">
            <h2 className="text-2xl font-semibold mb-6 text-slate-800 ">
                Job Listings
            </h2>
            <table className="min-w-full bg-white border border-slate-400 rounded-lg">
                <thead>
                    <tr className="bg-slate-950">
                        <th className="py-2 px-4 border-b text-slate-100 text-left ">
                            Title
                        </th>
                        <th className="py-2 px-4 border-b text-slate-100 text-left ">
                            Location
                        </th>
                        <th className="py-2 px-4 border-b text-slate-100 text-left ">
                            Job Type
                        </th>
                        <th className="py-2 px-4 border-b text-slate-100 text-left ">
                            Salary Range
                        </th>
                        <th className="py-2 px-4 border-b text-slate-100 text-left ">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {jobs.map((job) => (
                        <tr key={job.id} className="hover:bg-gray-100">
                            <td className="py-2 px-4 border-b text-slate-800">
                                {job.title}
                            </td>
                            <td className="py-2 px-4 border-b text-slate-800">
                                {job.location}
                            </td>
                            <td className="py-2 px-4 border-b text-slate-800">
                                {job.job_type}
                            </td>
                            <td className="py-2 px-4 border-b text-slate-800">
                                {job.salary_range}
                            </td>
                            <td className="py-2 px-4 border-b text-slate-800">
                                <button
                                    className="text-slate-950 hover:underline"
                                    onClick={() => handleEdit(job)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="text-red-600 hover:underline ml-4"
                                    onClick={() => handleDelete(job.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Job Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">
                            Edit Job
                        </h3>
                        <form onSubmit={handleUpdate} className="space-y-4">
                            <div>
                                <label className="block mb-1 text-slate-800">
                                    Job Title
                                </label>
                                <input
                                    name="title"
                                    value={currentJob.title}
                                    onChange={handleChange}
                                    className="w-full border border-slate-400 text-slate-800 rounded-lg p-2 rounded"
                                    type="text"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-slate-800">
                                    Location
                                </label>
                                <input
                                    name="location"
                                    value={currentJob.location}
                                    onChange={handleChange}
                                    className="w-full border border-slate-400 text-slate-800 rounded-lg p-2 rounded"
                                    type="text"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-slate-800">
                                    Job Type
                                </label>
                                <input
                                    name="job_type"
                                    value={currentJob.job_type}
                                    onChange={handleChange}
                                    className="w-full border border-slate-400 text-slate-800 rounded-lg p-2 rounded"
                                    type="text"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-slate-800">
                                    Salary Range
                                </label>
                                <input
                                    name="salary_range"
                                    value={currentJob.salary_range}
                                    onChange={handleChange}
                                    className="w-full border border-slate-400 text-slate-800 rounded-lg p-2 rounded"
                                    type="text"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="mr-4 text-gray-600 hover:underline"
                                    onClick={() => setIsEditModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-slate-950 text-white rounded-lg hover:bg-slate-500 transition duration-300 "
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobList;
