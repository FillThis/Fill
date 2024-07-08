import React from "react";
import FormPage from "@/layers/dashboard/form";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Form | Dashboard",
};

const DashboardForm = () => {
    return (
        <>
            <FormPage />
        </>
    );
};

export default DashboardForm;
