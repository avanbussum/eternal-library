import {previewData} from "next/headers";
import {groq} from 'next-sanity'
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import Hero from "../../components/Hero";
import Banner from "../../components/Banner";
import Coffee from "../../components/Coffee";
import Head from 'next/head';
import Script from "next/script";

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
    if(previewData()) {
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
        <Head>
        <script
            data-name="BMC-Widget" 
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="ryanvb" 
            data-description="Support me on Buy me a coffee!"
            data-message="Thank you for reading!! If you'd like to support me
            staying up into the wee hours of the night to write you more stories,
            buy me a coffee!" 
            data-color="#BD5FFF" 
            data-position="Right"
            data-x_margin="10" 
            data-y_margin="10">
        </script>
        </Head>
        <Banner/>
        <Hero quotes={quotes}/>
        <BlogList posts={posts}/>
        </div>
    );
}