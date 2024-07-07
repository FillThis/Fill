/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

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
