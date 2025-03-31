import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectEducation,
    updateEducation,
} from "../../store/resume/resumeSlice";

const Education = ({ steps, currentStep }) => {
    const dispatch = useDispatch();
    const education = useSelector(selectEducation);

    const years = Array.from(
        { length: 50 },
        (_, i) => new Date().getFullYear() - i
    );
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;

        const updatedEducation = [...education];
        updatedEducation[index] = {
            ...updatedEducation[index],
            [name]: value,
        };

        dispatch(updateEducation(updatedEducation));
    };

    const handleAddEducation = () => {
        dispatch(
            updateEducation([
                ...education,
                {
                    degree: "",
                    school: "",
                    startYear: "",
                    startMonth: "",
                    endYear: "",
                    endMonth: "",
                },
            ])
        );
    };

    const handleRemoveEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        dispatch(updateEducation(updatedEducation));
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

            <div className="space-y-6">
                {education.map((edu, index) => (
                    <div key={index} className="space-y-6">
                        <h3 className="font-medium text-blue-600">
                            Education {index + 1}
                        </h3>

                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Degree
                            </label>
                            <input
                                type="text"
                                name="degree"
                                value={edu.degree || ""}
                                onChange={(e) =>
                                    handleEducationChange(index, e)
                                }
                                className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                            />
                        </div>

                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Institution
                            </label>
                            <input
                                type="text"
                                name="institution"
                                value={edu.institution || ""}
                                onChange={(e) =>
                                    handleEducationChange(index, e)
                                }
                                className="block w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                            />
                        </div>

                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Start Date
                            </label>
                            <div className="flex gap-2">
                                <select
                                    name="startYear"
                                    value={edu.startYear || ""}
                                    onChange={(e) =>
                                        handleEducationChange(index, e)
                                    }
                                    className="block w-full border-gray-300 text-gray-700 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                >
                                    <option value="" className="text-gray-700">
                                        Year
                                    </option>
                                    {years.map((year) => (
                                        <option
                                            className="text-gray-700"
                                            key={year}
                                            value={year}
                                        >
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    name="startMonth"
                                    value={edu.startMonth || ""}
                                    onChange={(e) =>
                                        handleEducationChange(index, e)
                                    }
                                    className="block w-full border-gray-300 text-gray-700 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                >
                                    <option value="" className="text-gray-700">
                                        Month
                                    </option>
                                    {months.map((month, index) => (
                                        <option
                                            className="text-gray-700"
                                            key={index}
                                            value={month}
                                        >
                                            {month}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                End Date
                            </label>
                            <div className="flex gap-2">
                                <select
                                    name="endYear"
                                    value={edu.endYear || ""}
                                    onChange={(e) =>
                                        handleEducationChange(index, e)
                                    }
                                    className="block text-gray-700 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                >
                                    <option value="" className="text-gray-700">
                                        Year
                                    </option>
                                    {years.map((year) => (
                                        <option
                                            className="text-gray-700"
                                            key={year}
                                            value={year}
                                        >
                                            {year}
                                        </option>
                                    ))}
                                </select>
                                <select
                                    name="endMonth"
                                    value={edu.endMonth || ""}
                                    onChange={(e) =>
                                        handleEducationChange(index, e)
                                    }
                                    className="block text-gray-700 w-full border-gray-300 rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 px-4 py-2"
                                >
                                    <option value="" className="text-gray-700">
                                        Month
                                    </option>
                                    {months.map((month, index) => (
                                        <option
                                            className="text-gray-700"
                                            key={index}
                                            value={month}
                                        >
                                            {month}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {index > 0 && (
                            <button
                                type="button"
                                onClick={() => handleRemoveEducation(index)}
                                className="text-red-500 hover:underline"
                            >
                                Remove Education
                            </button>
                        )}
                    </div>
                ))}
            </div>

            <button
                type="button"
                onClick={handleAddEducation}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Add Education
            </button>
        </div>
    );
};

export default Education;
