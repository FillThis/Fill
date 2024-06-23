interface IMainNavItem {
    name: string;
    path: string;
}

export const mainNavItems: IMainNavItem[] = [
    {
        name: "About",
        path: "/about",
    },
    {
        name: "Dashboard",
        path: "/dashboard",
    },
];
