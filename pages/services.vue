<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'Services'"
      :pageTitleThree="'GET IN TOUCH'"
      :imageNav="'/img/hero-services.webp'"
    />
    <ContentServices />
    <footerHome />
  </div>
</template>

<script setup>
import contentServices from "~/components/contentServices.vue";
import footerHome from "~/components/footerHome.vue";

import navbar from "~/components/navbar.vue";
import { useHead } from '@vueuse/head' 

useHead({
  title: 'Services - Sueen Nature | Luxury Resort & Eco-Friendly Experiences',
  meta: [
    {
      name: 'description',
      content: 'Explore the wide range of services at Sueen Nature, including luxury accommodations, nature experiences, wellness programs, eco-friendly tours, and personalized service. Enhance your stay in Sri Lanka with our exceptional offerings.'
    },
    {
      name: 'keywords',
      content: 'luxury resort services, eco-friendly experiences, wellness programs, nature tours, eco-tourism services, personalized resort services, luxury services in Sri Lanka'
    },
    {
      property: 'og:title',
      content: 'Services - Sueen Nature | Luxury Resort & Eco-Friendly Experiences'
    },
    {
      property: 'og:description',
      content: 'Discover a range of eco-friendly services, wellness programs, and personalized experiences at Sueen Nature.'
    },
    {
      property: 'og:image',
      content: '/public/Logo.png'
    },
    {
      property: 'og:url',
      content: 'https://sueennature.com/services'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://sueennature.com/services' }
  ]
})
</script>

<style scoped></style>
