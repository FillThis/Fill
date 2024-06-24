import { InfoIcon } from "lucide-react";

interface IMobileNavItem {
    name: string;
    path: string;
}

export const mobileNavItems: IMobileNavItem[] = [
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Dashboard",
        path: "/dashboard",
    },
];
