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
        <!-- <button
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
        </button> -->
      </div>
    </div>
    <div>
      
      <div class="overflow-x-auto">
  <table class="min-w-full" id="bookingTable">
    <thead>
      <tr>
        <th>
          <input type="checkbox" :checked="allSelected" @change="selectAll" class="black-checkbox checkbox" />
        </th>
        <th>Booking Id</th>
        <th>Room No</th>
        <th>Check In</th>
        <th>Check Out</th>
        <th>View</th>
        <th>Room Category</th>
      </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
      <tr v-for="(booking, index) in filteredBookingHistory" :key="booking.id">
        <td>
          <input type="checkbox" :value="index" v-model="selectedRowIndices" @change="updateSelectedRows" class="black-checkbox checkbox" />
        </td>
        <td>{{booking?.id}}</td>
        <td>{{booking?.rooms[0]?.room_number}}</td>
        <td>{{formatDate(booking?.check_in)}}</td>
        <td>{{formatDate(booking?.check_out)}}</td>
        <td>{{booking?.rooms[0]?.view}}</td>
        <td>{{booking?.rooms[0]?.category}}</td>
      </tr>
    </tbody>
  </table>
</div>



    </div>
    <!-- <div v-else>
      <p class="text-gray-500 dark:text-gray-400 text-3xl">You have not booked any rooms</p>
    </div> -->
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
      filteredBookingHistory: [],
      selectedRows: [],
      originalBookingHistory: [], // Store the original data here
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
    this.getBookingHistory();
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
  
    async getBookingHistory() {
  const runtimeConfig = useRuntimeConfig();
  const guest_id = this.$route.query.guest_id; 

  if (this.editModeFirstName || this.editModeLastName || this.editModeEmail || this.editModePhoneNumber || this.editModeAddress) {
    toast.error("Please save your changes");
    return;
  }

  const body = {
    guest_id: guest_id
  };

  const cookies = document.cookie.split(';');
  const authTokenCookie = cookies.find(cookie => cookie.trim().startsWith('auth_token='));
  if (!authTokenCookie) {
    console.error("Auth Token not found in cookies.");
    return;
  }
  const authToken = authTokenCookie.split('=')[1];
  console.log("TOKEN", authToken);

  const headers = {
    'Authorization': `Bearer ${authToken}`,
    'Content-Type': 'application/json',
    "x-api-key": runtimeConfig.public.X_API_KEY, // Ensure this key is valid

  };

  try {
    const response = await axios.post(`https://api.sueennature.com/bookings/guest/history`, body, { headers });
    this.originalBookingHistory = response.data;
    console.log("History", response.data)
    
    this.filteredBookingHistory = [...this.originalBookingHistory]; 

    toast.success("Retrived Successfully");
    // window.location.reload();
  } catch (error) {
    console.error('Error updating profile:', error);
    this.setupToastError("An error occurred. Please try again later.");
  }
},
dateChanged() {
    if (this.selectedDate) {
      const selectedDate = new Date(this.selectedDate);
      selectedDate.setHours(0, 0, 0, 0);

      // Filter the original data based on the selected date
      this.filteredBookingHistory = this.originalBookingHistory.filter(booking => {
        const checkInDate = new Date(booking.check_in);
        checkInDate.setHours(0, 0, 0, 0);
        return checkInDate.getTime() === selectedDate.getTime();
      });
    } else {
      // Reset to original data if no date is selected
      this.filteredBookingHistory = [...this.originalBookingHistory];
    }
  },


    clearDate() {
      this.selectedDate = null;
    },
    selectAll(event) {
      this.selectedRowIndices = event.target.checked ? this.filteredBookingHistory.map((_, index) => index) : [];
      this.updateSelectedRows();
    },
    updateSelectedRows() {
      this.selectedRows = this.selectedRowIndices.map(index => this.filteredBookingHistory[index]);
    },
    async generateReport() {
     const formatDate=(dateString) =>{
      const date = new Date(dateString);
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      const day = date.getDate();
      const daySuffix = this.getDaySuffix(day);
      return `${months[date.getMonth()]} ${day}${daySuffix} ${date.getFullYear()}`;
    }
      try {
        const doc = new jsPDF('p', 'pt', 'a4');

        doc.setFontSize(18);
        doc.text("Booking History Report", 40, 40);

        const tableData = this.filteredBookingHistory.map(booking => ({
        
        RoomNo :booking?.rooms[0]?.room_number,
        Check_IN :formatDate(booking?.check_in),
        Check_Out :formatDate(booking?.check_out),
        Category :booking?.rooms[0]?.category,
        View :booking?.rooms[0]?.view

       
        }));

    doc.autoTable({
      head: [
        ['Room Number', 'Check In', 'Check Out', 'Category', 'View']
      ],
      body: tableData.map(row => [row.RoomNo, row.Check_IN, row.Check_Out,row.Category,row.View]),
      startY: 70,
      margin: { top: 80 },
      didDrawPage: function (data) {
        doc.setFontSize(18);
        doc.setTextColor(40);
        doc.text("Booking History Report", 40, 40);
      },
      styles: {
  head: {
    fillColor: [173, 216, 230], 
    textColor: [173, 216, 230] 
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
 @media screen and (max-width: 640px) {
    #bookingTable th, #bookingTable td {
      white-space: nowrap;
    }
  }
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