import React, { useRef, useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas'; // Import html2canvas to handle CSS and rendering
import '../../assets/CSS/Resume11.css';

const Resume11 = () => {
    const [fullName, setFullName] = useState("Samira Hadid");
    const [role, setRole] = useState("Graphic Designer");
    const [profilePara, setProfilePara] = useState(
        "I am a talented, ambitious, and hardworking individual, with broad skills and experience in digital and printed marketing, social media, and leading projects."
    );
    const [contact, setContact] = useState({
        phone: "123-456-7890",
        email: "contact@example.com",
        address: "Waterloo, ON, Canada"
    });
    const [education, setEducation] = useState([
        { degree: "BCA", institution: "School of University", year: "April 2020" },
        { degree: "BCA", institution: "School of University", year: "September 2017" }
    ]);
    const [experience, setExperience] = useState([
        {
            role: "Graphic Designer",
            company: "Company XYZ",
            startDate: "January 2021",
            endDate: "December 2022",
            location: "San Francisco, CA",
            details: [
                "Worked passionately on customer service in a high-volume office.",
                "Completed F.A.S.T. customer service training classes.",
                "Maintained a high average tip thanks to consistent customer satisfaction."
            ]
        },
        {
            role: "Graphic Designer",
            company: "Company ABC",
            startDate: "January 2018",
            endDate: "December 2020",
            location: "New York, NY",
            details: [
                "Worked passionately on customer service in a high-volume office.",
                "Completed F.A.S.T. customer service training classes.",
                "Maintained a high average tip thanks to consistent customer satisfaction."
            ]
        }
    ]);

    const [skills, setSkills] = useState([
        { name: "Skill 1", level: "80%" },
        { name: "Skill 2", level: "70%" },
        { name: "Skill 3", level: "90%" },
        { name: "Skill 4", level: "60%" },
        { name: "Skill 5", level: "75%" }
    ]);

    // Generate PDF
    const resumeRef = useRef();

    const generatePDF = () => {
        // First, use html2canvas to capture the content with styles
        html2canvas(resumeRef.current, {
            scale: 2, // Adjust the scale for better resolution
            useCORS: true, // Enable cross-origin resource sharing (for external images)
            logging: false, // Disable logging for performance
            width: 595,  // Width in px for A4 size (210mm)
            height: 842, // Height in px for A4 size (297mm)
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
            doc.addImage(imgData, 'PNG', 10, 10, 190, 277);  // Adjust dimensions as necessary

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
            <div className="resume" ref={resumeRef}>
                <div className="left-section">
                    <div className="profile-picture"></div>
                    <div className="about-me">
                        <h2>About me</h2>
                        <p>{profilePara}</p>
                    </div>
                    <div className="contact">
                        <h2>Contact</h2>
                        <p>- {contact.phone}</p>
                        <p>- {contact.email}</p>
                        <p>- {contact.address}</p>
                    </div>
                    <div className="expertise">
                        <h2>Expertise Skills</h2>
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index} className="skill">
                                    {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="right-section">
                    <div className="personal-header">
                        <h1>{fullName}</h1>
                        <span className="pr-border"></span>
                        <h3>{role}</h3>
                    </div>
                    <div className="other-info">
                        <div className="timeline">
                            <div className="education">
                                <h2 className="r-title">Education</h2>
                                {education.map((edu, index) => (
                                    <div key={index} className="education-item">
                                        <div className="lines">
                                            <div className="dot"></div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="education-sec">
                                            <h3>{edu.degree}</h3>
                                            <p>{edu.institution}</p>
                                            <p>{edu.year}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="timeline">
                            <div className="work-experience">
                                <h2 className="r-title">Work Experience</h2>
                                {experience.map((exp, index) => (
                                    <div key={index} className="experience-item">
                                        <div className="lines">
                                            <div className="dot"></div>
                                            <div className="line"></div>
                                        </div>
                                        <div className="role-detail">
                                            <h3>{exp.role}</h3>
                                            <div className="dates">
                                                <span>{exp.startDate} - {exp.endDate}</span>
                                            </div>
                                        </div>
                                        <div className="company-detail">
                                            <span>{exp.company}</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <ul className="experience-point">
                                            {exp.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Resume11;
