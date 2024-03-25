<template>
  <div class="relative">
    <!-- main hero booking options selector -->
    <div class="inset-x-0 lg:flex lg:flex-row flex-col lg:justify-center lg:mx-0 mx-4">
      <div class="lg:flex grid grid-cols-1 justify-center lg:space-x-0 border rounded-l-none rounded-r-none lg:rounded-l-lg lg:rounded-r-none shadow-lg border-white bg-black-200 bg-opacity-65">
        <div class="relative lg:max-w-xs lg:mx-auto">
          <!-- <div
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
          </div> -->
          <input
            type="date"
            class=" w-full bg-transparent border-none rounded-lg  text-white placeholder-gray-500 text-sm p-4 focus:ring-0  block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Check In Date"
            v-model="fromDate"
          />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto lg:flex hidden"></div>
        <!-- Vertical separator -->
        <div class="relative lg:max-w-xs lg:mx-auto">
          <!-- <div
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
          </div> -->
          <input
            type="date"
            class="w-full border-none bg-transparent rounded-lg  text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Check In Date"
            v-model="toDate"
          />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto lg:flex hidden"></div>
      <!-- Vertical separator -->
      <form class="lg:max-w-sm lg:mx-auto">
        <select
          id="view"
          class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="room_type_id"
        >
          <option :value="null" disabled selected class="text-gray-300">Choose a Room</option>
          <option v-for="room in room_types" :value="room.id" :key="room.id" class="text-black-200">{{ room.name }}</option>
        </select>
      </form>
        
        
      </div>
      
      <button
        class="buttontext bg-red-100 text-sm text-white lg:ml-2 lg:p-4 p-2 rounded-r-lg rounded-l-none lg:flex hidden"
        @click="checkAvailability">
        Check Availability
      </button>

      <div class="lg:hidden">
        <a href="/checkout">
        <button
          class="buttontext bg-red-100 text-sm text-white p-4 rounded-none border border-white w-full">
          Check Availability
        </button>
        </a>
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
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json'  },
        body: JSON.stringify({
          check_in: this.fromDate,
          check_out: this.toDate,
          room_type_id: this.room_type_id,
        }),
      };

      this.$router.push({path: this.$route.path, query: { check_in: this.fromDate, check_out: this.toDate, roomTypeId: this.room_type_id }})
      console.log("body", body)

      try {
        const response = await fetch('https://admin.sueennature.com/api/checkAvailability', body);
        const data = await response.json();
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
// Retrieve query parameters
const { fromDate, toDate, roomTypeId } = this.$route.query;

// Assign query parameters to data properties
this.fromDate = fromDate || '';
this.toDate = toDate || '';
this.room_type_id = roomTypeId ? parseInt(roomTypeId) : null;

// Fetch room types
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

// Initialize date pickers
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

#view{
background-position: right 1.25rem center;
}
input,select,.buttontext{
  font-family: "Barlow", sans-serif;
}
</style> 