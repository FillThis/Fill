"use client";

import React from "react";
import { Icons } from "../icons/icons";
import { Button } from "../ui/button";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { mainNavItems } from "./mainNavItems";
import Link from "next/link";
import { IoIosSunny, IoMdMoon } from "react-icons/io";
import { useTheme } from "next-themes";

const MainNavBar = () => {
    const router: AppRouterInstance = useRouter();
    const { resolvedTheme, theme, setTheme } = useTheme();

    return (
        <div className="flex items-center justify-between w-full ">
            <Link href="/">{Icons.logo}</Link>
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
                <li className="flex items-center">
                    {resolvedTheme === "light" ? (
                        <IoIosSunny
                            onClick={() =>
                                setTheme(
                                    resolvedTheme === "light"
                                        ? "dark"
                                        : "light",
                                )
                            }
                            className="text-2xl"
                        />
                    ) : (
                        <IoMdMoon
                            onClick={() =>
                                setTheme(
                                    resolvedTheme === "light"
                                        ? "dark"
                                        : "light",
                                )
                            }
                            className="text-2xl"
                        />
                    )}
                </li>
            </ul>
        </div>
    );
};

export default MainNavBar;
