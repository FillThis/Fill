"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons/icons";
import OrSeperator from "@/components/ui/orSeperator";

const Login = () => {
    const handleSigninWithGoogle = () => {
        // Sign in with google logic
    };

    return (
        <div className="bg-background flex h-screen w-full items-center">
            <div
                id="login-page"
                className="m-auto flex w-[90%] max-w-md flex-col items-center gap-y-8 py-4"
            >
                <h1 className="text-foreground mb-8 text-[2rem] font-medium tracking-tighter">
                    Welcome back
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
                    <Button type="button" className="w-full">
                        Login
                    </Button>
                </div>
                {/* --- or --- divider */}
                <OrSeperator />
                {/* Login with Google */}
                <Button
                    className="text-foreground flex w-full items-center justify-center gap-x-2"
                    variant={"secondary"}
                    onClick={handleSigninWithGoogle}
                    type="button"
                >
                    {Icons.google}
                    Signin with Google
                </Button>
                {/* Create an account */}
                <Link className="text-muted underline" href={"/register"}>
                    <p>Don't have an account? Sign up</p>
                </Link>
            </div>
        </div>
    );
};

export default Login;
