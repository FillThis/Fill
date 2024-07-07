/**
  * Copyright © 2024 "ascen".
  * All rights reserved.

  * This file is part of the ascen project.
  * Unauthorized copying of this file, via any medium, is strictly prohibited.
  * Proprietary and confidential.
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
                    "bg-background h-full w-full underline-offset-4",
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
