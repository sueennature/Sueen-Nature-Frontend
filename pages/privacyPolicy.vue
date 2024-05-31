<template>
  <div class="main overflow-hidden">
    <navbar :pageTitle="'PRIVACY POLICY'" :imageNav="'/img/hero-booking.png'" />
    <contentPrivacyPolicy />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import contentPrivacyPolicy from "~/components/contentPrivacyPolicy.vue";
import footerHome from "~/components/footerHome.vue";
</script>

<style scoped></style>
