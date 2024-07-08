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

import { cn } from "@/lib/utils";
import React from "react";

interface LogoProps {
    className?: string;
    size?: number;
}

const Logo: React.FC<LogoProps> = ({ className, size = 32 }) => {
    return (
        <div
            className={cn("text-foreground flex items-center gap-4", className)}
        >
            <svg
                id="Layer_1"
                data-name="Layer 1"
                className="fill-current"
                height={size}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 600.5 260"
            >
                <rect width="340" height="20" />
                <rect y="40" width="340" height="20" />
                <rect y="120" width="340" height="20" />
                <rect x="260" y="200" width="80" height="20" />
                <rect x="260" y="200" width="20" height="60" />
                <rect y="200" width="240" height="20" />
                <rect y="160" width="240" height="20" />
                <rect x="260" y="160" width="80" height="20" />
                <rect y="80" width="340" height="20" />
                <rect x="400.5" y="119.75" width="80" height="20" />
                <rect x="400.5" y="119.75" width="20" height="60" />
                <rect x="400.5" y="79.75" width="80" height="20" />
                <rect x="500.5" y="119.75" width="20" height="60" />
                <rect x="540.5" y="79.75" width="20" height="100" />
                <rect x="580.5" y="79.75" width="20" height="100" />
                <rect x="500.5" y="79.75" width="20" height="20" />
                <polygon points="500.5 99.75 520.5 99.75 500.5 119.75 500.5 99.75" />
            </svg>
        </div>
    );
};

export default Logo;
