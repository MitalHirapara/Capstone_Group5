import React from "react";

export default function JobSortBar({ params }) {
  const handleShowChange = (newShowValue) => {
    params.setSelectedOptions((prev) => ({
      ...prev,
      show: newShowValue, // This properly keeps other values intact
    }));
  };

  const toggleDropdown = (dropdown) => {
    params.setOpenDropdown(params.openDropdown === dropdown ? null : dropdown);
  };

  const handleOptionSelect = (dropdown, option) => {
    params.setSelectedOptions((prev) => ({
      ...prev,
      [dropdown]: option, // Update the specific dropdown (show/sort)
    }));
    params.setOpenDropdown(null);

    // Pass the selected show option to the parent component
    if (dropdown === "show") {
      handleShowChange(option);
    }

    if (dropdown === "sort") {
      // Make sure to update the sort query when the user selects a sort option
      params.setQuerySort(option); // Update the sort option passed as a prop
    }
  };

  return (
    <div className="mx-auto mt-6 mb-6 max-w-[85rem] jobsortbar">
      <div className="flex justify-between items-center border-gray-200 py-4 border-b">
        <div className="text-gray-700">
          <span className="text-sm">Showing</span>
          <span className="px-1 font-semibold text-sm">1-{params.jobsToShow}</span>
          <span className="text-sm">of</span>
          <span className="px-1 font-semibold text-sm">{params.totalJobs}</span>
          <span className="text-sm">jobs</span>
        </div>

        <div className="flex items-center space-x-4">
          {/* Show Dropdown */}
          <div className="inline-block relative z-10 text-left">
            <div className="inline-block mr-4">
              <button
                onClick={() => toggleDropdown("show")}
                className="inline-flex justify-center border-gray-300 bg-white hover:bg-gray-50 shadow-sm px-4 py-2 border rounded-md w-full font-medium text-gray-700 text-sm focus:outline-none"
              >
                <label className="mr-2 text-sort">Show:</label>
                {params.selectedOptions.show}
                <svg
                  className="-mr-1 ml-2 w-5 h-5"
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

              {params.openDropdown === "show" && (
                <div className="absolute bg-white ring-opacity-5 shadow-lg mt-2 rounded-md ring-1 ring-black origin-top-right job-sort-num">
                  <div className="py-1">
                    {params.showOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect("show", option)}
                        className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="inline-block">
              <button
                onClick={() => toggleDropdown("sort")}
                className="inline-flex justify-center border-gray-300 bg-white hover:bg-gray-50 shadow-sm px-4 py-2 border rounded-md w-full font-medium text-gray-700 text-sm focus:outline-none"
              >
                <label className="mr-2 text-sort">Sort by:</label>
                {params.selectedOptions.sort}
                <svg
                  className="-mr-1 ml-2 w-5 h-5"
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

              {params.openDropdown === "sort" && (
                <div className="absolute bg-white ring-opacity-5 shadow-lg mt-2 rounded-md ring-1 ring-black w-48 origin-top-right">
                  <div className="py-1">
                    {params.sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionSelect("sort", option)}
                        className="block hover:bg-gray-100 px-4 py-2 text-gray-700 text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
