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

import { Inter } from "next/font/google";
import "../styles/globals.css";
import JotaiProvider from "@/providers/JotaiProvider";
import AuthProvider from "@/providers/AuthProvider";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Fomrs",
    description: "An ai form generator.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "bg-background text-foreground flex h-full min-h-dvh w-full flex-col underline-offset-4",
                    inter.className,
                )}
            >
                <ThemeProvider attribute="class" defaultTheme="system">
                    <AuthProvider>
                        <JotaiProvider>{children}</JotaiProvider>
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
