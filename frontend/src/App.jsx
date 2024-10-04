// App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Jobs from "./pages/Jobs";
// import ResumeBuild from "./pages/ResumeBuild";
import EmployerDashboard from "./pages/EmployerDashboard";
import CreateJobPost from "./components/employer/CreateJob";
import ManageJobs from "./components/employer/ManageJobs";
// import Applications from "./components/employer/Applications";
import UserLayout from "./layouts/UserLayout";
import EmployerLayout from "./layouts/EmloyerLayout";
export default function App() {
    return (
        <Routes>
            {/* Public routes - accessible by everyone */}
            <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/signup" element={<Signup />} /> */}
                {/* <Route path="/jobs" element={<Jobs />} /> */}
                {/* <Route path="/resume-build" element={<ResumeBuild />} /> */}
            </Route>

            {/* Private routes - only accessible by authenticated employers */}
            <Route element={<EmployerLayout />}>
                <Route path="/dashboard/*" element={<EmployerDashboard />} />
                <Route path="/create-job-post" element={<CreateJobPost />} />
                <Route path="/manage-jobs" element={<ManageJobs />} />
                {/* <Route path="/applications" element={<Applications />} /> */}
            </Route>
        </Routes>
    );
}
