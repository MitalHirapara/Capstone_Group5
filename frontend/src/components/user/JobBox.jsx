import React from "react";
import { Link } from "react-router-dom";
import Badge from "../user/Badge";
import {
    FaMapMarkerAlt,
    FaClock,
    FaBriefcase,
    FaRegBookmark,
} from "react-icons/fa";
import { formatTimeAgo } from "../../lib/dateTimeConvert";

export default function JobBox({ jobs }) {
    return (
        <div className="mx-auto p-4 max-w-[85rem] container">
            <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <Link
                            to={`/job/${job.id}`}
                            key={job.id}
                            className="shadow hover:shadow-lg border rounded-lg transition overflow-hidden card"
                        >
                            <div className="px-6 py-4 pb-0">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        {job ? (
                                            job.logo ? (
                                                <img
                                                    src={job.employer?.company_logo}
                                                    alt={job.employer?.company_name || "Company Logo"}
                                                    className="rounded w-10 h-10"
                                                />
                                            ) : (
                                                <div className="flex justify-center items-center bg-blue-500 rounded w-10 h-10 font-bold text-white">
                                                    {job.employer?.company_name ? job.employer?.company_name?.charAt(0) : "?"}
                                                </div>
                                            )
                                        ) : null}
                                        <div>
                                            <h3 className="font-semibold text-gray-950 text-lg">
                                                {job.employer?.company_name || "Unknown Employer"}
                                            </h3>
                                            <p className="flex items-center job-location">
                                                <FaMapMarkerAlt className="mr-1" />{" "}
                                                {job.location
                                                    ? `${job.location.city}, ${job.location.state}`
                                                    : "Location not provided"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-4">
                                <h6 className="mb-2 font-semibold text-gray-950 text-l">
                                    {job.title || "Job Title Not Available"}
                                </h6>
                                <div className="flex items-center space-x-2 mb-2 text-gray-500 text-sm">
                                    <span className="flex items-center uppercase job-type">
                                        <FaBriefcase className="mr-1" />{" "}
                                        {job.job_type || "N/A"}
                                    </span>
                                    <span className="flex items-center job-time">
                                        <FaClock className="mr-1" />{" "}
                                        {job.posted_at
                                            ? formatTimeAgo(job.posted_at)
                                            : "N/A"}
                                    </span>
                                </div>
                                <p className="mb-4 text-gray-800 text-sm">
                                    {job.short_description || "No description available."}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {job.skill?.length > 0 ? (
                                        job.skill.slice(0, 3).map((skill, skillIndex) => (
                                            <Badge key={skillIndex} variant="secondary">
                                                {skill.skill_name}
                                            </Badge>
                                        ))
                                    ) : (
                                        <span>No skills listed</span>
                                    )}
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-6 py-4 border-t">
                                <span className="font-semibold text-blue-600 text-l">
                                    {job.salary_range
                                        ? `${job.salary_range}`
                                        : job.min_salary && job.max_salary
                                            ? `$${job.min_salary} - $${job.max_salary}`
                                            : "Negotiable"
                                    }
                                    {(job.salary_range || (job.min_salary && job.max_salary)) && (
                                        <span className="font-normal text-gray-600 text-sm">
                                            /hr
                                        </span>
                                    )}

                                </span>
                                <a
                                    className="inline-flex justify-center items-center gap-x-3 bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded text-center text-white transition btn-job-apply"
                                    href={`/apply/${job.id}`}
                                >
                                    Apply Now
                                </a>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="text-center text-gray-500">
                        No jobs available at the moment.
                    </div>
                )}
            </div>
        </div>
    );
}
