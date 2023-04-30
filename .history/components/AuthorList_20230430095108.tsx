"use client"
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";
import { RichTextComponents } from "./RichTextComponents";

type Props = {
    authors: Author[];
}

function AuthorList({authors}: Props) {
    return (
        <div>
            <h1 className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-semibold px-10 my-5 mb-6 text-5xl">The Author</h1>
                {/* Authors */}
                {authors.map(author => (
                    <div key={author._id} className="flex flex-col mb-6 px-10 gap-x-10 pb-16">
                        
                        <div className="flex flex-col lg:flex-row items-center">
                            <div>
                                <div className= "-z-50 relative w-screen h-80 lg:w-96 lg:h-96 lg:mr-5">
                                    <Image
                                        className="object-cover rounded-lg"
                                        src={urlFor(author.image).url()}
                                        alt={author.name}
                                        fill
                                    />
                                </div>
                            </div>
                            <div>
                                    <div className="bg-gradient-to-r from-[#e9e8e5] to-[#dedbdb] text-center text-black px-3 py-3 mt-5 lg:mt-0 rounded-lg font-semibold text-sm lg:text-lg lg:h-96 flex flex-col justify-center">
                                        <PortableText value={author.bio} components={RichTextComponents}/>
                                    </div>
                               
                            </div>
                        </div>

                        <div className="mt-5 flex-1">
                            <p className="underline text-lg font-bold">{author.name}</p>
                        </div>
                        {/*
                        <p className="mt-5 font-bold flex items-center group-hover:underline font-mono">
                            Read Post
                            <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
                        </p>
                        */}
                    </div>
                ))}
                <Contact/>
            </div>
    )
}

export default AuthorList