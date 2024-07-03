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
            <SheetTrigger>
                <MenuIcon className="cursor-pointer md:hidden" />
            </SheetTrigger>

            <SheetContent side="left">
                <div className="flex flex-col items-start gap-y-4">
                    <Link href={"/"} className="mb-4">
                        {Icons.logo}
                    </Link>
                    {mobileNavItems.map((item, index) => (
                        <Button
                            key={index}
                            variant="link"
                            asChild
                            className="h-auto p-0"
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
