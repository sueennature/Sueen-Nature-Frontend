<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'SAFETY AND SECURITY'"
      :imageNav="'/img/hero-booking.png'"
    />
    <contentSafetySecurity />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import contentSafetySecurity from "~/components/contentSafetySecurity.vue";
import footerHome from "~/components/footerHome.vue";
</script>

<style scoped></style>
