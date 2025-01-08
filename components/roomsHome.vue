<template>
  <div class="px-4 py-20">
    <div class="flex gap-4 items-center justify-center">
      <h2 class="uppercase text-black-100 text-4xl text-center">Rooms & Services</h2>
    </div>

    <h3 class="text-black-50 text-xl pt-1 text-center tracking-widest uppercase">Sueen Nature Resort</h3>

    <div class="xl:grid xl:grid-cols-5 lg:grid-cols-1 md:grid-cols-1 grid grid-cols-1 justify-items-center gap-4 my-10">
      <template v-for="(room, index) in roomData" :key="room.id">
        <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" @click="navigateToRoom(room.category)">
          <img
            class="rounded-0 w-64 max-w-md h-60"
            :src="`${runtimeConfig.public.BE_URL}/${room.primary_image[0]}`"
            :alt="`${room.category} Room image`"
          />
          <figcaption class="absolute px-4 text-lg text-white bottom-6">
            <h2 class="text-3xl text-white">{{ room.category }} Room</h2>
          </figcaption>
        </figure>
      </template>
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
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const runtimeConfig = useRuntimeConfig();
const roomData = ref([]);
const router = useRouter();

async function fetchRoomTypes() {
  try {
    const response = await fetch(`${runtimeConfig.public.BE_URL}/room_type/?skip=0&limit=100`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': runtimeConfig.public.X_API_KEY,
      },
    });
    const data = await response.json();
    roomData.value = data.data;
  } catch (error) {
    console.error('Error fetching room data:', error);
  }
}

onMounted(() => {
  fetchRoomTypes();
});

function navigateToRoom(roomType) {
  router.push({ path: '/room', query: { name: roomType } });
}
</script>

<style scoped>
h2 {
  font-family: 'Philosopher', sans-serif;
}
h3,
.buttontext,
p,
h5 {
  font-family: 'Barlow', sans-serif;
}
</style>
