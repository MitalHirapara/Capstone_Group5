import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectContactInfo,
    addSkill as addSkillToRedux,
    removeSkill as removeSkillFromRedux,
    selectSkills,
} from "../../store/resume/resumeSlice";

const Skills = ({ steps, currentStep }) => {
    const dispatch = useDispatch();
    const contactInfo = useSelector(selectContactInfo); // Access contactInfo from Redux store
    const selectedSkills = useSelector(selectSkills); // Access skills from Redux store
    const { jobTitle } = contactInfo; // Extract jobTitle
    const [recommendedSkills, setRecommendedSkills] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchSkills = async () => {
        if (!jobTitle) {
            setError("Please enter a job title in Contact Info.");
            return;
        }

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/resume/api/recommended-skills/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ jobTitle }),
                }
            );

            if (!response.ok) {
                throw new Error(
                    `Failed to fetch skills: ${response.statusText}`
                );
            }

            const data = await response.json();

            let skillsArray = [];
            if (typeof data.skills === "string") {
                const cleanJsonString = data.skills
                    .replace(/```json\n/g, "")
                    .replace(/```/g, "");

                try {
                    skillsArray = JSON.parse(cleanJsonString);
                } catch (error) {
                    console.error("Error parsing skills JSON:", error);
                    setError("Failed to parse skills data.");
                    return;
                }
            } else if (Array.isArray(data.skills)) {
                skillsArray = data.skills;
            } else {
                throw new Error("Unexpected data format received from API.");
            }

            // Combine essential and recommended skills into the display list
            const allSkills = skillsArray.flatMap((category) =>
                category.skills.map((skill) => ({
                    name: skill,
                    category: category.category,
                }))
            );

            setRecommendedSkills(allSkills);
        } catch (err) {
            console.error("Error fetching skills:", err.message);
            setError(
                "Error fetching or processing recommended skills. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const addSkill = (skill) => {
        if (!selectedSkills.includes(skill)) {
            dispatch(addSkillToRedux(skill)); // Add skill to Redux
        }
    };

    const removeSkill = (skill) => {
        dispatch(removeSkillFromRedux(skill)); // Remove skill from Redux
    };

    const defaultSkills = [
        "Communication",
        "Time Management",
        "Teamwork",
        "Problem Solving",
        "Adaptability",
        "Critical Thinking",
        "Work Ethic",
        "Attention to Detail",
        "Organizational Skills",
    ];

    const skillsToDisplay =
        recommendedSkills.length > 0
            ? recommendedSkills.map(
                  (skill) => `${skill.name} (${skill.category})`
              )
            : defaultSkills;

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
            <p className="text-sm text-gray-700 text-center bg-blue-100 font-bold p-3">
                Skills for: {jobTitle || "Not provided in Contact Info"}
            </p>

            <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-950">
                    List of Skills to Add in your resume
                </h3>
                {skillsToDisplay.length > 0 ? (
                    <ul className="grid grid-cols-2 gap-4 mt-4">
                        {skillsToDisplay.map((skill, index) => (
                            <li
                                key={index}
                                className="bg-gray-100 px-4 py-2 text-slate-950 rounded-lg shadow-md hover:bg-blue-100 cursor-pointer"
                                onClick={() => addSkill(skill)}
                            >
                                {skill}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500 mt-2">
                        No skills available.
                    </p>
                )}
            </div>

            <button
                onClick={fetchSkills}
                className="bg-blue-600 text-white px-4 py-2 rounded-md mt-4 "
                disabled={loading}
            >
                {loading ? "Fetching..." : "Add recommended Skills From AI"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-950">
                    Selected Skills for your resume
                </h3>
                {selectedSkills.length > 0 ? (
                    <ul className="grid grid-cols-2 gap-4 mt-4">
                        {selectedSkills.map((skill, index) => (
                            <li
                                key={index}
                                className="flex text-slate-950 items-center justify-between bg-gray-200 px-4 py-2 rounded-lg shadow-md"
                            >
                                <span>{skill}</span>
                                <button
                                    onClick={() => removeSkill(skill)}
                                    className="text-red-600 hover:underline"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-sm text-gray-500 mt-2">
                        No skills selected yet.
                    </p>
                )}
            </div>
        </div>
    );
};

export default Skills;
