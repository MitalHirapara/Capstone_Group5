
import React from 'react';
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { formatTimeAgo } from "../../lib/dateTimeConvert";

const JobHeader = ({ job }) => {
    if (!job) {
        return <div>Loading...</div>; // Handle the case when job data is not yet available
    }
    console.log(job);

    return (
        <>
            <div className="flex flex-col justify-between bg-white p-6 rounded-lg">
                <div className="flex justify-between">
                    <h1 className="mb-2 font-bold text-3xl text-gray-950">{job.title}</h1>
                    <a
                        className="inline-flex justify-center items-center gap-x-3 bg-blue-600 from-blue-600 hover:from-violet-600 focus:from-violet-600 to-violet-600 hover:to-blue-600 focus:to-blue-600 px-4 py-3 border border-transparent rounded-md font-medium text-center text-sm text-white focus:outline-none"
                        href={job.applyUrl || "#"}
                    >
                        Apply Now
                    </a>
                </div>
                <div className="flex items-center space-x-2 mb-2 text-gray-500 text-sm">
                    <span className="flex items-center uppercase job-type"><FaBriefcase className="mr-1 job-type" />  {job.job_type || "N/A"}</span>
                    <span className="flex items-center job-time"><FaClock className="mr-1 job-time" /> {job.posted_at
                        ? formatTimeAgo(job.posted_at)
                        : "N/A"}</span>
                </div>
            </div>
            <div className="mb-10 job-det-border"></div>
            <div className="job-header-img">
                <img src='/job-header.png' alt="Job Header" />
            </div>
        </>
    );
};

export default JobHeader;
