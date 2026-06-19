// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical public origin. Drives canonical URLs, OG tags, and sitemap.
export default defineConfig({
  site: 'https://telcoos.io',
  integrations: [sitemap()],
});
