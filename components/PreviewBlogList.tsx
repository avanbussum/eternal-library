"use client"

import {usePreview} from '../lib/sanity.preview'
import Banner from './Banner';
import BlogList from "./BlogList"
import Hero from './Hero';

type Props = {
    query: string;
    query2: string;
}

export default function PreviewBlogList({ query, query2 }:
Props) {
    const posts = usePreview(null, query);
    const quotes = usePreview(null, query2);


    return <div>
        <Banner/>
        <Hero quotes={quotes}/>
        <BlogList posts={posts}/>
        </div>
}