import React from "react";
import { useSelector } from "react-redux";
import {
    selectContactInfo,
    selectEducation,
    selectExperience,
    selectSkills,
    selectCertifications,
} from "../../store/resume/resumeSlice";

// Import all resume templates
const resumeTemplates = {
    1: React.lazy(() => import("./Resume1")),
    2: React.lazy(() => import("./Resume2")),
    10: React.lazy(() => import("./Resume10")),
    // Continue for other templates up to "16"
    3: React.lazy(() => import("./Resume2")),
    // 4: React.lazy(() => import("./Resume4")),
    // // Add more as needed...
    // 16: React.lazy(() => import("./Resume16")),
};

const ResumePreview = ({ templateId }) => {
    const contactInfo = useSelector(selectContactInfo);
    const education = useSelector(selectEducation);
    const experience = useSelector(selectExperience);
    const skills = useSelector(selectSkills);
    const certifications = useSelector(selectCertifications);

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
                        certifications={certifications}
                    />
                </React.Suspense>
            );
        } else {
            return <div>Please select a valid template.</div>;
        }
    };

    return <div className="space-y-6">{renderTemplate()}</div>;
};

export default ResumePreview;
