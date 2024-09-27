<template>
<div>
  <!-- <div v-if="loadingTest" class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">
      <div class="relative -6 rounded-lg  text-gray-800">
        <button
          @click="closeBanner"
          class="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          &times;
        </button>

        <div class="text-center flex flex-col items-center">
          <h2 class="text-2xl font-bold mb-4">Exclusive Offer!</h2>
        <a href="/offers">
          <img
            src="/img/family_room_four.jpg"
            class="object-cover w-72 mb-4 rounded-xl cursor-pointer"
          />
        </a>
          <div class="loader mb-4"></div>
        </div>
      </div>
    </div> -->
    <div >
      <div class="relative min-h-screen ">
    <swiper
      :spaceBetween="30"
      :autoplay="autoplayConfig"
      :navigation="true"
      :effect="'fade'"
      :speed=2000
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in allMedia" :key="index">
  <!-- Conditionally render video or image based on the media type -->
  <video
    v-if="item.media_type === 'video'"
    :src="getImageUrl(item.path)"
    ref="video"
    class="object-cover w-full min-h-screen"
    autoplay
    muted
    loop
  ></video>

  <img
    v-else-if="item.media_type === 'image'"
    :src="getImageUrl(item.path)"
    class="object-cover w-full min-h-screen"
  />
