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
 */ import Forms from "@/components/dashboard/Forms";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { siteConfig } from "@/config/site";
import { GemIcon } from "lucide-react";
import React from "react";

const Dashboard = () => {
    return (
        <div className="flex h-full w-full gap-x-4 max-md:flex-col">
            {/* Side menu */}
            <aside className="bg-foreground/5 flex flex-col gap-y-4 rounded-xl p-8 md:h-full md:w-1/2 md:justify-between 2xl:w-1/4">
                <div className="bg-foreground text-background w-full rounded-full px-4 py-2">
                    Forms
                </div>
                <div className="bg-foreground/10 text-foreground w-full rounded-[2rem] p-4 text-base font-medium">
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
            <ScrollArea className="bg-background text-foreground w-full rounded-xl md:h-full">
                <Forms></Forms>
            </ScrollArea>
        </div>
    );
};

export default Dashboard;
