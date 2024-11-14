<template>
  <div class="lg:container px-4 py-20">
    <!-- Heading Section -->
    <h2 class="text-black-200 md:text-4xl text-xl font-medium text-center max-w-[50ch] mx-auto">
      Experience the epitome of comfort and luxury amidst the tranquil surroundings of Sueen Nature Resort.
    </h2>
    <p class="text-gray-300 md:text-xl text-lg text-center mt-10 max-w-[70ch] mx-auto">
      Our thoughtfully designed rooms and suites offer a perfect blend of contemporary elegance and natural charm,
      providing guests with an unforgettable retreat away from the hustle and bustle of everyday life. 
      Choose to wake up to the serene beauty of the lake or the majestic mountains, and immerse yourself in comfort and natural beauty during your stay with us.
    </p>

    <!-- Room Categories -->
    <div v-for="room in rooms" :key="room.id" class="my-16">
      <!-- Room Category Header -->
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2 class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre">
          {{ room.category }}
        </h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>

      <!-- Room Image Based on Selected View -->
      <div class="relative max-w-5xl mx-auto">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <img :src="getImageSrc(room)" :alt="`${room.category} Room View`" />
        </div>
      </div>

      <!-- Room Details -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]">
          Size: <span class="italic">{{ room.size }} m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Bed: {{ room.bed }} {{ room.bed > 1 ? 'Beds' : 'Bed' }}
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Occupancy: {{ room.occupancy }}
        </h5>
        <div class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4">
          <span class="mb-2 md:mb-0 hidden md:inline">View:</span>
          <select
            class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"
            v-model="room.selectedView" 
          >
            <option value="primary">Primary</option>
            <option value="mountain">Mountain</option>
            <option value="lake">Lake</option>
          </select>
        </div>
      </div>

      <!-- "View All" Button for Each Room -->
      <div class="flex justify-center items-center">
        <button
          type="button"
          @click="handleNavigateSingle(room.category)"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const rooms = ref([]);
const runtimeConfig = useRuntimeConfig();

const fetchrooms = async () => {
  try {
    const response = await axios.get(
      `${runtimeConfig.public.BE_URL}/room_type/?skip=0&limit=100`,
      {
        headers: {
          'x-api-key': runtimeConfig.public.X_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );
    rooms.value = response.data.data.map(room => ({
      ...room,
      selectedView: 'primary',
    }));
  } catch (error) {
    console.error('Error fetching room types:', error);
  }
};

const handleNavigateSingle = (category) => {
  router.push({ path: '/room', query: { name: category } });
};

const getImageSrc = (room) => {
  switch (room.selectedView) {
    case 'mountain':
      return runtimeConfig.public.BE_URL + '/' + (room.mountain[0] || room.primary_image[0]);
    case 'lake':
      return runtimeConfig.public.BE_URL + '/' + (room.lake[0] || room.primary_image[0]);
    default:
      return runtimeConfig.public.BE_URL + '/' + room.primary_image[0];
  }
};

onMounted(() => {
  initFlowbite();
  fetchrooms();
});
</script>

<style scoped></style>
