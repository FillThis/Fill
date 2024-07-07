/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

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
