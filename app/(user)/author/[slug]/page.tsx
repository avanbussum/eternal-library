import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../lib/sanity.client";
import urlFor from "../../../../lib/urlFor";
import category from "../../../../schemas/category";
import { PortableText } from "@portabletext/react"
import { RichTextComponents } from "../../../../components/RichTextComponents";

type Props = {
    params: Promise<{
      slug: string;
    }>;
};

export const revalidate = 30; //revalidate this page every 30 seconds

// Static Rendering
// yarn build and then yarn start to render statically not server side render
export async function generateStaticParams() {
    const query = groq`
        *[_type=='author']
        {
            slug,
        }`;
    
    const slugs: Author[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current)

    return slugRoutes.map(slug => ({
        slug,
    }))
}

async function Author({ params }: Props) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;
    const query = groq`
        *[_type=='author' && slug.current == $slug] [0]
        {
            ...,
        }
    `;

    const author: Author = await client.fetch(query, { slug });
  
    return <article className="px-10 pb-28">
        <section className="space-y-2 text-white">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
                    <Image
                        className="object-cover object-center mx-auto"
                        src={urlFor(author.image).url()}
                        alt={author.name}
                        fill
                    />
                </div>

                <section className="p-5 bg-[#F7AB0A] w-full">
                    <div className="flex flex-col md:flex-row justify-between gap-y-5">
                        <div>
                            <h1 className="text-4xl font-extrabold">{author.name}</h1>
                            <p>
                                {new Date(author._createdAt).toLocaleDateString
                                ("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image
                                className="rounded-full"
                                src={urlFor(author.image).url()}
                                alt={author.name}
                                height={40}
                                width={40}
                            />
                            <div className="w-64">
                                <h3 className="text-lg font-bold">{author.name}</h3>
                                <div>{/* TODO: Author BIO */ }</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="italic pt-10">description</h2>
                    </div>
                </section>
            </div>
        </section>

        <PortableText value={author.bio} components={RichTextComponents}/>
    </article>
}

export default Author