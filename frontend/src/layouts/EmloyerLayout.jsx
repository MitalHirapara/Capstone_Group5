// PrivateLayout.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthService from "../services/AuthService";
import Sidebar from "../components/employer/Sidebar";
import Header from "../components/employer/Header";
import Breadcrumb from "../components/employer/Breadcrumb";
export default function EmployerLayout() {
    const isAuthenticated = AuthService.isAuthenticated();
    const user = AuthService.getUser();

    // Redirect to login if the user is not authenticated
    // if (!isAuthenticated) {
    // return <Navigate to="/login" />;
    // }

    // Add role-based protection here
    // if (user.role !== "employer") {
    // return <Navigate to="/" />;
    // }

    return (
        <div>
            <Header />
            <Breadcrumb />
            <Sidebar />
            <main>
                {/* Content */}
                <div className="w-full lg:ps-64">
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                        <Outlet />
                    </div>
                </div>
                {/* End Content */}
            </main>
        </div>
    );
}
