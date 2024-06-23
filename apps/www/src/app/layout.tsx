import { Inter } from "next/font/google";
import "./globals.css";
import JotaiProvider from "@/providers/JotaiProvider";
import AuthProvider from "@/providers/AuthProvider";
import { Metadata } from "next";
import { cn } from "@/lib/utils";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Byte Forms",
    description: "An ai form generator.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("h-full w-full", inter.className)}>
                <AuthProvider>
                    <JotaiProvider>{children}</JotaiProvider>
                </AuthProvider>
            </body>
        </html>
    );
}
