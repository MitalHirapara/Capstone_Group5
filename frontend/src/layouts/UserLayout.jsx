// PublicLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/user/Navbar";
import Footer from "../components/user/Footer";

export default function UserLayout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
