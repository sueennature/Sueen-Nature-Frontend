<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'NEWS'"
      :pageTitleThree="'BLOG'"
      :imageNav="'/img/hero-contact.png'"
    />
    <contentNews />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import contentNews from "~/components/contentNews.vue";
import footerHome from "~/components/footerHome.vue";
</script>

<style scoped></style>
