<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'Attention to detail like never before.'"
      :pageTitleTwo="'EXPLORE OUR HOTEL'"
      :pageTitleThree="'STAY WITH US'"
      :imageNav="'/img/hero-rooms.webp'"
    />
    <!-- <contentRooms /> -->
    <roomContent/>
    <footerHome />
  </div>
</template>

<script setup>
// import contentRooms from "../components/contentRooms.vue";
import roomContent from '../components/contentRooms.vue'
import footerHome from "~/components/footerHome.vue";
import navbar from "~/components/navbar.vue";
import { useHead } from '@vueuse/head'

useHead({
  title: 'Rooms - Sueen Nature | Luxury Eco-Friendly Accommodations',
  meta: [
    {
      name: 'description',
      content: 'Discover the luxurious rooms and villas at Sueen Nature. Enjoy eco-friendly luxury accommodation with breathtaking views of nature. Book your stay in Sri Lanka for ultimate comfort and relaxation.'
    },
    {
      name: 'keywords',
      content: 'luxury rooms Sri Lanka, eco-friendly accommodation, Sri Lanka villas, luxury suites, nature views, resort booking Sri Lanka'
    },
    {
      property: 'og:title',
      content: 'Rooms - Sueen Nature | Luxury Eco-Friendly Accommodations'
    },
    {
      property: 'og:description',
      content: 'Discover the luxurious rooms and villas at Sueen Nature. Enjoy eco-friendly luxury accommodation with breathtaking views of nature. Book your stay for ultimate comfort and relaxation.'
    },
    {
      property: 'og:image',
      content: '/public/Logo.png'
    },
    {
      property: 'og:url',
      content: 'https://sueennature.com/rooms'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://sueennature.com/rooms' }
  ]
})
</script>

<style scoped></style>
