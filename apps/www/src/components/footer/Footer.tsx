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

import Logo from "@/assets/logoJsxComponent/logo";
import React from "react";
import Link from "next/link";

const links: { path: string; title: string }[] = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about",
    },
    {
        title: "Dashboard",
        path: "/dashboard",
    },
    {
        title: "Login",
        path: "/login",
    },
    {
        title: "Terms & Condition",
        path: "/terms",
    },
    {
        title: "Privacy policy",
        path: "/privacy",
    },
];

const Footer = () => {
    return (
        <footer className="bg-foreground/10 flex md:justify-center">
            <div className="flex flex-col gap-8 p-8 md:px-48">
                <Link href={"/"}>
                    <Logo />
                </Link>
                <div className="flex max-w-lg flex-col gap-2">
                    <p className="font-medium">Some links</p>
                    {links.map((link, index) => (
                        <span key={index}>
                            <Link
                                className="text-muted-foreground transition-all hover:underline"
                                key={index}
                                href={link.path}
                            >
                                {link.title}
                            </Link>
                        </span>
                    ))}
                </div>
                <span className="bg-foreground h-[1px] w-12"></span>
                <p>
  Copyright &copy; {`${new Date().getFullYear()}-${(new Date().getFullYear() + 1).toString().slice(-2)}`} ascen. All rights reserved.
</p>

            </div>
        </footer>
    );
};

export default Footer;
