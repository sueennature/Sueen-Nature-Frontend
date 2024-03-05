<template>
    <div class="relative">
      <img
        src="/img/sueen-hero-background-2 1.png"
        alt="backgroundImg"
        class="w-full min-h-screen object-cover"
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
      <div class="absolute inset-x-0 bottom-12 md:flex md:flex-row flex-col md:justify-center">
        <div class="md:flex grid grid-cols-1 justify-center md:space-x-4 border md:rounded-e-none rounded-none md:rounded-lg shadow-lg border-white bg-black-200 bg-opacity-65">
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
        <button class="bg-red-100 text-sm text-white md:ml-2 md:p-4 p-2 rounded-r-lg rounded-l-none md:flex hidden">
          Check Availability
        </button>
        <div class="md:hidden flex justify-center items-center">
          <button class="bg-red-100 text-sm text-white p-4 rounded-none border border-white w-full">
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