import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectExperience,
    updateExperience,
} from "../../store/resume/resumeSlice";

const Experience = ({ steps, currentStep }) => {
    const dispatch = useDispatch();
    const experience = useSelector(selectExperience) || [];
    const [loadingIndex, setLoadingIndex] = useState(null); // Track which experience is being enhanced
    const [errorIndex, setErrorIndex] = useState(null); // Track errors for each experience

    const handleExperienceChange = (index, e) => {
        const { name, value } = e.target;
        const updatedExperience = [...experience];
        updatedExperience[index] = {
            ...updatedExperience[index],
            [name]: value,
        };
        dispatch(updateExperience(updatedExperience));
    };

    const handleCheckboxChange = (index) => {
        const updatedExperience = [...experience];
        updatedExperience[index].currentlyWorking =
            !updatedExperience[index].currentlyWorking;
        if (updatedExperience[index].currentlyWorking) {
            updatedExperience[index].endDate = "";
        }
        dispatch(updateExperience(updatedExperience));
    };

    const handleAddExperience = () => {
        const newExperience = {
            jobTitle: "",
            company: "",
            startDate: "",
            endDate: "",
            currentlyWorking: false,
            description: "",
            enhancedDescription: "", // Placeholder for enhanced description
        };
        dispatch(updateExperience([...experience, newExperience]));
    };

    const handleRemoveExperience = (index) => {
        const updatedExperience = experience.filter((_, i) => i !== index);
        dispatch(updateExperience(updatedExperience));
    };

    const enhanceExperience = async (index) => {
        setLoadingIndex(index);
        setErrorIndex(null);

        try {
            const exp = experience[index];
            const requestPayload = {
                jobTitle: exp.jobTitle || "",
                company: exp.company || "",
                startDate: exp.startDate || "",
                endDate: exp.endDate || "",
                currentlyWorking: exp.currentlyWorking || false,
                description: exp.description || "",
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

            const updatedExperience = [...experience];
            updatedExperience[index] = {
                ...updatedExperience[index],
                enhancedDescription: data.enhanced_experience || "",
            };

            dispatch(updateExperience(updatedExperience));
        } catch (error) {
            console.error("Error enhancing experience:", error);
            setErrorIndex(index);
        } finally {
            setLoadingIndex(null);
        }
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md">
            <div className="resume-steps-title mb-5 text-center">
                <h2 className="text-xs font-medium text-gray-600 mb-2">
                    Step {currentStep} of {steps.length}
                </h2>
                <h3 className=" text-2xl font-semibold text-gray-800 mb-4">
                    {steps[currentStep - 1].label}
                </h3>
                <p className="text-sm font-semibold text-gray-500 mb-4">
                    {steps[currentStep - 1].description}
                </p>
            </div>

            {experience.map((exp, index) => (
                <div key={index} className="space-y-6">
                    <h3 className="font-medium text-blue-600">
                        Role {index + 1}
                    </h3>
                    <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Job Title
                        </label>
                        <input
                            type="text"
                            name="jobTitle"
                            value={exp.jobTitle || ""}
                            onChange={(e) => handleExperienceChange(index, e)}
                            className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                            placeholder="Enter job title"
                        />
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                        </label>
                        <input
                            type="text"
                            name="company"
                            value={exp.company || ""}
                            onChange={(e) => handleExperienceChange(index, e)}
                            className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                            placeholder="Enter company name"
                        />
                    </div>

                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            checked={exp.currentlyWorking || false}
                            onChange={() => handleCheckboxChange(index)}
                        />
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            I currently work here
                        </label>
                    </div>

                    <div className="flex space-x-4">
                        <div className="flex flex-col space-y-2 w-1/2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Start Month/Year
                            </label>
                            <input
                                type="month"
                                name="startDate"
                                value={exp.startDate || ""}
                                onChange={(e) =>
                                    handleExperienceChange(index, e)
                                }
                                className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                            />
                        </div>
                        <div className="flex flex-col space-y-2 w-1/2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                End Month/Year
                            </label>
                            <input
                                type="month"
                                name="endDate"
                                value={exp.endDate || ""}
                                onChange={(e) =>
                                    handleExperienceChange(index, e)
                                }
                                className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                disabled={exp.currentlyWorking}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={exp.description || ""}
                            onChange={(e) => handleExperienceChange(index, e)}
                            className="block w-full border-gray-300 text-gray-700 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                            placeholder="Describe your roles and responsibilities"
                        />
                    </div>

                    {exp.enhancedDescription && (
                        <div className="flex flex-col space-y-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Enhanced Description
                            </label>
                            <textarea
                                value={exp.enhancedDescription}
                                readOnly
                                className="block w-full text-gray-700 border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2 my-2 "
                                placeholder="Enhanced description will appear here"
                            />
                        </div>
                    )}

                    {index > 0 && (
                        <div>
                            <button
                                type="button"
                                onClick={() => handleRemoveExperience(index)}
                                className="text-red-500 hover:underline"
                            >
                                Remove Experience
                            </button>
                        </div>
                    )}

                    <button
                        type="button"
                        onClick={() => enhanceExperience(index)}
                        disabled={loadingIndex === index}
                        className="mt-2 mb-2 px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
                    >
                        {loadingIndex === index
                            ? "Enhancing..."
                            : "Enhance with AI"}
                    </button>

                    <div className="mb-2"></div>

                    {errorIndex === index && (
                        <p className="text-red-600 text-sm mt-2">
                            An error occurred while enhancing this experience.
                        </p>
                    )}
                </div>
            ))}

            <button
                type="button"
                onClick={handleAddExperience}
                className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
                Add Experience
            </button>
        </div>
    );
};

export default Experience;
