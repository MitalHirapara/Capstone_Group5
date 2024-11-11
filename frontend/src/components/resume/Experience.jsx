import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectExperience,
    updateExperience,
} from "../../store/resume/resumeSlice";

const Experience = () => {
    const dispatch = useDispatch();
    const experience = useSelector(selectExperience);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentlyWorking, setCurrentlyWorking] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateExperience({ [name]: value }));
    };

    const handleCheckboxChange = () => {
        setCurrentlyWorking(!currentlyWorking);
        if (!currentlyWorking) {
            dispatch(updateExperience({ endMonth: "", endYear: "" }));
        }
    };

    const enhanceExperience = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch("/api/enhance-work-experience/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ experience }),
            });

            if (!response.ok) {
                throw new Error(
                    `Failed to enhance experience: ${response.statusText}`
                );
            }

            const data = await response.json();
            if (data.enhanced_experience) {
                dispatch(updateExperience(data.enhanced_experience));
            } else {
                setError("No enhancement data returned from AI.");
            }
        } catch (error) {
            console.error("Error enhancing experience:", error);
            setError(
                "An error occurred while enhancing your experience. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
                Work Experience
            </h2>
            <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Job Title
                    </label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={experience.jobTitle || ""}
                        onChange={handleInputChange}
                        className="form-input w-full px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter job title"
                    />
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Company
                    </label>
                    <input
                        type="text"
                        name="company"
                        value={experience.company || ""}
                        onChange={handleInputChange}
                        className="form-input w-full px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Enter company name"
                    />
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        checked={currentlyWorking}
                        onChange={handleCheckboxChange}
                    />
                    <label className="block text-sm font-medium text-gray-600">
                        I currently work here
                    </label>
                </div>
                <div className="flex space-x-4">
                    <div className="flex flex-col space-y-2 w-1/2">
                        <label className="block text-sm font-medium text-gray-600">
                            Start Month/Year
                        </label>
                        <input
                            type="month"
                            name="startDate"
                            value={experience.startDate || ""}
                            onChange={handleInputChange}
                            className="form-input w-full px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex flex-col space-y-2 w-1/2">
                        <label className="block text-sm font-medium text-gray-600">
                            End Month/Year
                        </label>
                        <input
                            type="month"
                            name="endDate"
                            value={experience.endDate || ""}
                            onChange={handleInputChange}
                            className="form-input w-full px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            disabled={currentlyWorking}
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <label className="block text-sm font-medium text-gray-600">
                        Description
                    </label>
                    <textarea
                        name="description"
                        value={experience.description || ""}
                        onChange={handleInputChange}
                        className="form-input w-full px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Describe your roles and responsibilities"
                    />
                </div>
            </div>
            <button
                onClick={enhanceExperience}
                disabled={loading}
                className="w-full mt-4 px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
                {loading ? "Enhancing..." : "Enhance with AI"}
            </button>
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </div>
    );
};

export default Experience;
