<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'TERMS AND CONDITIONS'"
      :imageNav="'/img/hero-booking.png'"
    />

    <contentTermsConditions />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import contentTermsConditions from "~/components/contentTermsConditions.vue";
import footerHome from "~/components/footerHome.vue";
</script>

<style scoped></style>
