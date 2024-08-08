<template>
  <div class="relative">
    <!-- main hero booking options selector -->
    <div
      class="inset-x-0 lg:flex lg:flex-row flex-col lg:justify-center lg:mx-0 mx-4"
    >
      <div
        class="lg:flex grid grid-cols-1 justify-center lg:space-x-0 border rounded-l-none rounded-r-none lg:rounded-l-lg lg:rounded-r-none shadow-lg border-white bg-black-200 bg-opacity-65"
      >
        <div class="relative lg:max-w-xs lg:mx-auto">
          <input
            type="date"
            class="w-full bg-transparent border-none rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Check In Date"
            v-model="check_in"
          />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto lg:flex hidden"></div>
        <!-- Vertical separator -->
        <div class="relative lg:max-w-xs lg:mx-auto">
          <input
            type="date"
            class="w-full border-none bg-transparent rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Check Out Date"
            v-model="check_out"
          />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto lg:flex hidden"></div>
        <!-- Vertical separator -->
        <form class="lg:max-w-sm lg:mx-auto">
          <select
            id="room"
            class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="roomCategory"
            >
            <option :value="null"  disabled>
      Choose a Room
    </option>
    <option value="Single" class="text-gray-900">Single</option>
    <option value="Deluxe" class="text-gray-900">Deluxe</option>
    <option value="Double" class="text-gray-900">Double</option>
    <option value="Family" class="text-gray-900">Family</option>
    <option value="Triple" class="text-gray-900">Triple</option>
          </select>
        </form>
        <div class="w-0.5 bg-white h-8 my-auto lg:flex hidden"></div>
        <form class="lg:max-w-sm lg:mx-auto">
          <select
            id="view"
            class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            v-model="roomView"
          >
          <option :value="null" disabled selected class="text-gray-900">
              Choose Room View
            </option>
            <option value="LAKE" class="text-gray-900">LAKE</option>
            <option value="MOUNTAIN" class="text-gray-900">MOUNTAIN</option>

          </select>
        </form>
        <div class="w-0.5 bg-white h-8 my-auto lg:flex hidden"></div>

        <form class="lg:max-w-sm lg:mx-auto">
          <input
            v-model="discount_code"
            type="text"
            placeholder="Discount"
            class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </form>
      </div>
      <button
        class="buttontext bg-red-100 text-sm text-white lg:ml-2 lg:p-4 p-2 rounded-r-lg rounded-l-none lg:flex hidden"
        @click="checkAvailability"
      >
        Check Availability
      </button>
      <div class="lg:hidden">
        <button
          class="buttontext bg-red-100 text-sm text-white p-4 rounded-none border border-white w-full"
          @click="checkAvailability"
        >
          Check Availability
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  data() {
    return {
      check_in: "",
      check_out: "",
      roomCategory: null,  
      roomView: null,
      discount_code: "",
    };
  },

  methods: {
    async checkAvailability() {
      const formatDateToISO = (dateString) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toISOString();
      };

      if (new Date(this.check_in) >= new Date(this.check_out)) {
        this.setupToastError("Check-out date must be after check-in date.");
        return;
      }

      const formattedCheckIn = formatDateToISO(this.check_in);
      const formattedCheckOut = formatDateToISO(this.check_out);
      const runtimeConfig = useRuntimeConfig();

      const baseUrl = "https://api.sueennature.com/rooms/availability/";
      const params = new URLSearchParams({
        check_in: formattedCheckIn,
        check_out: formattedCheckOut,
        category: this.roomCategory,
        view: this.roomView,
        discount_code: this.discount_code,
      });

      const url = `${baseUrl}?${params.toString()}`;

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-api-key": runtimeConfig.public.DATABASE_ID,
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setTimeout(()=>{
          window.location.reload()
        },1500)
        this.$router.push({
          path: '/booking',
          query: {
            fromDate: this.check_in,
            toDate: this.check_out,
            roomType: this.roomCategory,
            view: this.roomView,
            discount: this.discount_code
          }
        });


        this.setupToastSuccess("Availability checked successfully.");
      } catch (error) {
        this.setupToastError(`An error occurred: ${error.message}`);
      }
    },

    setupToastSuccess(message) {
      toast.success(message, { autoClose: 3000 });
    },

    setupToastError(message) {
      toast.error(message, { autoClose: 3000 });
    },

    populateFieldsFromQuery() {
      const { fromDate, toDate, roomType, view, discount } = this.$route.query;
      this.check_in = fromDate || "";
      this.check_out = toDate || "";
      this.roomCategory = roomType || null;
      this.roomView = view || null;
      this.discount_code = discount || "";
    }
  },
  mounted() {
    this.populateFieldsFromQuery();

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
  }
};
</script>


<style scoped>
input[type="date"] {
  background: transparent;
  color: white;
  outline: none;
  border: none;
  color-scheme: dark;
}

#view {
  background-position: right 1.25rem center;
}
input,
select,
.buttontext {
  font-family: "Barlow", sans-serif;
}
</style>
