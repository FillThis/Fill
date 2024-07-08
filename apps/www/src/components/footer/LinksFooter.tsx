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
