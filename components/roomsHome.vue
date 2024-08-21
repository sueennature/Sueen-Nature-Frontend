<template>
  <div class="sm:container px-4 py-20">
    <div class="flex gap-4 items-center justify-center">
      <h2 class="uppercase text-black-100 text-4xl text-center">
        Rooms & Services
      </h2>
    </div>

    <h3 class="text-black-50 text-xl pt-1 text-center tracking-widest uppercase">
      Sueen Nature Resort
    </h3>

    <div class="lg:flex lg:flex-row grid grid-cols-1 lg:justify-center lg:items-baseline justify-items-center gap-6 my-10">
      <figure
        v-for="(category, index) in groupedRoomTypes"
        :key="index"
        class="relative max-w-sm transition-all duration-300 cursor-pointer filter"
      >
        <img
          v-if="category.rooms[0].images && category.rooms[0].images.length > 0"
          class="rounded-0 w-72 max-w-md h-60"
          :src="`https://api.sueennature.com/${category.rooms[0].images[0]}`"
          :alt="`${category.category} Room image`"
        />
        <figcaption class="absolute px-4 text-lg text-white bottom-6">
          <h5 class="text-base font-semibold text-white">
            LKR {{ category.rooms[0].room_only || 'N/A' }}
          </h5>
          <h2 class="text-3xl text-white">{{ category.category }} Room</h2>
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

const room_types = ref([]);
const runtimeConfig = useRuntimeConfig();

// Group rooms by their category
const groupedRoomTypes = computed(() => {
  const grouped = {};
  room_types.value.forEach((type) => {
    if (!grouped[type.category]) {
      grouped[type.category] = {
        category: type.category,
        rooms: []
      };
    }
    grouped[type.category].rooms.push(...type.rooms);
  });
  return Object.values(grouped);
});

async function fetchRoomTypes() {
  try {
    const response = await fetch("https://api.sueennature.com/rooms/types", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    room_types.value = data.room_types || [];
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

onMounted(() => {
  fetchRoomTypes();
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

