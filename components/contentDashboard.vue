<template>
  <div class="sm:container px-4 py-20">
    <h2 class="uppercase text-black-100 md:text-4xl text-3xl text-left mt-8">
      Dashboard
    </h2>
    <div class="grid xl:grid-cols-3 grid-cols-1 gap-8">
      <!-- Card with user profile -->
      <div
        class="w-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-4 mt-8 shadow-lg shadow-gray-300"
      >
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-44 h-44 mb-3 rounded-full shadow-lg"
            src="../public/img/Sueen_User_Profile.png"
            alt="user image"
          />
          <h4
            class="mt-4 text-2xl whitespace-nowrap font-light text-blue-100 dark:text-white"
          >
            User ID #0123456789012
          </h4>
          <h3
            class="mt-4 text-3xl whitespace-nowrap font-bold text-black-200 dark:text-white"
          >
            {{ firstName }}
          </h3>
          <div class="flex flex-col mt-10 space-y-4">
            <div class="flex items-center space-x-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M8.656 3c-.523 0-1.039.188-1.469.531l-.062.031l-.031.032l-3.125 3.219l.031.03a3.134 3.134 0 0 0-.844 3.376c.004.008-.004.023 0 .031c.848 2.426 3.016 7.11 7.25 11.344c4.25 4.25 8.996 6.332 11.344 7.25h.031a3.59 3.59 0 0 0 3.469-.688L28.406 25c.828-.828.828-2.266 0-3.094l-4.062-4.062l-.032-.063c-.828-.828-2.296-.828-3.125 0l-2 2a16.176 16.176 0 0 1-4.093-2.812c-1.637-1.563-2.473-3.36-2.781-4.063l2-2c.84-.84.855-2.238-.032-3.062l.031-.032l-.093-.093l-4-4.125l-.031-.031l-.063-.032A2.356 2.356 0 0 0 8.656 3m0 2a.35.35 0 0 1 .219.094l4 4.093l.094.094c-.008-.008.058.098-.063.219l-2.5 2.5l-.469.438l.22.624s1.148 3.075 3.562 5.376l.219.187C16.261 20.746 19 21.906 19 21.906l.625.282l2.969-2.97c.172-.171.14-.171.312 0L27 23.314c.172.171.172.109 0 .28l-3.063 3.063c-.46.395-.949.477-1.53.282c-2.266-.891-6.669-2.825-10.595-6.75c-3.957-3.958-6.023-8.446-6.78-10.625c-.153-.407-.044-1.008.312-1.313l.062-.063l3.032-3.093A.35.35 0 0 1 8.655 5z"
                />
              </svg>
              <h4 class="text-xl font-bold text-black-200">
                {{ phoneNumber }}
              </h4>
            </div>
            <div class="flex items-center space-x-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M15 2.5H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1.3 1.25L8.42 8.56a.62.62 0 0 1-.84 0L2.3 3.75zm-12.45 8.5V4.48l5.49 5a1.86 1.86 0 0 0 2.52 0l5.49-5v7.77z"
                />
              </svg>
              <h4 class="text-xl font-bold text-black-200">{{ email }}</h4>
            </div>
            <button
              class="buttontext bg-red-100 text-sm text-white lg:ml-2 lg:p-4 p-2 rounded"
              @click="logout"
            >
              Log out
            </button>
          </div>
        </div>
      </div>
      <!--Personal Info Card -->
      <div
        class="mt-8 w-full xl:col-span-2 col-span-1 p-4 bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 shadow-lg shadow-gray-300"
      >
        <div class="space-y-6">
          <h2
            class="text-3xl uppercase font-medium text-gray-900 dark:text-white"
          >
            Personal Info
          </h2>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <div class="flex items-baseline space-x-2">
                <label
                  for="first_name"
                  class="block mb-2 text-2xl font-bold text-black-200 dark:text-white"
                  >First name</label
                >
                <button
                  class="text-blue-200 text-sm hover:text-blue-500"
                  :class="{
                    'text-red-500 hover:text-red-600': editModeFirstName,
                  }"
                  @click="toggleEditFirstName"
                  @click.prevent
                >
                  {{ !editModeFirstName ? "Edit" : "Save" }}
                </button>
              </div>
              <input
                type="text"
                id="first_name"
                class="bg-white border border-black-200 text-black-200 focus:ring-blue-500 focus:border-blue-500 placeholder:text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                v-model="firstName"
                :readonly="!editModeFirstName"
              />
            </div>
            <div>
              <div class="flex items-baseline space-x-2">
                <label
                  for="last_name"
                  class="block mb-2 text-2xl font-bold text-black-200 dark:text-white"
                  >Last name</label
                >
                <button
                  class="text-blue-200 text-sm hover:text-blue-500"
                  :class="{
                    'text-red-500 hover:text-red-600': editModeLastName,
                  }"
                  @click="toggleEditLastName"
                  @click.prevent
                >
                  {{ !editModeLastName ? "Edit" : "Save" }}
                </button>
              </div>
              <input
                type="text"
                id="last_name"
                class="bg-white border border-black-200 text-black-200 placeholder:text-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                v-model="lastName"
                :readonly="!editModeLastName"
              />
            </div>
          </div>
          <div class="mb-6">
            <div class="flex items-baseline space-x-2">
              <label
                for="phone"
                class="block mb-2 text-2xl font-bold text-black-200 dark:text-white"
                >Phone Number</label
              >
              <button
                class="text-blue-200 text-sm hover:text-blue-500"
                @click="toggleEditPhoneNumber"
                :class="{
                  'text-red-500 hover:text-red-600': editModePhoneNumber,
                }"
                @click.prevent
              >
                {{ !editModePhoneNumber ? "Edit" : "Save" }}
              </button>
            </div>

            <input
              type="tel"
              id="phone"
              class="bg-white border border-black-200 text-black-200 placeholder:text-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              v-model="phoneNumber"
              :readonly="!editModePhoneNumber"
            />
          </div>
          <div class="mb-6">
            <div class="flex items-baseline space-x-2">
              <label
                for="email"
                class="block mb-2 text-2xl font-bold text-black-200 dark:text-white"
                >Email</label
              >
              <button
                class="text-blue-200 text-sm hover:text-blue-500"
                @click="toggleEditEmail"
                :class="{ 'text-red-500 hover:text-red-600': editModeEmail }"
                @click.prevent
              >
                {{ !editModeEmail ? "Edit" : "Save" }}
              </button>
              <!-- @click="toggleEditEmail" -->
            </div>

            <input
              type="email"
              id="email"
              class="bg-white border border-black-200 text-black-200 placeholder:text-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="email"
              required
              :readonly="!editModeEmail"
            />
            <!-- v-model="email" required :readonly="!editModeEmail" -->
          </div>
          <div class="flex items-baseline space-x-2">
            <label
              for="address"
              class="block mb-2 text-2xl font-bold text-black-200 dark:text-white"
              >Address</label
            >

            <button
              class="text-blue-200 text-sm hover:text-blue-500"
              @click="toggleEditAddress"
              :class="{ 'text-red-500 hover:text-red-600': editModeAddress }"
              @click.prevent
            >
              {{ !editModeAddress ? "Edit" : "Save" }}
            </button>
          </div>
          <textarea
            id="address"
            rows="4"
            class="block p-2.5 w-full text-sm bg-white border border-black-200 text-black-200 placeholder:text-black-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            v-model="address"
            :readonly="!editModeAddress"
          ></textarea>
          <div>
            <button
              @click="updateUserProfile"
              class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--Current booking Card -->
    <div
      v-if="latestBookingHistory"
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-8 shadow-lg shadow-gray-300"
    >
      <div class="">
        <div class="flex flex-col items-start">
          <h2
            class="text-3xl uppercase font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Current booking
          </h2>
        
        </div>
        <div class="mt-6 xl:mt-0">
          <div class="flex flex-col justify-start gap-6">
            <div class="flex flex-row items-center space-x-3 mt-8">
            <div
              class="flex bg-orange-100 rounded-full w-12 h-12 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                transform="rotate(-45)"
              >
                <path
                  fill="#ffffff"
                  d="M8.95 8.6a6.554 6.554 0 0 1 6.55-6.55c3.596 0 6.55 2.819 6.55 6.45a6.554 6.554 0 0 1-6.55 6.55a6.243 6.243 0 0 1-1.552-.204A1.25 1.25 0 0 1 12.7 16.05h-1.75v1.75c0 .69-.56 1.25-1.25 1.25H7.95v1.25a1.75 1.75 0 0 1-1.75 1.75H3.7a1.75 1.75 0 0 1-1.75-1.75v-2.172c0-.73.29-1.429.806-1.944L8.99 9.948a.275.275 0 0 0 .07-.244A6.386 6.386 0 0 1 8.95 8.6m9.3-1.6a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"
                />
              </svg>
            </div>
            <div class="flex  items-start flex-col ">
              <h5 class="text-sm text-blue-100 font-light whitespace-nowrap">
                Room No: {{ latestBookingHistory?.rooms[0]?.room_number }}
              </h5>
              <h5 class="text-sm text-blue-100 font-light whitespace-nowrap">
                Booking Id : {{ latestBookingHistory.id }}
              </h5>

          
            </div>
          </div>
            <div class="flex flex-row items-center  gap-6">
              <div class="flex flex-row items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <circle
                    cx="48"
                    cy="16"
                    r="8"
                    stroke="black"
                    stroke-width="2"
                    fill="none"
                  />

                  <path
                    d="M0 48C10.667 44 21.333 44 32 48C42.667 52 53.333 52 64 48V52C53.333 56 42.667 56 32 52C21.333 48 10.667 48 0 52V48Z"
                    fill="black"
                  />
                  <path
                    d="M0 40C10.667 36 21.333 36 32 40C42.667 44 53.333 44 64 40V44C53.333 48 42.667 48 32 44C21.333 40 10.667 40 0 44V40Z"
                    fill="black"
                  />

                  <rect x="20" y="28" width="4" height="20" fill="black" />

                  <path
                    d="M22 28C28 24 34 24 40 28C36 24 34 16 28 20C26 14 20 18 22 28Z"
                    fill="black"
                  />
                  <path
                    d="M22 28C16 24 10 24 4 28C8 24 10 16 16 20C18 14 24 18 22 28Z"
                    fill="black"
                  />

                  <circle cx="21" cy="34" r="2" fill="black" />
                  <circle cx="25" cy="34" r="2" fill="black" />
                </svg>

                <h5 class="text-black-200">Room View</h5>
              </div>
              <h5
                class="font-bold text-base text-black-200  xl:ml-0 ml-2"
              >
                {{ latestBookingHistory?.rooms[0]?.view }}
              </h5>
            </div>
            <div class="flex flex-row items-center gap-6">
              <div class="flex flex-row items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40"
                  height="40"
                  viewBox="0 0 58 44"
                  fill="none"
                >
                  <rect width="58" height="44" fill="url(#pattern3)" />
                  <defs>
                    <pattern
                      id="pattern3"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_996_255"
                        transform="matrix(0.02 0 0 0.0263636 0 -0.159091)"
                      />
                    </pattern>
                    <image
                      id="image0_996_255"
                      width="50"
                      height="50"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYElEQVR4nO2YO2hUQRiFP9hVEAO6QcGURrQwVooIaiFJoZ1roa2QJq0IFgqaQvGBEoLEQvs02gg+Oi1MlUZQU0WjoomVkUASGyEjE86VyebuJpvZvXtnnQ+GZV7/PWdn7j+zC5FIJBKJRNqTzcAd4Adgcl5mgFvSvIrbORBo6iw304zMqPMo+eeYszKrSFyGgqmmNxppEea/XZEC0AtcBkaBt8AU8BOY15x51afUP6rxdl5RxSdGwdfIIWDSM0V+UvGJMSktGzbyVW3TwBDQDxwBuoEdQIfGdajerf5+jZ924vrG+OJjJGmzW2MjFBscw9uID82KYXyMbAIOAGXgEvAAeAK8Bt4Dn4FfKgspe33B6bdj32nuY2BEMW3sHj2r4UYGgVfAYob3qEU9c9DHiE13AynBl5RBXgAPgavAeaBPWWWvXtZdQMl5kS1b1dalMfs0p08xrgGPgJfARz2r8vkDTipe08hxYMKpfwOGgZPANrJjO3AKuA98d/RMSOOaRv7o0+7501UOo6wpAGeADxUaaxqxS3rdI102kyJwo2LbrWCn03mB/HPR+dI73Y5hdTwlHJ5J872kYQswJ3f7CYceGZmTB06oYZzwGJd262H5LFixRAExJO1XbOW5KmcJj3PSbt+X5fuOrRwkPA5Lu/0h9u++v5vw2OPcPvitSpbXj0ZRknbrIbPbbLMLbWckVEw0EtqKlIExYDYH+39WWsr1GilX+anZ6rKUYqamkTG13VWubjUl3QWtpjf1GEm2Ux5MJHRKk/1/eN1G8pqSTS2tbWfEpJ2WOcOs52QP2shfOH9tW4/TaUYAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
                <h5 class="text-black-200">Room type</h5>
              </div>
              <h5
                class="font-bold text-base text-black-200  xl:ml-0 ml-2"
              >
              {{ latestBookingHistory?.rooms[0]?.category }}
            </h5>
            </div>
            <div class="flex flex-row items-center gap-3">
              <div class="flex flex-row items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40"
                  height="40"
                  viewBox="0 0 54 55"
                  fill="none"
                >
                  <rect width="54" height="55" fill="url(#pattern1)" />
                  <defs>
                    <pattern
                      id="pattern1"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_999_257"
                        transform="matrix(0.0203704 0 0 0.02 -0.00925926 0)"
                      />
                    </pattern>
                    <image
                      id="image0_999_257"
                      width="50"
                      height="50"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADE0lEQVR4nO2Zz29NQRTHP0kpFhKJtqIhFmqDhGoiaGJh1YX+sLKzsrARJEIt6AIJ7UaQNNbix0JsLRC0dIU/QJTkVcXCRoSi3hs5yZlmTOfe96O9r/Pa900m9809c2bme8+vue9C6egCJgCjLaf35gtZzz+DnLOIu1itzD8DO3lSP/b5a4/IIeBzwLx+8xea72ZRbJzstY8ASiERExEDTIaIFDNlbK5lkuRLhkgusvRrKiXS5S2WRUHMlTF/xURig6kTqTWLmBprs7DoiNQKTJ1IZDBL3iImlmCeq0UWHZEYZII6EVO3CHXXMkSctQrAE+A40A6sTVivEHP6fQRspTR0AE+zJFKJ7I93byPQD4zq31C/9ToKnAM2pOxjwYjIJrv190pgCJgqYrkpYBBojInIMb22AGM6Lg/cAQ4C64Hleu0G7qrc6PimWIhYS1gS74GdpKMdGNfxL1U/CiKDDolmSkOzQ+bSQmatESewxef/BiyxG7jlte2OfJe6mei3LhSRk6rXr32JCR8DwC/gtdP2eWPuqf7p+SZSrmxUZRLYPh6oPA09qu/XlGvAt3I3U0yeJrOfKyQr+XgHvAXeAF+A60CDN6ZV9T8F9JuqXUdMoCasAr5qVjoM3NZxR71xK5z5p5WQuFtnJRudC5HJFIv4xKaBhwkWCbUbwLJqERlRma3uFvs1uI9of5MeFCVzuehV/We66c3AeeCH3r9Z7awlFdvFav2u/l0z2kfd3DZv3H3VP+vd3+OQ6cySyAuvjuS1YrsQdxsGnqvf7wicgEXvJ7AusKcLodRejMhccFXnHi+jsrcAH1TvcsKYtlBGy5KIZJ5XDhmp2GnocEiM6aEyaV6jRbUqRFBLWDJ5daUezUqNeu3VmLCnX0nNa1LmtBaZqCYR+wSvqM+XEmdDReYbCMWIzfdZNHlDPOGsJW+AZzTIJ9U15OOnpNhTWiCNFtMDCST26gMp6O8Z9GVMRtrjQGZKwrDzEC4CW/S9pE0tYa0qx5qo0eCQCTWxhJCYVdljhRzrJQYk24kLSmBL/z93+gdBclQRc72kPwAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
                <h5 class="text-black-200">Booking Date</h5>
              </div>
              <h5 class="font-bold text-[1a6px] text-black-200 ">
                {{ formatDate(latestBookingHistory?.check_in) }} - {{ formatDate(latestBookingHistory?.check_out) }}

              </h5>
            </div>
            
          </div>
        </div>
      </div>
    </div>

    <SelectableTable />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";

