<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'Services'"
      :pageTitleThree="'GET IN TOUCH'"
      :imageNav="'/img/hero-services.png'"
    />
    <ContentServices />
    <footerHome />
  </div>
</template>

<script setup>
import contentServices from "~/components/contentServices.vue";
import footerHome from "~/components/footerHome.vue";

import navbar from "~/components/navbar.vue";
</script>

<style scoped></style>
