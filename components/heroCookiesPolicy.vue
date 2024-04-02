<template>
  <!-- stiky navbar -->
  <nav
    class="dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-none dark:border-gray-600 md:px-20 px-0"
    :class="{ 'bg-black-200': isNavbarBackgroundBlack }" :style="{ opacity: isNavbarBackgroundBlack ? '0.7' : '1' }"
  >
    <div
      class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <a href="/home" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/img/logoMobile.png" alt="logoImg" class="w-auto h-8 md:h-10" />
      </a>
      <div
        class="lg:hidden flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse"
      >
        <a href="/booking">
          <button
            type="button"
            class="buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase"
          >
            Book Now
          </button>
        </a>

        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>
      <div
        class="lg:hidden items-center justify-between hidden w-full lg:w-auto lg:order-1"
        id="navbar-cta"
      >
        <ul
          class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
        >
          <li>
            <a
              href="/home"
              class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 hover:bg-gray-100 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/about"
              class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
              >About</a
            >
          </li>
          <li>
            <a
              href="/services"
              class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
              >Services</a
            >
          </li>
          <li>
            <a
              href="/rooms"
              class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
              >Rooms</a
            >
          </li>
          <!-- <li>
            <a
              href="/news"
              class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
              >News</a
            >
          </li> -->
          <li>
            <a
              href="/contact"
              class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
              >Contact</a
            >
          </li>
        </ul>
      </div>
      <div class="hidden lg:flex lg:flex-row lg:gap-4">
        <div class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <a href="/booking">
            <button
            type="button"
            class="buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase"
          >
            book now
          </button>
          </a>
          
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
          id="navbar-cta"
        >
          <ul
            class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="/home"
                class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 bg-blue-700 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/about"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >About</a
              >
            </li>
            <li>
              <a
                href="/services"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >Services</a
              >
            </li>
            <li>
              <a
                href="/rooms"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >Rooms</a
              >
            </li>
            <!-- <li>
              <a
                href="/news"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >News</a
              >
            </li> -->
            <li>
              <a
                href="/contact"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!--  hero section -->
  <div class="relative">
    <!-- hero image of Checkout page -->
    <img
      src="/img/hero-booking.png"
      alt="hero-rooms-Img"
      class="w-full z-10 object-cover min-h-screen lg:min-h-0"
    />
     <!-- Overlay -->
    <div class="absolute inset-0 bg-black-200 opacity-50 z-20"></div>
    <!-- content on hero section -->
    <div
      class="absolute inset-0 flex flex-col justify-center items-center text-center z-40"
    >
      <h2 class="text-white md:text-6xl text-5xl font-semibold mt-5 uppercase">
        Cookies Policy
      </h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { initFlowbite } from "flowbite";

const isNavbarBackgroundBlack = ref(false);

const handleScroll = () => {
  const scrollTop = window.scrollY;
  const scrollThreshold = 50;

  isNavbarBackgroundBlack.value = scrollTop > scrollThreshold;
};

onMounted(() => {
  handleScroll(); // Call handleScroll once when the component is mounted
  window.addEventListener("scroll", handleScroll);
  initFlowbite();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
h2 {
  font-family: "Philosopher", sans-serif;
}
h3,
.buttontext,
h6,p,ul li,a {
  font-family: "Barlow", sans-serif;
}

</style>