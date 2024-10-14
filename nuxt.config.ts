// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  env: {
    NUXT_ENV_MY_VAR: process.env.NUXT_ENV_MY_VAR
  },
  app: {
    head: {
      title: 'Sueen Nature - Luxury Resort | Book Your Stay Now',
      htmlAttrs: {
        lang: 'en',
      },
      
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Discover Sueen Nature, a luxury resort offering breathtaking experiences in nature. Book your stay now and enjoy comfort and tranquility.' },
        { hid: 'keywords', name: 'keywords', content: 'luxury resort, nature experiences, book your stay, resort room booking, enjoy your stay.' },
        { hid: 'og:title', property: 'og:title', content: 'Sueen Nature - Luxury Resort | Book Your Stay Now' },
        { hid: 'og:description', property: 'og:description', content: 'Discover Sueen Nature, a luxury resort offering breathtaking experiences in nature. Book your stay now and enjoy comfort and tranquility.' },
        { hid: 'og:image', property: 'og:image', content: '/public/Logo.png' }, 
        { hid: 'og:url', property: 'og:url', content: 'https://sueennature.com' }, 
        { hid: 'robots', name: 'robots', content: 'index, follow' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.ico' },
      ],
    }
  },
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
      X_API_KEY: process.env.NUXT_X_API_KEY,
      BE_URL:process.env.NUXT_BE_URL
    }
  },
  plugins: [
    '~/plugins/auth.js',
    '~/plugins/axios.js',
    '~/plugins/fb-sdk.js',

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