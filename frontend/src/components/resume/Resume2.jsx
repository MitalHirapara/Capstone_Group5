import React from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

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
    workExperience:
      experience.length > 0 ? experience : placeholderData.workExperience,
    education: education.length > 0 ? education : placeholderData.education,
    skills: skills.length > 0 ? skills : placeholderData.skills,
    projects:
      certifications.length > 0 ? certifications : placeholderData.projects,
  };

  // Define styles for the PDF document
  const pdfStyles = StyleSheet.create({
    page: {
      fontFamily: "Helvetica",
      backgroundColor: "#000",
      color: "#fff",
      fontSize: 12,
      padding: 30,
      lineHeight: 1.5,
    },
    section: {
      marginBottom: 15,
    },
    header: {
      fontSize: 18,
      marginBottom: 10,
      textAlign: "center",
      textTransform: "uppercase",
      fontWeight: "bold",
    },
    subHeader: {
      fontSize: 14,
      marginBottom: 8,
      fontWeight: "bold",
    },
    text: {
      fontSize: 12,
      marginBottom: 5,
    },
  });

  // Define the PDF document structure
  const ResumeDocument = () => (
    <Document>
      <Page size={"A4"} style={pdfStyles.page}>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.header}>Resume</Text>
          <Text style={pdfStyles.subHeader}>Contact Information</Text>
          <Text style={pdfStyles.text}>Name: {filledData.name}</Text>
          <Text style={pdfStyles.text}>Email: {filledData.email}</Text>
          <Text style={pdfStyles.text}>Phone: {filledData.phone}</Text>
          <Text style={pdfStyles.text}>Location: {filledData.location}</Text>
        </View>
        
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeader}>Education</Text>
          {filledData.education.map((edu, index) => (
            <Text key={index} style={pdfStyles.text}>
              {edu.degree} in {edu.field} from {edu.school} ({edu.years}) - {edu.honors}
            </Text>
          ))}
        </View>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeader}>Work Experience</Text>
          {filledData.workExperience.map((exp, index) => (
            <View key={index} style={pdfStyles.section}>
              <Text style={pdfStyles.text}>
                {exp.title} at {exp.company} ({exp.location}, {exp.duration})
              </Text>
              {exp.responsibilities.map((resp, idx) => (
                <Text key={idx} style={pdfStyles.text}>- {resp}</Text>
              ))}
            </View>
          ))}
        </View>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeader}>Skills</Text>
          <Text style={pdfStyles.text}>{filledData.skills.join(", ")}</Text>
        </View>
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.subHeader}>Projects</Text>
          {filledData.projects.map((project, index) => (
            <Text key={index} style={pdfStyles.text}>
              {project.title} - {project.position} ({project.duration})
              <Text style={pdfStyles.text}>{project.description}</Text>
            </Text>
          ))}
        </View>
      </Page>
    </Document>
  );

  // Inline resume display for the web
  const renderResumeForWeb = () => (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.5, padding: "20px", maxWidth: "800px", margin: "auto", border: "1px solid #ddd", borderRadius: "8px", backgroundColor: "#000000", }}>
      <h1 style={{ textAlign: "center", textTransform: "uppercase", fontSize: "24px", marginBottom: "20px" }}>Resume</h1>
      <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>Contact Information</h2>
      <p>Name: {filledData.name}</p>
      <p>Email: {filledData.email}</p>
      <p>Phone: {filledData.phone}</p>
      <p>Location: {filledData.location}</p>
      <h2 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px" }}>Education</h2>
      {filledData.education.map((edu, index) => (
        <p key={index}>
          {edu.degree} in {edu.field} from {edu.school} ({edu.years}) - {edu.honors}
        </p>
      ))}
      <h2 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px" }}>Work Experience</h2>
      {filledData.workExperience.map((exp, index) => (
        <div key={index}>
          <p>
            {exp.title} at {exp.company} ({exp.location}, {exp.duration})
          </p>
          <ul>
            {exp.responsibilities.map((resp, idx) => (
              <li key={idx}>{resp}</li>
            ))}
          </ul>
        </div>
      ))}
      <h2 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px" }}>Skills</h2>
      <p>{filledData.skills.join(", ")}</p>
      <h2 style={{ fontSize: "18px", marginTop: "20px", marginBottom: "10px" }}>Projects</h2>
      {filledData.projects.map((project, index) => (
        <p key={index}>
          {project.title} - {project.position} ({project.duration})
          <br />
          {project.description}
        </p>
      ))}
    </div>
  );

  return (
    <>
      {renderResumeForWeb()}
      <div className="bg-neutral-900">
        <div className="mx-auto px-4 py-3 text-center">
          <PDFDownloadLink
            document={<ResumeDocument />}
            fileName="resume.pdf"
          >
            {({ loading }) =>
              loading ? (
                <span className="text-green-500 text-lg cursor-pointer">Loading...</span>
              ) : (                                                    
                <span className="text-green-500 text-lg cursor-pointer">Download Resume (PDF)</span>
              )
            }
          </PDFDownloadLink>
        </div>
      </div>
    </>
  );
};

export default Resume2;
