<template>
  <div class="sm:container px-4 py-20">
    <h2
      class="text-black-200 md:text-4xl text-xl font-medium text-center max-w-[50ch] mx-auto"
    >
    Experience the epitome of comfort and luxury amidst the tranquil surroundings of Sueen Nature Resort. 
    </h2>
    <p class="text-gray-300 md:text-xl text-lg text-center mt-10 max-w-[70ch] mx-auto">
      Our thoughtfully designed rooms and suites offer a perfect blend of contemporary elegance and natural charm, providing guests with an unforgettable retreat away from the hustle and bustle of everyday life. Whether you choose to wake up to the serene beauty of the lake or the majestic mountains, our rooms and suites at Sueen Nature Resort promise a blissful retreat amidst nature's splendor. Immerse yourself in comfort, style, and natural beauty during your stay with us.
    </p>
    <div class="flex flex-col items-center justify-center">
         <div v-for="roomType in room_types" :key="roomType.id" class="max-w-[70vh] ">
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2 class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre">{{ roomType.name }}</h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>
    
  <img
    :src="`https://admin.sueennature.com/uploads/${Object.values(roomType.images)[0]}`"
    alt="roomImg"
    class="w-full h-full object-cover"
  />
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4">
          Size: <span class="italic">{{roomType.size}}m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">Bed: {{roomType.beds}}</h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
        Occupancy: Max adult{{ roomType.max_adults > 1 ? 's' : '' }} {{ roomType.max_adults }} 
        {{ roomType.max_childs ? ', Max Children ' + roomType.max_childs + (roomType.max_childs > 1 ? ' ' : ' ') : '' }}
      </h5>
          <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
          View: 
          <span v-for="(view, index) in roomType.views" :key="index">
              {{ view.view }}{{ index !== roomType.views.length - 1 ? ', ' : '' }}
          </span>
          </h5>        
      </div>
      <div class="flex justify-center items-center">     
        <button
          type="button"
          @click="navigateToRoomTypePage(roomType.id)"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </div>
    </div>
    </div>
        
  </div>
</template>


<script>
import CheckoutAvailability from "./CheckoutAvailability.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { initFlowbite } from "flowbite";
import { apiRequest } from "@/utils/api";
import { useNuxtApp } from "#app";
import SocialLogin from "./SocialLogin.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from 'axios';

export default {
  components: {
    CheckoutAvailability,
  },
  data() {
    return {
      room_types: [],
    };
  },
 methods:{
  navigateToRoomTypePage(roomTypeName) {
    this.$router.push({ name: 'room', query: { name: roomTypeName } });
  }
 },
  mounted() {
    initFlowbite();
    fetch("https://admin.sueennature.com/api/getRoomTypes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.room_types = data.room_types;
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });


  },
};
</script>

<style scoped>

h2 {
  font-family: "Philosopher", sans-serif;
}
p,
h5,
a,.buttontext {
  font-family: "Barlow", sans-serif;
}
.aspect-ratio-box {
  position: relative;
  width: 100%;
  padding-top: 100%; 
}

.aspect-ratio-box img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>