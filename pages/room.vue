<template>
    <div class="main overflow-hidden">
      <navbar
      :pageTitle="'Attention to detail like never before.'"
      :pageTitleTwo="'EXPLORE OUR HOTEL'"
      :pageTitleThree="'STAY WITH US'"
      :imageNav="'/img/hero-rooms.png'"
    />
      <roomComponent/>
      <footerHome />
    </div>
  </template>
  
  <script setup>
  import navbar from "~/components/navbar.vue";
  import footerHome from "~/components/footerHome.vue";
  import roomComponent from "~/components/roomComponet.vue";
  
  
  </script>
  
  <style  scoped>
  </style>