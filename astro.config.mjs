import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aditya-200118.github.io',
  base: '/Portfolio',
  output: 'static',
  trailingSlash: 'always',
  integrations: [mdx(), sitemap()],
});

