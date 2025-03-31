import React, { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const ResumeTemplate2 = ({ contactInfo, education, skills, experience }) => {
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
        profile: placeholderData.profile,
        experience:
            experience.length > 0 ? experience : placeholderData.experience,
        education: education.length > 0 ? education : placeholderData.education,
        skills: skills.length > 0 ? skills : placeholderData.skills,
    };

    const resumeRef = useRef();

    const generatePDF = () => {
        html2canvas(resumeRef.current, {
            scale: 2,
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
                    className="mx-auto p-8 max-w-3xl font-sans text-gray-800 leading-relaxed resume12"
                >
                    <div className="mb-8 text-left">
                        <h1 className="font-bold text-4xl">{data.name}</h1>
                        <h2 className="mt-2 font-medium text-lg">
                            {data.title}
                        </h2>
                        <p className="mt-4 text-sm">{data.profile}</p>
                    </div>

                    <div className="border-gray-800 my-6 border-t-2"></div>

                    <section className="flex mb-8">
                        <div className="pr-4 w-3/12">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                CONTACT
                            </h3>
                        </div>
                        <div className="w-9/12 text-sm pl-4">
                            <p>{data.email}</p>
                            <p>{data.phone}</p>
                            <p>{data.location}</p>
                        </div>
                    </section>

                    <div className="border-gray-800 my-6 border-t-2"></div>

                    <section className="flex mb-8">
                        <div className="pr-4 w-3/12">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                PROFILE
                            </h3>
                        </div>
                        <div className="w-9/12 pl-4">
                            <p className="text-sm">{data.profile}</p>
                        </div>
                    </section>

                    <div className="border-gray-800 my-6 border-t-2"></div>

                    <section className="flex mb-8">
                        <div className="pr-4 w-3/12">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                EDUCATION
                            </h3>
                        </div>
                        <div className="w-9/12 pl-4">
                            <ul className="text-sm list-none">
                                {data.education.map((edu, index) => (
                                    <li key={index} className="mb-4">
                                        <p className="font-semibold">
                                            {edu.degree}
                                        </p>
                                        <p>{edu.detail}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <div className="border-gray-800 my-6 border-t-2"></div>

                    <section className="flex mb-8">
                        <div className="pr-4 w-3/12">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                COMPUTER SKILLS
                            </h3>
                        </div>
                        <div className="w-9/12 pl-4">
                            <ul className="text-sm list-disc list-inside">
                                {data.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <div className="border-gray-800 my-6 border-t-2"></div>

                    <section className="flex mb-8">
                        <div className="pr-4 w-3/12">
                            <h3 className="font-semibold text-sm uppercase tracking-wider">
                                WORK EXPERIENCE
                            </h3>
                        </div>
                        <div className="w-9/12 pl-4">
                            <ul className="text-sm list-none">
                                {data.experience.map((job, index) => (
                                    <li key={index} className="mb-4">
                                        <p className="font-semibold">
                                            {job.company}
                                        </p>
                                        <ul className="mt-1 ml-4 text-sm list-disc list-inside">
                                            <li>{job.description}</li>
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>
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

export default ResumeTemplate2;
