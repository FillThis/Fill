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
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div
            className={cn("text-foreground flex items-center gap-4", className)}
        >
            <svg
                version="1.1"
                id="Layer_1"
                height={30}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 340 300"
                enableBackground="new 0 0 340 300"
                xmlSpace="preserve"
            >
                <g>
                    <rect
                        x="0"
                        y="40"
                        className="fill-current"
                        width="340"
                        height="20"
                    />
                    <rect
                        x="0"
                        y="80"
                        className="fill-current"
                        width="340"
                        height="20"
                    />
                    <rect
                        x="0"
                        y="160"
                        className="fill-current"
                        width="340"
                        height="20"
                    />
                    <rect
                        x="260"
                        y="240"
                        className="fill-current"
                        width="80"
                        height="20"
                    />
                    <rect
                        x="260"
                        y="240"
                        className="fill-current"
                        width="20"
                        height="60"
                    />
                    <rect
                        x="0"
                        y="240"
                        className="fill-current"
                        width="240"
                        height="20"
                    />
                    <rect
                        x="0"
                        y="200"
                        className="fill-current"
                        width="240"
                        height="20"
                    />
                    <rect
                        x="260"
                        y="200"
                        className="fill-current"
                        width="80"
                        height="20"
                    />
                    <rect
                        x="0"
                        y="120"
                        className="fill-current"
                        width="340"
                        height="20"
                    />
                </g>
            </svg>
            <span className="text-[20px] font-medium">Forms</span>
        </div>
    );
};

export default Logo;
