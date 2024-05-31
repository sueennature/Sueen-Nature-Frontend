<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'Attention to detail like never before.'"
      :pageTitleTwo="'EXPLORE OUR HOTEL'"
      :pageTitleThree="'STAY WITH US'"
      :imageNav="'/img/hero-rooms.png'"
    />
    <contentRooms />
    <footerHome />
  </div>
</template>

<script setup>
import contentRooms from "~/components/contentRooms.vue";
import footerHome from "~/components/footerHome.vue";
import navbar from "~/components/navbar.vue";
</script>

<style scoped></style>