</swiper-slide>
    </swiper>

    <nav
      class="fixed z-50 top-0 bg-black-200 lg:border-b border-white dark:bg-gray-900 w-full md:hidden"
    >
      <div
        class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <a href="/home" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="/img/logoMobile.png"
            alt="logoImg"
            class="w-auto h-8 md:h-10"
          />
        </a>
        <div
          class="lg:hidden flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse"
        >
          <button
            data-collapse-toggle="navbar-cta-2"
            @click="toggleMenu"
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
          :class="{ hidden: !isMenuOpen, flex: isMenuOpen }"
          class="lg:hidden items-center justify-between w-full lg:w-auto lg:order-1"
          id="navbar-cta-2"
        >
          <ul
            class="flex flex-col font-medium p-4 w-full lg:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <a
                href="/home"
                class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 rounded lg:bg-transparent hover:bg-gray-100 lg:text-white lg:dark:text-blue-500 uppercase"
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
                href="/news"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >News</a
              >
            </li>
            <!-- <li>
              <a
                href="/offers"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >Offers</a
              >
            </li> -->
            <li>
              <a
                href="/rooms"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >Rooms</a
              >
            </li>
            <li>
              <a
                href="/gallery"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >Gallery</a
              >
            </li>
            <li>
              <a
                href="/contact"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                >Contact</a
              >
            </li>

            <li>
              <a
                v-if="userEmail && authToken"
                @click.prevent="redirectToDashboard"
                class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
              >
                Profile
              </a>
            </li>
          </ul>
        </div>
        <div class="hidden lg:flex lg:flex-row lg:gap-4">
          <div
            class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse"
          >
            <a href="/booking">
              <button
                type="button"
                class="buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase"
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
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                  >Services</a
                >
              </li>
              <!-- <li>
                <a
                  href="/news"
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                  >News</a
                >
              </li> -->
              <li>
                <a
                  href="/rooms"
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
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
              <!-- <li>
                <a
                  href="/offers"
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                  >Offers</a
                >
              </li> -->
              <li>
                <a
                  href="/contact"
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                  >Contact</a
                >
              </li>
              <li>
                <a
                  v-if="userEmail && authToken"
                  @click.prevent="redirectToDashboard"
                  class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase"
                  >Profile</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  
    <div class="absolute z-40 top-8 left-0 w-full md:flex hidden items-center">
      <a href="/" class="relative mx-auto">
        <img src="/img/logoImg.png" alt="logoImg" class="w-auto h-16 md:h-44" />
        <div
          class="absolute bottom-0 h-0.5 shadow-slate-800 md:w-40 w-4 bg-white md:-left-48 -left-10 md:block hidden"
        ></div>
        <div
          class="absolute bottom-0 h-0.5 shadow-slate-800 md:w-40 w-4 bg-white md:-right-48 -right-10 md:block hidden"
        ></div>      </a>
    </div>
    <div
      class="absolute z-40 top-20 left-0 right-0 md:flex hidden justify-center md:top-60"
    >
      <div class="flex flex-row justify-center md:space-x-4 space-x-0">
        <a
          href="/"
          aria-current="true"
          class="text-orange-700 font-bold md:text-sm text-xs bg-transparent px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Home
        </a>
        <a
          href="/about"
          class="text-orange-700 font-bold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          About
        </a>

        <a
          href="/additionalActivites"
          class="text-orange-700 font-bold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
          >Activites</a
        >

        <a
          href="/services"
          class="text-orange-700 font-bold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Services
        </a>
        <a
          href="/news"
          class="text-orange-700 font-bold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          News
        </a>
        <!-- <a
          href="/offers"
          class="text-slate-600 font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Offers
        </a> -->
        <a
          href="/rooms"
          class="text-orange-700 font-bold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Rooms
        </a>
        <a
          href="/gallery"
          class="text-orange-700 font-bold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Gallery
        </a>
        <a
          href="/contact"
          class="text-orange-700 font-bold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Contact
        </a>
        <a
          v-if="userEmail && authToken"
          @click.prevent="redirectToDashboard"
          class="text-orange-700 font-bold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Profile
        </a>
      </div>
    </div>
    <div
      class="absolute z-40 inset-x-0 bottom-56 lg:flex lg:flex-col xl:flex-row flex-col lg:justify-center md:mx-0 mx-4"
    >
      <div
        class="xl:flex grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-center bg-black-200 bg-opacity-60 md:space-x-0 border md:rounded-e-none rounded-none md:rounded-lg shadow-lg border-white"
      >
        <div class="relative md:max-w-sm md:mx-auto">
          <input
            type="datetime-local"
            class="bg-transparent w-full border-none rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Check In Date and Time"
            v-model="check_in"
          />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto xl:flex hidden"></div>
        <div class="relative md:max-w-sm md:mx-auto">
          <input
            type="datetime-local"
            class="bg-transparent w-full border-none rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block"
            placeholder="Check Out Date and Time"
            v-model="check_out"
          />
        </div>

        <div class="w-0.5 bg-white h-8 my-auto xl:flex hidden"></div>
        <div class="lg:max-w-sm lg:mx-auto">
          <div class="relative">
            <div
              @click="toggleDropdown"
              ref="dropdownContainer"
              class="text-white text-sm p-4 xl:w-60 lg:w-60 md-48:w-6 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer flex justify-between items-center"
            >
              <div class="overflow-hidden text-ellipsis whitespace-nowrap w-24">
                <span v-if="selectedCategories.length === 0">Choose Rooms</span>
                <span v-else>{{ selectedCategories.join(", ") }}</span>
              </div>
              <div class="ml-1">
                <svg
                  v-if="dropdownOpen"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 01.707.293l7 7a1 1 0 11-1.414 1.414L10 5.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 17a1 1 0 01-.707-.293l-7-7a1 1 0 011.414-1.414L10 14.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 17z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>

            <div
              v-if="dropdownOpen"
              class="absolute mt-2 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg z-10"
            >
              <div
                v-for="room in room_types"
                :key="room.value"
                class="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center"
                @click.stop="selectCategory(room.category)"
              >
                <input
                  type="checkbox"
                  :value="room.category"
                  :checked="selectedCategories.includes(room.category)"
                  @change="selectCategory(room.category)"
                  class="mr-2"
                />
                <span class="text-gray-900 dark:text-white">{{
                  room.category
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-0.5 bg-white h-8 my-auto xl:flex hidden"></div>

        <div class="lg:max-w-sm lg:mx-auto">
          <select
            id="view"
            v-model="roomView"
            class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option :value="null" disabled selected class="text-gray-900">
              Choose Room View
            </option>
            <option value="LAKE" class="text-gray-900">LAKE</option>
            <option value="MOUNTAIN" class="text-gray-900">MOUNTAIN</option>
          </select>
        </div>
        <div class="w-0.5 bg-white h-8 my-auto xl:flex hidden"></div>

        <div class="lg:max-w-sm lg:mx-auto">
          <input
            v-model="discount_code"
            type="text"
            placeholder="Discount Code"
            class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <button
        class="bg-red-100 hover:bg-red-500 text-sm text-center text-white p-2 md:p-4 rounded xl:rounded-r-lg xl:rounded-l-none hidden justify-center lg:flex"
        @click="checkAvailability"
      >
        <span v-if="loading" class="flex">
          <svg
            class="animate-spin h-5 w-5 mr-3 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 01-8 8z"
            ></path>
          </svg>
          Loading...
        </span>
        <span v-else> Check Availability </span>
      </button>
      <div class="lg:hidden">
        <button
          class="bg-red-100 hover:bg-red-500 buttontext text-sm text-white p-4 rounded-none border border-white w-full"
          @click="checkAvailability"
        >
          <span v-if="loading" class="flex items-center justify-center">
            <svg
              class="animate-spin h-5 w-5 mr-3 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                class="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                stroke-width="4"
              ></circle>
              <path
                class="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 01-8 8z"
              ></path>
            </svg>
            Loading...
          </span>
          <span v-else> Check Availability </span>
        </button>
      </div>
    </div>
    <div></div>
  </div>
</div>
</div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import axios from "axios"; // Import axios for API requests

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      loadingTest: true, // Default to true to show banner initially
      modules: [EffectFade, Navigation, Pagination, Autoplay],
      autoplayConfig: {
        delay: 3000,
        disableOnInteraction: false,
      },
      check_in: "",
      check_out: "",
      roomCategory: null, // Ensure this is initially null or an appropriate default value
      roomView: null,
      room_types: [],
      loading: false,
      selectedCategories: [],
      dropdownOpen: false, // Holds the selected categories
      userEmail: "",
      discount_code: "",
      isMenuOpen: false,
      authToken: "",
      carousels: [], // Array to hold fetched carousel data
    };
  },

  computed: {
    allMedia() {
      const uniqueMedia = new Set(); // Create a Set to store unique media paths

      return this.carousels
        .filter(
          (carousel) =>
            carousel.tags === "Carousel"// Filter by specific titles
        )
        .flatMap((carousel) =>
          carousel.media_urls
            .map((url) => ({
              path: url,
              media_type: carousel.media_type,
            }))
            .filter((media) => {
              if (!uniqueMedia.has(media.path)) {
                uniqueMedia.add(media.path); // Add unique path to the Set
                return true; // Include this media
              }
              return false; // Skip duplicate media
            })
        );
    },
  },

  methods: {
    closeBanner() {
      this.loadingTest = false; // Set loading to false to close the banner
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleClickOutside(event) {
      if (
        this.dropdownOpen &&
        !this.$refs.dropdownContainer.contains(event.target)
      ) {
        this.dropdownOpen = false;
      }
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectCategory(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(
          (c) => c !== category
        );
      } else {
        this.selectedCategories.push(category);
      }
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    async fetchRoomTypes() {
      try {
        const response = await fetch(
          "https://api.sueennature.com/rooms/types",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": this.$config.public.DATABASE_ID, // Adjust the runtime config reference according to your environment
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        this.room_types = data.room_types || [];
        console.log("ROOMS", this.room_types);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    },
    async fetchCarousels() {
      const runtimeConfig = useRuntimeConfig();
      try {
        const response = await axios.get(
          "https://api.sueennature.com/carousels/?skip=0&limit=10",
          {
            headers: {
              "x-api-key": runtimeConfig.public.DATABASE_ID, // Replace with your actual API key
              "Content-Type": "application/json",
            },
          }
        );
        this.carousels = response.data.data; // Assign the fetched carousels data
      } catch (error) {
        console.error("Error fetching carousels:", error);
      }
    },
    getImageUrl(path) {
      return `https://api.sueennature.com/${path}`;
    },
    setupToast() {
      toast.error("welcome to sda", {
        autoClose: 1000,
      });
    },
    redirectToDashboard() {
      this.$router.push({
        path: "/dashboard",
        query: { guest_id: 30 },
      });
    },
    async checkAvailability() {
      const runtimeConfig = useRuntimeConfig();
      if (
        !this.check_in ||
        !this.check_out ||
        !this.roomView ||
        this.selectedCategories.length === 0
      ) {
        return toast.error("Please fill all fields");
      }
      const checkInDate = new Date(this.check_in);
      const checkOutDate = new Date(this.check_out);
      const checkInDateOnly = checkInDate.toISOString().split("T")[0];
      const checkOutDateOnly = checkOutDate.toISOString().split("T")[0];

      if (checkInDateOnly === checkOutDateOnly) {
        return toast.error(
          "Check-out date must be different from check-in date."
        );
      }
      if (checkOutDate <= checkInDate) {
        return toast.error("Check-out date must be after check-in date");
      }

      const formatDateToCustom = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");

        // Format the string
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };

      const formattedCheckIn = formatDateToCustom(this.check_in);
      const formattedCheckOut = formatDateToCustom(this.check_out);
      console.log("DATES", formattedCheckIn, formattedCheckOut);
      const baseUrl = "https://api.sueennature.com/rooms/availability/";

      // Construct the categories query string manually
      const categoriesParam = this.selectedCategories
        .map((category) => `categories=${encodeURIComponent(category)}`)
        .join("&");

      // Construct other parameters
      const otherParams = new URLSearchParams({
        check_in: formattedCheckIn,
        check_out: formattedCheckOut,
      }).toString();

      // Combine parameters in the desired order
      const fullUrl = `${baseUrl}?${otherParams}&${categoriesParam}&views=${encodeURIComponent(
        this.roomView
      )}&discount_code=${encodeURIComponent(this.discount_code)}`;

      console.log("Constructed URL:", fullUrl);
      this.loading = true;

      try {
        const response = await fetch(fullUrl, {
          method: "GET",
          headers: {
            "x-api-key": runtimeConfig.public.DATABASE_ID, // Ensure this key is valid
            "Content-Type": "application/json", // Optional for GET requests
          },
        });
        console.log("first", response);

        const data = await response.json();
        this.loading = false;
        if (response.status === 200) {
          toast.success("Availability checked successfully.");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
          this.$router.push({
            path: "/booking",
            query: {
              fromDate: this.check_in,
              toDate: this.check_out,
              categories: this.selectedCategories.join(","),
              view: this.roomView,
              discount: this.discount_code,
            },
          });
        } else if (response.status === 204) {
          toast.error("No rooms available.");
        } else {
          const errorData = await response.json();
          this.setupToastError(
            `An error occurred: ${errorData.message || "Unknown error"}`
          );
        }
      } catch (error) {
        this.loading = false;

        console.error("Error during fetch operation:", error);
      }
    },
    setupToastError(message) {
      toast.error(message, {
        autoClose: 3000,
      });
    },
    setupToastSuccess(message) {
      toast.success(message, {
        autoClose: 3000,
      });
    },
    onSlideChange(swiper) {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const videoElement = activeSlide.querySelector("video");

      if (videoElement) {
        swiper.params.autoplay.delay = 10000; // 10 seconds delay for image slides
        swiper.autoplay.start(); 
        console.log("video slide, autoplay started with 10s delay.");

        
      } else {
        swiper.params.autoplay.delay = 3000; // 10 seconds delay for image slides
        swiper.autoplay.start(); 
        console.log("Non-video slide, autoplay started with 3s delay.");
      }
      swiper.autoplay.start();
    },
  },

  mounted() {
    setTimeout(() => {
      this.loadingTest = false;
    }, 5000);
    const cookies = document.cookie.split(";");
    const authTokenCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("auth_token=")
    );
    this.authToken = authTokenCookie?.split("=")[1];
    console.log("HOME", this.authToken);

    if (process.client) {
      this.userEmail = localStorage.getItem("userEmail") || "";
      console.log("first", this.userEmail);
    }
    this.fetchRoomTypes();
    this.fetchCarousels(); // Fetch the carousel data
    document.addEventListener("click", this.handleClickOutside);

    Promise.all([
      import("flowbite-datepicker/Datepicker"),
      import("flowbite-datepicker/Datepicker"),
    ]).then(([DatePicker1, DatePicker2]) => {
      const datepickerEl1 = this.$refs.datepicker1;
      const datepickerEl2 = this.$refs.datepicker2;
      new DatePicker1.default(datepickerEl1, {
        autohide: true,
        orientation: "bottom right",
      });
      new DatePicker2.default(datepickerEl2, {
        autohide: true,
        orientation: "bottom right",
      });
    });
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside);
  },
};
</script>


<style scoped>
@import 'swiper/css/effect-fade';
button[aria-label="Close"] {
  font-size: 1.5rem;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
}
input[type="date"] {
  background: transparent;
  color: white;
  outline: none;
  border: none;
  color-scheme: dark;
}
/* input[type="date"]::-webkit-calendar-picker-indicator {
    
     
} */

#category option[value=""]:not(:checked) {
  display: none;
}
#view {
  background-position: right 1.25rem center;
}
h2 {
  font-family: "Philosopher", sans-serif;
}

p,
ul li,
a,
h6,
h3,
.buttontext,
input,
select,
.option-text {
  font-family: "Barlow", sans-serif;
}
::-webkit-calendar-picker-indicator {
  filter: invert(1);
}

/* Style for the custom icon */
.relative svg {
  pointer-events: none; /* Ensure the icon does not interfere with input interactions */
}
.loader {
  border: 4px solid #f3f3f3; /* Light gray */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
