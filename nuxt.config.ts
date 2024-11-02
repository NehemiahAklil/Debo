// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/image",
    '@nuxtjs/color-mode',
    "nuxt-svgo"
  ],
  css: [
    "~/assets/fonts/pp_neue_montreal/pp_neue_montreal.css"
  ],
  shadcn: {
    componentDir: "./components/ui"
  }
})