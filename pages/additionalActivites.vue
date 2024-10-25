<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'Attention to detail like never before'"
      :pageTitleTwo="'EXPLORE OUR HOTEL'"
      :pageTitleThree="'LEARN ABOUT US'"
      :imageNav="'/img/hero-activities.webp'"
    />
    <additionalServices />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import additionalServices from "~/components/contentAdditionalServices";
import footerHome from "~/components/footerHome.vue";
import { useHead } from '@vueuse/head' 


useHead({
  title: 'Additional Activities - Sueen Nature | Nature Tours, Adventures & Experiences',
  meta: [
    {
      name: 'description',
      content: 'Discover a variety of additional activities at Sueen Nature, including nature tours, adventure experiences, wildlife encounters, and cultural activities. Enhance your stay with our unique offerings in Sri Lanka.'
    },
    {
      name: 'keywords',
      content: 'nature tours Sri Lanka, adventure experiences, cultural activities, eco-tourism, wildlife tours, outdoor adventures, additional services Sri Lanka'
    },
    {
      property: 'og:title',
      content: 'Additional Activities - Sueen Nature | Nature Tours & Adventure Experiences'
    },
    {
      property: 'og:description',
      content: 'Discover a variety of activities including nature tours, wildlife experiences, and cultural activities at Sueen Nature.'
    },
    {
      property: 'og:image',
      content: '/public/Logo.png'
    },
    {
      property: 'og:url',
      content: 'https://sueennature.com/additional-activities'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://sueennature.com/additional-activities' }
  ]
})
</script>

<style scoped></style>
