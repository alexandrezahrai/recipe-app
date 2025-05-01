// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import alpinejs from "@astrojs/alpinejs";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Montserrat",
        cssVariable: "--font-montserrat",
      },
    ],
  },

  integrations: [alpinejs()],

  devToolbar: {
    enabled: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),
});
