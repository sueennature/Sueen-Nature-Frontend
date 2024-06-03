<template>
  <div
    class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-8 shadow-lg shadow-gray-300"
  >
    <div
      class="xl:flex xl:justify-between grid grid-cols-1 gap-6 xl:gap-0 justify-items-start mb-8"
    >
      <h2
        class="text-3xl uppercase font-medium text-gray-900 dark:text-white whitespace-nowrap"
      >
        Booking History
      </h2>
      <div class="flex space-x-2">
        <!-- Hidden Date Input -->
        <input
          type="date"
          ref="datePicker"
          class="text-orange-200 bg-orange-50 hover:bg-orange-50 font-medium rounded-lg text-sm border-none focus:ring-0"
          @change="dateChanged"
        />
        <button
          type="button"
          class="buttontext whitespace-nowrap text-orange-200 bg-orange-50 hover:bg-orange-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="24"
            height="24"
            viewBox="0 0 49 61"
            fill="none"
          >
            <rect width="49" height="61" fill="url(#pattern12)" />
            <defs>
              <pattern
                id="pattern12"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlink:href="#image0_1032_340"
                  transform="matrix(0.0155612 0 0 0.0125 -0.122449 0)"
                />
              </pattern>
              <image
                id="image0_1032_340"
                width="80"
                height="80"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVR4nO2aQUoDQRREezmtbhW8tMzfeCCDFzAwBeJdFMFsRCXMt7t+aT0IElePR7pmJtqaMcYYY4wxZi6I/lrlta0d293FbVMCBcJJR8SHeBUPuYgoF3A5nn6+3F/eNNWA29oft+iH2R7v0aQi4ruA0Q9Y+wPDQyoiih3h0/vnuLre1uWp/CaiaECZiCi2gZ9/X/44o+AGSkVE4SMscZwhErBsRBTfwPLHGQIbWDoiih3hfa/lSBdvZLLf4tDFG3kD91I3YMzdwD8XUAW6P9gC6v7wBg4KGN7AVEAV6P5gC6j7wxs4fwMx8e/Ee/2ngR0CDpgMWAm6P7yBgwKG7wNTAVWg+6PYRWSGP30D4YBnBAxvYOoTqALdH2wBdX/4PnBQwPCzcCrgT/hZ+IsYTRS6P7yBgwKG7wNTAVWg+6PYRWSG/68CPwsPChjewFRAFej+YAuo+8P3gYMChjcwFVAFuj/YAur+8AYOChjewFRAFej+YAuo+8MbOChgeANTAVWg+4MtoO6Pif+uW+mLWAeMIgGNMcYYY4xp/5Q3MAr4klREn0IAAAAASUVORK5CYII="
              />
            </defs>
          </svg>
          Generate Report
        </button>
      </div>
    </div>
    <table>
      <thead>
        <tr>
          <th>
            <input type="checkbox" :checked="allSelected" @change="selectAll" class="black-checkbox">
          </th>
          <th>Booking Name</th>
          <th>Bed type</th>
          <th>Book date</th>
          <th>Room floor</th>
          <!-- Add more columns as needed -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="(booking, index) in bookingHistory" :key="index">
          <td>
            <input
              type="checkbox"
              :value="index"
              v-model="selectedRowIndices"
              @change="updateSelectedRows"
              class="black-checkbox"
            />
          </td>
          <td>
            <img
              src="/img/deluxe_1.jpg"
              alt="roomImg"
              class="bg-cover w-40 h-20"
            />
          </td>
          <td>{{ `Booking ${booking.id}` }}</td>
          <td>{{ formatDate(booking.date) }}</td>
          <td>{{ booking.check_in }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      bookingHistory: [],
      selectedRows: [],
      selectedRowIndices: [],
    };
  },
  computed: {
    allSelected() {
      return this.selectedRowIndices.length === this.bookingHistory.length;
    },
    formattedCheckIN() {
      return this.formatDate(this.bookingHistory.date);
    },
    formattedCheckOut() {
      return this.formatDate(this.checkOut);
    },
  },
  mounted() {
    this.fetchBookingHistory();
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);

      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const month = months[date.getMonth()];
      const day = date.getDate();
      const daySuffix = this.getDaySuffix(day);
      const year = date.getFullYear();

      return `${month} ${day}${daySuffix} ${year}`;
    },
    getDaySuffix(day) {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    },
    fetchBookingHistory() {
      const cookies = document.cookie.split(";");
      const authTokenCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("auth_token=")
      );
      const authToken = authTokenCookie.split("=")[1];

      const headers = {
        Authorization: `Bearer ${authToken.replace(/%7C/g, "|")}`,
        "Content-Type": "application/json",
      };
      axios
        .get("https://admin.sueennature.com/api/user/history-booking", {
          headers,
        })
        .then((response) => {
          this.bookingHistory = response.data.bookingHistory;
        })
        .catch((error) => console.error("Error:", error));
    },
    selectAll(event) {
      if (event.target.checked) {
        this.selectedRowIndices = this.bookingHistory.map((_, index) => index);
      } else {
        this.selectedRowIndices = [];
      }
      this.updateSelectedRows();
    },
    updateSelectedRows() {
      this.selectedRows = this.selectedRowIndices.map(
        (index) => this.bookingHistory[index]
      );
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px;
  text-align: left;
}
.black-checkbox {
  border: 1px solid black;
}

input[type="checkbox"] {
  cursor: pointer;
}
</style>
