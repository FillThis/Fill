/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

import Dashboard from "@/layers/dashboard/index";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
    title: "Dashboard",
};

const DashboardPage = () => {
    return (
        <>
            <Dashboard />
        </>
    );
};

export default DashboardPage;
