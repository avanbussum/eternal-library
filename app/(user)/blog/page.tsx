import {draftMode} from "next/headers";
import {groq} from 'next-sanity'
import { client } from "../../../lib/sanity.client";
import PreviewSuspense from "../../../components/PreviewSuspense";
import PreviewBlogList from "../../../components/PreviewBlogList";
import BlogList from "../../../components/BlogList";
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";
import Coffee from "../../../components/Coffee";

const query = groq`
*[_type=='post'] {
    ...,
    author->,
    categories[]->
} | order(_createdAt desc)
`;

const query2 = groq`
*[_type=='quote'] {
    ...,
}
`;

export const revalidate = 30; //revalidate this page every 30 seconds

export default async function HomePage() {
    const { isEnabled } = await draftMode();
    if(isEnabled) {
        return (
            <PreviewSuspense
                fallback = {
                    <div role="status">
                        <p className="text-center text-lg animate-pulse text-[#30106b]">
                            Loading Preview Data...
                        </p>
                    </div>
                }
            >
                <PreviewBlogList query={query} query2={query2}/>
            </PreviewSuspense>
        );
    }

    const posts = await client.fetch(query);
    const quotes = await client.fetch(query2);

    console.log(posts)
    return(
        <div>
        <Banner/>
        <Hero quotes={quotes}/>
        <BlogList posts={posts}/>
        <Coffee/>
        </div>
    );
}