import React from 'react'
import { FaBuilding, FaMapMarkerAlt, FaPen, FaSearch } from "react-icons/fa";

export default function JobFilterHead({ params }) {
    return (
        <div className='mx-auto mt-6 mb-6 px-4 sm:px-6 lg:px-8 py-10 lg:py-6 w-full max-w-[90%] md:max-w-[85rem] jobfilterhead'>
            <div className="p-6">
                <div className="mx-auto mb-10 max-w-2xl text-center guidesec">
                    <div className="mb-5 max-w-2xl">
                        <h3 className="block font-semibold text-2xl text-gray-800 md:text-3xl lg:text-4xl dark:text-neutral-200 jobfilterheading">
                            Your Next Career Awaits
                        </h3>
                    </div>

                    <p className="inline-block bg-clip-text font-medium text-gray-500 text-sm">
                        Find your next career move among thousands of open positions tailored to your skills and experience.
                    </p>
                </div>
                <div className="flex md:flex-row flex-col items-center md:items-center md:space-x-4 space-y-4 md:space-y-0 mx-auto max-w-[50rem] jobsearchfilter">
                    {/* Search Input */}
                    <div className="relative flex-1 border-gray-400 border-r border-responsive text-gray-600">
                        <span className="left-0 absolute inset-y-0 flex items-center pl-3">
                            <FaBuilding className="text-gray-700" />
                        </span>

                        <select
                            className="py-2 pl-10 w-full placeholder-gray-600"
                            value={params.queryIndustry}
                            onChange={(e) => params.setQueryIndustry(e.target.value)}

                        >
                            <option value="">All Industries</option>
                            {params.industries.map((industry) => (
                                <option key={industry.id} value={industry.id}>{industry.name}</option>
                            ))}
                        </select>

                    </div>
                    {/* Location Input */}
                    <div className="relative flex-1 border-gray-400 border-r text-gray-600">
                        <span className="left-0 absolute inset-y-0 flex items-center pl-1">
                            <FaPen className="text-gray-700" />
                        </span>
                        <input
                            className="py-2 pl-7 w-full placeholder-gray-600"
                            type="text"
                            placeholder="Job, title, or Keywords"
                            onChange={(e) => params.setQueryJobTitle(e.target.value)}
                            value={params.queryJobTitle}
                        />
                    </div>
                    {/* Category Dropdown */}
                    <div className="relative flex-1 text-gray-600">
                        <span className="left-0 absolute inset-y-0 flex items-center pl-1">
                            <FaMapMarkerAlt className="mr-2 text-gray-700" />
                        </span>
                        <input
                            className="py-2 pl-7 w-full placeholder-gray-600"
                            type="text"
                            placeholder="City, Province or location"
                            onChange={(e) => params.setQueryLocation(e.target.value)}
                            value={params.queryLocation}
                        />
                    </div>
                    {/* Search Button */}
                    {/* <div>
                        <a
                            className="inline-flex justify-center items-center gap-x-3 bg-blue-600 from-blue-600 hover:from-violet-600 focus:from-violet-600 to-violet-600 hover:to-blue-600 focus:to-blue-600 px-4 py-3 border border-transparent rounded-md font-medium text-center text-sm text-white focus:outline-none"
                            href="/jobs"
                        >
                            <FaSearch className="text-white" />
                            Search Jobs
                        </a>
                    </div> */}
                </div>
                {/* Filter Options */}
                <div className="flex md:flex-row justify-center items-center md:space-x-4 md:space-y-0 mx-auto mt-4 max-w-[60rem] job-sorting-option">
                    <div className="relative">
                        <div className="flex items-center border-gray-300 px-4 py-2 border rounded-lg focus:ring-1 focus:ring-zinc-700 focus:outline-none">
                            <select className='bg-transparent border-none text-gray-600 outline-none'
                                value={params.queryJobType}
                                onChange={(e) => params.setQueryJobType(e.target.value)}
                            >

                                <option value="">Job Type</option>
                                <option value="fulltime">Full Time</option>
                                <option value="parttime">Part Time</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="contract">Contract</option>
                                <option value="permanent">Permanent</option>

                                <svg
                                    className="ml-2 w-5 h-5 text-zinc-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </select>
                        </div>
                    </div>
                    <div className="relative">
                        <button className="flex items-center border-gray-300 px-4 py-2 border rounded-lg focus:ring-1 focus:ring-zinc-700 focus:outline-none">

                            <select
                                className="bg-transparent ml-2 border-none text-gray-600 outline-none"
                                value={params.queryPostedTime}
                                onChange={(e) => params.setQueryPostedTime(e.target.value)}
                            >
                                <option value="">All Dates</option>
                                <option value="now">Just Now</option>
                                <option value="last24hours">Last 24 hours</option>
                                <option value="lastWeek">Last Week</option>
                                <option value="lastMonth">Last Month</option>
                                <option value="last3Months">Last 3 Months</option>
                                <svg
                                    className="ml-2 w-5 h-5 text-zinc-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </select>

                        </button>
                    </div>
                    <div className="relative">
                        <button className="flex items-center border-gray-300 px-4 py-2 border rounded-lg focus:ring-1 focus:ring-zinc-700 focus:outline-none">

                            <select className='bg-transparent border-none text-gray-600 outline-none'
                                value={params.queryExperienceLevels}
                                onChange={(e) => params.setExperienceLevels(e.target.value)}
                            >
                                <option value="">Experience Level</option>
                                <option value="Entry Level">Entry Level</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="Mid-Senior Level">Mid-Senior Level</option>
                                <option value="Senior Level">Senior Level</option>
                                <svg
                                    className="ml-2 w-5 h-5 text-zinc-700"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </select>
                        </button>
                    </div>
                    {/* <div className="relative">
                        <button className="flex items-center border-gray-300 px-4 py-2 border rounded-lg focus:ring-1 focus:ring-zinc-700 focus:outline-none">
                            <span className='text-gray-600'>Pay</span>
                            <svg
                                className="ml-2 w-5 h-5 text-zinc-700"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>
                    </div> */}

                </div>
            </div>
        </div >
    )
}
