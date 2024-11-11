import React, { useState, useEffect } from "react";
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
    const [currentlyWorking, setCurrentlyWorking] = useState(
        experience.currentlyWorking || false
    );
    const [enhancedExperience, setEnhancedExperience] = useState(""); // State for enhanced experience
    const [showEnhanced, setShowEnhanced] = useState(false); // State to show the enhanced experience textbox

    useEffect(() => {
        // Ensure the component initializes with the experience data from the store
        setCurrentlyWorking(experience.currentlyWorking || false);
    }, [experience]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // Update only the specific field without resetting the entire form
        dispatch(updateExperience({ ...experience, [name]: value }));
    };

    const handleCheckboxChange = () => {
        const newCurrentlyWorking = !currentlyWorking;
        setCurrentlyWorking(newCurrentlyWorking);

        // If currently working, we don't need an end date, so we clear it
        if (!newCurrentlyWorking) {
            dispatch(updateExperience({ ...experience, endDate: "" }));
        } else {
            // Set 'currentlyWorking' to true, ensure no endDate exists
            dispatch(
                updateExperience({ ...experience, currentlyWorking: true })
            );
        }
    };

    const enhanceExperience = async () => {
        setLoading(true);
        setError(null);
        try {
            // Ensure the body is sent in the correct format for the API
            const requestPayload = {
                jobTitle: experience.jobTitle || "",
                company: experience.company || "",
                startDate: experience.startDate || "",
                endDate: experience.endDate || "",
                currentlyWorking: currentlyWorking,
                description: experience.description || "",
            };

            const response = await fetch(
                "http://127.0.0.1:8000/resume/api/enhance-work-experience/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(requestPayload),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to enhance experience: ${response.statusText}`
                );
            }

            const data = await response.json();
            if (data.enhanced_experience) {
                // Update the experience with the enhanced data from the response
                setEnhancedExperience(data.enhanced_experience); // Set enhanced experience
                setShowEnhanced(true); // Show the enhanced experience text box
                dispatch(
                    updateExperience({
                        ...experience,
                        enhancedExperience: data.enhanced_experience,
                    })
                );
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

            {/* Conditionally render enhanced experience */}
            {showEnhanced && (
                <div className="space-y-4 mt-6">
                    <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-600">
                            Enhanced Experience
                        </label>
                        <textarea
                            value={enhancedExperience || ""}
                            readOnly
                            className="form-input w-full px-4 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            placeholder="Enhanced work experience will appear here"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Experience;
