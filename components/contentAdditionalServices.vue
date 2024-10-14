<template>
  <div class="sm:container px-4 py-20">
    <div class="grid xl:grid-cols-3 grid-cols-1 justify-items-center gap-8">
      <div v-if="isLoading" class="text-center">
        <p>Loading...</p>
      </div>
      
      <div v-else v-for="service in services" :key="service.id" class="max-w-xl mt-16 flex flex-col">
        <img 
    :src="service.media[0] ? `https://api.sueennature.com/${service.media[0]}` : ''" 
    alt="serviceImg" 
    class="flex-grow object-cover rounded-t-md"
  />
        <div class="h-96 flex flex-col items-center p-8 bg-gray-500 rounded-lg shadow-lg space-y-4 dark:bg-gray-800 dark:border-gray-700 flex-grow rounded-t-sm">
          <h3 class="2xl:text-4xl text-2xl text-black-200">{{ service.name }}</h3>
          <p class="font-extralight text-base text-center text-black-200 dark:text-gray-400 mt-4">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
    <div v-if="error" class="text-red-500">{{ error }}</div>
  </div>
</template>


<style scoped>
/* Adjustments for the image and card */
img {
  object-fit: cover; /* Maintain aspect ratio and cover container */
  height: 300px;
  width: 100%;
}

/* Additional styling for the card */
.h-96 {
  height: 24rem; /* or use max-height: 24rem; if you prefer */
}
</style>


<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';

const services = ref([]);
const error = ref(null);
const isLoading = ref(false);
const runtimeConfig = useRuntimeConfig();

const fetchData = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get('https://api.sueennature.com/activities', {
      headers: {
        "x-api-key": runtimeConfig.public.X_API_KEY, // Add your API key here
      }
    });
    services.value =  response.data.data;
    console.log("AS", services.value)
  } catch (error) {
    console.error('Error fetching data:', error);
    error.value = 'Failed to fetch services. Please try again later.';
  } finally {
    isLoading.value = false;
  }
};


onMounted(() => {
  fetchData();
});
</script>

<style scoped>

h3,
h5 {
  font-family: "Philosopher", sans-serif;
}
h2,
.buttontext,
h6,
a,
p,
ul li {
  font-family: "Barlow", sans-serif;
}

.relaxationCard {
  letter-spacing: 0.6rem;
}
</style>
