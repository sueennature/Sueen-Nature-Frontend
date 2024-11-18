// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  env: {
    NUXT_ENV_MY_VAR: process.env.NUXT_ENV_MY_VAR
  },
  app: {
    head: {
      title: 'Sueen Nature - Luxury Eco-Resort in Sri Lanka | Book Your Stay for Nature, Adventure & Relaxation',
      htmlAttrs: {
        lang: 'en',
      },
      
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: "Enjoy an unforgettable journey at Sueen Nature, a luxury resort in the serene town of Baduraliya, Sri Lanka. Discover our exceptional services and explore a variety of rooms designed for comfort and relaxation amidst lush landscapes and wildlife. With convenient access to Sri Lanka's attractions like Sinharaja Forest Reserve, Nine Arch Bridge, and Demodara Station, Sueen Nature is perfect for nature lovers and adventure seekers. Experience the ideal escape and book your stay today!"
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'luxury resort in Sri Lanka, Sri Lanka, Hotel, Sri Lanka Hotel, Banquet Halls, Leisure, Travel, Tourism, nature experiences, eco-resort booking, Sri Lanka Hotel, eco-friendly hotel, wildlife safaris in Sri Lanka, Sri Lanka hiking, birdwatching in Sri Lanka, Sri Lanka luxury travel, sustainable tourism Sri Lanka, beachfront resorts, luxury villa booking, Ayurveda spa, yoga retreats Sri Lanka, meditation in nature, eco-tourism, sustainable resorts, boutique hotels Sri Lanka, Sri Lanka waterfalls, tea plantation tours, rainforest walks, Sri Lanka culture, Sri Lankan cuisine, luxury camping, snorkeling, diving, whale watching, fishing villages, local culture, traditional Sri Lankan workshops, heritage tours Sri Lanka, honeymoon destination, romantic getaways, family vacations, enjoy, Services,rooms,room,Sueen, Sueen Nature , Baduraliya, Sinharaja Forest Reserve, Kanneliya Forest Reserve, Kalutara Bodhiya, Bopath Ella Falls, Makeliya Falls, Kukule Ganga Dam, Nine Arch Bridge, Demodara Station, nature, eco-tourism'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Sueen Nature - Luxury Eco-Resort in Sri Lanka | Nature Experiences and Sustainable Luxury'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Sueen Nature, a luxury eco-resort in Sri Lanka, offers immersive nature experiences combined with sustainable luxury. Relax in the comfort of our villas or explore wildlife safaris, hiking, cultural tours, and more.'
        },
        { hid: 'og:image', property: 'og:image', content: '/public/Logo.png' },
        { hid: 'og:url', property: 'og:url', content: 'https://sueennature.com' },
        { hid: 'robots', name: 'robots', content: 'index, follow' }
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
      BE_URL:process.env.NUXT_BE_URL,
      GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID
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