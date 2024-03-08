<template>
  <div class="container py-20">
    <!-- services card section -->
    <div class="grid grid-cols-1 justify-items-center">
      <div class="max-w-xl mt-16">
        <img src="/img/image_dining.png" alt="resturantImg" class="" />
        <div
          class="flex flex-col justify-center items-center p-8 bg-gray-500 borde-none rounded-none shadow space-y-4 dark:bg-gray-800 dark:border-gray-700"
        >
          <h6
            class="md:text-4xl text-xl font-bold text-gray-900 dark:text-white tracking-widest uppercase text-center md:text-left"
          >
            Dining
          </h6>
          <h3 class="md:text-5xl text-3xl text-black-200">Resturant</h3>

          <p
            class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 ml-7 mt-4"
          >
          Indulge your senses in a culinary journey at our restaurant, where flavors come alive and every dish tells a story. From mouthwatering appetizers to delectable entrees, our menu invites you to savor the finest ingredients crafted with passion and expertise.
          </p>
          <button
            type="button"
            class="buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            EXPLORE
          </button>
        </div>
      </div>
      <div class="max-w-xl mt-16">
        <img src="/img/image_banquet.png" alt="banquetImg" class="" />
        <div
          class="flex flex-col justify-center items-center p-8 bg-gray-500 borde-none rounded-none shadow space-y-4 dark:bg-gray-800 dark:border-gray-700"
        >
          <h6
            class="md:text-4xl text-xl font-bold text-gray-900 dark:text-white tracking-widest uppercase text-center md:text-left"
          >
          banquet Hall
          </h6>
          <h3 class="md:text-5xl text-3xl text-black-200">Celebrate</h3>

          <p
            class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 ml-7 mt-4"
          >
          Welcome to our exquisite banquet hall, where dreams transform into unforgettable moments. Nestled within the heart of our hotel, our elegant venue offers the perfect setting for your most cherished events.
          </p>
          <button
            type="button"
            class="buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            EXPLORE
          </button>
        </div>
      </div>
      <div class="max-w-xl mt-16">
        <img src="/img/image_playground.png" alt="resturantImg" class="" />
        <div
          class="flex flex-col justify-center items-center p-8 bg-gray-500 borde-none rounded-none shadow space-y-4 dark:bg-gray-800 dark:border-gray-700"
        >
          <h6
            class="md:text-4xl text-xl font-bold text-gray-900 dark:text-white tracking-widest uppercase text-center md:text-left"
          >
          Playtime
          </h6>
          <h3 class="md:text-5xl text-3xl text-black-200">Sports & Games</h3>

          <p
            class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 ml-7 mt-4"
          >
          Step into our vibrant world of recreation at our hotel's Sports and Games section, where excitement knows no bounds. With our round-the-clock playground and pool illuminated by enchanting night lights, the fun never stops.
          </p>
          <button
            type="button"
            class="buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            EXPLORE
          </button>
        </div>
      </div>
    </div>

    <!-- image gallery -->
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-36">
      <img src="/img/service-1.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/service-2.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/service-3.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/service-4.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/service-5.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/service-6.png" alt="servicesImg" class="max-w-full" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
h3,
h5 {
  font-family: "Philosopher", sans-serif;
}
h2,
.buttontext,
h6,
a {
  font-family: "Work Sans", sans-serif;
}
p {
  font-family: "Open Sans", sans-serif;
}
.relaxationCard {
  letter-spacing: 0.6rem;
}
</style>