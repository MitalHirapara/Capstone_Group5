import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [jobToDelete, setJobToDelete] = useState(null);
    const [locations, setLocations] = useState([]);

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

        // Fetch locations for dropdown
        const fetchLocations = async () => {
            try {
                const response = await fetch(
                    "http://127.0.0.1:8000/api/locations/"
                );
                const data = await response.json();
                setLocations(data);
            } catch (err) {
                console.error("Failed to fetch locations:", err);
            }
        };

        fetchJobs();
        fetchLocations();
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
        <div className="mx-auto bg-white p-8 shadow-lg shadow-slate-400 rounded-lg text-slate-950">
            <h2 className="text-2xl font-semibold mb-6 text-slate-950">
                Job List
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <div
                        key={job.id}
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-slate-800">
                            {job.title}
                        </h3>
                        <p className="text-slate-600 mt-2">
                            {job.short_description ||
                                "No description available"}
                        </p>
                        <div className="mt-4 text-slate-600 space-y-1">
                            <div>Location: {job.location.city}</div>
                            <div>Job Type: {job.job_type}</div>
                            <div>Experience Level: {job.experience_level}</div>
                            {job.min_salary && job.max_salary && (
                                <div>
                                    Salary: ${job.min_salary} - $
                                    {job.max_salary}
                                </div>
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
                    <div className="bg-white p-6 rounded-lg shadow-lg transition-all ease-out md:max-w-2xl md:w-full m-3 md:mx-auto">
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
