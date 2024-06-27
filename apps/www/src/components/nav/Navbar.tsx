"use client";

import React from "react";
import { SessionContextValue, useSession } from "next-auth/react";
import MobileNavBar from "./MobileNavBar";
import MainNavBar from "./MainNavBar";
import { cn } from "@/lib/utils";

function Navbar() {
    const data: SessionContextValue<boolean> = useSession();
    // const path: string = usePathname();

    // if (path === "/login" || path === "/signup") {
    //     return null;
    // }

    return (
        <nav
            className={cn(
                "flex w-full h-16 items-center px-8 py-4 bg-white text-light_text_black  dark:bg-dark_bg dark:text-dark_text_white",
            )}
        >
            <MainNavBar />
            <MobileNavBar />
        </nav>
    );
}

export default Navbar;
