// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth/authSlice";
import resumeReducer from "../store/resume/resumeSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        resume: resumeReducer,
    },
});

export default store;
