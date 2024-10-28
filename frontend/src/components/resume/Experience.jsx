import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    selectExperience,
    updateExperience,
} from "../../store/resume/resumeSlice";

const Experience = () => {
    const dispatch = useDispatch();
    const experience = useSelector(selectExperience);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateExperience({ [name]: value }));
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Work Experience</h2>
            <div className="space-y-2">
                <div>
                    <label className="block text-sm font-medium">
                        Job Title
                    </label>
                    <input
                        type="text"
                        name="jobTitle"
                        value={experience.jobTitle}
                        onChange={handleInputChange}
                        className="form-input block w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Company</label>
                    <input
                        type="text"
                        name="company"
                        value={experience.company}
                        onChange={handleInputChange}
                        className="form-input block w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">
                        Years of Experience
                    </label>
                    <input
                        type="text"
                        name="years"
                        value={experience.years}
                        onChange={handleInputChange}
                        className="form-input block w-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default Experience;
