<template>
  <div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-8 shadow-lg shadow-gray-300">
    <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
      <h2 class="text-3xl uppercase font-medium text-gray-900 dark:text-white mb-4 sm:mb-0">Booking History</h2>
      <div class="flex space-x-2">
        <input
          type="date"
          v-model="selectedDate"
          class="text-orange-200 bg-orange-50 hover:bg-orange-50 font-medium rounded-lg text-sm border-none focus:ring-0"
          @input="dateChanged"
        />
        <button
          type="button"
          @click="generateReport"
          class="button-text whitespace-nowrap text-orange-200 bg-orange-50 hover:bg-orange-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
              <pattern id="pattern12" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_1032_340" transform="matrix(0.0155612 0 0 0.0125 -0.122449 0)" />
              </pattern>
              <image id="image0_1032_340" width="80" height="80" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVR4nO2aQUoDQRREezmtbhW8tMzfeCCDFzAwBeJdFMFsRCXMt7t+aT0IElePR7pmJtqaMcYYY4wxZi6I/lrlta0d293FbVMCBcJJR8SHeBUPuYgoF3A5nn6+3F/eNNWA29oft+iH2R7v0aQi4ruA0Q9Y+wPDQyoiih3h0/vnuLre1uWp/CaiaECZiCi2gZ9/X/44o+AGSkVE4SMscZwhErBsRBTfwPLHGQIbWDoiih3hfa/lSBdvZLLf4tDFG3kD91I3YMzdwD8XUAW6P9gC6v7wBg4KGN7AVEAV6P5gC6j7wxs4fwMx8e/Ee/2ngR0CDpgMWAm6P7yBgwKG7wNTAVWg+6PYRWSGP30D4YBnBAxvYOoTqALdH2wBdX/4PnBQwPCzcCrgT/hZ+IsYTRS6P7yBgwKG7wNTAVWg+6PYRWSG/68CPwsPChjewFRAFej+YAuo+8P3gYMChjcwFVAFuj/YAur+8AYOChjewFRAFej+YAuo+8MbOChgeANTAVWg+4MtoO6Pif+uW+mLWAeMIgGNMcYYY4xp/5Q3MAr4klREn0IAAAAASUVORK5CYII=" />
            </defs>
          </svg>
          Generate Report
        </button>
      </div>
    </div>
    <div v-if="filteredBookingHistory.length > 0">
      <table class="min-w-full" id="bookingTable">
        <thead>
          <tr>
            <th><input type="checkbox" :checked="allSelected" @change="selectAll" class="black-checkbox checkbox" /></th>
            <th>Booking Name</th>
            <th>Bed type</th>
            <th>Book date</th>
            <th>Nights</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200 ">
          <tr v-for="(booking, index) in filteredBookingHistory" :key="booking.id">
            <td><input type="checkbox" :value="index" v-model="selectedRowIndices" @change="updateSelectedRows" class="black-checkbox checkbox" /></td>
            <td>
              <img v-if="booking.booking_details[0]?.room_details[0]?.images.length > 0"
                  :src="`https://admin.sueennature.com/uploads/${booking.booking_details[0].room_details[0].images[0]}`"
                  alt="roomImg" class="bg-cover w-40 h-20" />            
              </td>
            <td>{{booking?.booking_details[0]?.room_details[0]?.beds }}</td>
            <td>{{ formatDate(booking.booking.date) }}</td>
            <td>{{ `${booking.booking.night} nights` }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p class="text-gray-500 dark:text-gray-400 text-3xl">You have not booked any rooms</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import jsPDF from "jspdf";
import "jspdf-autotable";


export default {
  data() {
    return {
      bookingHistory: [], 
      filteredBookingHistory: [],
      selectedRows: [],
      selectedRowIndices: [], 
      selectedDate: null,
    };
  },
  computed: {
    allSelected() {
      return this.selectedRowIndices.length === this.filteredBookingHistory.length;
    },
  },
  mounted() {
    this.fetchBookingHistory();
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const day = date.getDate();
      const daySuffix = this.getDaySuffix(day);
      return `${months[date.getMonth()]} ${day}${daySuffix} ${date.getFullYear()}`;
    },
    getDaySuffix(day) {
      if (day > 3 && day < 21) return "th";
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    },
    async fetchBookingHistory() {
      try {
        const cookies = document.cookie.split(";");
        const authTokenCookie = cookies.find(cookie => cookie.trim().startsWith("auth_token="));
        const authToken = authTokenCookie.split("=")[1];
        const headers = {
          Authorization: `Bearer ${authToken.replace(/%7C/g, "|")}`,
          "Content-Type": "application/json",
        };
        const response = await axios.get("https://admin.sueennature.com/api/user/history-booking", { headers });
        if (response.data.status === false && response.data.message === "Not Found") {
          this.bookingHistory = [];
          this.filteredBookingHistory = [];
        } else {
          this.bookingHistory = Object.values(response.data); 
          this.filteredBookingHistory = this.bookingHistory;
          console.log("AS", this.filteredBookingHistory)
        }
      } catch (error) { 
        console.error("Error fetching booking history:", error);
        toast.error("Error fetching booking history");
      }
    },
    dateChanged() {
      if (this.selectedDate) {
        this.filteredBookingHistory = this.bookingHistory.filter(booking => {
          const bookingDate = booking.date?.split(' ')[0];
          return bookingDate === this.selectedDate;
        });
      } else {
        this.filteredBookingHistory = this.bookingHistory;
      }
    },
    clearDate() {
      this.selectedDate = null;
      this.filteredBookingHistory = this.bookingHistory;
    },
    selectAll(event) {
      this.selectedRowIndices = event.target.checked ? this.filteredBookingHistory.map((_, index) => index) : [];
      this.updateSelectedRows();
    },
    updateSelectedRows() {
      this.selectedRows = this.selectedRowIndices.map(index => this.filteredBookingHistory[index]);
    },
    async generateReport() {
  try {
    // Initialize jsPDF
    const doc = new jsPDF('p', 'pt', 'a4');

    // Header for the PDF
    doc.setFontSize(18);
    doc.text("Booking History Report", 40, 40);

    // Prepare table data
    const tableData = this.filteredBookingHistory.map(booking => ({
      bedType: booking?.booking_details[0]?.room_details[0]?.beds || '',
      bookDate: this.formatDate(booking.booking.date),
      nights: `${booking.booking.night} nights`
    }));

    // Use jsPDF autoTable plugin to generate table
    doc.autoTable({
      head: [
        ['Bed type', 'Book date', 'Nights']
      ],
      body: tableData.map(row => [row.bedType, row.bookDate, row.nights]),
      startY: 70,
      margin: { top: 80 },
      didDrawPage: function (data) {
        // Header text for each page
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.text("Booking History Report", 40, 40);
      },
      styles: {
  head: {
    fillColor: [173, 216, 230], // Light blue background
    textColor: [173, 216, 230] // White text color
  },
  body: {
    textColor: [0, 0, 0] // Black text color for body rows
}
      }
    });

    // Save or open the PDF
    doc.save('booking-history.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
    toast.error('Error generating PDF');
  }
},


  },
};
</script>

<style scoped>
.table-responsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  white-space: nowrap;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  text-align: left;
}

.black-checkbox {
  border: 1px solid black;
}

input[type="checkbox"] {
  cursor: pointer;
}

.text-gray-500 {
  color: #6b7280;
}

.dark .text-gray-400 {
  color: #9ca3af;
}

@media (max-width: 640px) {
  .text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
}
</style>