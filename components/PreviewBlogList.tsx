"use client"

import {usePreview} from '../lib/sanity.preview'
import Banner from './Banner';
import BlogList from "./BlogList"
import Hero from './Hero';

type Props = {
    query: string;
}

export default function PreviewBlogList({ query }:
Props) {
    const posts = usePreview(null, query);

    return <div>
        <Banner/>
        <Hero/>
        <BlogList posts={posts}/>
        </div>
}