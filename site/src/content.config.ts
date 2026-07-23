import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

/**
 * The pipeline's own frontmatter, declared so Starlight accepts it.
 * These fields are the provenance record: which stage a document belongs to,
 * when its claims were last checked, and where its evidence came from.
 */
const pipelineFields = z.object({
  /** Kebab-case policy area, matching the directory under `policy/`. */
  'policy-area': z.string().optional(),
  /** Which of the five stage-2 research documents this is. */
  document: z.string().optional(),
  /** `cleaned`, `synthesized-into-research`, `PARTIAL — ...`, etc. */
  status: z.coerce.string().optional(),
  /** Date the factual claims in this file were last checked. */
  'last-verified': z.coerce.string().optional(),
  /** Date a testimony was given. */
  date: z.coerce.date().optional(),
  /** Where the raw material is retained, for testimonies. */
  source: z.string().optional(),
  stage: z.string().optional(),

  // Comparative case studies
  jurisdiction: z.string().optional(),
  instrument: z.string().optional(),
  adopted: z.coerce.string().optional(),
  role: z.string().optional(),

  // Comparison matrices
  election: z.coerce.string().optional(),
  'sources-cutoff': z.coerce.string().optional(),
});

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({ extend: pipelineFields }),
  }),
};
