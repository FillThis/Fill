"use client";

import React from "react";
import { Icons } from "../icons/icons";
import { Button } from "../ui/button";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { mainNavItems } from "./mainNavItems";

const MainNavBar = () => {
    const router: AppRouterInstance = useRouter();

    return (
        <div className="flex items-center justify-between w-full">
            {Icons.logo}
            <ul className="hidden md:flex gap-x-8">
                {mainNavItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Button
                                variant={"link"}
                                className="text-inherit font-normal p-0"
                                onClick={() => router.push(item.path)}
                            >
                                {item.name}
                            </Button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default MainNavBar;
