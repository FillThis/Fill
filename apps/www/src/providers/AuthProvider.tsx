"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const AuthProvider = (props: { children: React.ReactNode }) => {
    return <SessionProvider>{props.children}</SessionProvider>;
};

export default AuthProvider;
