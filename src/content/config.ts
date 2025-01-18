import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts/" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    img: z.string(),
  }),
});

export const collections = { posts };
