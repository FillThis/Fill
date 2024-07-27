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

"use client";

import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Icons } from "@/components/icons/icons";
import OrSeperator from "@/components/ui/orSeperator";
import Logo from "@/assets/logoJsxComponent/logo";
import { handleSigninWithGoogle } from "@/lib/actions/signIn";

const Login = () => {
    return (
        <div className="bg-background flex h-screen w-full items-center">
            <div
                id="login-page"
                className="m-auto flex w-[90%] max-w-md flex-col items-center gap-y-8 py-4"
            >
                <Logo />
                <h1 className="text-[2rem] font-medium leading-[1.25rem] tracking-tighter">
                    Welcome back
                </h1>
                <p className="text-muted-foreground text-center leading-8">
                    Click below visible any button for log in with social media
                    platform
                </p>
                <span className="bg-muted-foreground my-4 h-[1px] w-48 rounded-full"></span>
                {/* Login Form */}
                {/* <div className="flex w-full flex-col items-end gap-y-8">
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
                </div> */}
                {/* --- or --- divider */}
                {/* <OrSeperator /> */}
                {/* Login with Google */}
                <Button
                    className="flex w-full items-center justify-center gap-x-2"
                    onClick={handleSigninWithGoogle}
                    type="button"
                >
                    {Icons.google}
                    Continue with Google
                </Button>
                {/* Create an account */}
                {/* <Link className="text-muted-foreground underline" href={"/register"}>
                    <p>Don&apos;t have an account? Sign up</p>
                </Link> */}
            </div>
        </div>
    );
};

export default Login;
