// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

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
    'nuxt-vue3-google-signin'
  ],
  
  googleSignIn: {
    clientId: '865303988777-4tcvutqa985usae6fahkll4iorpjfb1s.apps.googleusercontent.com',
  },
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
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8000/api'
    }
  },
  plugins: [
    '~/plugins/auth.js',
    '~/plugins/axios.js'
  ],
  build: {
    transpile: ['@vuepic/vue-datepicker','@nuxtjs/axios']
    
  },
  
  router: {
      //@ts-ignore
    middleware: ['auth'],
  },
  // Add the `auth` configuration here

})