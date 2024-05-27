<template>
    <div class="main overflow-hidden">
      <navbar :pageTitle="'Meta App Data Deletion Instructions'" :imageNav="'/img/hero-booking.png'"/>
      <contentFBPolicy/>  
      <footerHome/>
  
    </div>
  </template>
  
  <script setup>
  import navbar from '~/components/navbar.vue';
  import contentFBPolicy from '~/components/contentFBPolicy.vue';
  import footerHome from '~/components/footerHome.vue';
  
  
  </script>
  
  <style scoped>
  
  </style>