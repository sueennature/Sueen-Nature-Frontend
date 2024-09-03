<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'CHECKOUT'"
      :pageTitleThree="'GET IN TOUCH'"
      :imageNav="'/img/footerImg.webp'"
    />
    <bookingBody />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import bookingBody from "~/components/bookingBody.vue";
import footerHome from "~/components/footerHome.vue";
</script>

<style scoped></style>
