// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  plugins: ["~/plugins/oh-vue-icons.js"],
  build: {
    transpile: ["oh-vue-icons"],
  },
  vite: {
    optimizeDeps: {
      exclude: ["oh-vue-icons/icons"],
    },
    ssr: {
      noExternal: ["oh-vue-icons"],
    },
  },
});
