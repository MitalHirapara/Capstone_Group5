import React, { useState } from "react";

const Resume2 = ({
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
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-3xl mx-auto text-slate-950">
            <div className="text-center mb-6">
                <h1 className="text-3xl font-bold">{filledData.name}</h1>
                <h2 className="text-xl border-b-2 border-black pb-2 mb-1 italic">
                    {filledData.title}
                </h2>
                <p className="mt-2 text-gray-600">
                    {filledData.email} | {filledData.phone} |{" "}
                    {filledData.location}
                </p>
            </div>

            <div className="grid grid-cols-2 gap-6 border-black pb-4 mb-6">
                <div>
                    <h3 className="text-lg font-bold border-b-4 border-black pb-1 mb-2">
                        Career Details
                    </h3>
                    <p>{filledData.careerObjective}</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold border-b-4 border-black pb-1 mb-2">
                        Education Info
                    </h3>
                    {filledData.education.map((edu, index) => (
                        <div key={index}>
                            <p className="font-semibold">
                                {edu.degree} in {edu.field}
                            </p>
                            <p>
                                {edu.school} | {edu.years}
                            </p>
                            <p className="font-semibold">
                                Honors: {edu.honors}
                            </p>
                            {index < filledData.education.length - 1 && (
                                <hr className="my-2" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 border-black pb-4 mb-6">
                <div className="col-span-2">
                    <h3 className="text-lg font-bold border-b-4 border-black pb-1 mb-2">
                        Work Experience
                    </h3>
                    {filledData.workExperience.map((job, index) => (
                        <div key={index} className="mb-4">
                            <h4 className="font-bold">{job.title}</h4>
                            <p className="italic">
                                {job.company}, {job.location} | {job.duration}
                            </p>
                            <ul className="list-disc ml-6">
                                {job.responsibilities.map(
                                    (responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                    <h3 className="text-lg font-bold border-b-4 border-black pb-1 mb-2">
                        Relevant Courses
                    </h3>
                    {/* <ul className="list-disc ml-6">
                        {filledData.relevantCourses.map((course, index) => (
                            <li key={index}>{course}</li>
                        ))}
                    </ul> */}
                </div>

                <div>
                    <h3 className="text-lg font-bold border-b-4 border-black pb-1 mb-2">
                        Skills
                    </h3>
                    <ul className="list-disc ml-6">
                        {filledData.skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-6 border-black pb-4">
                <h3 className="text-lg font-bold border-b-4 border-black pb-1 mb-2">
                    Projects
                </h3>
                {filledData.projects.map((project, index) => (
                    <div key={index} className="mb-4">
                        <h4 className="font-bold">{project.title}</h4>
                        <p className="italic">
                            {project.position} | {project.duration}
                        </p>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resume2;
