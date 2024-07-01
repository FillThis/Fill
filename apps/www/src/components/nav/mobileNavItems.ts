import { InfoIcon } from "lucide-react";

interface IMobileNavItem {
    name: string;
    path: string;
}

export const mobileNavItems: IMobileNavItem[] = [
    {
        name: "Dashboard",
        path: "/dashboard",
    },
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Login",
        path: "/login",
    },
];
