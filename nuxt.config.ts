// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/supabase",
    "@nuxt/image",
  ],

  app: {
    head: {
      title: "NuxtChas",
      meta: [
        { name: "description", content: "Nuxt 3 - Recipes & To-dos" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  colorMode: {
    classSuffix: "",
  },
  supabase: {
    redirect: true,
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL ?? "http://localhost:3000",
    },
  },
});
