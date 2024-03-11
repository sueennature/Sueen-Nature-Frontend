<template>
    <div class="relative">
      <!-- main hero booking options selector -->
      <div class="inset-x-0 lg:flex lg:flex-row flex-col lg:justify-center lg:mx-0 mx-4">
        <div class="lg:flex grid grid-cols-1 justify-center lg:space-x-4 border rounded-l-none rounded-r-none lg:rounded-l-lg lg:rounded-r-none shadow-lg border-white bg-black-200 bg-opacity-65">
          <div class="relative lg:max-w-xs lg:mx-auto">
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
              class="bg-transparent w-full border rounded-l-lg border-l-0 border-r-0 border-t-0 border-b-0 border-white text-white placeholder:text-white text-sm placeholder:text-sm focus:ring-0 focus:border-none block p-4 pe-8 text-left lg:padding-left dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Check In Date"
            />
          </div>
          <div class="w-0.5 bg-white h-8 my-auto lg:flex hidden"></div>
          <!-- Vertical separator -->
          <div class="relative lg:max-w-xs lg:mx-auto">
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
              class="bg-transparent w-full border rounded-l rounded-lg border-l-0 border-r-0 border-t-0 border-b-0 border-white text-white placeholder:text-white text-sm placeholder:text-sm focus:ring-0 focus:border-none block p-4 pe-8 text-left lg:padding-left dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Check Out Date"
            />
          </div>
          <div class="w-0.5 bg-white h-8 my-auto lg:flex hidden"></div>
        <!-- Vertical separator -->
        <form class="lg:max-w-sm lg:mx-auto">
          <select
            id="view"
            class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Room Type</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Premier Suit">Premier Suit</option>
          </select>
        </form>
          
          
        </div>
        <a href="/checkout">
        <button
          class="bg-red-100 text-sm text-white lg:ml-2 lg:p-4 p-2 rounded-r-lg rounded-l-none lg:flex hidden"
        >
          Check Availability
        </button>
        </a>
        <div class="lg:hidden">
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