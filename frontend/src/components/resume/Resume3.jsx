import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas"; // Import html2canvas to handle CSS and rendering

const Resume3 = ({ contactInfo, education, experience, skills }) => {
    const placeholderData = {
        name: "John Doe",
        title: "Software Developer",
        email: "johndoe@example.com",
        phone: "(123) 456-7890",
        location: "New York, NY",
        careerObjective:
            "To leverage my skills and experience to contribute to organizational growth.",
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
        careerObjective:
            contactInfo?.careerObjective || placeholderData.careerObjective,
        experience:
            experience.length > 0 ? experience : placeholderData.experience,
        education: education.length > 0 ? education : placeholderData.education,
        skills: skills.length > 0 ? skills : placeholderData.skills,
    };

    // Generate PDF
    const resumeRef = useRef();

    const generatePDF = () => {
        // First, use html2canvas to capture the content with styles
        html2canvas(resumeRef.current, {
            scale: 2, // Adjust the scale for better resolution
            useCORS: true, // Enable cross-origin resource sharing (for external images)
            logging: false, // Disable logging for performance
        }).then((canvas) => {
            const imgData = canvas.toDataURL("image/png"); // Convert canvas to image

            // Now create the PDF with jsPDF
            const doc = new jsPDF({
                orientation: "p", // Portrait
                unit: "mm",
                format: "a4",
                putOnlyUsedFonts: true,
            });

            // Add the image of the resume to the PDF, scale it to fit one page
            doc.addImage(imgData, "PNG", 10, 10, 180, 250); // Adjust dimensions as necessary

            // Save the PDF
            doc.save("resume.pdf");
        });
    };

    return (
        <>
            <button
                onClick={generatePDF}
                className="bg-blue-500 hover:bg-blue-600 mt-0 mb-4 px-6 py-2 rounded-lg text-white"
            >
                Download as PDF
            </button>
            <div className="resume-preview">
                <div
                    id="resume"
                    ref={resumeRef}
                    className="mx-auto p-8 max-w-3xl font-sans text-gray-800 leading-relaxed resume3 text-black-400"
                >
                    {/* Name and Title */}
                    <div className="mb-8 text-left bg-green-100 ">
                        <h1 className="font-bold text-4xl text-green-800 px-4 pt-2">
                            {data.name}
                        </h1>
                        <h2 className="mt-2 font-medium text-lg px-4">
                            {data.title}
                        </h2>
                        <p className="mt-4 text-sm pb-2 px-4">
                            {data.careerObjective}
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="border-gray-800 my-6 border-t-2"></div>

                    {/* Skills Section */}
                    <section className="flex mb-8">
                        <div className="pr-4 w-3/12">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                SKILLS
                            </h3>
                        </div>
                        <div className="w-9/12">
                            <ul className="ml-4 text-sm list-disc list-inside">
                                {data.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Divider */}
                    <div className="border-gray-800 my-6 border-t-2"></div>

                    {/* Education Section */}
                    <section className="flex mb-8">
                        <div className="pr-4 w-3/12">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                EDUCATION
                            </h3>
                        </div>
                        <div className="w-9/12" style={{ paddingLeft: "15px" }}>
                            <ul className="text-sm list-none">
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
                    </section>

                    {/* Divider */}
                    <div className="border-gray-800 my-6 border-t-2"></div>

                    {/* Experience Section */}
                    <section className="flex mb-8">
                        <div className="pr-4 w-3/12">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                EXPERIENCE
                            </h3>
                        </div>
                        <div className="w-9/12" style={{ paddingLeft: "15px" }}>
                            <ul className="text-sm list-none">
                                {data.experience.map((job, index) => (
                                    <li key={index} className="mb-4">
                                        <p className="border-gray-300 mb-1 pb-1 border-b font-semibold jobtitle-location">
                                            <span>{job.jobTitle}</span>
                                            {/* <span>{job.location}</span> */}
                                        </p>
                                        <p className="text-sm">
                                            {job.company} | {job.startDate} -{" "}
                                            {job.endDate}
                                        </p>
                                        <ul className="mt-1 ml-4 text-sm list-disc list-inside">
                                            {job.description}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Divider */}
                    <div className="border-gray-800 my-6 border-t-2"></div>

                    {/* Contact Section */}
                    <section className="flex mb-8">
                        <div className="pr-4 w-3/12">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                CONTACT
                            </h3>
                        </div>
                        <div
                            className="w-9/12 text-sm"
                            style={{ paddingLeft: "15px" }}
                        >
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <p>{data.location}</p>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Resume3;
