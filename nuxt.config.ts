// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  app: {
    head: {
      title: "NuxtChas",
      meta: [
        { name: "description", content: "Nuxt 3 - Recipes & Todo list" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
});