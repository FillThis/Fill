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
                className="fill-current"
                height={size}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 650 260"
            >
                <rect
                    className="fill-current"
                    x="450"
                    y="120"
                    width="80"
                    height="20"
                />
                <rect
                    className="fill-current"
                    x="450"
                    y="120"
                    width="20"
                    height="60"
                />
                <rect
                    className="fill-current"
                    x="450"
                    y="80"
                    width="80"
                    height="20"
                />
                <rect
                    className="fill-current"
                    x="550"
                    y="120"
                    width="20"
                    height="60"
                />
                <rect
                    className="fill-current"
                    x="590"
                    y="80"
                    width="20"
                    height="100"
                />
                <rect
                    className="fill-current"
                    x="630"
                    y="80"
                    width="20"
                    height="100"
                />
                <rect
                    className="fill-current"
                    x="550"
                    y="80"
                    width="20"
                    height="20"
                />
                <polygon
                    className="fill-current"
                    points="550 100 570 100 550 120 550 100"
                />
                <rect className="fill-current" width="390" height="20" />
                <rect className="fill-current" y="40" width="390" height="20" />
                <rect className="fill-current" y="80" width="290" height="20" />
                <rect
                    className="fill-current"
                    x="310"
                    y="80"
                    width="80"
                    height="20"
                />
                <rect
                    className="fill-current"
                    y="120"
                    width="290"
                    height="20"
                />
                <rect
                    className="fill-current"
                    x="310"
                    y="120"
                    width="80"
                    height="20"
                />
                <rect
                    className="fill-current"
                    x="310"
                    y="120"
                    width="20"
                    height="60"
                />
                <rect
                    className="fill-current"
                    y="160"
                    width="290"
                    height="20"
                />
                <rect
                    className="fill-current"
                    y="200"
                    width="390"
                    height="20"
                />
                <rect
                    className="fill-current"
                    y="240"
                    width="390"
                    height="20"
                />
            </svg>
        </div>
    );
};

export default Logo;
