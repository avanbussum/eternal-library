import { createClient } from "next-sanity";

// export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
// export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
// const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
export const projectId = 'o3e3qd6t';
export const dataset = 'production';
const apiVersion = '2022-11-15';

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
})