import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const programs = defineCollection({
  loader: glob({ base: "./src/content/programs", pattern: "**/*.yaml" }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    description: z.string(),
    icon: z.string(),
    features: z.array(z.string()),
    order: z.number(),
  }),
});

const testimonials = defineCollection({
  loader: glob({ base: "./src/content/testimonials", pattern: "**/*.yaml" }),
  schema: z.object({
    name: z.string(),
    instrument: z.string(),
    quote: z.string(),
    rating: z.number().min(1).max(5),
  }),
});

export const collections = { programs, testimonials };
