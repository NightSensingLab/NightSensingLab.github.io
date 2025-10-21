import { defineCollection, z } from 'astro:content';

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    doi: z.string().optional(),
    pdf: z.string().optional(),
    code: z.string().optional(),
    data: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    abstract: z.string().optional(),
    bibtex: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(['ongoing', 'completed']),
    startDate: z.string(),
    endDate: z.string().optional(),
    members: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    links: z.object({
      paper: z.string().optional(),
      code: z.string().optional(),
      demo: z.string().optional(),
    }).optional(),
  }),
});

const people = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    role: z.enum(['PI', 'Postdoc', 'PhD', 'Master', 'Graduate', 'Alumni']),
    affiliation: z.string(),
    avatar: z.string().optional(),
    bio: z.string().optional(),
    researchInterests: z.array(z.string()).default([]),
    displayOrder: z.number().default(0),
    education: z.array(z.string()).default([]),
    publications: z.array(z.string()).default([]),
    projects: z.array(z.string()).default([]),
    socialServices: z.array(z.string()).default([]),
    awards: z.array(z.string()).default([]),
    email: z.string().optional(),
    phone: z.string().optional(),
    office: z.string().optional(),
    links: z.object({
      orcid: z.string().optional(),
      scholar: z.string().optional(),
      github: z.string().optional(),
      website: z.string().optional(),
      researchgate: z.string().optional(),
      weibo: z.string().optional(),
      zhihu: z.string().optional(),
    }).optional(),
  }),
});

const dataProducts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    type: z.enum(['dataset', 'model', 'tool', 'indicator']),
    tags: z.array(z.string()).default([]),
    version: z.string().optional(),
    lastUpdated: z.string(),
    downloadUrl: z.string().optional(),
    citation: z.string().optional(),
    license: z.string().optional(),
    documentation: z.string().optional(),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string().optional(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  publications,
  projects,
  people,
  'data-products': dataProducts,
  news,
};
