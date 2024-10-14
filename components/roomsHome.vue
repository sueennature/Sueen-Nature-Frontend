<template>
  <div class=" px-4 py-20 ">
    <div class="flex gap-4 items-center justify-center">
      <h2 class="uppercase text-black-100 text-4xl text-center">
        Rooms & Services
      </h2>
    </div>

    <h3 class="text-black-50 text-xl pt-1 text-center tracking-widest uppercase">
      Sueen Nature Resort
    </h3>
    <div class="xl:grid xl:grid-cols-5  lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 grid grid-cols-1 justify-items-center gap-4 my-10">
  <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" @click="handleNavigateSingle">
    <img class="rounded-0 w-64 max-w-md h-60" :src="`https://api.sueennature.com/${room_carousels[3]}`" :alt="`Room image`" />
    <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <h2 class="text-3xl text-white">Single Room</h2>
    </figcaption>
  </figure>

  <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" @click="handleNavigateDouble">
    <img class="rounded-0 w-64 max-w-md h-60" :src="`https://api.sueennature.com/${room_carousels[1]}`" :alt="`Room image`" />
    <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <h2 class="text-3xl text-white">Double Room</h2>
    </figcaption>
  </figure>

  <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" @click="handleNavigateDeluxe">
    <img class="rounded-0 w-64 max-w-md h-60" :src="`https://api.sueennature.com/${room_carousels[2]}`" :alt="`Room image`" />
    <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <h2 class="text-3xl text-white">Deluxe Room</h2>
    </figcaption>
  </figure>

  <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" @click="handleNavigateTriple">
    <img class="rounded-0 w-64 max-w-md h-60" :src="`https://api.sueennature.com/${room_carousels[0]}`" :alt="`Room image`" />
    <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <h2 class="text-3xl text-white">Triple Room</h2>
    </figcaption>
  </figure>

  <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" @click="handleNavigateFamily">
    <img class="rounded-0 w-64 max-w-md h-60" :src="`https://api.sueennature.com/${room_carousels[4]}`" :alt="`Room image`" />
    <figcaption class="absolute px-4 text-lg text-white bottom-6">
      <h2 class="text-3xl text-white">Family Room</h2>
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
import { ref, computed, onMounted } from 'vue';
import { useRouter } from "vue-router";

const runtimeConfig = useRuntimeConfig();
const room_carousels = ref([]);
const router = useRouter();

const handleNavigateSingle = () => {
  router.push({ path: "/room", query: { name: "Single" } });
};
const handleNavigateDouble = () => {
  router.push({ path: "/room", query: { name: "Double" } });
};
const handleNavigateDeluxe = () => {
  router.push({ path: "/room", query: { name: "Deluxe" } });
};
const handleNavigateTriple = () => {
  router.push({ path: "/room", query: { name: "Triple" } });
};
const handleNavigateFamily = () => {
  router.push({ path: "/room", query: { name: "Family" } });
};



async function fetchRoomCarousels() {
  try {
    const response = await fetch("https://api.sueennature.com/carousels/?skip=0&limit=100", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.X_API_KEY,
      },
    });

  
    const data = await response.json();
    console.log("ROOM", data.data)
    const roomsMedia = data.data.find(entry => entry.title === 'Rooms&Services');
    if (roomsMedia) {
    room_carousels.value = roomsMedia.media_urls;
    console.log("TEST, room_C", room_carousels.value)
}
  } catch (error) {
    console.error("There has been a  problem with your fetch operation:", error);
  }
}

onMounted(() => {
  fetchRoomCarousels();
});
</script>

<style scoped>
h2 {
  font-family: "Philosopher", sans-serif;
}
h3,
.buttontext,
p,
h5 {
  font-family: "Barlow", sans-serif;
}
</style>