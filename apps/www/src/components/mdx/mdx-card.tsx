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

import Link from "next/link";

import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    href?: string;
    disabled?: boolean;
}

export function MdxCard({
    href,
    className,
    children,
    disabled,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                "group relative rounded-lg border p-6 shadow-md transition-shadow hover:shadow-lg",
                disabled && "cursor-not-allowed opacity-60",
                className,
            )}
            {...props}
        >
            <div className="flex flex-col justify-between space-y-4">
                <div className="[&>p]:text-muted-foreground space-y-2 [&>h3]:!mt-0 [&>h4]:!mt-0">
                    {children}
                </div>
            </div>
            {href && (
                <Link href={disabled ? "#" : href} className="absolute inset-0">
                    <span className="sr-only">View</span>
                </Link>
            )}
        </div>
    );
}
