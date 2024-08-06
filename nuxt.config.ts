// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@vee-validate/nuxt',
    "@prisma/nuxt"
  ],
  tailwindcss: {
    cssPath: ['~/assets/css/tailwind.css', { injectPosition: 'first' }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2,
    },
    config: {},
    viewer: true,
  },
  googleFonts: {
    families: {
      'Source+Sans+3': true,
      'Asap+Condensed': [400, 800, 900] 
    },
  },
  vite: {
  resolve: {
     alias: {
       ".prisma/client/index-browser": "./node_modules/.prisma/client/index-browser.js"
    }
  }
}
});
