import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(() => {
  process.env.VITE_RSC_BUILD = 'true'
  const config = {
    server: {
      port: 4000,
    },
    plugins: [
      tsconfigPaths(),
      qwikCity(),
      qwikVite(),
      vanillaExtractPlugin(),
      // This has to come after qwikVite, or the exports break
    ],
  }
  return config
});
