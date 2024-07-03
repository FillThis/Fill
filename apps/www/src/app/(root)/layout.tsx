import Header from "@/components/header/Header";
import React from "react";

const layout = (props: { children: React.ReactNode }) => {
    return (
        <div className="bg-background text-foreground flex h-dvh max-h-full w-full flex-col text-white">
            <Header />
            <main className="h-full w-full">{props.children}</main>
        </div>
    );
};

export default layout;
