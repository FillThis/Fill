"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "../../components/navbar/Navbar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { redirect, useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { postId } from "@/store/userStore";
import { useSession, signIn, signOut } from "next-auth/react";
const { GoogleGenerativeAI } = require("@google/generative-ai");

export default function Home() {
    // const [id, setId] = useAtom(postId);
    // const next = () => setId((x: any) => x + 1);
    // const prev = () => setId((x: any) => x - 1 || 1);
    const data = useSession();
    console.log(data);
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const router = useRouter();
    const genAI = new GoogleGenerativeAI(
        "AIzaSyCyB0ZlwrayboT54v82HuWs9tK-6ucaX4g",
    );
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    async function run() {
        console.log("running......");
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const guidance = `Suppose you are form generator that get prompt as text and generate a response that contains array of json in markdown format. Each json object must contains four fields name(only one word), placeholder(html input placeholder), htmlInputType(valid html input type), required(true/false). Prompt: <> Example Prompt: Suppose prompt.is 'Generate a form for ${input}'. Example Response:  `;
        const example = JSON.stringify([
            {
                name: "password",
                placeholder: "Enter your password",
                htmlInputType: "password",
                require: true,
            },
            {
                name: "email",
                placeholder: "Enter your email",
                htmlInputType: "email",
                require: true,
            },
        ]);

        const prompt =
            guidance +
            example +
            "Note:Response does not contain any textual information about generated response.";

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();
        setResponse(text);
        console.log(text);
    }

    const handelInput = (e: any) => {
        setInput(e.target.value);
    };

    return (
        <>
            <section className="flex flex-col h-screen w-full bg-[#1e1e1e]">
                <main className="px-[4rem]  py-[3rem] flex gap-[3rem] h-full w-full">
                    <div
                        onClick={() => router.push("/organizationdetails")}
                        className="cursor-pointer p-[.6rem] flex justify-center items-center h-[13rem] w-[14rem] rounded-[.3rem] bg-[#2e2e2e]"
                    >
                        <div className="mt-[.6rem] flex flex-col gap-[.2rem] items-center text-[#565656]">
                            <FaPlus className="text-[2rem]" />
                            <h2>New Form</h2>
                        </div>
                    </div>
                    <div className="cursor-pointer p-[.6rem] h-[13rem] w-[14rem] rounded-[.3rem] bg-[#2e2e2e]">
                        <Image
                            src="/formImage.png"
                            alt="form image"
                            height={200}
                            width={300}
                        />

                        <div className="mt-[.6rem] flex justify-between w-full  text-[#E6E6E6]">
                            <div>
                                <h2 className="text-[1.2rem] font-medium">
                                    login form
                                </h2>
                                <h4 className="text-[.7rem]">responses : 5</h4>
                            </div>
                            <div className="p-[.2rem] mt-[.2rem] h-fit w-fit ">
                                <BsThreeDotsVertical className=" cursor-pointer text-[1.2rem]" />
                            </div>
                        </div>
                    </div>
                </main>
            </section>

            {/* <div>
        id: {id} {id > 1 ? <button onClick={prev}>Prev</button> : null}{" "}
        <button onClick={next}>Next</button>
      </div> */}
        </>
    );
}
