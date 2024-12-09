import React from "react";
import { useSelector } from "react-redux";
import {
    selectContactInfo,
    selectEducation,
    selectExperience,
    selectSkills,
} from "../../store/resume/resumeSlice";

// Import all resume templates
const resumeTemplates = {
    1: React.lazy(() => import("./Resume1")),
    2: React.lazy(() => import("./Resume2")),
    3: React.lazy(() => import("./Resume3")),
    10: React.lazy(() => import("./Resume10")),
    11: React.lazy(() => import("./Resume11")),
};

const ResumePreview = ({ templateId }) => {
    const contactInfo = useSelector(selectContactInfo);
    const education = useSelector(selectEducation);
    const experience = useSelector(selectExperience);
    const skills = useSelector(selectSkills);

    // Choose the template based on templateId
    const renderTemplate = () => {
        const Template = resumeTemplates[templateId];

        if (Template) {
            return (
                <React.Suspense fallback={<div>Loading template...</div>}>
                    <Template
                        contactInfo={contactInfo}
                        education={education}
                        experience={experience}
                        skills={skills}
                    />
                </React.Suspense>
            );
        } else {
            return <div>Please select a valid template.</div>;
        }
    };

    return (
        <div className={`space-y-6 resume-${templateId}`}>
            {renderTemplate()}
        </div>
    );
};

export default ResumePreview;
