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
            v-model="room_type_id"
          >
            <option :value="null" selected class="text-gray-300">
              Choose a Room
            </option>
            <option
              v-for="room in room_types"
              :value="room.id"
              :key="room.id"
              class="text-black-200"
            >
              {{ room.name }}
            </option>
          </select>
        </form>
        <div class="w-0.5 bg-white h-8 my-auto lg:flex hidden"></div>
        <form class="lg:max-w-sm lg:mx-auto">
        <select
          class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="selectedView"
        >
          <option :value="null" disabled selected class="text-gray-300">
            Choose Room View
          </option>
      <option
  v-for="view in filteredViews"
  :value="view" 
  :key="view.room_no"
  class="text-black-200"
>
  {{ view.view }}
</option>

        </select>
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
      room_type_id: null,
      room_types: [],
      rooms: [],
      selectedView: null,

    };
  },
  computed: {
  filteredViews() {
    if (!this.room_type_id) return [];
    const selectedRoom = this.room_types.find(room => room.id === this.room_type_id);
    return selectedRoom ? selectedRoom.views : [];
  },
},
watch: {
    room_type_id(newVal, oldVal) {
      const selectedRoom = this.room_types.find(room => room.id === newVal);
      if (selectedRoom) {
        this.filteredViews = selectedRoom.views;
        const roomViewParam = this.$route.query.roomView;
        if (roomViewParam) {
          const parsedRoomView = JSON.parse(roomViewParam);
          const matchingRoomView = this.filteredViews.find(view => view.view === parsedRoomView);
          if (matchingRoomView) {
            this.selectedView = matchingRoomView;
          } else {
            this.selectedView = null; 
          }
        } else {
          this.selectedView = null; 
        }
      } else {
        this.filteredViews = [];
        this.selectedView = null;
      }
    }
  },
  methods: {
    async checkAvailability() {
      const body = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          check_in: this.check_in,
          check_out: this.check_out,
          room_type_id: this.room_type_id,
        }),
      };

      this.$router.push({
        path: this.$route.path,
        query: {
          check_in: this.check_in,
          check_out: this.check_out,
          roomTypeId: this.room_type_id,

          roomView: JSON.stringify(this.selectedView.view),

        },
      });
      console.log("body", body);

      try {
        const response = await fetch(
          "https://admin.sueennature.com/api/checkAvailability",
          body
        );
        const data = await response.json();
        console.log("DATA", data);
        this.setupToastSucess("Successfully checked the availability");
      } catch (error) {
        console.error(error);
      }
    },
    setupToastSucess(message) {
      toast.success(message, {
        autoClose: 3000,
      });
    },
    updateAvailableRooms() {
      const selectedRoom = this.room_types.find(
        (room) => room.id === this.room_type_id
      );
      this.filteredViews = selectedRoom ? selectedRoom.rooms : [];
      this.view_type_id = null;
    },
  },
  mounted() {
    console.log("ID", this.room_type_id)
    fetch("https://admin.sueennature.com/api/getRoomTypes")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      this.room_types = data.room_types;
      console.log("Response:", data);
      
      const { check_in, check_out, roomTypeId } = this.$route.query;
      this.check_in = check_in || "";
      this.check_out = check_out || "";
      this.room_type_id = roomTypeId ? parseInt(roomTypeId) : null;

      if (this.room_type_id) {
        const selectedRoom = this.room_types.find(room => room.id === this.room_type_id);
        console.log("first",selectedRoom.name)
        
        if (selectedRoom) {
          this.filteredViews = selectedRoom.views;
          const roomViewParam = this.$route.query.roomView;
          if (roomViewParam) {
            const parsedRoomView = JSON.parse(roomViewParam); 
            const matchingRoomView = this.filteredViews.find(view => view.view === parsedRoomView);
            if (matchingRoomView) {
              this.selectedView = matchingRoomView;
            }
            
          }
        }
      }
    })
    .catch((error) => {
      console.error("There has been a problem with your fetch operation:", error);
    });

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

    const roomViewParam = this.$route.query.roomView;
  console.log("roomViewParam:", roomViewParam); 

  if (roomViewParam) {
    const parsedRoomView = JSON.parse(roomViewParam); 
    console.log("parsedRoomView:", parsedRoomView); 

    const matchingRoomView = this.filteredViews.find(view => view.view === parsedRoomView);
    console.log("matchingRoomView:", matchingRoomView); 
    console.log("filteredViews:", this.filteredViews); 

    if (matchingRoomView) {
      this.selectedView = matchingRoomView;
      console.log("selectedView:", this.selectedView); 
    }
  }
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
input,
select,
.buttontext {
  font-family: "Barlow", sans-serif;
}
</style>
