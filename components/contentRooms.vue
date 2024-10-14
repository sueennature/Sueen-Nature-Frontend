<template>
  <div class="lg:container px-4 py-20">
    <!-- main title -->
    <h2
      class="text-black-200 md:text-4xl text-xl font-medium text-center max-w-[50ch] mx-auto"
    >
      Experience the epitome of comfort and luxury amidst the tranquil
      surroundings of Sueen Nature Resort.
    </h2>
    <!-- sub title -->
    <!-- <h6 class="text-black-200 font-semibold md:text-xl text-lg text-center mt-4">
      RECENT GUEST
    </h6> -->
    <p
      class="text-gray-300 md:text-xl text-lg text-center mt-10 max-w-[70ch] mx-auto"
    >
      Our thoughtfully designed rooms and suites offer a perfect blend of
      contemporary elegance and natural charm, providing guests with an
      unforgettable retreat away from the hustle and bustle of everyday life.
      Whether you choose to wake up to the serene beauty of the lake or the
      majestic mountains, our rooms and suites at Sueen Nature Resort promise a
      blissful retreat amidst nature's splendor. Immerse yourself in comfort,
      style, and natural beauty during your stay with us.
    </p>
    <!-- Single room Section -->
    <div>
      <!-- Title and Separator -->
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2
          class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre"
        >
          Single Room
        </h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>

      <!-- Image Gallery -->
      <div class="relative max-w-5xl mx-auto">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <img :src="getImageSrc()" alt="Single Room View" />
        </div>
      </div>

      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]">
          Size: <span class="italic">42 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Bed: 01 Queen
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Occupancy: 01 Adult
        </h5>
        <div
          class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4"
        >
          <span class="mb-2 md:mb-0 hidden md:inline">View:</span>
          <select
            class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"
            v-model="view"
          >
            <option value="view">select</option>

            <option value="mountain">Mountain</option>
            <option value="lake">Lake</option>
          </select>
        </div>
      </div>

      <!-- View All Button -->
      <div class="flex justify-center items-center">
        <button
          type="button"
          @click="handleNavigateSingle"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </div>
    </div>

    <!-- Deluxe ROOM Section -->
    <div>
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2
          class="md:text-4xl text-xl uppercase text-black-200 mx-4 whitespace-pre"
        >
          Deluxe ROOM
        </h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>

      <div class="relative max-w-5xl mx-auto">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <img :src="getImageSrcDeluxe()" alt="Deluxe Room View" />
        </div>
      </div>
      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]">
          Size: <span class="italic">42 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Beds: 01 King
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Occupancy: 02 Adults / 01 Adult & 01 Kid
        </h5>
        <div
          class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4"
        >
          <span class="mb-2 md:mb-0 hidden md:inline">View:</span>
          <select
            class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"
            v-model="viewDeluxe"
          >
            <option value="viewDeluxe">select</option>

            <option value="mountain">Mountain</option>
            <option value="lake">Lake</option>
          </select>
        </div>
      </div>
      <!-- view all button -->
      <div class="flex justify-center items-center">
        <button
          @click="handleNavigateDeluxe"
          type="button"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </div>
    </div>
    <!-- double room Section -->
    <div>
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2
          class="md:text-4xl text-xl uppercase text-black-200 mx-4 whitespace-pre"
        >
          Double ROOM
        </h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>

      <div class="relative max-w-5xl mx-auto">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <img :src="getImageSrcDouble()" alt="Deluxe Room View" />
        </div>
      </div>
      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]">
          Size: <span class="italic">42 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Beds: 01 King
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Occupancy: 02 Adults / 01 Adult & 01 Kid
        </h5>
        <div
          class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4"
        >
          <span class="mb-2 md:mb-0 hidden md:inline">View:</span>
          <select
            class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"
            v-model="viewDouble"
          >
            <option value="viewDouble">select</option>

            <option value="mountain">Mountain</option>
            <option value="lake">Lake</option>
          </select>
        </div>
      </div>
      <!-- view all button -->
      <div class="flex justify-center items-center">
        <button
          @click="handleNavigateDouble"
          type="button"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </div>
    </div>
    <!-- Triple room Section -->
    <div>
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2
          class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre"
        >
          Triple Room
        </h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <img
          :src="getImageSrcTriple()"
          alt="Triple Room View"
        />
      </div>
      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]">
          Size: <span class="italic">49 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Beds: 02 Queens
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Occupancy: 03 Adults / 02 Adults & 01 Kid / 01 Adults & 02 Kids
        </h5>
        <div
          class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4"
        >
          <span class="mb-2 md:mb-0 hidden md:inline">View:</span>
          <select
            class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"
            v-model="viewTriple"
          >
            <option value="viewTriple">select</option>
            <option value="mountain">Mountain</option>
            <option value="lake">Lake</option>
          </select>
        </div>
      </div>
      <!-- view all button -->
      <div class="flex justify-center items-center">
        <button
          type="button"
          @click="handleNavigateTriple"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </div>
    </div>
    <!-- Family room Section -->
    <div>
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2
          class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre"
        >
          Family Room
        </h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>
      <div class="relative max-w-5xl mx-auto">
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <img :src="getImageSrcFamily()" alt="Family Room View" />
        </div>
      </div>
      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]">
          Size: <span class="italic">49 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Beds: 02 Queen
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]">
          Occupancy: 04 Adults / 02 Adults & 02 Kids
        </h5>
        <div
          class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4"
        >
          <span class="mb-2 md:mb-0 hidden md:inline">View:</span>
          <select
            class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"
            v-model="viewFamily"
          >
            <option value="viewFamily">select</option>

            <option value="mountain">Mountain</option>
            <option value="lake">Lake</option>
          </select>
        </div>
      </div>
      <!-- view all button -->
      <div class="flex justify-center items-center">
        <button
          type="button"
          @click="handleNavigateFamily"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </div>
    </div>
    <!-- Disabled room Section -->
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useRouter } from "vue-router";

// Initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

// Use the router inside the setup function
const router = useRouter();

// Reactive state for view selection
const view = ref("view"); // Default view is 'mountain'
const viewDouble = ref("viewDouble"); // Default view is 'mountain'
const viewDeluxe = ref("viewDeluxe"); // Default view is 'mountain'
const viewTriple = ref("viewTriple"); // Default view is 'mountain'
const viewFamily = ref("viewFamily"); // Default view is 'mountain'

// Methods to handle navigation
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

const getImageSrc = () => {
  return view.value === "view"
    ? "./img/Single Roomv.webp"
    : viewTriple.value == "lake"
    ? "./img/single_room_two.jpg"
    : "./img/single_room_one.jpg";
};

const getImageSrcDouble = () => {
  return viewDouble.value === "viewDouble"
    ? "./img/Double Roomv.webp"
    : viewDouble.value == "lake"
    ? "./img/room_2.jpg"
    : "./img/room_1.jpg";
};
const getImageSrcDeluxe = () => {
  return viewDeluxe.value === "viewDeluxe"
    ? "./img/Delux Roomv.webp"
    : viewDeluxe.value == "lake"
    ? "./img/room_5.jpg"
    : "./img/room_3.jpg";
};
const getImageSrcTriple = () => {
  return viewTriple.value === "viewTriple"
    ? "./img/Triple Roomv.webp"
    : viewTriple.value == "lake"
    ? "./img/room_5.jpg"
    : "./img/family_room_four.jpg";
};
const getImageSrcFamily = () => {
  return viewFamily.value === "viewFamily"
    ? "./img/Family Roomv.webp"
    : viewFamily.value == "lake"
    ? "./img/family_room_one.jpg"
    : "./img/family_room_two.jpg";
};
</script>

<style scoped></style>
