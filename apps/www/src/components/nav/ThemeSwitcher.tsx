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

import { DarkModeOutlined, WbIncandescentOutlined } from "@mui/icons-material";
import { useTheme } from "next-themes";
import React, { useState } from "react";

const ThemeSwitcher = () => {
    const { resolvedTheme, theme, setTheme } = useTheme();
    const [themeValue, setThemeValue] = useState<string>(theme || "dark");

    if (theme && theme === "light") {
        return (
            <DarkModeOutlined
                onClick={() => setTheme("dark")}
                className="text-2xl"
            />
        );
    } else if (theme && theme === "dark") {
        return (
            <WbIncandescentOutlined
                onClick={() => setTheme("light")}
                className="text-2xl"
            />
        );
    } else {
        return <></>;
    }
};

export default ThemeSwitcher;
