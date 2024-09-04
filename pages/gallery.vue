<template>
    <div class="main overflow-hidden">
      <navbar
        :pageTitle="'GALLERY'"
        :pageTitleThree="'EXPLORE OUR SPACES'"
        :imageNav="'/img/hero-contact.webp'"
      />
      <galleryBody />
      <footerHome />
    </div>
  </template>
  
  <script setup>
  import galleryBody from "~/components/galleryComponent.vue";
  import footerHome from "~/components/footerHome.vue";
  import navbar from "~/components/navbar.vue";
  </script>
  
  <style scoped></style>
  