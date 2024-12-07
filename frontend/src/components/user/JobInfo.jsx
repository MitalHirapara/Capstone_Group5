import React from 'react';
import { FaIndustry, FaLayerGroup, FaMoneyBillWave, FaRegClock, FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const JobInfo = () => {
  return (
    <div className="bg-white p-6 mt-10 rounded-lg job-overview">
      {/* Title and Divider */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
      <hr className="border-gray-300 mb-6" />

      {/* Job Details Grid */}
      <div className="p-6 grid grid-cols-2 gap-4">
        <div className="flex job-overview-icon">
          <FaIndustry className="mt-1 mr-2 text-[#66789c]" /> 
          <p className="text-[#66789c] mr-1">Industry</p> 
          <span className="text-[#05264e] pl-6">Mechanical Automotive</span>
        </div>
        <div className="flex job-overview-icon">
          <FaLayerGroup className="mt-1 mr-2 text-[#66789c]" /> 
          <p className="text-[#66789c] mr-1">Job level</p> 
          <span className="text-[#05264e] pl-6">Experienced</span>
        </div>
        <div className="flex job-overview-icon">
          <FaMoneyBillWave className="mt-1 mr-2 text-[#66789c]" /> 
          <p className="text-[#66789c] mr-1">Salary</p> 
          <span className="text-[#05264e] pl-6">$800 - $1000</span>
        </div>
        <div className="flex job-overview-icon">
          <FaRegClock className="mt-1 mr-2 text-[#66789c]" /> 
          <p className="text-[#66789c] mr-1">Experience</p> 
          <span className="text-[#05264e] pl-6">1 - 2 years</span>
        </div>
        <div className="flex job-overview-icon">
          <FaBriefcase className="mt-1 mr-2 text-[#66789c]" /> 
          <p className="text-[#66789c] mr-1">Job type</p> 
          <span className="text-[#05264e] pl-6">Permanent</span>
        </div>
        <div className="flex job-overview-icon">
          <FaCalendarAlt className="mt-1 mr-2 text-[#66789c]" /> 
          <p className="text-[#66789c] mr-1">Deadline</p> 
          <span className="text-[#05264e] pl-6">25/12/2024</span>
        </div>
        <div className="flex job-overview-icon">
          <FaCalendarAlt className="mt-1 mr-2 text-[#66789c]" /> 
          <p className="text-[#66789c] mr-1">Updated</p> 
          <span className="text-[#05264e] pl-6">10/10/2024</span>
        </div>
        <div className="flex job-overview-icon">
          <FaMapMarkerAlt className="mt-1 mr-2 text-[#66789c]" /> 
          <p className="text-[#66789c] mr-1">Location</p> 
          <span className="text-[#05264e] pl-6">Dallas Remote Friendly</span>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
