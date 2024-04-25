<template>
    <div class="main overflow-hidden">
        <navbarDashboard/>
        <contentDashboard/>
        <footerHome/>
        

    </div>
</template>

<script>
export default {
    middleware: 'auth',
  // ...
};
</script>

<script setup>
import navbarDashboard from '../components/navbarDashboard.vue';
import contentDashboard from '../components/contentDashboard.vue';
import footerHome from '~/components/footerHome.vue';

</script>

<style scoped>

</style>