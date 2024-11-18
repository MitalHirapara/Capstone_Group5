import React from 'react'
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaBookmark, FaRegBookmark } from "react-icons/fa";

const JobHeader = () => {
    return (
        <>
        <div className="bg-white p-6 rounded-lg flex flex-col justify-between ">
            <div className='flex justify-between'>
                <h1 className="text-3xl text-gray-950 font-bold mb-2">UI / UX Designer fulltime</h1>
                <a
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
                    href="#"
                >Apply Now
                </a>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <span className="job-type flex  items-center"><FaBriefcase className="job-type mr-1" /> Full Time {/* Job type icon */}</span>
                <span className="job-time flex items-center"><FaClock className="job-time mr-1" /> 4 minutes ago{/* Posted time icon */}</span>
            </div>
        </div>
        <div className='job-det-border mb-10'></div>
        <div className='job-header-img'>
            <img src='/job-header.png' />
        </div>
        </>
    );
};

export default JobHeader;
