import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/user/Navbar";
import Signup from "./components/Signup";
import UserProfile from "./components/user/UserProfile";
import VerifyEmail from "./components/user/VerifyEmail";
import ForgotPassword from "./pages/ForgotPassword";
import EmployerProfile from "./components/employer/EmployerProfile";
import EmployerDashboard from "./pages/EmployerDashboard";
import CreateJobPost from "./components/employer/CreateJob";
import ManageJobs from "./components/employer/ManageJobs";
import UserLayout from "./layouts/UserLayout";
import EmployerLayout from "./layouts/EmloyerLayout";
import Jobs from "./pages/Jobs";
import { Provider } from "react-redux";
import store from "./store/store";

// Resume builder imports
import ResumeTemplates from "./pages/ResumeTemplates";
import ResumeBuilderSteps from "./pages/ResumeBuilderSteps";


export default function App() {
    return (
        <Provider store={store}>
            <Routes>
                {/* Public routes - accessible by everyone */}
                <Route element={<UserLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route path="/user-profile" element={<UserProfile />} />
                    <Route path="/verify-email/:token" element={<VerifyEmail />} />
                    <Route
                        path="/resume-builder"
                        element={<ResumeTemplates />}
                    />
                    <Route
                        path="/resume-builder/:templateId"
                        element={<ResumeBuilderSteps />}
                    />{" "}
                    {/* Add this route */}
                </Route>

                {/* Private routes - only accessible by authenticated employers */}
                <Route element={<EmployerLayout />}>
                    <Route
                        path="/dashboard/*"
                        element={<EmployerDashboard />}
                    />
                    <Route
                        path="/create-job-post"
                        element={<CreateJobPost />}
                    />
                    <Route path="/employer-profile" element={<EmployerProfile />} />
                    <Route path="/manage-jobs" element={<ManageJobs />} />
                </Route>
            </Routes>
        </Provider>
    );
}
