import React from 'react'
import { FaBuilding, FaMapMarkerAlt, FaPen, FaSearch } from "react-icons/fa";

export default function JobFilterHead() {
    return (
        <div className='jobfilterhead max-w-[85rem] mt-6 mb-6 mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-6'>
            <div className=" p-6">
                <div className="guidesec max-w-2xl text-center mb-10 mx-auto">
                    <div className="mb-5 max-w-2xl">
                        <h3 className="jobfilterheading block font-semibold text-gray-800 text-2xl md:text-3xl lg:text-4xl dark:text-neutral-200">
                            Your Next Career Awaits
                        </h3>
                    </div>

                    <p className="inline-block text-sm font-medium bg-clip-text text-gray-500 ">
                        Find your next career move among thousands of open positions tailored to your skills and experience.
                    </p>
                </div>
                <div className="jobsearchfilter max-w-[55rem] mx-auto flex items-center space-x-4">
                    {/* Search Input */}
                    <div className="flex-1 relative border-r border-gray-400 ">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <FaBuilding className="text-gray-700" />
                        </span>
                        <input
                            className="w-full pl-10 py-2 placeholder-gray-600"
                            type="text"
                            placeholder="Industry or Company"
                        />
                    </div>
                    {/* Location Input */}
                    <div className="flex-1 relative border-r border-gray-400 text-gray-600">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                            <FaPen className="text-gray-700" />
                        </span>
                        <input
                            className="w-full pl-7 py-2 placeholder-gray-600"
                            type="text"
                            placeholder="Job, title, or Keywords"
                        />
                    </div>
                    {/* Category Dropdown */}
                    <div className="flex-1 relative text-gray-600">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-1">
                            <FaMapMarkerAlt className="text-gray-700 mr-2" />
                        </span>
                        <input
                            className="w-full pl-7 py-2 placeholder-gray-600"
                            type="text"
                            placeholder="City, Province or location"
                        />
                    </div>
                    {/* Search Button */}
                    <div>
                        <a
                            className="inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-violet-600 focus:to-blue-600 py-3 px-4"
                            href="/jobs"
                        >
                            <FaSearch className="text-white" />
                            Search Jobs
                        </a>
                    </div>
                </div>
                {/* Filter Options */}
                <div className="mt-4 max-w-[60rem] mx-auto flex items-center justify-center space-x-4">
                    <div className="relative">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700 flex items-center">
                            <span className='text-gray-600'>Job Type</span>
                            <svg
                                className="h-5 w-5 text-zinc-700 ml-2"
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
                    </div>
                    <div className="relative">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700 flex items-center">
                            <span className='text-gray-600'>Date Posted</span>
                            <svg
                                className="h-5 w-5 text-zinc-700 ml-2"
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
                    </div>
                    <div className="relative">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700 flex items-center">
                            <span className='text-gray-600'>Experience Level</span>
                            <svg
                                className="h-5 w-5 text-zinc-700 ml-2"
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
                    </div>
                    <div className="relative">
                        <button className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-zinc-700 flex items-center">
                            <span className='text-gray-600'>Pay</span>
                            <svg
                                className="h-5 w-5 text-zinc-700 ml-2"
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
                    </div>
                </div>
            </div>
        </div>
    )
}
