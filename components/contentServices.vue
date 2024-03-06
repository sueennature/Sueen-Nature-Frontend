<template>
  <div class="container py-20">
    <!-- services card section -->
    <div class="grid grid-cols-1 justify-items-center">
      <div class="max-w-xl mt-16">
        <img src="/img/image_resturant.png" alt="resturantImg" class="" />
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
            Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse
            varius enim in eros elementum tristique
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
        <img src="/img/image_roof_top_bar.png" alt="resturantImg" class="" />
        <div
          class="flex flex-col justify-center items-center p-8 bg-gray-500 borde-none rounded-none shadow space-y-4 dark:bg-gray-800 dark:border-gray-700"
        >
          <h6
            class="md:text-4xl text-xl font-bold text-gray-900 dark:text-white tracking-widest uppercase text-center md:text-left"
          >
            Drinks
          </h6>
          <h3 class="md:text-5xl text-3xl text-black-200">Roof Top Bar</h3>

          <p
            class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 ml-7 mt-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse
            varius enim in eros elementum tristique
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
        <img src="/img/image_spa.png" alt="resturantImg" class="" />
        <div
          class="flex flex-col justify-center items-center p-8 bg-gray-500 borde-none rounded-none shadow space-y-4 dark:bg-gray-800 dark:border-gray-700"
        >
          <h6
            class="md:text-4xl text-xl font-bold text-gray-900 dark:text-white tracking-widest uppercase text-center md:text-left"
          >
            Relax
          </h6>
          <h3 class="md:text-5xl text-3xl text-black-200">Spa & Wellness</h3>

          <p
            class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 ml-7 mt-4"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse
            varius enim in eros elementum tristique
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
      <img src="/img/services_1.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/services_2.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/services_3.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/services_4.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/services_5.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/services_6.png" alt="servicesImg" class="max-w-full" />
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