<template>
  <div class="main overflow-hidden">
    <navbar :pageTitle="'COOKIES POLICY'" :imageNav="'/img/hero-booking.png'" />
    <contentCookiesPolicy />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import contentCookiesPolicy from "~/components/contentCookiesPolicy.vue";
import footerHome from "~/components/footerHome.vue";
</script>

<style scoped></style>
