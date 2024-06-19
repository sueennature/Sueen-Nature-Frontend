<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'Attention to detail like never before'"
      :pageTitleTwo="'EXPLORE OUR HOTEL'"
      :pageTitleThree="'LEARN ABOUT US'"
      :imageNav="'/img/hero-activities.webp'"
    />
    <additionalServices />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import additionalServices from "~/components/contentAdditionalServices";
import footerHome from "~/components/footerHome.vue";
</script>

<style scoped></style>