import axios from "axios";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import SelectableTable from "./BookingHistoryTable.vue";

export default {
  components: {
    SelectableTable,
  },
  mounted() {
    this.getBookingHistory();
    const runtimeConfig = useRuntimeConfig();
    const guest_id = this.$route.query.guest_id;
    const cookies = document.cookie.split(";");
    const authTokenCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("auth_token=")
    );
    if (authTokenCookie) {
      const authToken = authTokenCookie.split("=")[1];
      console.log("Auth Token:", authToken);

      const headers = {
        Authorization: `Bearer ${authToken.replace(/%7C/g, "|")}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID, // Ensure this key is valid
      };

      console.log("Headers", headers);
      axios
        .get(`https://api.sueennature.com/guests/guest/${guest_id}`, {
          headers: headers,
        })
        .then((response) => {
          console.log("RES", response.data);
          this.firstName = response.data.first_name;
          this.lastName = response.data.last_name;
          this.email = response.data.email;
          if (response.data.telephone === null) {
            this.phoneNumber = "Not Available";
          } else {
            this.phoneNumber = response.data.telephone;
          }
          if (response.data.address === null) {
            this.address = "Not Available";
          } else {
            this.address = response.data.address;
          }
        })
        .catch((error) => console.error("Error:", error));
    } else {
      console.log("Auth Token not found in cookies.");
         // }
         toast.error("Please login again through booking page")
         setTimeout(()=>{
          this.$router.push({
              path: "/",
            });
         },1500)
    }

    if (authTokenCookie) {
      const authToken = authTokenCookie.split("=")[1];
      console.log("Auth Token:", authToken);

      const headers = {
        Authorization: `Bearer ${authToken.replace(/%7C/g, "|")}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID, // Ensure this key is valid
      };
      console.log("Headers", headers);
      axios
        .get("https://admin.sueennature.com/api/user/current-booking", {
          headers: headers,
        })
        .then((response) => {
          console.log("Booking", response.data.currentBooking);
          this.apiRespone = response.data.currentBooking;
          this.refID = response.data.currentBooking.reqid;
          this.checkIN = response.data.currentBooking.check_in;
          this.checkOut = response.data.currentBooking.check_out;
          this.roomCapacity = response.data.currentBooking;
          this.roomType = response.data.RoomType[0];
        })
        .catch((error) => console.error("Error:", error));
    } else {
      console.log("Auth Token not found in cookies.");
    }
    if (authTokenCookie) {
      const authToken = authTokenCookie.split("=")[1];
      console.log("Auth Token:", authToken);

      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID, // Ensure this key is valid
      };
      console.log("Headers", headers);
      axios
        .get("https://admin.sueennature.com/api/user/history-booking", {
          headers: headers,
        })
        .then((response) => {
          console.log("BookingList", response.data.bookingHistory);
        })
        .catch((error) => console.error("Error:", error));
    } else {
      console.log("Auth Token not found in cookies.");
      toast.error("Please login again through booking page")
         setTimeout(()=>{
          this.$router.push({
              path: "/",
            });
         },1500)
    }
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      emailFromParams: "",
      address: "",
      editModeFirstName: false,
      editModeLastName: false,
      editModePhoneNumber: false,
      editModeEmail: false,
      latestBookingHistory: "",
      editModeAddress: false,
      checkIN: "",
      checkOut: "",
      refID: "",
      roomCapacity: "",
      roomType: "",
      apiRespone: [],
      roomType: [],
    };
  },
  computed: {
    totalPeople() {
      return this.roomCapacity.adults + this.roomCapacity.child;
    },
    formattedCheckIN() {
      return this.formatDate(this.checkIN);
    },
    formattedCheckOut() {
      return this.formatDate(this.checkOut);
    },
  },
  methods: {
    logout() {
      this.$auth.setAuthToken(null);
      localStorage.removeItem("userEmail");
      localStorage.removeItem("guest_id");
      this.$router.push("/home");
    },
    getChildCapacity(childString) {
      return parseInt(childString.replace(/[\[\]]/g, ""));
    },
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
    async updateUserProfile() {
      const runtimeConfig = useRuntimeConfig();
      const guest_id = this.$route.query.guest_id;

      if (
        this.editModeFirstName ||
        this.editModeLastName ||
        this.editModeEmail ||
        this.editModePhoneNumber ||
        this.editModeAddress
      ) {
        toast.error("Please save your changes");
        return;
      }

      const body = {
        name: this.firstName,
        lname: this.lastName,
        phone: this.phoneNumber,
        email: this.email,
        address: this.address,
      };

      const cookies = document.cookie.split(";");
      const authTokenCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("auth_token=")
      );
      if (!authTokenCookie) {
        console.error("Auth Token not found in cookies.");
        return;
      }
      const authToken = authTokenCookie.split("=")[1];
      console.log("TOKEN", authToken);

      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID, // Ensure this key is valid
      };

      try {
        const response = await axios.put(
          `https://api.sueennature.com/guests/${guest_id}`,
          body,
          { headers }
        );
        console.log("Update successful:", response.data);
        toast.success("User Updated Successfully");
        // window.location.reload();
      } catch (error) {
        console.error("Error updating profile:", error);
        this.setupToastError("An error occurred. Please try again later.");
      }
    },
    async getBookingHistory() {
      const runtimeConfig = useRuntimeConfig();
      const guest_id = this.$route.query.guest_id;

      if (
        this.editModeFirstName ||
        this.editModeLastName ||
        this.editModeEmail ||
        this.editModePhoneNumber ||
        this.editModeAddress
      ) {
        toast.error("Please save your changes");
        return;
      }

      const body = {
        guest_id: guest_id,
      };

      const cookies = document.cookie.split(";");
      const authTokenCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("auth_token=")
      );
      if (!authTokenCookie) {
        console.error("Auth Token not found in cookies.");
        return;
      }
      const authToken = authTokenCookie.split("=")[1];
      console.log("TOKEN", authToken);

      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID, // Ensure this key is valid
      };

      try {
        const response = await axios.post(
          `https://api.sueennature.com/bookings/guest/history`,
          body,
          { headers }
        );
        this.originalBookingHistory = response.data;
        if (
          this.originalBookingHistory &&
          this.originalBookingHistory.length > 0
        ) {
          const latestBooking =
            this.originalBookingHistory[this.originalBookingHistory.length - 1];
          this.latestBookingHistory = latestBooking;
          console.log(this.latestBooking);
        }

        toast.success("Retrived Successfully");
      } catch (error) {
        console.error("Error updating profile:", error);
        this.setupToastError("An error occurred. Please try again later.");
      }
    },
    toggleEditFirstName() {
      this.editModeFirstName = !this.editModeFirstName;
    },
    toggleEditLastName() {
      this.editModeLastName = !this.editModeLastName;
    },
    toggleEditPhoneNumber() {
      this.editModePhoneNumber = !this.editModePhoneNumber;
    },
    toggleEditEmail() {
      this.editModeEmail = !this.editModeEmail;
    },
    toggleEditAddress() {
      this.editModeAddress = !this.editModeAddress;
    },
  },
};
</script>
<style scoped>
h2,
h6 {
  font-family: "Philosopher", sans-serif;
}
h3,
h5,
h4,
label,
select,
.buttontext,
p,
input,
span {
  font-family: "Barlow", sans-serif;
}

input[type="date"] {
  color: #d79109;
  outline: none;
  border: none;
  color-scheme: #d79109;
}

::-webkit-calendar-picker-indicator {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23D79109" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
}
</style>
