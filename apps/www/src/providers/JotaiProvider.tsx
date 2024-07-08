"use client";

import { Provider } from "jotai";
import React from "react";

const JotaiProvider = (props: { children: React.ReactNode }) => {
    return <Provider>{props.children}</Provider>;
};

export default JotaiProvider;
