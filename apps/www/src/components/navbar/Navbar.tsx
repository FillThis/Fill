import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

function Navbar() {
    const data = useSession();
    const path = usePathname();

    if (path === "/login" || path === "/signup") {
        return null;
    }

    return (
        <div className="px-[4rem] py-[1rem] flex justify-between items-center bg-[#171717]  text-white">
            <Link href={"/"}>
                <Image
                    src={"./byte_forms.svg"}
                    height={100}
                    width={100}
                    className="cursor-pointer"
                    alt="byte forms"
                />
            </Link>

            <ul className="flex items-center gap-[1rem]">
                <li className="cursor-pointer px-[1rem] py-[.2rem]">
                    <Link href={"/"}>Home</Link>
                </li>
                <li className="cursor-pointer px-[1rem] py-[.2rem]">
                    <Link href={"/about"}>About</Link>
                </li>

                {data?.data === undefined ? (
                    <li>
                        <Link href={"/login"}>
                            <button className=" w-[5rem] h-[1.8rem] rounded-[.3rem]  bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                                Login
                            </button>
                        </Link>
                    </li>
                ) : (
                    <li>
                        <Link className="ml-[1rem]" href={"/login"}>
                            <div className="h-[2rem] w-[2rem] rounded-full border-[1px] border-white"></div>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Navbar;
