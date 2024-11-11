// layouts/EmployerLayout.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser, selectIsAuthenticated } from "../store/auth/authSlice";
import Sidebar from "../components/employer/Sidebar";
import Header from "../components/employer/Header";
import Breadcrumb from "../components/employer/Breadcrumb";

export default function EmployerLayout() {
    const isAuthenticated = useSelector(selectIsAuthenticated);
    const user = useSelector(selectUser);

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (user?.role !== "employer") {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <Header />
            <Breadcrumb />
            <Sidebar />
            <main>
                <div className="w-full lg:ps-64">
                    <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    );
}
