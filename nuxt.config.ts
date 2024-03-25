// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-icon',

  ],
  googleFonts: {
    families: {
      Inter: true,
      Barlow:true,
      'Great+Vibes': [400],
      'Open+Sans': true,
      'Work+Sans': true,
      Philosopher: [400, 700],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      }
    }
  },
  build: {
    transpile: ['@vuepic/vue-datepicker']
  }

})