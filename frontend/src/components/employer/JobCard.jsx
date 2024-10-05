import React from "react";

const JobCard = ({ job, onDelete, onEdit }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg p-6 dark:bg-gray-800">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-white">
                {job.title}
            </h3>
            <p className="text-gray-700 mb-2 dark:text-gray-300">
                <strong>Description: </strong> {job.description}
            </p>
            <p className="text-gray-700 mb-2 dark:text-gray-300">
                <strong>Location: </strong> {job.location || "N/A"}
            </p>
            <p className="text-gray-700 mb-2 dark:text-gray-300">
                <strong>Job Type: </strong> {job.job_type || "N/A"}
            </p>
            <p className="text-gray-700 mb-2 dark:text-gray-300">
                <strong>Salary: </strong> {job.salary_range || "N/A"}
            </p>
            <p className="text-gray-700 mb-2 dark:text-gray-300">
                <strong>Certificates: </strong> {job.certificates || "N/A"}
            </p>
            <p className="text-gray-700 mb-4 dark:text-gray-300">
                <strong>Skills: </strong> {job.skills || "N/A"}
            </p>
            <p className="text-gray-700 mb-4 dark:text-gray-300">
                <strong>Status: </strong>{" "}
                {job.is_active ? "Active" : "Inactive"}
            </p>

            <div className="flex space-x-4">
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                    onClick={() => onEdit(job.id)}
                >
                    Edit
                </button>
                <button
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition duration-300"
                    onClick={() => onDelete(job.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default JobCard;
