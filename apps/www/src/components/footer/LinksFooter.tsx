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
import Link from "next/link";
import React from "react";

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

const LinksFooter = () => {
    return (
        <section className="text-foreground flex flex-col items-center justify-center gap-4">
            <Link href={"/"}>
                <Logo className="mb-4" />
            </Link>
            <h3 className="text-muted-foreground">Some important links</h3>
            <div className="flex max-w-lg flex-wrap items-center justify-center gap-4 gap-y-2 text-blue-500">
                {links.map((link, index) => (
                    <>
                        <Link
                            className="flex-shrink-0 transition-all hover:underline"
                            key={index}
                            href={link.path}
                        >
                            {link.title}
                        </Link>
                        {index < links.length - 1 && <span>|</span>}
                    </>
                ))}
            </div>
            <p className="mt-4">
                Copyright &copy; {new Date().getFullYear()} ascen. All right
                reserved.
            </p>
        </section>
    );
};

export default LinksFooter;
