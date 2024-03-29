import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
    types : {
        image : ({ value }: any) => {
            return (
                <div className="relative w-full h-96 my-4 mx-auto">
                    <Image
                        className="object-cover"
                        src={urlFor(value).url()}
                        alt="Blog Post Image"
                        fill
                    />
                </div>
            )
        },
    },
    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
        ),
        number: ({ children }: any) => (
            <ol className="mt-lg list decimal">{children}</ol>
        ),
    },
    block: {
        normal: ({ children }: any) => (
            <p className="text-lg whitespace-pre-wrap mb-6">{children}</p>
        ),
        h1: ({ children }: any) => (
            <h1 className="text-5xl py-5 font-bold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-4xl py-5 font-bold">{children}</h2>
        ),
        h3: ({ children }: any) => (
            <h3 className="text-3xl py-5 font-bold">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-2xl py-5 font-bold">{children}</h4>
        ),

        blockquote: ({ children }: any) => (
            <blockquote className="border-l-[#F7AB0A] border-l-4 pl-5 py-2 my-2">
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("/")
            ? "noreferrer noopener"
            : undefined;
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-[#F7AB0A] hover:decoration-black"
                >
                    {children}
                </Link>
            );
        },
    },
}