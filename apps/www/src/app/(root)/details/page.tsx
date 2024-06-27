import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

function page() {
    return (
        <section className="flex flex-col h-screen w-full bg-light_bg dark:bg-dark_bg">
            <main className="px-[4rem]  py-[3rem] flex justify-center items-center gap-[3rem] h-full w-full">
                <div className="flex flex-col items-center gap-[1rem] w-[25rem]">
                    <input
                        type="text"
                        id="email"
                        className="outline-none h-[2.6rem] w-full px-[.8rem] rounded-[.3rem] font-normal text-light_text_gray dark:text-dark_text_gray placeholder:font-light placeholder:text-light_text_gray/50 dark:placeholder:text-dark_text_gray/50   bg-light_bg_50 dark:bg-dark_bg_50 "
                        placeholder="Organization  Name"
                    />
                    <textarea
                        rows={3}
                        className="outline-none px-[.8rem] py-[.4rem]  w-full rounded-[.3rem] font-normal text-light_text_gray dark:text-dark_text_gray placeholder:font-light placeholder:text-light_text_gray/50 dark:placeholder:text-dark_text_gray/50      bg-light_bg_50 dark:bg-dark_bg_50 "
                        placeholder="form descriptions"
                    ></textarea>

                    <Link href={"/prompt"} className="mt-[2rem]">
                        <Button type="button" className="w-32 ">
                            Next
                        </Button>
                    </Link>
                </div>
            </main>
        </section>
    );
}

export default page;
