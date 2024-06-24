import Header from "@/components/header/Header";
import React from "react";

const layout = (props: { children: React.ReactNode }) => {
    return (
        <div className="w-full flex flex-col bg-black h-dvh max-h-full text-white">
            <Header />
            {props.children}
        </div>
    );
};

export default layout;
