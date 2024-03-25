<template>
    <div class="relative">
      <!-- main hero booking options selector -->
      <div class="inset-x-0 md:flex md:flex-row flex-col md:justify-center md:mx-0 mx-4">
        <div class="md:flex grid grid-cols-1 justify-center md:space-x-4 border rounded-none md:rounded-e-none md:rounded-lg shadow-lg border-white bg-black-200">
          <div class="relative md:max-w-xs md:mx-auto">
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
          <div class="relative md:max-w-xs md:mx-auto">
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
          
          
        </div>
        <a href="/checkout">
        <button
          class="buttontext bg-red-100 text-sm text-white md:ml-2 md:p-4 p-2 rounded-r-lg rounded-l-none md:flex hidden"
        >
          Check Availability
        </button>
        </a>
        <div class="md:hidden">
          <a href="/checkout">
          <button
            class="buttontext bg-red-100 text-sm text-white p-4 rounded-none border border-white w-full"
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
input,select,.buttontext{
  font-family: "Barlow", sans-serif;
}
  </style>