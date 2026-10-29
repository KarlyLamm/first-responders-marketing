import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://firstrespondersrestoration.us',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
