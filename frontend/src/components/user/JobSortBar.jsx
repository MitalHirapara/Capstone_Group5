import React from 'react'
import { useState } from "react";

export default function JobSortBar() {

    // Manage dropdown states
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({
        show: "12",
        sort: "Default",
    });

    const showOptions = ["8", "12", "16", "20", "24"];
    const sortOptions = ["Default" ,"Ascending", "Descending", "Random"];

    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const handleOptionSelect = (dropdown, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [dropdown]: option,
        }));
        setOpenDropdown(null);
    };


    return (
        <>
            <div className='max-w-[85rem] mt-6 mb-6 mx-auto'>
                <div className="flex justify-between items-center border-b border-gray-200 py-4">
                    <div className="text-gray-700">
                        <span className="text-sm">Showing</span>
                        <span className="font-semibold text-sm px-1">1-12</span>
                        <span className="text-sm">of</span>
                        <span className="font-semibold text-sm px-1">50</span>
                        <span className="text-sm">jobs</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        {/* Show Dropdown */}
                        <div className="relative z-10 inline-block text-left">
                            {/* Show Dropdown */}
                            <div className="inline-block mr-4">
                                <button
                                    onClick={() => toggleDropdown("show")}
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                                >
                                    <label className="text-sort mr-2">Show:</label>
                                    {selectedOptions.show}
                                    <svg
                                        className="-mr-1 ml-2 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                {openDropdown === "show" && (
                                    <div className="origin-top-right job-sort-num absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            {showOptions.map((option) => (
                                                <a
                                                    key={option}
                                                    href="#"
                                                    onClick={() =>
                                                        handleOptionSelect("show", option)
                                                    }
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    {option}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sort Dropdown */}
                            <div className="inline-block">
                                <button
                                    onClick={() => toggleDropdown("sort")}
                                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                                >
                                    <label className="text-sort mr-2">Sort by:</label>
                                    {selectedOptions.sort}
                                    <svg
                                        className="-mr-1 ml-2 h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>

                                {openDropdown === "sort" && (
                                    <div className="origin-top-right absolute mt-2  w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            {sortOptions.map((option) => (
                                                <a
                                                    key={option}
                                                    href="#"
                                                    onClick={() =>
                                                        handleOptionSelect("sort", option)
                                                    }
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                >
                                                    {option}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
