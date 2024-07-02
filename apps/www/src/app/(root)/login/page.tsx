import Login from "@/layers/login";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Login",
};

const LoginPage = () => {
    return (
        <>
            <Login />
        </>
    );
};

export default LoginPage;
