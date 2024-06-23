"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { mobileNavItems } from "./mobileNavItems";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const MobileNavBar = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const router: AppRouterInstance = useRouter();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            {/* This button will trigger open the mobile sheet menu */}
            <SheetTrigger asChild>
                <Button
                    size="icon"
                    className="md:hidden text-white"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <div className="flex flex-col items-start">
                    {mobileNavItems.map((item, index) => (
                        <Button
                            key={index}
                            variant="link"
                            onClick={() => {
                                setOpen(false);
                                router.push(item.path);
                            }}
                        >
                            {item.name}
                        </Button>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavBar;
