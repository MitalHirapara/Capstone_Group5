import React from "react";

const Resume1 = ({
    contactInfo,
    education,
    experience,
    skills,
    certifications,
}) => {
    const placeholderData = {
        name: "John Doe",
        title: "Software Developer",
        email: "johndoe@example.com",
        phone: "(123) 456-7890",
        location: "New York, NY",
        careerObjective:
            "Seeking a challenging role as a software developer to utilize my coding skills and contribute to innovative projects.",
        workExperience: [
            {
                title: "Software Engineer",
                company: "Tech Solutions Inc.",
                location: "New York, NY",
                duration: "2019 - Present",
                responsibilities: [
                    "Developed and maintained web applications using React and Node.js.",
                    "Collaborated with cross-functional teams to design and implement new features.",
                    "Optimized application performance, reducing load times by 20%.",
                ],
            },
        ],
        education: [
            {
                degree: "Bachelor of Science",
                field: "Computer Science",
                school: "University of New York",
                years: "2015 - 2019",
                honors: "Cum Laude",
                activities: "Member of Computer Science Club",
            },
        ],
        relevantCourses: [
            "Data Structures",
            "Algorithms",
            "Web Development",
            "Database Management",
        ],
        skills: [
            "JavaScript, React, Node.js",
            "HTML, CSS",
            "Git, Version Control",
            "Agile Development",
        ],
        projects: [
            {
                title: "Personal Portfolio Website",
                position: "Developer",
                duration: "2020",
                description:
                    "Created a personal portfolio website to showcase my projects and technical skills.",
            },
        ],
    };

    // Fallback to placeholder data if the corresponding fields are empty
    const filledData = {
        name: contactInfo?.fullName || placeholderData.name,
        title: contactInfo?.jobTitle || placeholderData.title,
        email: contactInfo?.email || placeholderData.email,
        phone: contactInfo?.phone || placeholderData.phone,
        location: contactInfo?.location || placeholderData.location,
        careerObjective: placeholderData.careerObjective, // Assuming career objective is static
        workExperience:
            experience.length > 0 ? experience : placeholderData.workExperience,
        education: education.length > 0 ? education : placeholderData.education,
        skills: skills.length > 0 ? skills : placeholderData.skills,
        projects:
            certifications.length > 0
                ? certifications
                : placeholderData.projects,
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-md border border-gray-200">
            {/* Contact Info */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800">
                    {filledData.name}
                </h1>
                <h2 className="text-xl text-gray-500 italic">
                    {filledData.title}
                </h2>
                <div className="mt-3 text-gray-600">
                    <p>
                        {filledData.email} | {filledData.phone} |{" "}
                        {filledData.location}
                    </p>
                </div>
            </div>

            {/* Education Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                    Education
                </h3>
                <ul className="space-y-4">
                    {filledData.education.map((edu, index) => (
                        <li
                            key={index}
                            className="p-4 bg-gray-50 rounded-lg shadow-sm"
                        >
                            <p className="font-semibold text-lg">
                                {edu.degree} in {edu.field}
                            </p>
                            <p className="text-gray-600">
                                {edu.school} | {edu.years}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Work Experience Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                    Work Experience
                </h3>
                <ul className="space-y-4">
                    {filledData.workExperience.map((job, index) => (
                        <li
                            key={index}
                            className="p-4 bg-gray-50 rounded-lg shadow-sm"
                        >
                            <p className="font-semibold text-lg">
                                {job.jobTitle}
                            </p>
                            <p className="text-gray-600 italic">
                                {job.company}, {job.location} | {job.years}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Skills Section */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
                    Skills
                </h3>
                <ul className="grid grid-cols-2 gap-4">
                    {filledData.skills.map((skill, index) => (
                        <li
                            key={index}
                            className="p-3 bg-gray-100 rounded-lg text-center text-gray-700 font-medium"
                        >
                            {skill}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Resume1;
