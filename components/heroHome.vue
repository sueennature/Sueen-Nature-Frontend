<template>
  <div class="relative">
    <img
      src="/img/sueen-hero-background-2 1.png"
      alt="backgroundImg"
      class="w-full min-h-screen object-cover"
    />
    <!-- stiky navbar -->
    <nav
      class="fixed z-40 top-0 bg-black-200 lg:border-b border-white dark:bg-gray-900 w-full md:hidden"
    >
      <div
        class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            class="self-center md:text-2xl text-base whitespace-nowrap font-semibold text-white dark:text-white uppercase"
            >sueen Nature</span
          >
        </a>
        <div
          class="lg:hidden flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse"
        >
          <button
            data-collapse-toggle="navbar-cta-2"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta-2"
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
          id="navbar-cta-2"
        >
          <ul
            class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="/"
                class="block py-2 px-3 lg:p-0 text-white rounded lg:bg-transparent hover:bg-gray-100 lg:text-white lg:dark:text-blue-500 uppercase"
                >Home</a
              >
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >About</a
              >
            </li>
            <li>
              <a
                href="/services"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >Services</a
              >
            </li>
            <li>
              <a
                href="/rooms"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >Rooms</a
              >
            </li>
            <li>
              <a
                href="/news"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >News</a
              >
            </li>
            <li>
              <a
                href="/contact"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >Contact</a
              >
            </li>
          </ul>
        </div>
        <div class="hidden lg:flex lg:flex-row lg:gap-4">
          <div
            class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase"
            >
              book now
            </button>
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
                  href="#"
                  class="block py-2 px-3 lg:p-0 text-white bg-blue-700 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                  >About</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                  >Services</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                  >Rooms</a
                >
              </li>
              <li>
                <a
                  href="/news"
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                  >News</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                  >Contact</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <!-- hero logo image -->
    <div class="absolute top-2 left-0 w-full md:flex hidden items-center">
      <a href="/" class="relative mx-auto">
        <!-- Adjust mx-2 as needed for spacing -->
        <img src="/img/logo.png" alt="logoImg" class="w-auto h-16 md:h-auto" />
        <div
          class="absolute bottom-0 h-1 shadow-md shadow-slate-800 md:w-40 w-4 bg-white md:-left-48 -left-10 md:block hidden"
        ></div>
        <!-- Left vertical line -->
        <div
          class="absolute bottom-0 h-1 shadow-md shadow-slate-800 md:w-40 w-4 bg-white md:-right-48 -right-10 md:block hidden"
        ></div>
        <!-- Right vertical line -->
      </a>
    </div>
    <!-- default navbar -->
    <div
      class="absolute inset-0 md:flex hidden justify-center md:top-60 top-20"
    >
      <div class="flex justify-center md:space-x-4 space-x-0">
        <a
          href="/"
          aria-current="true"
          class="text-white md:text-sm text-xs bg-transparent px-4 py-2 rounded-lg uppercase"
        >
          Home
        </a>
        <a
          href="#"
          class="text-white md:text-sm text-xs px-4 py-2 rounded-lg uppercase"
        >
          About
        </a>
        <a
          href="/services"
          class="text-white md:text-sm text-xs px-4 py-2 rounded-lg uppercase"
        >
          Services
        </a>
        <a
          href="/rooms"
          class="text-white md:text-sm text-xs px-4 py-2 rounded-lg uppercase"
        >
          Rooms
        </a>
        <a
          href="/news"
          class="text-white md:text-sm text-xs px-4 py-2 rounded-lg uppercase"
        >
          News
        </a>
        <a
          href="/contact"
          class="text-white md:text-sm text-xs px-4 py-2 rounded-lg uppercase"
        >
          Contact
        </a>
      </div>
    </div>
    <!-- main hero booking options selector -->
    <div
      class="absolute inset-x-0 bottom-12 md:flex md:flex-row flex-col md:justify-center md:mx-0 mx-4"
    >
      <div
        class="md:flex grid grid-cols-1 justify-center md:space-x-4 border md:rounded-e-none rounded-none md:rounded-lg shadow-lg border-white bg-black-200 bg-opacity-65"
      >
        <form class="md:max-w-sm md:mx-auto">
          <select
            id="adults"
            class="text-white text-sm bg-transparent md:border-none border-b border-white border-t-0 border-x-0 md:rounded-l-lg rounded-none focus:ring-0 focus:border-white block w-full md:p-4 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>2 Adults</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
        <div class="w-0.5 bg-white h-8 my-auto md:flex hidden"></div>
        <!-- Vertical separator -->
        <form class="md:max-w-sm md:mx-auto">
          <select
            id="children"
            class="text-white text-sm bg-transparent md:border-none border-b border-white border-t-0 border-x-0 rounded-0 focus:ring-0 focus:border-white block w-full md:p-4 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>0 Children</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
        <div class="w-0.5 bg-white h-8 my-auto md:flex hidden"></div>
        <!-- Vertical separator -->
        <form class="md:max-w-sm md:mx-auto">
          <select
            id="view"
            class="text-white text-sm bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full md:p-4 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Garden View Suit</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </form>
      </div>
      <button
        class="bg-red-100 text-sm text-white md:ml-2 md:p-4 p-2 rounded-r-lg rounded-l-none md:flex hidden"
      >
        Check Availability
      </button>
      <div class="md:hidden flex justify-center items-center">
        <button
          class="bg-red-100 text-sm text-white p-4 rounded-none border border-white w-full"
        >
          Check Availability
        </button>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>
  
<style  scoped>
</style>