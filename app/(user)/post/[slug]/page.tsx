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
        *[_type=='post']
        {
            slug,
        }`;
    
    const slugs: Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current)

    return slugRoutes.map(slug => ({
        slug,
    }))
}

async function Post({ params }: Props) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    const query = groq`
        *[_type=='post' && slug.current == $slug] [0]
        {
            ...,
            author->,
            categories[]->
        }
    `;

    const post: Post = await client.fetch(query, { slug });
  
    return <article className="px-10 pb-28 mt-10">
        <section className="space-y-2 text-black mb-5">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between -z-40">
                <div className="absolute w-full h-full opacity-10 blur-sm p-10">
                    <Image
                        className="object-cover object-center mx-auto"
                        src={urlFor(post.mainImage).url()}
                        alt={post.author.name}
                        fill
                    />
                </div>

                <section className="p-5 bg-gradient-to-r from-[#F5F2E8] to-[#D4D4D4] w-full">
                    <div className="flex flex-col md:flex-row justify-between gap-y-5">
                        <div>
                            <h1 className="text-4xl font-extrabold">{post.title}</h1>
                            <p>
                                {new Date(post._createdAt).toLocaleDateString
                                ("en-US", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image
                                className="rounded-full h-10"
                                src={urlFor(post.author.image).url()}
                                alt={post.author.name}
                                height={40}
                                width={40}
                            />
                            <div className="w-64">
                                <h3 className="text-lg font-bold">{post.author.name}</h3>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="italic pt-10">{post.description}</h2>
                        <div className="flex items-center justify-end mt-auto space-x-2">
                            {post.categories.map((category) => (
                                <p 
                                    key={category._id} 
                                    className="bg-gray-800 text-white px-3 py-1
                                    rounded-full text-sm font-semibold mt-4"
                                >
                                    {category.title}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </section>
        <div className="lg:px-32 mb-auto" style={{backgroundImage: `url('https://images.unsplash.com/photo-1516054719048-38394ee6cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')`}}>
            <div className="bg-white lg:px-10 font-serif">
                <PortableText value={post.body} components={RichTextComponents}/>
            </div>
        </div>
    </article>
}

export default Post