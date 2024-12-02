// import React from "react";

// const Resume3 = ({
//     contactInfo,
//     education,
//     experience,
//     skills,
//     certifications,
// }) => {
//     const placeholderData = {
//         name: "Richard Sanchez",
//         title: "Marketing Manager",
//         email: "hello@reallygreatsite.com",
//         phone: "+123-456-7890",
//         location: "123 Anywhere St., Any City",
//         careerObjective:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seeking a role to utilize my expertise in marketing.",
//         workExperience: [
//             {
//                 title: "Marketing Manager & Specialist",
//                 company: "Borcelle Studio",
//                 location: "Anywhere City",
//                 years: "2030 - Present",
//                 responsibilities: [
//                     "Develop and execute comprehensive marketing strategies.",
//                     "Lead and mentor a high-performing marketing team.",
//                     "Monitor brand consistency across channels.",
//                 ],
//             },
//             {
//                 title: "Marketing Manager & Specialist",
//                 company: "Fauget Studio",
//                 location: "Anywhere City",
//                 years: "2025 - 2029",
//                 responsibilities: [
//                     "Create and manage the marketing budget.",
//                     "Oversee market research and identify trends.",
//                     "Monitor brand consistency.",
//                 ],
//             },
//         ],
//         education: [
//             {
//                 degree: "Master of Business Management",
//                 school: "Wardiere University",
//                 years: "2029 - 2030",
//             },
//             {
//                 degree: "Bachelor of Business",
//                 school: "Wardiere University",
//                 years: "2025 - 2029",
//             },
//         ],
//         skills: [
//             "Project Management",
//             "Public Relations",
//             "Teamwork",
//             "Leadership",
//             "Effective Communication",
//             "Critical Thinking",
//         ],
//         certifications: [
//             {
//                 title: "Leadership Excellence",
//                 year: "2028",
//             },
//         ],
//     };

//     const filledData = {
//         name: contactInfo?.fullName || placeholderData.name,
//         title: contactInfo?.jobTitle || placeholderData.title,
//         email: contactInfo?.email || placeholderData.email,
//         phone: contactInfo?.phone || placeholderData.phone,
//         location: contactInfo?.location || placeholderData.location,
//         careerObjective: placeholderData.careerObjective,
//         workExperience:
//             experience.length > 0 ? experience : placeholderData.workExperience,
//         education: education.length > 0 ? education : placeholderData.education,
//         skills: skills.length > 0 ? skills : placeholderData.skills,
//         certifications:
//             certifications.length > 0
//                 ? certifications
//                 : placeholderData.certifications,
//     };

//     return (
//         <div className="border-gray-200 bg-white shadow-md mx-auto p-8 border rounded-lg max-w-4xl">
//             {/* Contact Info */}
//             <div className="mb-8 text-center">
//                 <h1 className="font-bold text-4xl text-gray-800">
//                     {filledData.name}
//                 </h1>
//                 <h2 className="text-red-500 text-xl italic">
//                     {filledData.title}
//                 </h2>
//                 <div className="mt-3 text-gray-600">
//                     <p>
//                         {filledData.email} | {filledData.phone} |{" "}
//                         {filledData.location}
//                     </p>
//                 </div>
//             </div>

//             {/* Career Objective */}
//             <div className="mb-8">
//                 <h3 className="border-gray-300 mb-4 pb-2 border-b-2 font-bold text-2xl text-gray-800">
//                     Career Objective
//                 </h3>
//                 <p className="text-gray-700">{filledData.careerObjective}</p>
//             </div>

//             {/* Work Experience Section */}
//             <div className="mb-8">
//                 <h3 className="border-gray-300 mb-4 pb-2 border-b-2 font-bold text-2xl text-gray-800">
//                     Work Experience
//                 </h3>
//                 <ul className="space-y-4">
//                     {filledData.workExperience.map((job, index) => (
//                         <li
//                             key={index}
//                             className="bg-gray-50 shadow-sm p-4 rounded-lg"
//                         >
//                             <p className="font-semibold text-lg">{job.title}</p>
//                             <p className="text-gray-600 italic">
//                                 {job.company}, {job.location} | {job.years}
//                             </p>
//                             <ul className="mt-2 ml-6 text-gray-600 list-disc">
//                                 {job.responsibilities.map(
//                                     (responsibility, idx) => (
//                                         <li key={idx}>{responsibility}</li>
//                                     )
//                                 )}
//                             </ul>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Education Section */}
//             <div className="mb-8">
//                 <h3 className="border-gray-300 mb-4 pb-2 border-b-2 font-bold text-2xl text-gray-800">
//                     Education
//                 </h3>
//                 <ul className="space-y-4">
//                     {filledData.education.map((edu, index) => (
//                         <li
//                             key={index}
//                             className="bg-gray-50 shadow-sm p-4 rounded-lg"
//                         >
//                             <p className="font-semibold text-lg">
//                                 {edu.degree}
//                             </p>
//                             <p className="text-gray-600">
//                                 {edu.school} | {edu.years}
//                             </p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Skills Section */}
//             <div className="mb-8">
//                 <h3 className="border-gray-300 mb-4 pb-2 border-b-2 font-bold text-2xl text-gray-800">
//                     Skills
//                 </h3>
//                 <ul className="gap-4 grid grid-cols-2">
//                     {filledData.skills.map((skill, index) => (
//                         <li
//                             key={index}
//                             className="bg-gray-100 p-3 rounded-lg font-medium text-center text-gray-700"
//                         >
//                             {skill}
//                         </li>
//                     ))}
//                 </ul>
//             </div>

//             {/* Certifications Section */}
//             <div className="mb-8">
//                 <h3 className="border-gray-300 mb-4 pb-2 border-b-2 font-bold text-2xl text-gray-800">
//                     Certifications
//                 </h3>
//                 <ul className="space-y-4">
//                     {filledData.certifications.map((cert, index) => (
//                         <li
//                             key={index}
//                             className="bg-gray-50 shadow-sm p-4 rounded-lg"
//                         >
//                             <p className="font-semibold text-lg">
//                                 {cert.title}
//                             </p>
//                             <p className="text-gray-600">{cert.year}</p>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default Resume3;
