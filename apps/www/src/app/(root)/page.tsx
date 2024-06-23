"use client";

import { useState } from "react";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
    const data = useSession();
    const [input, setInput] = useState<string>("");
    const router = useRouter();

    const handelInput = (e: any) => {
        setInput(e.target.value);
    };

    return (
        <>
            <section className="flex flex-col h-full w-full">
                <main className=""></main>
            </section>
        </>
    );
}
