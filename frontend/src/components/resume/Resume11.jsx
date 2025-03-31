import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas"; // Import html2canvas to handle CSS and rendering

const Resume11 = ({ contactInfo, education, experience, skills }) => {
    const placeholderData = {
        name: "John Doe",
        title: "Software Developer",
        email: "johndoe@example.com",
        phone: "(123) 456-7890",
        location: "New York, NY",
        careerObjective:
            "Seeking a challenging role as a software developer to utilize my coding skills and contribute to innovative projects.",
        experience: [
            {
                jobTitle: "Software Engineer",
                company: "Tech Solutions Inc.",
                startDate: "2019-09",
                endDate: "2022-06",
                currentlyWorking: false,
                description:
                    "Developed and maintained software solutions for various business needs.",
            },
            {
                jobTitle: "Intern",
                company: "Startup Co.",
                startDate: "2018-01",
                endDate: "2018-12",
                currentlyWorking: false,
                description:
                    "Assisted in the development of mobile applications and web services.",
            },
        ],
        education: [
            {
                degree: "Bachelor of Science",
                institution: "University of New York",
                startYear: "2015",
                startMonth: "September",
                endYear: "2019",
                endMonth: "June",
            },
            {
                degree: "Master of Science",
                institution: "Tech University",
                startYear: "2020",
                startMonth: "January",
                endYear: "2022",
                endMonth: "December",
            },
        ],
        skills: [
            "Communication",
            "Time Management",
            "Teamwork",
            "Problem Solving",
            "Adaptability",
        ],
    };

    const data = {
        name: contactInfo?.fullName || placeholderData.name,
        title: contactInfo?.jobTitle || placeholderData.title,
        email: contactInfo?.email || placeholderData.email,
        phone: contactInfo?.phone || placeholderData.phone,
        location: contactInfo?.location || placeholderData.location,
        careerObjective: placeholderData.careerObjective,
        experience:
            experience.length > 0 ? experience : placeholderData.experience,
        education: education.length > 0 ? education : placeholderData.education,
        skills: skills.length > 0 ? skills : placeholderData.skills,
    };

    const resumeRef = useRef();

    const generatePDF = () => {
        html2canvas(resumeRef.current, {
            scale: 2, // Adjust the scale for better resolution
            useCORS: true,
            logging: false,
        }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");

            const doc = new jsPDF({
                orientation: "p",
                unit: "mm",
                format: "a4",
                putOnlyUsedFonts: true,
            });

            doc.addImage(imgData, "PNG", 10, 10, 180, 250);

            doc.save("resume.pdf");
        });
    };

    return (
        <>
            <div className="resume-preview">
                <div
                    id="resume"
                    ref={resumeRef}
                    className="flex mx-auto p-8 max-w-3xl font-sans text-gray-800 leading-relaxed resume11"
                >
                    {/* Left Panel (Contact and Skills) */}
                    <div className="w-1/3 pr-6">
                        <h1 className="font-bold text-4xl">{data.name}</h1>
                        <h2 className="mt-2 font-medium text-lg">
                            {data.title}
                        </h2>
                        <p className="mt-4 text-sm">{data.careerObjective}</p>

                        <div className="mt-6">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                SKILLS
                            </h3>
                            <ul className="ml-4 text-sm list-disc list-inside mt-2">
                                {data.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-8">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                CONTACT
                            </h3>
                            <p className="mt-2 text-sm">{data.email}</p>
                            <p className="text-sm">{data.phone}</p>
                            <p className="text-sm">{data.location}</p>
                        </div>
                    </div>

                    {/* Right Panel (Summary, Education, Experience) */}
                    <div className="w-2/3 pl-6">
                        <div className="mb-8">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                SUMMARY
                            </h3>
                            <p className="mt-2 text-sm">
                                {data.careerObjective}
                            </p>
                        </div>

                        <div className="mb-8">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                EDUCATION
                            </h3>
                            <ul className="text-sm list-none mt-2">
                                {data.education.map((edu, index) => (
                                    <li key={index} className="mb-4">
                                        <p className="font-semibold">
                                            {edu.degree}
                                        </p>
                                        <p>{edu.institution}</p>
                                        <p>
                                            {edu.startMonth} {edu.startYear} -{" "}
                                            {edu.endMonth} {edu.endYear}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-8">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                EXPERIENCE
                            </h3>
                            <ul className="text-sm list-none mt-2">
                                {data.experience.map((job, index) => (
                                    <li key={index} className="mb-4">
                                        <p className="border-gray-300 mb-1 pb-1 border-b font-semibold jobtitle-location">
                                            {job.jobTitle} | {job.company} |{" "}
                                            {job.startDate} - {job.endDate}
                                        </p>
                                        <ul className="mt-1 ml-4 text-sm list-disc list-inside">
                                            {job.description}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={generatePDF}
                className="bg-blue-500 hover:bg-blue-600 mt-4 px-6 py-2 rounded-lg text-white"
            >
                Download as PDF
            </button>
        </>
    );
};

export default Resume11;
