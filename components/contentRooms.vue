<template>
  <div class="sm:container px-4 py-20">
    <!-- main title -->
    <h2
      class="text-black-200 md:text-4xl text-xl font-medium text-center max-w-[50ch] mx-auto"
    >
    Experience the epitome of comfort and luxury amidst the tranquil surroundings of Sueen Nature Resort. 
    </h2>
   <!-- sub title -->
    <!-- <h6 class="text-black-200 font-semibold md:text-xl text-lg text-center mt-4">
      RECENT GUEST
    </h6> -->
    <!-- introduction paragraph -->
    <p class="text-gray-300 md:text-xl text-lg text-center mt-10 max-w-[70ch] mx-auto">
      Our thoughtfully designed rooms and suites offer a perfect blend of contemporary elegance and natural charm, providing guests with an unforgettable retreat away from the hustle and bustle of everyday life. Whether you choose to wake up to the serene beauty of the lake or the majestic mountains, our rooms and suites at Sueen Nature Resort promise a blissful retreat amidst nature's splendor. Immerse yourself in comfort, style, and natural beauty during your stay with us.
    </p>
       <!-- Family room Section -->
       <div>
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2 class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre">Single Room</h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>
      <div
        id="controls-carousel"
        class="relative max-w-5xl mx-auto"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_4.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 2 -->
          <div class="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="../public/img/room_3.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 3 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_2.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 4 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_1.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4">
          Size: <span class="italic">42 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">Bed: 01 Queen</h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
            Occupancy: 01 Adult
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">View: West and East city views</h5>
      </div>
      <!-- view all button -->
      <div class="flex justify-center items-center">
    
        <a href="/singleRoom">
        <button
          type="button"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </a>
      </div>
    </div>
    <!-- Deluxe ROOM Section -->
    <div>
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2 class="md:text-4xl text-xl uppercase text-black-200 mx-4 whitespace-pre">Deluxe ROOM</h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>
      <div
        id="controls-carousel"
        class="relative max-w-5xl object-cover mx-auto"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_5.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
              alt="..."
            />
          </div>
          <!-- Item 2 -->
          <div class="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="../public/img/room_3.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10"
              alt="..."
            />
          </div>
          <!-- Item 3 -->
          <div class="duration-700 ease-in-out z-10" data-carousel-item>
            <img
              src="../public/img/room_5.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
         
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4">
          Size: <span class="italic">42 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">Beds: 01 King</h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
          Occupancy: 02 Adults / 01 Adult & 01 Kid
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">View: Pool</h5>
      </div>
     <!-- view all button -->
     <a href="/deluxeRoom">
      <div class="flex justify-center items-center">
        <button
          type="button"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </div>
    </a>  
    </div>
    <!-- double room Section -->
    <div>
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2 class="md:text-4xl text-xl uppercase text-black-200 mx-4 whitespace-pre">Double Room</h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>
      <!-- Carousel wrapper -->
      <div
        id="controls-carousel"
        class="relative max-w-5xl mx-auto"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_1.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 2 -->
          <div class="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="../public/img/room_2.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 3 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_1.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4">
          Size: <span class="italic">42 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">Beds: 01 Queen bed / 02 Queen beds</h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
            Occupancy: 02 Adults / 01 Adult & 01 Kid
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">View: Garden</h5>
      </div>
      <!-- view all button -->
      
      <div class="flex justify-center items-center">
        <a href="/doubleRoom">
        <button
          type="button"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </a>
      </div>
    </div>
    <!-- Triple room Section -->
    <div>
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2 class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre">Triple Room</h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>
      <div
        id="controls-carousel"
        class="relative max-w-5xl mx-auto"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_3.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 2 -->
          <div class="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="../public/img/room_4.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 3 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_2.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
         
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4">
          Size: <span class="italic">49 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">Beds: 02 Queens</h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
            Occupancy: 03 Adults / 02 Adults & 01 Kid / 01 Adults & 02 Kids
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">View: Direct Pool</h5>
      </div>
      <!-- view all button -->
      <div class="flex justify-center items-center">
        <a href="/tripleRoom">
        <button
          type="button"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </a>
      </div>
    </div>
    <!-- Family room Section -->
    <div>
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2 class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre">Family Room</h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>
      <div
        id="controls-carousel"
        class="relative max-w-5xl mx-auto"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_4.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 2 -->
          <div class="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="../public/img/room_3.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 3 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_2.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 4 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_1.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4">
          Size: <span class="italic">49 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">Beds: 02 Queen</h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
            Occupancy: 04 Adults / 02 Adults & 02 Kids
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">View: Direct Pool</h5>
      </div>
      <!-- view all button -->
      <div class="flex justify-center items-center">
    
        <a href="/familyRoom">
        <button
          type="button"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </a>
      </div>
    </div>
    <!-- Disabled room Section -->
    <div>
      <div class="flex items-center justify-center md:mt-20 md:mb-10 my-6">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <h2 class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre">Disabled Room</h2>
        <span class="border-t border-black w-1/4 mx-4"></span>
      </div>
      <div
        id="controls-carousel"
        class="relative max-w-5xl mx-auto"
        data-carousel="static"
      >
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_4.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 2 -->
          <div class="duration-700 ease-in-out" data-carousel-item="active">
            <img
              src="../public/img/room_3.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 3 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_2.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
          <!-- Item 4 -->
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="../public/img/room_1.jpg"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="..."
            />
          </div>
        </div>
        <!-- Slider controls -->
        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
      <!-- Bottom line details about the room -->
      <div class="flex flex-row gap-4 justify-center mt-2">
        <h5 class="md:text-sm text-xs text-black-200 pl-4">
          Size: <span class="italic">42 m<sup>2</sup></span>
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">Beds: 01 Queen</h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
            Occupancy: 01 Adult
        </h5>
        <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">View: Direct Pool</h5>
      </div>
      <!-- view all button -->
      <div class="flex justify-center items-center">
    
        <a href="/disabledRoom">
        <button
          type="button"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          VIEW ALL
        </button>
      </a>
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

<style scoped>
</style>