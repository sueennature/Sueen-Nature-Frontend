<template>
  <div class="sm:container px-4 py-20">
    <div class="grid xl:grid-cols-3 grid-cols-1 justify-items-center gap-8">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="max-w-xl mt-16"
      >
        <img 
          :src="service.image[0] ? `${runtimeConfig.public.BE_URL}/${service.image[0]}` : ''" 
          alt="serviceImg" 
          class="w-full h-64 object-cover rounded-t-lg"

        />
        
        <div class="h-96 flex flex-col items-center p-8 bg-gray-500 rounded-lg shadow-lg space-y-4 dark:bg-gray-800 dark:border-gray-700 flex-grow rounded-t-sm">
          <h6 class="2xl:text-4xl text-xl font-bold text-gray-900 dark:text-white tracking-widest uppercase text-center md:text-left">
            {{ service.title }}
          </h6>
          <h3 class="2xl:text-5xl text-3xl text-black-200">
            {{ service.subtitle }}
          </h3>
          <p class="font-extralight text-base text-center text-black-200 dark:text-gray-400 mt-4">
            {{ service.description }}
          </p>
          <button
            type="button"
            @click="openModal(index)"
            class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            View More
          </button>

          <!-- Modal -->
          <div
            v-if="openModalIndex === index"
            tabindex="-1"
            aria-hidden="true"
            class="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50"
          >
            <div class="relative p-4 w-full max-w-2xl max-h-full">
              <!-- Modal content -->
              <div class="relative bg-gray-500 rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-2xl uppercase tracking-widest font-semibold text-red-100 dark:text-white">
                    {{ service.title }}
                  </h3>
                  <button
                    type="button"
                    @click="closeModal"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>
                
                <!-- Modal body -->
                <div class="p-4 md:p-5 space-y-4">
                  <ul class="max-w-md space-y-1 text-black-200 font-semibold text-base list-disc list-outside dark:text-gray-400">
                    <li v-for="(feature, featureIndex) in service.features" :key="featureIndex">
                      {{ feature }}
                    </li>
                  </ul>

                  <div v-for="(detail, detailIndex) in service.details" :key="detailIndex">
                    <p class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4">
                      <span class="font-bold">{{ detail.title }}:</span>
                      {{ detail.content }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End of Modal -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const runtimeConfig = useRuntimeConfig();
const services = ref([]);
const openModalIndex = ref(null); 

const fetchServices = async () => {
  try {
    const response = await axios.get(
      `${runtimeConfig.public.BE_URL}/services/?skip=0&limit=100`,
      {
        headers: {
          "x-api-key": runtimeConfig.public.X_API_KEY,
          "Content-Type": "application/json",
        },
      }
    );  
    services.value = response.data;
  } catch (error) {
    console.error("Error fetching services:", error);
  }
};

const openModal = (index) => {
  openModalIndex.value = index;
};

const closeModal = () => {
  openModalIndex.value = null;
};

onMounted(() => {
  fetchServices();
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
