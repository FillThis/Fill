import React from "react";
import Link from "next/link";
function page() {
    return (
        <section className="flex flex-col h-screen w-full bg-[#1e1e1e]">
            <main className="px-[4rem]  py-[3rem] flex justify-center items-center gap-[3rem] h-full w-full">
                <div className="flex flex-col items-center gap-[1rem] w-[25rem]">
                    <input
                        type="text"
                        id="email"
                        className=" h-[2.6rem] w-full px-[.8rem] rounded-[.3rem] font-normal text-[#E6E6E6] placeholder:font-light placeholder:text-white/20  bg-[#2e2e2e] "
                        placeholder="Organization  Name"
                    />
                    <textarea
                        rows={3}
                        className=" px-[.8rem] py-[.4rem]  w-full rounded-[.3rem] font-normal text-[#E6E6E6] placeholder:font-light placeholder:text-white/20  bg-[#2e2e2e] "
                        placeholder="form descriptions"
                    ></textarea>

                    <Link href={"/prompt"} className="mt-[2rem]">
                        <button className="  w-[5.4rem] h-[2rem] rounded-[.2rem] font-semibold text-[#E6E6E6]  bg-gradient-to-r from-red-500 via-pink-500  via-purple-500 to-blue-500">
                            Next
                        </button>
                    </Link>
                </div>
            </main>
        </section>
    );
}

export default page;
