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
        <a href="/home" class="flex items-center space-x-3 rtl:space-x-reverse">
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
    <!-- hero logo image -->
    <div class="absolute top-8 left-0 w-full md:flex hidden items-center">
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
          href="/home"
          aria-current="true"
          class="text-white font-semibold md:text-sm text-xs bg-transparent px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Home
        </a>
        <a
          href="/about"
          class="text-white font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          About
        </a>
        <a
          href="/services"
          class="text-white font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Services
        </a>
        <a
          href="/rooms"
          class="text-white font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Rooms
        </a>

        <a
          href="/contact"
          class="text-white font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400"
        >
          Contact
        </a>
      </div>
    </div>
    <!-- main hero booking options selector -->
    <div
      class="absolute inset-x-0 bottom-24 md:flex md:flex-row flex-col md:justify-center md:mx-0 mx-4"
    >
      <div
        class="md:flex grid grid-cols-1 bg-black-200 bg-opacity-60 justify-center md:space-x-0 border md:rounded-e-none rounded-none md:rounded-lg shadow-lg border-white"
      >
        <div class="relative md:max-w-sm md:mx-auto">
       
          <input
              type="date"
              class="bg-transparent w-full border-none rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Check In Date"
              v-model="fromDate"
            />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto md:flex hidden"></div>
        <!-- Vertical separator -->
        <div class="relative md:max-w-sm md:mx-auto">
          <input
            type="date"
            class="bg-transparent w-full border-none rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" v-model="toDate"
          />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto md:flex hidden"></div>
        <!-- Vertical separator -->
        <form class="md:max-w-sm md:mx-auto">
          <select
            id="view"
           
            class="text-white text-sm p-4 w-full bg-transparent border-none rounded-none focus:ring-0 focus:border-white block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            v-model="room_type_id"
          >
            <option :value="null" disabled selected class="text-gray-300 option-text">Choose a Room</option>
            <option v-for="room in room_types" :value="room.id" :key="room.id" class="text-black-200 option-text">{{ room.name }}</option>
          </select>
        </form>
      </div>

      <button
        class="bg-red-100 text-sm buttontext text-white md:ml-2 md:p-4 p-2 rounded-r-lg rounded-l-none md:flex hidden"
        @click="checkAvailability"
      >
        Check Availability
      </button>
      <div class="md:hidden">
        <button
          class="bg-red-100 buttontext text-sm text-white p-4 rounded-none border border-white w-full"
        >
          Check Availability
        </button>

      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      fromDate: '', 
      toDate: '',
      room_type_id: null, 
      room_types: [],
    };
  },
  methods:{
    async checkAvailability() {
      const body = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          check_in: this.fromDate,
          check_out: this.toDate,
          room_type_id: this.room_type_id,
        }),
      };

      try {
        const response = await fetch('https://admin.sueennature.com/api/checkAvailability', body);
        const data = await response.json();
        if(response.status===200){
          this.$router.push({ path: '/booking', query: { fromDate: this.fromDate, toDate: this.toDate, roomTypeId: this.room_type_id } });

        }else{
          window.alert("Ths room is not available")
        }       
      } catch (error) {
        window.alert(error);
      }
    },
  },
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
    fetch('https://admin.sueennature.com/api/getRoomTypes')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.room_types = data.room_types;
      })
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
    });
  },
};
</script>

  
<style  scoped>
input[type="date"] { 
  background: transparent;
  color: white;
  outline: none;
  border: none;
  color-scheme: dark;
}
/* input[type="date"]::-webkit-calendar-picker-indicator {
    
     
} */
#view{
  background-position: right 1.25rem center;
  
}
h2 {
  font-family: "Philosopher", sans-serif;
}

p,ul li,a,h6,h3,.buttontext,input,select,.option-text {
  font-family: "Barlow", sans-serif;
}


</style>