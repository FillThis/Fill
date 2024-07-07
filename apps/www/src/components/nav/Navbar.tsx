/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

"use client";

import React from "react";
import MobileNavBar from "./MobileNavBar";
import MainNavBar from "./MainNavBar";
import { cn } from "@/lib/utils";

function Navbar() {
    return (
        <nav
            className={cn(
                "bg-background text-foreground flex h-16 w-full items-center px-8 py-4 md:px-16",
            )}
        >
            <MainNavBar />
            <MobileNavBar />
        </nav>
    );
}

export default Navbar;
