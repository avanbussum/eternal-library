import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
    authors: Author[];
}

function AuthorList({authors}: Props) {
    return (
        <div>
            <h1 className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 mb-6 text-5xl font-serif">The Author</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-x-10 gap-y-16 pb-24">
                {/* Posts */}
                {authors.map(author => (
                    <ClientSideRoute key={author._id} route={`/author/${author.slug.current}`}>
                        <div className="flex flex-col group cursor-pointer">
                            <div className="relative w-full h-80 drop-shadow-xl
                            group-hover:scale-105 transition-transform duration-200 ease-out">
                                <Image
                                    className="object-cover object-left lg:object-center"
                                    src={urlFor(author.image).url()}
                                    alt={author.name}
                                    fill
                                />
                                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black 
                                backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between font-mono">
                                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                                        {author.bio.map(b => (
                                            <div className="bg-[#d4af37] text-center text-white 
                                            px-3 py-1 rounded-lg font-semibold text-xs">
                                                <p>{b.children[0].text}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex-1 font-mono">
                                <p className="underline text-lg font-bold">{author.name}</p>
                            </div>
                            <p className="mt-5 font-bold flex items-center group-hover:underline font-mono">
                                Read Post
                                <ArrowUpRightIcon className="ml-2 h-4 w-4"/>
                            </p>
                        </div>
                    </ClientSideRoute>
                ))}
            </div>
        </div>
    )
}

export default AuthorList