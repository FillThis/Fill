interface IMainNavItem {
    name: string;
    path: string;
}

export const mainNavItems: IMainNavItem[] = [
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
