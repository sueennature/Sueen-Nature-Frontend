<template>
  <div class="sm:container px-4 py-20">
    <!-- Loading Indicator -->
    <div v-if="loading" class="flex items-center justify-center h-screen">
      <div class="spinner"></div>
    </div>

    <!-- Content -->
    <div v-else>
      <h2 class="text-black-200 md:text-4xl text-xl font-medium text-center max-w-[50ch] mx-auto">
        Experience the epitome of comfort and luxury amidst the tranquil surroundings of Sueen Nature Resort.
      </h2>
      <p class="text-gray-300 md:text-xl text-lg text-center mt-10 max-w-[70ch] mx-auto">
        Our thoughtfully designed rooms and suites offer a perfect blend of contemporary elegance and natural charm, providing guests with an unforgettable retreat away from the hustle and bustle of everyday life. Whether you choose to wake up to the serene beauty of the lake or the majestic mountains, our rooms and suites at Sueen Nature Resort promise a blissful retreat amidst nature's splendor. Immerse yourself in comfort, style, and natural beauty during your stay with us.
      </p>
      <div class="flex flex-col items-center justify-center">
        <div v-for="roomType in room_types" :key="roomType.id" class="max-w-[70vh] flex flex-col">
          <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
            <span class="border-t border-black w-1/4 mx-4"></span>
            <h2 class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre">{{ roomType.category }}</h2>
            <span class="border-t border-black w-1/4 mx-4"></span>
          </div>
          <img :src="roomType.rooms[0].images[0].length > 0 ?  `https://api.sueennature.com/${roomType.rooms[0].images[0]}` : 'default-image-url.jpg'" alt="serviceImg" class="flex-grow w-[800px] text-center object-cover  rounded-md"/>
          <div class="flex flex-row gap-4 justify-center mt-2">
            <h5 class="md:text-sm text-xs text-black-200 pl-4">
              Size: <span class="italic">{{roomType.rooms[0].size}}</span> 
              <!-- Size: <span class="italic">{{roomType.size}}m<sup>2</sup></span> -->

            </h5>
         <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">Bed:{{roomType.rooms[0].beds}}</h5>
            <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
              Occupancy: Max adult{{ roomType.rooms[0].max_adults > 1 ? 's' : '' }} {{roomType.rooms[0].max_adults}}
              {{ roomType.rooms[0].max_childs ? ', Max Children ' + roomType.rooms[0].max_childs + (roomType.rooms[0].max_childs > 1 ? ' ' : ' ') : '' }}
            </h5>
            <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
              View:
              {{ roomType.rooms[0].view }} 
            </h5> 
          </div>
          <div class="flex justify-center items-center">
            <button
              type="button"
              @click="navigateToRoomTypePage(roomType.category)"
              class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutAvailability from "./CheckoutAvailability.vue";
import { ref, onMounted } from "vue";
import { initFlowbite } from "flowbite";
import { useRuntimeConfig } from "#app";
import SocialLogin from "./SocialLogin.vue";

export default {
  components: {
    CheckoutAvailability,
    SocialLogin,
  },
  data() {
    return {
      room_types: [],
      loading: true,  // Initial state for loading
    };
  },
  methods: {
    navigateToRoomTypePage(roomTypeName) {
      this.$router.push({ name: 'room', query: { name: roomTypeName } });
    }
  },
  async mounted() {
    const runtimeConfig = useRuntimeConfig();
    initFlowbite();

    // try {
    //   const response = await fetch("https://api.sueennature.com/rooms", {
    //     method: "GET",
    //     headers: {
    //       "x-api-key": runtimeConfig.public.DATABASE_ID,
    //       "Content-Type": "application/json"
    //     }
    //   });

    //   if (!response.ok) {
    //     throw new Error("Network response was not ok");
    //   }

    //   const data = await response.json();
    //   console.log("RRR", data);
    //   this.room_types = data;
    // } catch (error) {
    //   console.error("There has been a problem with your fetch operation:", error);
    // } finally {
    //   this.loading = false; // Ensure loading is set to false regardless of success or failure
    // }

    try {
      const response = await fetch("https://api.sueennature.com/rooms/types", {
        method: "GET",
        headers: {
          "x-api-key": runtimeConfig.public.DATABASE_ID,
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("RRsR", data.room_types);
      this.room_types = data.room_types;
    } catch (error) {
      console.error("There has been a problem with your fetch operation:", error);
    } finally {
      this.loading = false; // Ensure loading is set to false regardless of success or failure
    }
  },
};
</script>

<style scoped>
h2 {
  font-family: "Philosopher", sans-serif;
}
p,
h5,
a,
.buttontext {
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

/* Loading Spinner Styles */
.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left: 4px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
