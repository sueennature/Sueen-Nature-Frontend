<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'NEWS'"
      :pageTitleThree="'BLOG'"
      :imageNav="'/img/hero-contact.png'"
    />
    <contentNews />
    <footerHome />
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head' 

import navbar from "~/components/navbar.vue";
import contentNews from "~/components/contentNews.vue";
import footerHome from "~/components/footerHome.vue";

useHead({
  title: 'News - Sueen Nature | Latest Updates from Our Luxury Eco-Resort',
  meta: [
    {
      name: 'description',
      content: 'Stay updated with the latest news from Sueen Nature, a luxury eco-resort in Sri Lanka. Discover new experiences, wildlife encounters, events, and updates on sustainable travel.'
    },
    {
      name: 'keywords',
      content: 'resort news, eco-tourism updates, Sri Lanka luxury travel news, nature experiences updates, wildlife news Sri Lanka'
    },
    {
      property: 'og:title',
      content: 'News - Sueen Nature | Latest Updates'
    },
    {
      property: 'og:description',
      content: 'Discover new experiences, wildlife encounters, and the latest updates from Sueen Nature Eco-Resort.'
    },
    {
      property: 'og:image',
      content: '/public/Logo.png'
    },
    {
      property: 'og:url',
      content: 'https://sueennature.com/news'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://sueennature.com/news' }
  ]
})
</script>

<style scoped></style>
