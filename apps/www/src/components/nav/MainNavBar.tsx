/**
 * @license
 * Copyright 2024 ascen
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use client";

import React from "react";
import { Icons } from "../icons/icons";
import { Button } from "../ui/button";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";
import { mainNavItems } from "./mainNavItems";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const MainNavBar = () => {
    const router: AppRouterInstance = useRouter();

    return (
        <div className="flex w-full items-center justify-between">
            <Link href="/">{Icons.logo}</Link>
            <ul className="hidden gap-x-8 md:flex">
                {mainNavItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Button
                                variant={"link"}
                                className="p-0 font-normal text-inherit"
                                onClick={() => router.push(item.path)}
                            >
                                {item.name}
                            </Button>
                        </li>
                    );
                })}
            </ul>
            <span className="cursor-pointer max-md:mr-4">
                <ThemeSwitcher />
            </span>
        </div>
    );
};

export default MainNavBar;
