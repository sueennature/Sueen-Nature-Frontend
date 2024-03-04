<template>
  <div class="container py-20">
    <h2 class="uppercase text-black-100 text-4xl text-center">
      Rooms & Services
    </h2>
    <h3
      class="text-black-50 text-xl pt-1 text-center tracking-widest uppercase"
    >
      Sueen Nature Resort
    </h3>
    <div class="flex justify-center gap-2 my-10">
      <figure
        class="relative max-w-sm transition-all duration-300 cursor-pointer filter"
      >
        <a href="#">
          <img
            class="rounded-0"
            src="../public/img/room-1 1.png"
            alt="image description"
          />
        </a>
        <figcaption class="absolute px-4 text-lg text-white bottom-6">
          <h5 class="text-base font-semibold text-white">LKR 12,000</h5>
          <h2 class="text-3xl text-white">Deluxe Room</h2>
        </figcaption>
      </figure>
      <figure
        class="relative max-w-sm transition-all duration-300 cursor-pointer filter"
      >
        <a href="#">
          <img
            class="rounded-0"
            src="../public/img/room-2 1.png"
            alt="image description"
          />
        </a>
        <figcaption class="absolute px-4 text-lg text-white bottom-6">
          <h5 class="text-base font-semibold text-white">LKR 16,000</h5>
          <h2 class="text-3xl text-white">Garden View Suite</h2>
        </figcaption>
      </figure>
      <figure
        class="relative max-w-sm transition-all duration-300 cursor-pointer filter"
      >
        <a href="#">
          <img
            class="rounded-0"
            src="../public/img/room-3 1.png"
            alt="image description"
          />
        </a>
        <figcaption class="absolute px-4 text-lg text-white bottom-6">
          <h5 class="text-base font-semibold text-white">LKR 20,000</h5>
          <h2 class="text-3xl text-white">Premier Suite</h2>
        </figcaption>
      </figure>
    </div>
    <div class="flex justify-center items-center">
      <button
        type="button"
        class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        VIEW ALL
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<style scoped>
h2 {
  font-family: "Philosopher", sans-serif;
}
h3,
.buttontext {
  font-family: "Work Sans", sans-serif;
}
p,
h5 {
  font-family: "Open Sans", sans-serif;
}
</style>