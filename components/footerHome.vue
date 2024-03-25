<template>
  <div class="bg-black-300">
    <div class="sm:container px-4 pt-20">
      <a href="/home">
        <img
        src="/img/logoImg.png"
        alt="logoImg"
        class="w-auto h-16 md:h-40 mx-auto"
      />
      </a>
      
      <p
        class="lg:text-base text-sm text-white font-thin text-center pt-8 max-w-[100ch] mx-auto"
      >
      Feel free to reach out to us for any inquiries, reservations, or feedback. Our dedicated team at Sueen Nature Resort is here to assist you and ensure that your experience with us is nothing short of exceptional.
      </p>
      <div class="flex justify-center items-center">
        <a
          href="/contact"
          class="mt-8 buttontext uppercase text-white bg-white hover:bg-neutral-400 bg-opacity-15 focus:ring-none font-medium rounded-sm lg:text-base text-sm px-8 py-2.5 me-2 mb-2 border border-white dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Contact Us
        </a>
      </div>

      <hr class="border-gray-100 border-opacity-20 my-8" />
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-x-4 lg:gap-y-0 gap-y-16 items-start">
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-white lg:text-4xl text-xl">Stay</h2>
          <h3 class="text-black-50 uppercase text-sm mt-3">Stay with us</h3>
          <h3 class="text-black-50 uppercase text-sm mt-1">Explore rooms</h3>
          <h3 class="text-black-50 uppercase text-sm mt-1">enjoy amenities</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-white lg:text-4xl text-xl">Dine</h2>
          <h3 class="text-black-50 uppercase text-sm mt-3">dine with us</h3>
          <h3 class="text-black-50 uppercase text-sm mt-1">enjoy a meal</h3>
          <h3 class="text-black-50 uppercase text-sm mt-1">have a drink</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-white lg:text-4xl text-xl">More</h2>
          <h3 class="text-black-50 uppercase text-sm mt-3">
            Celebrate with us
          </h3>
          <h3 class="text-black-50 uppercase text-sm mt-1">Meet our team</h3>
          <h3 class="text-black-50 uppercase text-sm mt-1">upcoming events</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
          <h2 class="text-white lg:text-4xl text-xl">Follow</h2>
          <nuxt-link to="https://www.facebook.com/sueennature" class="text-black-50 uppercase text-sm mt-3 hover:text-blue-500">Facebook</nuxt-link>
          <!-- <nuxt-link to="https://twitter.com" class="text-black-50 uppercase text-sm mt-1 hover:text-blue-500">Twitter</nuxt-link> -->
          <nuxt-link to="https://www.instagram.com/sueennature/" class="text-black-50 uppercase text-sm mt-1 hover:text-blue-500">Instagram</nuxt-link>

        </div>
      </div>
      <hr class="border-gray-100 border-opacity-20 lg:mt-32 mt-10" />
      <div class="flex lg:flex-row flex-col lg:justify-between py-4">
        <h3 class="text-white text-sm">
          © Sueen Nature Resort 2024. All rights reserved.
        </h3>
        <h3 class="text-white text-sm mt-2 lg:mt-0">
          Design & Developed by <a href="https://cdazzdev.com/">CDAZZ Dev</a>
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
h2 {
  font-family: "Philosopher", sans-serif;
}
h3,a,
.buttontext,p {
  font-family: "Barlow", sans-serif;
}
</style>