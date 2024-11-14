<template>
  <section class="px-16 py-20">
    <div class="flex justify-center w-full">
      <div
        class="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full"
      >
        <div
          v-for="offer in offers"
          :key="offer.id"
          class="flex max-w-[500px] flex-col rounded-xl bg-gray-500 text-gray-700 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 relative"
        >
          <div class="image-container">
            <img
              src="/img/hero-contact.png"
              :alt="offer.altText"
              class="rounded-t-md object-cover w-full h-[290px] sm:h-[300px] md:h-[300px] lg:h-[390px]"
              @error="onImageError"
            />
            <div
              class="flex items-center justify-end w-full z-10 absolute top-0 right-0 left-10 bottom-30 mt-4"
            >
              <img src="/Logo.png" alt="Logo" class="w-48" />
            </div>
          </div>
          <div class="px-6">
            <h4 class="mb-2 mt-4 text-2xl font-semibold text-blue-gray-900">
              {{ offer.title }}
            </h4>
            <div class="h-12">
              <p class="text-base font-light">{{ offer.description }}</p>
            </div>
            <div class="flex items-center gap-6">
              <p class="mt-8 sm:mt-4 text-lg font-bold">
                {{ formatDate(offer.start_date) }}
              </p>
              <p class="mt-8 sm:mt-4 text-xl font-bold">--</p>

              <p class="mt-8 sm:mt-4 text-lg font-bold">
                {{ formatDate(offer.end_date) }}
              </p>
            </div>
          </div>
          <div class="px-4 mb-4 pt-0 w-full mt-4">
            <a
              href="/"
              class="w-full text-center px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-black inline-block"
              aria-label="Book Now"
            >
              <span
                class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"
              ></span>
              <span class="relative group-hover:text-white">Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      offers: "",
     
    };
  },
  mounted() {
    this.fetchOffers();
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      return `${day}.${month}.${year}`;
    },
    async fetchOffers() {
      const runtimeConfig = useRuntimeConfig();
      try {
        const response = await axios.get(
          `${runtimeConfig.public.BE_URL}/offers/?skip=0&limit=100`,
          {
            headers: {
              "x-api-key": runtimeConfig.public.X_API_KEY,
              "Content-Type": "application/json",
            },
          }
        );
        this.offers = response.data.data;
      } catch (error) {
        console.error("Error fetching carousels:", error);
      }
    },
  },
};
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
.apiImage {
  object-fit: cover;
  height: 390px;
  width: 120%;
}

.h-96 {
  height: 24rem;
}
.image-container {
  position: relative;
}

.text-overlay {
  position: absolute;
  top: 0;
  left: 1;
  right: 0;
  bottom: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  color: white; /* Change text color as needed */
  z-index: 10; /* Ensures this overlay appears above the image */
}

.offer-title {
  font-size: 40px; /* Adjust size as necessary */
  font-weight: bold; /* Optional styling */
}
</style>
