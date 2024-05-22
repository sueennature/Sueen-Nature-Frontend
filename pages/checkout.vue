<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'CHECKOUT'"
      :pageTitleThree="'GET IN TOUCH'"
      :imageNav="'/img/hero-checkout.png'"
    />

    <checkoutBody />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import checkoutBody from "~/components/checkoutBody.vue";
import footerHome from "~/components/footerHome.vue";
</script>

<style scoped></style>
