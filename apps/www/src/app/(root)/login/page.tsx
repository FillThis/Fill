"use client";
import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons/icons";
import OrSeperator from "@/components/ui/orSeperator";

function page() {
    const handleSigninWithGoogle = () => {
        // Sign in with google logic
    };

    return (
        <div className="bg-background flex h-screen w-full items-center justify-center">
            <div
                id="login-page"
                className="m-auto flex h-full w-[90%] max-w-md flex-col items-center justify-center gap-y-8"
            >
                <h1 className="text-foreground mb-4 text-[2rem] font-medium -tracking-tighter">
                    Login
                </h1>
                {/* Login Form */}
                <div className="flex w-full flex-col items-end gap-y-8">
                    <span className="flex w-full flex-col gap-y-4">
                        <Label htmlFor="email">Enter email</Label>
                        <Input
                            id="email"
                            name="email"
                            placeholder="e.g. name@example.com"
                            type="email"
                        ></Input>
                    </span>
                    <span className="flex w-full flex-col gap-y-4">
                        <Label htmlFor="password">Enter password</Label>
                        <Input
                            id="password"
                            name="password"
                            placeholder="********"
                            type="password"
                        ></Input>
                    </span>
                    <Button type="button" className="w-32">
                        Login
                    </Button>
                </div>
                {/* --- or --- divider */}
                <OrSeperator />
                {/* Login with Google */}
                <Button
                    className="text-foreground flex w-full items-center justify-center gap-x-2"
                    variant={"outline"}
                    onClick={handleSigninWithGoogle}
                    type="button"
                >
                    {Icons.google}
                    Signin with Google
                </Button>
                {/* Create an account */}
                <p>
                    Don't have an account?{" "}
                    <Link
                        className="transition-opacity hover:underline"
                        href={"/register"}
                    >
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default page;
