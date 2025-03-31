import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    templateId: null,
    contactInfo: {
        fullName: "Foram",
        email: "foram@example.com",
        phone: "1234567890",
        jobTitle: "Frontend Developer",
        location: "San Francisco, CA",
        careerObjective:
            "To leverage my skills and experience to contribute to organizational growth.",
    },
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
    experience: [
        // Default experience data
        {
            jobTitle: "Software Engineers",
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
    skills: [
        "Communication",
        "Time Management",
        "Teamwork",
        "Problem Solving",
        "Adaptability",
    ],
};

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        setTemplate(state, action) {
            state.templateId = action.payload;
        },
        updateContactInfo(state, action) {
            state.contactInfo = { ...state.contactInfo, ...action.payload };
        },
        updateEducation(state, action) {
            state.education = action.payload;
        },
        updateExperience(state, action) {
            state.experience = action.payload;
        },
        addSkill(state, action) {
            if (!state.skills.includes(action.payload)) {
                state.skills.push(action.payload);
            }
        },
        removeSkill(state, action) {
            state.skills = state.skills.filter(
                (skill) => skill !== action.payload
            );
        },
    },
});

// Exporting actions
export const {
    setTemplate,
    updateContactInfo,
    updateEducation,
    updateExperience,
    addSkill,
    removeSkill,
} = resumeSlice.actions;

// Selectors
export const selectTemplateId = (state) => state.resume.templateId;
export const selectContactInfo = (state) => state.resume.contactInfo;
export const selectEducation = (state) => state.resume.education;
export const selectExperience = (state) => state.resume.experience;
export const selectSkills = (state) => state.resume.skills;

// Export the reducer
export default resumeSlice.reducer;
