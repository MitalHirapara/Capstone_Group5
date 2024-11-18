import React, { useRef } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'; // Import html2canvas to handle CSS and rendering

const Resume10 = ({
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
            {
                title: "Junior Developer", // New entry
                company: "Web Innovations LLC",
                location: "Newark, NJ",
                duration: "2018 - 2019",
                responsibilities: [
                    "Assisted in the development of e-commerce websites.",
                    "Conducted testing and debugging to ensure software quality.",
                    "Participated in daily stand-ups and contributed to team discussions.",
                ],
            },
        ],
        education: [
            {
                degree: "Bachelor of Science",
                school: "University of New York",
                years: "2015 - 2019",
            },
            {
                degree: "Master of Science",
                school: "Tech University",
                years: "2020 - 2022",
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

    const data = {
        name: contactInfo?.fullName || placeholderData.name,
        title: contactInfo?.jobTitle || placeholderData.title,
        email: contactInfo?.email || placeholderData.email,
        phone: contactInfo?.phone || placeholderData.phone,
        location: contactInfo?.location || placeholderData.location,
        careerObjective: placeholderData.careerObjective,
        workExperience:
            experience.length > 0 ? experience : placeholderData.workExperience,
        education: education.length > 0 ? education : placeholderData.education,
        skills: skills.length > 0 ? skills : placeholderData.skills,
        projects:
            certifications.length > 0
                ? certifications
                : placeholderData.projects,
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
            const imgData = canvas.toDataURL('image/png'); // Convert canvas to image

            // Now create the PDF with jsPDF
            const doc = new jsPDF({
                orientation: 'p',  // Portrait
                unit: 'mm',
                format: 'a4',
                putOnlyUsedFonts: true,
            });

            // Add the image of the resume to the PDF, scale it to fit one page
            doc.addImage(imgData, 'PNG', 10, 10, 180, 250);  // Adjust dimensions as necessary

            // Save the PDF
            doc.save('resume.pdf');
        });
    };

    return (
        <>
            <button
                onClick={generatePDF}
                className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Download as PDF
            </button>

            <div id="resume" ref={resumeRef} className="max-w-3xl mx-auto p-8 resume10 text-gray-800 font-sans leading-relaxed">
                {/* Name and Title */}
                <div className="text-left mb-8">
                    <h1 className="text-4xl font-bold">{data.name}</h1>
                    <h2 className="text-lg font-medium mt-2">{data.title}</h2>
                    <p className="mt-4 text-sm">{data.careerObjective}</p>
                </div>

                {/* Divider */}
                <div className="border-t-2 border-gray-800 my-6"></div>

                {/* Skills Section */}
                <section className="mb-8 flex">
                    <div className="w-3/12 pr-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider">SKILLS</h3>
                    </div>
                    <div className="w-9/12">
                        <ul className="list-disc list-inside ml-4 text-sm">
                            {data.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Divider */}
                <div className="border-t-2 border-gray-800 my-6"></div>

                {/* Education Section */}
                <section className="mb-8 flex">
                    <div className="w-3/12 pr-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider">EDUCATION</h3>
                    </div>
                    <div className="w-9/12" style={{ paddingLeft: '15px' }}>
                        <ul className="list-none text-sm">
                            {data.education.map((edu, index) => (
                                <li key={index} className="mb-4">
                                    <p className="font-semibold">{edu.degree}</p>
                                    <p>{edu.school} | {edu.years}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Divider */}
                <div className="border-t-2 border-gray-800 my-6"></div>

                {/* Experience Section */}
                <section className="mb-8 flex">
                    <div className="w-3/12 pr-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider">EXPERIENCE</h3>
                    </div>
                    <div className="w-9/12" style={{ paddingLeft: '15px' }}>
                        <ul className="list-none text-sm">
                            {data.workExperience.map((job, index) => (
                                <li key={index} className="mb-4">
                                    <p className="jobtitle-location mb-1 pb-1 font-semibold border-b border-gray-300"><span>{job.title}</span><span>{job.location}</span></p>
                                    <p className="text-sm">{job.company} | {job.duration}</p>
                                    <ul className="text-sm list-disc list-inside ml-4 mt-1">
                                        {job.responsibilities.map((res, resIndex) => (
                                            <li key={resIndex}>{res}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Divider */}
                <div className="border-t-2 border-gray-800 my-6"></div>

                {/* Contact Section */}
                <section className="mb-8 flex">
                    <div className="w-3/12 pr-4">
                        <h3 className="font-semibold text-sm uppercase tracking-wider">CONTACT</h3>
                    </div>
                    <div className="w-9/12 text-sm" style={{ paddingLeft: '15px' }}>
                        <p>{data.email}</p>
                        <p>{data.phone}</p>
                        <p>{data.location}</p>
                    </div>
                </section>

            </div>
        </>
    );
};

export default Resume10;
