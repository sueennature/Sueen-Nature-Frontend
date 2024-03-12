<template>
  <div class="container my-20">
    <h2 class="text-black-100 md:text-4xl text-3xl text-center">
      Check Availability
    </h2>
    <!--checkoutavilability booking options selector -->
    <div class="mt-8">
      <CheckoutAvailability />
    </div>

    <h2 class="text-black-100 md:text-4xl text-3xl text-center mt-20 mb-10">
      Room Selection
    </h2>
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-20 gap-y-16" v-if="selectedRoomType">
      <!-- room image with paragraph -->
      <div>
        <div class="relative">
          <img
            :src="selectedRoomType.image"
            alt="roomImg"
            class="w-full object-cover"
          />
          <div
            class="absolute lg:top-10 top-16 bg-white bg-opacity-80 text-xl text-black-200 py-2 px-8 rounded-r-md image-label"
          >
            {{ selectedRoomType.name }}
          </div>
        </div>
        <p class="text-gray-300 text-base mt-8">
          {{ selectedRoomType.description}}
        </p>
      </div>
      <!-- room selector options -->
      <div>
        <!-- Card about special rate -->
        <div
          class="w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="lg:flex grid grid-cols-1 justify-between gap-2">
            <h6 class="text-red-100 xl:text-lg text-base font-bold">
              Special Rate (After 30% Discount)
            </h6>
            <div
              class="flex flex-row lg:justify-center items-baseline space-x-2"
            >
              <h5 class="xl:text-lg text-sm text-black-200">Starting:</h5>
              <h5 class="xl:text-xl text-sm text-black-200 font-semibold">
                LKR 13, 300
              </h5>
            </div>
          </div>
          <div class="lg:flex lg:justify-end justify-start">
            <form class="max-w-xs w-28">
              <select
                id="rates"
                class="text-black-200 bg-transparent pl-0 placeholder:text-black-200 border-none focus:ring-0 xl:text-base text-sm font-semibold block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>View Rates</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </form>
          </div>
        </div>
        <h5 class="text-black-200 font-semibold mt-4">{{ selectedRoomType.name }}</h5>
        <hr
          class="h-px w-full bg-black-200 bg-opacity-30 border-none border-opacity-20 mt-2"
        />

        <ul class="w-full mt-4">
          <li class="pb-3 sm:pb-4">
            <div
              class="flex items-center justify-between space-x-4 rtl:space-x-reverse"
            >
              <div class="flex-shrink-0 lg:w-40 w-14">
                <h5 class="xl:text-lg text-sm text-black-200">
                  Bed & Breakfast
                </h5>
              </div>
              <div class="">
                <h5
                  class="xl:text-xl text-sm font-semibold text-black-200 truncate dark:text-white"
                >
                   LKR {{ selectedRoomType.bread_breakfast}}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 whitespace-nowrap"
                  @click="addItemToRoomsList({ name: selectedRoomType.name, type: 'Bed & Breakfast', price: selectedRoomType.bread_breakfast, selectedRooms: '' })"
                >
                  Add now
                </button>
              </div>
            </div>
          </li>
          <li class="pb-3 sm:pb-4">
            <div
              class="flex items-center justify-between space-x-4 rtl:space-x-reverse"
            >
              <div class="flex-shrink-0 lg:w-40 w-14">
                <h5 class="xl:text-lg text-sm text-black-200">Half Board</h5>
              </div>
              <div class="">
                <h5
                  class="xl:text-xl text-sm font-semibold text-black-200 truncate dark:text-white"
                >
                   LKR {{ selectedRoomType.half_board}}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  @click="addItemToRoomsList({ name: selectedRoomType.name, type: 'Half Board', price: selectedRoomType.half_board, selectedRooms: ''})"
                >
                  Add now
                </button>
              </div>
            </div>
          </li>
          <li class="pb-3 sm:pb-4">
            <div
              class="flex items-center justify-between space-x-4 rtl:space-x-reverse"
            >
              <div class="flex-shrink-0 lg:w-40 w-14">
                <h5 class="xl:text-lg text-sm text-black-200">Full board</h5>
              </div>
              <div class="">
                <h5
                  class="xl:text-xl text-sm font-semibold text-black-200 truncate dark:text-white"
                >
                  LKR {{selectedRoomType.full_board}}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  @click="addItemToRoomsList({ name: selectedRoomType.name, type: 'Full Board', price: selectedRoomType.full_board, selectedRooms: ''})"
                >
                  Add now
                </button>
              </div>
            </div>
          </li>
          <li class="pb-3 sm:pb-4">
            <div
              class="flex items-center justify-between space-x-4 rtl:space-x-reverse"
            >
              <div class="flex-shrink-0 lg:w-40 w-14">
                <h5 class="xl:text-lg text-sm text-red-100">Room Only</h5>
              </div>
              <div class="">
                <h5
                  class="xl:text-xl text-sm font-semibold text-black-200 truncate dark:text-white"
                >
                  LKR {{selectedRoomType.room_only}}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  @click="addItemToRoomsList({ name: selectedRoomType.name, type: 'Room only', price: selectedRoomType.room_only, selectedRooms: ''})"
                >
                  Add now
                </button>
              </div>
            </div>
          </li>
        </ul>
        <!-- Card about Basic rates -->
        <div
          class="w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="flex justify-between items-center">
            <h6 class="text-black-200 xl:text-lg text-base font-bold">
              Basic Rates
            </h6>
            <div class="flex flex-row justify-center items-baseline space-x-2">
              <h5 class="xl:text-lg text-sm text-black-200">Starting:</h5>
              <h5 class="xl:text-lg text-sm text-black-200 font-semibold">
                LKR 19, 900
              </h5>
            </div>
          </div>
          <div class="flex justify-end">
            <form class="max-w-xs">
              <select
                id="rates"
                class="text-black-200 bg-transparent placeholder:text-black-200 border-none focus:ring-0 xl:text-base text-sm font-semibold block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>View Rates</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </form>
          </div>
        </div>
        <!-- Card about Single Room - Special Rate  -->
        <div
          class="w-full p-6 bg-white xl:text-lg text-base font-semibold border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-14"
          v-for="(item, index) in roomsList" :key="index"
        >
          <h5>{{selectedRoomType.name}} - Special Rate (4 Rooms Available)</h5>
          <hr
            class="h-px w-full bg-black-200 bg-opacity-30 border-none border-opacity-20 mt-2"
          />
          <div class="flex items-baseline justify-between mt-4">
            <h5 class="text-black-200 font-medium xl:text-lg text-sm">
              {{item.type}}
            </h5>

            <form class="max-w-sm">
              <select
                id="rooms"
                class="bg-white border border-red-100 text-black-200 xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                v-model="item.selectedRooms"
                @change="updateRoomsCount(item, $event)"
              >
                <option selected>Rooms</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </form>
          </div>
          <div
            class="lg:flex lg:flex-row flex-col items-baseline justify-between mt-4 space-y-2"
            v-for="n in roomRaw(item.selectedRooms)" :key="`${index}-${n}`"
          >
            <div class="flex items-center">
              <h5 class="text-black-200 font-medium xl:text-lg text-sm">
                <span>Room :</span> <span>{{n}}</span>
              </h5>
            </div>
            <div class="flex lg:space-x-4 space-x-1">
              <form class="max-w-sm w-full">
                <select
                  id="adults"
                  class="bg-white border border-black-200 text-black-200 xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full lg:p-2.5 px-1 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Adults</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </form>
              <form class="max-w-sm w-full">
                <select
                  id="children"
                  class="bg-white border border-black-200 text-black-200 xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full lg:p-2.5 px-1 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Children</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </form>
              <form class="max-w-sm w-full">
                <select
                  id="infants"
                  class="bg-white border border-black-200 text-black-200 xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full lg:p-2.5 px-1 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Infants</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </form>
            </div>
          </div>
      
          <button
            type="button"
            class="mt-8 buttontext uppercase text-white bg-black-50 bg-opacity-50 hover:bg-black-50 hover:bg-opacity-50 focus:ring-none font-bold rounded-sm lg:text-base text-sm px-8 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            @click="removeItemFromRoomsList(index)"
          >
            Remove
          </button>
        </div>
        <!-- price brakedown section -->
        <h5 class="text-black-200 font-semibold lg:text-lg text-base mt-14">
          Price Breakdown
        </h5>
        <hr
          class="h-px w-full bg-black-200 bg-opacity-30 border-none border-opacity-20 mt-2"
        />
        <h5 class="text-red-100 font-medium lg:text-lg text-base mt-8">
          Special Rate (After 30% Discount)
        </h5>
        <div class="flex justify-between mt-4"  v-for="(item, index) in roomsList" :key="index">
          <h5 class="lg:text-base text-sm text-black-200 text-opacity-80">
            {{item.name}}-{{item.type}}
          </h5>
          <h5 class="lg:text-base text-sm text-black-200 text-opacity-80">
            LKR {{item.price}}
          </h5>
        </div>

        <hr
          class="h-px w-full bg-black-200 bg-opacity-30 border-none border-opacity-20 mt-4"
        />
        <div class="flex justify-between mt-4">
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            Total Room Rates
          </h5>
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            LKR {{price}}
          </h5>
        </div>
        <div class="flex justify-between mt-4">
          <h5 class="lg:text-base text-sm font-medium text-black-200">Tax</h5>
          <h5 class="lg:text-base text-sm font-medium text-black-200">0</h5>
        </div>
        <hr
          class="h-px w-full bg-black-200 bg-opacity-30 border-none border-opacity-20 mt-4"
        />
        <div class="flex justify-between mt-4">
          <h5 class="lg:text-base text-sm font-bold text-black-200">Total</h5>
          <h5 class="lg:text-base text-sm font-bold text-black-200">
            LKR {{price}}
          </h5>
        </div>
        <button
          type="button"
          class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          proceed
        </button>
        <!-- end of price breakdown section -->
      </div>
    </div>

    <!-- Guest Info & Payment section -->
    <h2 class="text-black-100 md:text-4xl text-3xl text-center mt-20 mb-10">
      Guest Info & Payment
    </h2>
    <!-- checkbox section -->
    <div class="flex justify-center space-x-2">
      <h5 class="text-black-200 lg:text-lg text-sm font-medium">
        Are you booking for someone else?
      </h5>
      <div class="flex items-center me-4">
        <input
          id="inline-radio"
          type="radio"
          value=""
          name="inline-radio-group"
          class="w-4 h-4 text-black-200 bg-white border-black-200 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="inline-radio"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >Yes</label
        >
      </div>
      <div class="flex items-center me-4">
        <input
          id="inline-2-radio"
          type="radio"
          value=""
          name="inline-radio-group"
          class="w-4 h-4 text-black-200 bg-white border-black-200 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="inline-2-radio"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >No</label
        >
      </div>
    </div>
    <h5 class="text-red-100 font-semibold text-2xl uppercase mt-8">
      your info
    </h5>
    <!-- user information form -->

    <form class="mt-4">
      <div class="grid gap-6 md:grid-cols-2 grid-cols-1">
        <div>
          <label
            for="first_name"
            class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
            >First name *</label
          >
          <input
            type="text"
            id="first_name"
            class="bg-white border border-black-200 text-black-200 placeholder:text-black-200 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
            >Last name *</label
          >
          <input
            type="text"
            id="last_name"
            class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
            >Phone *</label
          >
          <input
            type="tel"
            id="phone"
            class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
            >E-mail *</label
          >
          <input
            type="email"
            id="email"
            class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
      </div>
    </form>
    <h5 class="text-red-100 font-semibold text-2xl uppercase mt-8">
      guest info
    </h5>
    <!-- Guest information form -->
    <form class="mt-4">
      <div class="grid gap-6 md:grid-cols-2 grid-cols-1">
        <div>
          <label
            for="first_name"
            class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
            >First name *</label
          >
          <input
            type="text"
            id="first_name"
            class="bg-white border border-black-200 text-black-200 placeholder:text-black-200 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
            >Last name *</label
          >
          <input
            type="text"
            id="last_name"
            class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
            >Phone *</label
          >
          <input
            type="tel"
            id="phone"
            class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="email"
            class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
            >E-mail *</label
          >
          <input
            type="email"
            id="email"
            class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="nationality"
            class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
            >Nationality *</label
          >
          <input
            type="text"
            id="nationality"
            class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            required
          />
        </div>
        <div>
          <label
            for="address"
            class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
            >Address</label
          >
          <input
            type="text"
            id="address"
            class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          />
        </div>
      </div>

      <a
        href="#"
        class="lg:text-lg text-base font-medium text-red-100 underline block mt-10"
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        @click.prevent="toggleModal">View Our Terms & Conditions</a
      >
      <!-- Main modal -->
      <div
        id="default-modal"
        tabindex="-1"
        aria-hidden="true"
        class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div class="relative p-4 w-full max-w-2xl max-h-full">
          <!-- Modal content -->
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div
              class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
            >
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <!-- Modal body -->
            <div class="p-4 md:p-5 space-y-4">
              <p
                class="text-base leading-relaxed text-black-200 dark:text-gray-400"
              >
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p
                class="text-base leading-relaxed text-black-200 dark:text-gray-400"
              >
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
            <!-- Modal footer -->
            <div
              class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
            >
              <button
                data-modal-hide="default-modal"
                type="button"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- end of modal -->
      <div class="flex items-center mt-4">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-black-200 rounded bg-gray-50 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
            required
          />
        </div>
        <label
          for="remember"
          class="ms-2 lg:text-lg text-sm font-medium text-black-200 dark:text-gray-300"
          >I have read and I agree to the terms and conditions.</label
        >
      </div>

      <button
        type="button"
        class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        proceed to pay
      </button>
    </form>
  </div>
