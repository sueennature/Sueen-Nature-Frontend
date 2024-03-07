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
          <img src="/img/logoMobile.png" alt="logoImg" class="w-auto h-8 md:h-10" />
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
                class="block py-2 px-3 lg:p-0 text-white lg:hover:text-blue-700 rounded lg:bg-transparent hover:bg-gray-100 lg:text-white lg:dark:text-blue-500 uppercase"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/about"
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
            <a href="/checkout">
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
                  href="/"
                  class="block py-2 px-3 lg:p-0 text-white lg:hover:text-blue-700 bg-blue-700 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase"
                  >Home</a
                >
              </li>
              <li>
                <a
                  href="/about"
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
        </div>
      </div>
    </nav>
    <!-- hero logo image -->
    <div class="absolute top-2 left-0 w-full md:flex hidden items-center">
      <a href="/" class="relative mx-auto">
        <!-- Adjust mx-2 as needed for spacing -->
        <img src="/img/logoImg.png" alt="logoImg" class="w-auto h-16 md:h-44" />
        <div
          class="absolute bottom-0 h-0.5 shadow-slate-800 md:w-40 w-4 bg-white md:-left-48 -left-10 md:block hidden"
        ></div>
        <!-- Left vertical line -->
        <div
          class="absolute bottom-0 h-0.5 shadow-slate-800 md:w-40 w-4 bg-white md:-right-48 -right-10 md:block hidden"
        ></div>
        <!-- Right vertical line -->
      </a>
    </div>
    <!-- default navbar -->
    <div
      class="absolute top-20 left-0 right-0 md:flex hidden justify-center md:top-60"
    >
      <div class="flex flex-row justify-center md:space-x-4 space-x-0">
        <a
          href="/"
          aria-current="true"
          class="text-white font-semibold md:text-sm text-xs bg-transparent px-4 py-2 rounded-lg uppercase hover:text-neutral-400"
        >
          Home
        </a>
        <a
          href="/about"
          class="text-white font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-neutral-400"
        >
          About
        </a>
        <a
          href="/services"
          class="text-white font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-neutral-400"
        >
          Services
        </a>
        <a
          href="/rooms"
          class="text-white font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-neutral-400"
        >
          Rooms
        </a>
        <a
          href="/news"
          class="text-white font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-neutral-400"
        >
          News
        </a>
        <a
          href="/contact"
          class="text-white font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-neutral-400"
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
        <div class="relative md:max-w-sm md:mx-auto">
          <div
            class="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="m7 10l5 5m0 0l5-5"
              />
            </svg>
          </div>
          <input
            ref="datepicker1"
            type="text"
            class="bg-black-200 w-full border rounded-t-lg rounded-b-lg border-l-0 border-r-0 border-t-0 border-b-0 border-white text-white placeholder:text-white text-sm placeholder:text-sm focus:ring-0 focus:border-none block p-4 pe-8 text-left md:padding-left dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="From Date"
          />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto md:flex hidden"></div>
        <!-- Vertical separator -->
        <div class="relative md:max-w-sm md:mx-auto">
          <div
            class="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#ffffff"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="m7 10l5 5m0 0l5-5"
              />
            </svg>
          </div>
          <input
            ref="datepicker2"
            type="text"
            class="bg-black-200 w-full border rounded-l rounded-lg border-l-0 border-r-0 border-t-0 border-b-0 border-white text-white placeholder:text-white text-sm placeholder:text-sm focus:ring-0 focus:border-none block p-4 pe-8 text-left md:padding-left dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="To Date"
          />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto md:flex hidden"></div>
        <!-- Vertical separator -->
        <form class="md:max-w-sm md:mx-auto">
          <select
            id="view"
            class="text-white text-sm p-4 bg-black-200 border-none rounded-0 focus:ring-0 focus:border-white block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Garden View Suit</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Premier Suit">Premier Suit</option>
          </select>
        </form>
      </div>
      <a href="/checkout">
      <button
        class="bg-red-100 text-sm text-white md:ml-2 md:p-4 p-2 rounded-r-lg rounded-l-none md:flex hidden"
      >
        Check Availability
      </button>
      </a>
      <div class="md:hidden">
        <a href="/checkout">
        <button
          class="bg-red-100 text-sm text-white p-4 rounded-none border border-white w-full"
        >
          Check Availability
        </button>
        </a>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  mounted() {
    Promise.all([
      import("flowbite-datepicker/Datepicker"),
      import("flowbite-datepicker/Datepicker"),
    ]).then(([DatePicker1, DatePicker2]) => {
      const datepickerEl1 = this.$refs.datepicker1;
      const datepickerEl2 = this.$refs.datepicker2;
      new DatePicker1.default(datepickerEl1, {
        autohide: true, // This will enable autohide feature for the first datepicker
        orientation: "bottom right", // Set orientation for the first datepicker
      });
      new DatePicker2.default(datepickerEl2, {
        autohide: true, // This will enable autohide feature for the second datepicker
        orientation: "bottom right", // Set orientation for the second datepicker
      });
    });
  },
};
</script>

  
<style  scoped>
</style>