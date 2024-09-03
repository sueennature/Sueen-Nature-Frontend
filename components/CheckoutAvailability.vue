<template>
  <div class="relative">
    <!-- main hero booking options selector -->
    <div
      class="inset-x-0 lg:flex lg:flex-col xl:flex-row flex-col lg:justify-center lg:mx-0 mx-4"
    >
      <div
        class="xl:flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:space-x-0 border rounded-l-none rounded-r-none lg:rounded-l-lg lg:rounded-r-none shadow-lg border-white bg-black-200 bg-opacity-65"
      >
        <div class="relative lg:max-w-xs lg:mx-auto">
          <input
            type="datetime-local"
            class="w-full bg-transparent border-none rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Check In Date"
            v-model="check_in"
          />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto xl:flex hidden"></div>
        <!-- Vertical separator -->
        <div class="relative lg:max-w-xs lg:mx-auto">
          <input
            type="datetime-local"
            class="w-full border-none bg-transparent rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Check Out Date"
            v-model="check_out"
          />
        </div>
        <div class="w-0.5 bg-white h-8 my-auto xl:flex hidden"></div>
        <!-- Vertical separator -->
        <div class="lg:max-w-sm lg:mx-auto">
          <div class="relative">
            <div
              @click="toggleDropdown"
              ref="dropdownContainer"
              class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer flex justify-between items-center"
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

            <!-- Dropdown Options -->
            <div
              v-if="dropdownOpen"
              class="absolute mt-2 w-full max-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg z-10"
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
                <span class="text-gray-900 dark:text-white">
                  {{ room.category }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="w-0.5 bg-white h-8 my-auto xl:flex hidden"></div>
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
        <div class="w-0.5 bg-white h-8 my-auto xl:flex hidden"></div>

        <form class="lg:max-w-sm lg:mx-auto">
          <input
            v-model="discount_code"
            type="text"
            placeholder="Discount Code"
            class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </form>
      </div>
      <button
        class="bg-red-100 hover:bg-red-500 text-sm text-center text-white p-2 md:p-4 rounded xl:rounded-r-lg xl:rounded-l-none hidden justify-center lg:flex"
        @click="checkAvailability"
      >
        <span v-if="loading" class="flex">
          <!-- Loader Icon or Text -->
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
        <span v-else>Check Availability</span>
      </button>

      <div class="lg:hidden">
        <button
          class="bg-red-100 hover:bg-red-500 buttontext text-sm text-white p-4 rounded-none border border-white w-full"
          @click="checkAvailability"
        >
          <span v-if="loading" class="flex items-center justify-center">
            <!-- Loader Icon or Text -->
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
      room_types: [],
      selectedCategories: [],
      discount_code: "",
      dropdownOpen: false,
      loading: false,
    };
  },

  methods: {
    formatDateToISO(dateString) {
      const date = new Date(dateString);
      // Format manually without changing the time
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");
      const hours = String(date.getUTCHours()).padStart(2, "0");
      const minutes = String(date.getUTCMinutes()).padStart(2, "0");

      return `${year}-${month}-${day}T${hours}:${minutes}:00.000Z`;
    },

    populateFieldsFromQuery() {
      const { fromDate, toDate, categories, view, discount } =
        this.$route.query;
      this.check_in = fromDate || this.formatDateTime(new Date());
      this.check_out =
        toDate ||
        this.formatDateTime(
          new Date(new Date().getTime() + 2 * 60 * 60 * 1000)
        ); // 2 hours later
      this.roomView = view || null;
      this.discount_code = discount || "";
      console.log("FROM_URL", this.check_in, this.check_out);
      // Handle categories
      if (categories) {
        this.selectedCategories = categories.split(","); // Split categories string into an array
      } else {
        this.selectedCategories = [];
      }
      console.log("Populated Categories:", this.selectedCategories); // Verify here
    },
    formatDateTime(date) {
      if (!(date instanceof Date) || isNaN(date)) {
        return "";
      }

      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      return `${year}-${month}-${day}T${hours}:${minutes}`;
    },

    selectCategory(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(
          (c) => c !== category
        );
      } else {
        this.selectedCategories.push(category);
      }
      console.log("Selected Categories after update:", this.selectedCategories); // Check updated state
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
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    },
    async checkAvailability() {
      if (
        !this.check_in ||
        !this.check_out ||
        !this.roomView ||
        this.selectedCategories.length === 0
      ) {
        return this.setupToastError("Please fill all fields");
      }

      const checkInDate = new Date(this.check_in);
      const checkOutDate = new Date(this.check_out);

      if (checkOutDate <= checkInDate) {
        return this.setupToastError(
          "Check-out date must be after check-in date"
        );
      }

      const formatDateToISO = (date) => {
        const localDate = new Date(date);
        const offset = localDate.getTimezoneOffset();
        const adjustedDate = new Date(localDate.getTime() - offset * 60 * 1000);
        return adjustedDate.toISOString().slice(0, 19); // Use YYYY-MM-DDTHH:MM:SS format
      };

      const formattedCheckIn = formatDateToISO(this.check_in);
      const formattedCheckOut = formatDateToISO(this.check_out);

      console.log("FORMATTED", formattedCheckIn, formattedCheckOut);

      const runtimeConfig = useRuntimeConfig();

      const baseUrl = "https://api.sueennature.com/rooms/availability/";
      const params = new URLSearchParams({
        check_in: formattedCheckIn,
        check_out: formattedCheckOut,
        views: this.roomView,
        discount_code: this.discount_code,
      });

      this.selectedCategories.forEach((category) => {
        params.append("categories", category);
      });

      const url = `${baseUrl}?${params.toString()}`;
      console.log("URL", url);

      this.loading = true;
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-api-key": runtimeConfig.public.DATABASE_ID,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();
        this.loading = false;
        if (response.status === 200) {
          this.setupToastSuccess("Availability checked successfully.");
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
          this.setupToastError("No rooms available.");
        } else {
          const errorData = await response.json();
          this.setupToastError(
            `An error occurred: ${errorData.message || "Unknown error"}`
          );
        }
        // Handle response data as needed
      } catch (error) {
        this.loading = false;
        this.setupToastError(`An error occurred: ${error.message}`);
      }
    },

    setupToastSuccess(message) {
      toast.success(message, { autoClose: 3000 });
    },

    setupToastError(message) {
      toast.error(message, { autoClose: 3000 });
    },
    handleClickOutside(event) {
      if (
        this.dropdownOpen &&
        !this.$refs.dropdownContainer.contains(event.target)
      ) {
        this.dropdownOpen = false;
      }
    },
  },
  mounted() {
    this.populateFieldsFromQuery();
    document.addEventListener("click", this.handleClickOutside);

    this.fetchRoomTypes();

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
.dropdown-text {
  width: 100%; /* Adjust this to your preferred width */
  white-space: nowrap; /* Prevents text from wrapping */
  overflow: hidden; /* Hides overflow text */
  text-overflow: ellipsis; /* Adds ellipsis (...) at the end of the text */
}

input,
select,
.buttontext {
  font-family: "Barlow", sans-serif;
}
</style>
