<template>
  <div class="sm:container px-4 py-20">
    <h2 class="uppercase text-black-100 text-4xl text-center">
      Rooms & Services
    </h2>
    <h3
      class="text-black-50 text-xl pt-1 text-center tracking-widest uppercase"
    >
      Sueen Nature Resort
    </h3>
    <div class="lg:flex lg:flex-row grid grid-cols-1 lg:justify-center lg:items-baseline justify-items-center gap-6 my-10">
      
      <figure v-for="room in room_types" :key="room.id" class="relative max-w-sm transition-all duration-300 cursor-pointer filter">
        <a :href="`#${room.id}`">
          <img
          class="rounded-0 w-96 h-72"
          :src="`https://admin.sueennature.com/uploads/${Object.values(room.images)[0]}`"
          :alt="`${room.name} image`"
        />        
      </a>
        <figcaption class="absolute px-4 text-lg text-white bottom-6">
          <h5 class="text-base font-semibold text-white">LKR {{ room.room_only }}</h5>
          <h2 class="text-3xl text-white">{{ room.name }}</h2>
        </figcaption>
      </figure>

    </div>
    <div class="flex justify-center items-center">
      <a href="./rooms">
      <button
        type="button"
        class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        VIEW ALL
      </button>
    </a>
    </div>
  </div>
</template>

<script setup>

import { initFlowbite } from "flowbite";
import { ref, onMounted } from "vue";

const room_types = ref([]);

onMounted(() => {
  initFlowbite();
  
  fetch("https://admin.sueennature.com/api/getRoomTypes")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      room_types.value = data.room_types; 
      console.log("ROOM_DATA", data)
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});

</script>

<style scoped>
h2 {
  font-family: "Philosopher", sans-serif;
}
h3,
.buttontext,p,h5 {
  font-family: "Barlow", sans-serif;
}
</style>