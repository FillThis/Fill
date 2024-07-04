import Forms from "@/components/dashboard/Forms";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import { GemIcon } from "lucide-react";
import React from "react";

const Dashboard = () => {
    return (
        <div className="grid h-full w-full grid-cols-5 gap-x-4">
            {/* Side menu */}
            <aside className="bg-foreground/5 col-span-1 flex h-full flex-col justify-between gap-y-4 rounded-xl p-8">
                <div className="bg-foreground text-background w-full rounded-full px-4 py-2">
                    Forms
                </div>
                <div className="bg-foreground/10 text-foreground w-full rounded-[2rem] rounded-t-none p-4 text-base font-medium">
                    <GemIcon size={20} className="text-muted-foreground mb-2" />
                    Become member
                    <span className="bg-muted-foreground mb-4 mt-2 block h-[1px] w-10 rounded-full"></span>
                    <p className="text-muted-foreground my-4 font-normal">
                        Get the subscription of {siteConfig.name}
                    </p>
                    <Button className="w-full">Get now</Button>
                </div>
            </aside>
            {/* Main section */}
            <ScrollArea className="bg-background text-foreground col-span-4 h-full rounded-xl">
                <Forms></Forms>
            </ScrollArea>
        </div>
    );
};

export default Dashboard;
