"use client";

import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import { mobileNavItems } from "./mobileNavItems";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Icons } from "../icons/icons";
import Link from "next/link";

const MobileNavBar = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const router: AppRouterInstance = useRouter();

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            {/* This button will trigger open the mobile sheet menu */}
            <SheetTrigger asChild>
                <Button
                    size="icon"
                    variant={"link"}
                    className="md:hidden text-white"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <MenuIcon />
                </Button>
            </SheetTrigger>

            <SheetContent side="left">
                <div className="flex gap-y-4 flex-col items-start">
                    <Link href={"/"} className="mb-4">
                        {Icons.logoDark}
                    </Link>
                    {mobileNavItems.map((item, index) => (
                        <Button
                            key={index}
                            variant="link"
                            asChild
                            className="p-0 h-auto"
                        >
                            <Link href={item.path}>{item.name}</Link>
                        </Button>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavBar;
