import Header from "@/components/header/Header";
import React from "react";

const layout = (props: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full bg-red-600">
            <Header />
            {props.children}
        </div>
    );
};

export default layout;
