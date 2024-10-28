import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    selectEducation,
    updateEducation,
} from "../../store/resume/resumeSlice";

const Education = () => {
    const dispatch = useDispatch();
    const education = useSelector(selectEducation);

    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;

        // Create a new array to avoid mutating the existing state
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
                { degree: "", institution: "", year: "" },
            ])
        );
    };

    const handleRemoveEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        dispatch(updateEducation(updatedEducation));
    };

    return (
        <div className="p-4 border border-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Education</h2>

            {education.map((edu, index) => (
                <div key={index} className="mb-4">
                    <h3 className="font-medium">Education {index + 1}</h3>

                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Degree
                        </label>
                        <input
                            type="text"
                            name="degree"
                            value={edu.degree || ""}
                            onChange={(e) => handleEducationChange(index, e)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Institution
                        </label>
                        <input
                            type="text"
                            name="institution"
                            value={edu.institution || ""}
                            onChange={(e) => handleEducationChange(index, e)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    <div className="mb-2">
                        <label className="block text-sm font-medium text-gray-700">
                            Year of Graduation
                        </label>
                        <input
                            type="text"
                            name="year"
                            value={edu.year || ""}
                            onChange={(e) => handleEducationChange(index, e)}
                            className="w-full p-2 border border-gray-300 rounded"
                            required
                        />
                    </div>

                    {/* Button to remove an education entry */}
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

            {/* Button to add new education entry */}
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
