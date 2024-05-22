<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'Attention to detail like never before.'"
      :pageTitleTwo="'EXPLORE OUR HOTEL'"
      :pageTitleThree="'LEARN ABOUT US'"
      :imageNav="'/img/service-6.png'"
    />

    <contentAbout />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import contentAbout from "~/components/contentAbout.vue";
import footerHome from "~/components/footerHome.vue";
</script>

<style scoped></style>
