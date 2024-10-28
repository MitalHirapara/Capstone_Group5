import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    templateId: null,
    contactInfo: {
        fullName: "Foram",
        email: "",
        phone: "",
        jobTitle: "",
        location: "",
    },
    education: [],
    experience: [],
    skills: [],
    certifications: [],
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
        updateSkills(state, action) {
            state.skills = action.payload;
        },
        updateCertifications(state, action) {
            state.certifications = action.payload;
        },
    },
});

// Exporting actions
export const {
    setTemplate,
    updateContactInfo,
    updateEducation,
    updateExperience,
    updateSkills,
    updateCertifications,
} = resumeSlice.actions;

// Selectors
export const selectTemplateId = (state) => state.resume.templateId;
export const selectContactInfo = (state) => state.resume.contactInfo;
export const selectEducation = (state) => state.resume.education;
export const selectExperience = (state) => state.resume.experience;
export const selectSkills = (state) => state.resume.skills;
export const selectCertifications = (state) => state.resume.certifications;

// Export the reducer
export default resumeSlice.reducer;
