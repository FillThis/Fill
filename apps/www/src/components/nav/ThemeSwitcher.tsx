/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeSwitcher = () => {
    const { resolvedTheme, theme, setTheme } = useTheme();

    return (
        <div className="cursor-pointer">
            {resolvedTheme === "dark" ? (
                <SunIcon
                    onClick={() => setTheme("light")}
                    className="text-2xl"
                />
            ) : (
                <MoonIcon
                    onClick={() => setTheme("dark")}
                    className="text-2xl"
                />
            )}
        </div>
    );
};

export default ThemeSwitcher;
