import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSkills, updateSkills } from "../../store/resume/resumeSlice";

const Skills = () => {
    const dispatch = useDispatch();
    const skills = useSelector(selectSkills);

    const handleInputChange = (e) => {
        const { value } = e.target;
        dispatch(updateSkills({ skills: value.split(",") }));
    };

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold">Skills</h2>
            <div>
                <label className="block text-sm font-medium">
                    Skills (comma-separated)
                </label>
                <input
                    type="text"
                    value={skills.join(",")}
                    onChange={handleInputChange}
                    className="form-input block w-full"
                />
            </div>
        </div>
    );
};

export default Skills;
