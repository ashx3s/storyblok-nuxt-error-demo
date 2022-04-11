import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    ["@storyblok/nuxt", { accessToken: "YOUR_STORYBLOK_TOKEN" }],
  ],
});