</template>

<script>
import CheckoutAvailability from "./CheckoutAvailability.vue";
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  components: {
    CheckoutAvailability
  },
  data() {
    return {
      isModalOpen: false,
      room_types: [],
      roomsList: [],
      boardType: [],
      mealPlans: [],
      price: 0,
    }
  },
  methods: {
    toggleModal(event) {
      event.preventDefault(); 
      this.isModalOpen = !this.isModalOpen;
      if (this.isModalOpen) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    },
    addItemToRoomsList(roomDetails) {
      this.roomsList.push(roomDetails);
      this.price = this.price + parseFloat(roomDetails.price);
      console.log("list", this.roomsList)
    },
    removeItemFromRoomsList(index) {
      this.price -= parseFloat(this.roomsList[index].price);
      this.roomsList.splice(index, 1);
    },
    updateRoomsCount(item, event) {

      const roomToUpdate = this.roomsList.find(room => room === item);
      if (roomToUpdate) {
        roomToUpdate.selectedRooms = event.target.value;
      }
    },
    roomRaw(selectedRooms) {
      return Array.from({ length: Number(selectedRooms) }, (_, i) => i + 1);
    },
  },
  computed: {
    roomTypeId() {
      return this.$route.query.roomTypeId;
    },
    selectedRoomType() {
      if (!this.roomTypeId || !this.room_types.length) return null;
      return this.room_types.find(room => room.id.toString() === this.roomTypeId.toString());
    }
  },
  mounted(){
    fetch('https://sueen.website/dashboard/public/api/getRoomTypes')
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
  setup() {
    const roomsList = ref([]);

    const beforeUnloadListener = (event) => {
      if (roomsList.value.length > 0) {
        event.preventDefault();
        event.returnValue = 'You have unsaved changes! Are you sure you want to leave?';
      }
    };

    onMounted(() => {
      window.addEventListener('beforeunload', beforeUnloadListener);
    });

    onUnmounted(() => {
      window.removeEventListener('beforeunload', beforeUnloadListener);
    });

    return {
      roomsList,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.roomsList.length > 0) {
      const answer = window.confirm('You have unsaved changes! Are you sure you want to leave?');
      if (answer) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  }
}
</script>

<style  scoped>
h2,
h6,
.costSelector,
.total-cost,
.image-label {
  font-family: "Philosopher", sans-serif;
}
h3,
h5,
label,
select,
.buttontext {
  font-family: "Work Sans", sans-serif;
}
p,
input {
  font-family: "Open Sans", sans-serif;
}
::marker {
  color: #c64816; /* Change this color to the desired color */
}
#room {
  /* Your existing styles here */
  background-image: none;
}
#rates {
  /* Your existing styles here */
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 10 6'%3e %3cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
  background-position: right 0rem center;
  padding-right: 1rem;
}
#rooms,
#adults,
#children,
#infants {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 10 6'%3e %3cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
}
</style>