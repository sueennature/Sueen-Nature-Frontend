<template>
  <div class="main overflow-hidden">
    <navbar
      :pageTitle="'FREQUENTLY ASKED QUESTIONS(FAQ)'"
      :imageNav="'/img/hero-booking.png'"
    />
    <contentFAQ />
    <footerHome />
  </div>
</template>

<script setup>
import navbar from "~/components/navbar.vue";
import contentFAQ from "~/components/contentFAQ.vue";
import footerHome from "~/components/footerHome.vue";
</script>

<style scoped></style>
