import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["active", "maintained", "archived", "idea"]),
    startedAt: z.coerce.date(),
    version: z.string(),
    tags: z.array(z.string()).default([]),
    links: z
      .object({
        github: z.string().url().optional(),
        live: z.string().url().optional(),
        demo: z.string().url().optional(),
      })
      .optional(),
    stack: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const learning = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    status: z.enum(["in-progress", "completed", "paused"]),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog, projects, learning };
