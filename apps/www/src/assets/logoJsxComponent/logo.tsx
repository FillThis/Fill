/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
  */

import { cn } from "@/lib/utils";
import React from "react";

interface LogoProps {
    className: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
    return (
        <div className={cn("text-foreground", className)}>
            <svg
                version="1.1"
                id="Layer_1"
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
                        x="0"
                        y="240"
                        className="fill-current"
                        width="80"
                        height="20"
                    />
                    <rect
                        x="0"
                        y="240"
                        className="fill-current"
                        width="20"
                        height="60"
                    />
                    <rect
                        x="100"
                        y="240"
                        className="fill-current"
                        width="240"
                        height="20"
                    />
                    <rect
                        x="100"
                        y="200"
                        className="fill-current"
                        width="240"
                        height="20"
                    />
                    <rect
                        x="0"
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
        </div>
    );
};

export default Logo;
