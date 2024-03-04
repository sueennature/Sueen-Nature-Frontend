<template>
    <div class="relative">
      <img
        src="/img/sueen-hero-background-2 1.png"
        alt="backgroundImg"
        class=""
      />
      <div
        class="absolute top-2 left-0 w-full flex items-center"
      >
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
  
      <div class="absolute inset-0 flex justify-center md:top-60 top-20">
        <div class="flex justify-center md:space-x-4 space-x-0">
          <a
            href="#"
            aria-current="true"
            class="text-white md:text-sm text-xs bg-transparent px-4 py-2 rounded-lg uppercase"
          >
            Home
          </a>
          <a
            href="#"
            class="text-white md:text-sm text-xs px-4 py-2 rounded-lg  uppercase"
          >
            About
          </a>
          <a
            href="#"
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
            href="#"
            class="text-white md:text-sm text-xs px-4 py-2 rounded-lg uppercase"
          >
            News
          </a>
          <a
            href="#"
            class="text-white md:text-sm text-xs px-4 py-2 rounded-lg uppercase"
          >
            Contact
          </a>
        </div>
      </div>
      <div class="absolute inset-x-0 md:bottom-12 bottom-2 flex justify-center">
        <div
          class="flex justify-center space-x-4 bg-black bg-opacity-60 border rounded-e-none rounded-lg shadow-lg border-white"
        >
          <form class="max-w-sm mx-auto">
            <select
              id="countries"
              class="text-white md:text-sm text-xs bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full md:p-4 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>2 Adults</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <div class="w-0.5 bg-white h-8 my-auto"></div>
          <!-- Vertical separator -->
  
          <form class="max-w-sm mx-auto">
            <select
              id="countries"
              class="text-white md:text-sm text-xs bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full md:p-4 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>0 Children</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
          <div class="w-0.5 bg-white h-8 my-auto"></div>
          <!-- Vertical separator -->
          <form class="max-w-sm mx-auto">
            <select
              id="countries"
              class="text-white md:text-sm text-xs bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full md:p-4 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          class="bg-red-100 md:text-sm text-xs text-white ml-2 md:p-4 p-2 rounded-r-lg rounded-l-none"
        >
          Check Availability
        </button>
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