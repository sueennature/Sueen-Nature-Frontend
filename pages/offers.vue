<template>
    <div class="main overflow-hidden">
      <navbar
        :pageTitle="'Exclusive Resort Offers'"
        :pageTitleThree="'BLOG'"
        :imageNav="'/img/hero-contact.png'"
      />
      <offersHome />
      <footerHome />
    </div>
  </template>
  
  <script setup>
  import navbar from "~/components/navbar.vue";
  import offersHome from "~/components/offersHome.vue";
  import footerHome from "~/components/footerHome.vue";
  </script>
  
  <style scoped></style>
  