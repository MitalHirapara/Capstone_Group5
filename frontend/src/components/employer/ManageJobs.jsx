import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [jobToDelete, setJobToDelete] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch jobs data
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://127.0.0.1:8000/jobs/");
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

    const handleDelete = async () => {
        // Perform the delete operation
        const response = await fetch(
            `http://127.0.0.1:8000/job/${jobToDelete.id}/`,
            {
                method: "DELETE",
            }
        );
        if (response.ok) {
            setJobs(jobs.filter((job) => job.id !== jobToDelete.id));
            setIsDeleteModalOpen(false);
        } else {
            alert("Failed to delete job.");
        }
    };

    const handleEdit = (jobId) => {
        navigate(`/edit-job/${jobId}`);
    };

    const openDeleteModal = (job) => {
        setJobToDelete(job);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
        setJobToDelete(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <div className="p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-center text-slate-800">
                Job Listings
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-slate-800">
                            {job.title}
                        </h3>
                        <p className="text-slate-600 mt-2">
                            {job.short_description ||
                                "No description available"}
                        </p>
                        <div className="mt-4">
                            <span className="block text-slate-500">
                                Location: {job.location_name}
                            </span>
                            <span className="block text-slate-500">
                                Job Type: {job.job_type}
                            </span>
                            <span className="block text-slate-500">
                                Experience Level: {job.experience_level}
                            </span>
                            {job.min_salary && job.max_salary && (
                                <span className="block text-slate-500">
                                    Salary: ${job.min_salary} - $
                                    {job.max_salary}
                                </span>
                            )}
                        </div>
                        <div className="flex justify-between items-center mt-6">
                            <button
                                onClick={() => handleEdit(job.id)}
                                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => openDeleteModal(job)}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Delete Job Modal */}
            {isDeleteModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                        <h3 className="text-lg font-semibold text-slate-800 mb-4">
                            Confirm Deletion
                        </h3>
                        <p className="text-slate-600 mb-4">
                            Are you sure you want to delete this job?
                        </p>
                        <div className="flex justify-end mt-4">
                            <button
                                onClick={closeDeleteModal}
                                className="mr-4 text-gray-600 hover:underline"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default JobList;
