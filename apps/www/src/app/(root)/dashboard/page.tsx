import Dashboard from "@/layers/dashboard";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Login",
};

const DashboardPage = () => {
    return (
        <>
            <Dashboard />
        </>
    );
};

export default DashboardPage;
