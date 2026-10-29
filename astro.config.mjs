import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://firstrespondersroofingandrestoration.com',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  compressHTML: true,
});
