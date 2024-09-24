<template>
  <section class="px-16 py-20">
<div class="flex justify-center w-full">
    <div class="grid justify-items-center grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
      <div v-for="offer in offers" :key="offer.id" class="flex max-w-[500px] flex-col rounded-xl bg-gray-500 text-gray-700 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 relative">
        <div class="image-container">
          <img :src="offer.imgSrc" :alt="offer.altText" class="apiImage rounded-t-md" @error="onImageError" />
         <div class="flex items-center justify-end w-full z-10 absolute top-0 right-0 left-10 bottom-30  mt-4">
            <img src="/Logo.png" alt="Logo" class="w-48" />
          </div> 
        </div>
        <div class="px-6">
          <h4 class="mb-2 mt-4 text-2xl font-semibold text-blue-gray-900">{{ offer.title }}</h4>
          <div class="h-12">
            <p class="text-base font-light">{{ offer.description }}</p>
          </div>
          <p class="mt-8 sm:mt-4 text-lg font-bold">{{ offer.dateRange }}</p>
        </div>
        <div class="px-4 mb-4 pt-0 w-full mt-4">
         
          <a href="/" class="w-full text-center px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-black inline-block" aria-label="Book Now">
            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90"></span>
            <span class="relative group-hover:text-white">Book Now</span>
          </a>
        </div>
      </div>
    </div>
</div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      offers: [
        {
          id: 1,
          title: "Seasonal Offer",
          description: "Enjoy an exclusive summer 2-night stay package at Sueen Nature.",
          dateRange: "Aug 2023 - Nov 2023",
          imgSrc: "/img/hero-contact.png",
          altText: "Spa Summer Offer"
        },
        {
          id: 2,
          title: "Winter Getaway",
          description: "Experience a cozy retreat with our winter 3-night stay package.",
          dateRange: "Dec 2023 - Feb 2024",
          imgSrc: "/img/image_playground.png",
          altText: "Winter Getaway"
        },
        {
          id: 3,
          title: "Summer Getaway",
          description: "Experience a cozy retreat with our summer 3-night stay package.",
          dateRange: "Jun 2023 - Aug 2023",
          imgSrc: "/img/image_roof_top_bar.png",
          altText: "Summer Getaway"
        },
        {
          id: 4,
          title: "Summer Getaway",
          description: "Experience a cozy retreat with our summer 3-night stay package.",
          dateRange: "Jun 2023 - Aug 2023",
          imgSrc: "/img/hero-home 2.webp",
          altText: "Summer Getaway"
        }
      ]
    };
  }
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
  height: 380px; 
  width:120%; 
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
