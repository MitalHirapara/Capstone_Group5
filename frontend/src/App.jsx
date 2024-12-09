import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./components/Signup";
import UserProfile from "./components/user/UserProfile";

import VerifyEmail from "./components/user/VerifyEmail";

import Activate from "./components/user/Activate";

import ForgotPassword from "./pages/ForgotPassword";
import EmployerProfile from "./components/employer/EmployerProfile";
import EmployerDashboard from "./pages/EmployerDashboard";
import CreateJobPost from "./components/employer/CreateJob";
import EditJobPage from "./components/employer/EditJob";
import ManageJobs from "./components/employer/ManageJobs";
import UserLayout from "./layouts/UserLayout";
import EmployerLayout from "./layouts/EmloyerLayout";
import JobDetails from "./pages/JobDetail";
import Jobs from "./pages/Jobs";
import { Provider } from "react-redux";
import store from "./store/store";

// Resume builder imports
import ResumeTemplates from "./pages/ResumeTemplates";
import ResumeBuilderSteps from "./pages/ResumeBuilderSteps";
import Admin from "./components/admin/Admin";
import AdminLayout from "./layouts/AdminLayout";
import Users from "./components/admin/Users";
import ApplyJobPage from "./pages/ApplyJobPage";

import EmployerRegistration from "./pages/EmployerRegistration";

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        {/* Public routes - accessible by everyone */}
        <Route element={<UserLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/detail/:id" element={<JobDetails />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/resume-builder" element={<ResumeTemplates />} />
          <Route
            path="/resume-builder/:templateId"
            element={<ResumeBuilderSteps />}
          />{" "}
          {/* <Route path="/apply-job/:jobId" element={<ApplyJobPage />} /> */}
          <Route path="/apply-job/" element={<ApplyJobPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
         
          <Route path="/activate/:uid/:token" element={<Activate />} />
          <Route path="/employer-signup" element={<EmployerRegistration />}/>
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/users" element={<Users />} />
        </Route>

        {/* Private routes - only accessible by authenticated employers */}
        <Route element={<EmployerLayout />}>
          <Route path="/dashboard/*" element={<EmployerDashboard />} />
          <Route path="/create-job-post" element={<CreateJobPost />} />
          <Route path="/employer-profile" element={<EmployerProfile />} />
          <Route path="/manage-jobs" element={<ManageJobs />} />
        </Route>
      </Routes>
    </Provider>
  );

}
