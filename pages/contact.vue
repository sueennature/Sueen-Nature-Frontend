<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'CONTACT US'"
      :pageTitleThree="'GET IN TOUCH'"
      :imageNav="'/img/hero-contact.webp'"
    />
    <contactBody />
    <footerHome />
  </div>
</template>

<script setup>
import contactBody from "~/components/contactBody.vue";
import footerHome from "~/components/footerHome.vue";
import navbar from "~/components/navbar.vue";
import { useHead } from '@vueuse/head' 
+
  title: 'Contact Us - Sueen Nature | Get in Touch with Our Eco-Resort',
  meta: [
    {
      name: 'description',
      content: 'Contact Sueen Nature, your luxury eco-resort in Sri Lanka. Reach out for inquiries about booking, nature experiences, and more. We are here to help you plan your stay in our beautiful resort.'
    },
    {
      name: 'keywords',
      content: 'contact eco-resort, luxury resort contact Sri Lanka, get in touch, inquiries Sri Lanka, resort booking support'
    },
    {
      property: 'og:title',
      content: 'Contact Us - Sueen Nature | Get in Touch with Our Eco-Resort'
    },
    {
      property: 'og:description',
      content: 'Contact Sueen Nature for inquiries about booking, nature experiences, and more. We are here to help you plan your stay in Sri Lanka.'
    },
    {
      property: 'og:image',
      content: '/public/Logo.png'
    },
    {
      property: 'og:url',
      content: 'https://sueennature.com/contact'
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ],
  link: [
    { rel: 'canonical', href: 'https://sueennature.com/contact' }
  ]
})
</script>

<style scoped></style>
