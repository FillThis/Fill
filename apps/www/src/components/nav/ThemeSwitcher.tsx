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
