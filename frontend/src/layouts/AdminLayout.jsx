import React from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/admin/Header";
import Breadcrumb from "../components/admin/Breadcrumb";
import Sidebar from "../components/admin/Sidebar";


export default function AdminLayout() {
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
