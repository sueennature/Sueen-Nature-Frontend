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
</script>

<style scoped></style>
