import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nightsensinglab.github.io',
  integrations: [mdx(), tailwind({ applyBaseStyles: false })],
  scopedStyleStrategy: 'where',
  build: {
    format: 'directory'
  }
});

