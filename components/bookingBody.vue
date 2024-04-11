<template>
  <div class="sm:container px-4 my-20">
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
    <div
      class="grid lg:grid-cols-2 grid-cols-1 gap-x-20 gap-y-16"
      v-if="selectedRoomType"
    >
      <!-- room image with paragraph -->
      <div>
        <div class="relative">
          <img
            :src="`https://admin.sueennature.com/uploads/${selectedRoomType.image}`"
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
          {{ selectedRoomType.description }}
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
              <h5
                class="xl:text-lg whitespace-nowrap text-sm text-black-200 font-semibold"
              >
                LKR 13, 300
              </h5>
            </div>
          </div>
          <div class="lg:flex lg:justify-end justify-start">
            <!-- view Rates button -->
            <button
              id="viewRatesButton"
              type="button"
              class="text-black-200 lg:text-base text-sm font-semibold bg-transparent hover:bg-transparent focus:ring-0 focus:outline-none focus:ring-blue-300 rounded-none px-0 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Rates
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="m7 10l5 5l5-5z" />
              </svg>
            </button>
          </div>
        </div>
        <h5 class="text-black-200 font-semibold mt-4">
          {{ selectedRoomType.name }}
        </h5>
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
                  LKR {{ selectedRoomType.bread_breakfast }}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 whitespace-nowrap"
                  @click="
                    addItemToRoomsList({
                      id: selectedRoomType.id,
                      name: selectedRoomType.name,
                      type: 'Bed & Breakfast',
                      price: selectedRoomType.bread_breakfast,
                      selectedRooms: '',
                    })
                  "
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
                  LKR {{ selectedRoomType.half_board }}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  @click="
                    addItemToRoomsList({
                      id: selectedRoomType.id,
                      name: selectedRoomType.name,
                      type: 'Half Board',
                      price: selectedRoomType.half_board,
                      selectedRooms: '',
                    })
                  "
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
                  LKR {{ selectedRoomType.full_board }}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  @click="
                    addItemToRoomsList({
                      id: selectedRoomType.id,
                      name: selectedRoomType.name,
                      type: 'Full Board',
                      price: selectedRoomType.full_board,
                      selectedRooms: '',
                    })
                  "
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
                  LKR {{ selectedRoomType.room_only }}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  @click="
                    addItemToRoomsList({
                      id: selectedRoomType.id,
                      name: selectedRoomType.name,
                      type: 'Room only',
                      price: selectedRoomType.room_only,
                      selectedRooms: '',
                    })
                  "
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
            <!-- view rate button -->
            <button
              type="button"
              id="viewRatesButton1"
              class="text-black-200 lg:text-base text-sm font-semibold bg-transparent hover:bg-transparent focus:ring-0 focus:outline-none focus:ring-blue-300 rounded-none px-0 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Rates
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="m7 10l5 5l5-5z" />
              </svg>
            </button>
          </div>
        </div>
        <!-- Card about Single Room - Special Rate  -->
        <div
          class="w-full p-6 bg-white xl:text-lg text-base font-semibold border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-14"
          v-for="(item, index) in roomsList"
          :key="index"
        >
          <h5>
            {{ selectedRoomType.name }} - Special Rate (4 Rooms Available)
          </h5>
          <hr
            class="h-px w-full bg-black-200 bg-opacity-30 border-none border-opacity-20 mt-2"
          />
          <div class="flex items-baseline justify-between mt-4">
            <h5 class="text-black-200 font-medium xl:text-lg text-sm">
              {{ item.type }}
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
            v-for="n in roomRaw(item.selectedRooms)"
            :key="`${index}-${n}`"
          >
            <div class="flex items-center">
              <h5 class="text-black-200 font-medium xl:text-lg text-sm">
                <span>Room :</span> <span>{{ n }}</span>
              </h5>
            </div>
            <div class="flex lg:space-x-4 space-x-1">
              <form class="max-w-sm w-full">
                <select
                  id="adults"
                  class="bg-white border border-black-200 text-black-200 xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full lg:p-2.5 px-1 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  @change="updateRoomPeopleCount(item, n, 'adults', $event)"
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
                  @change="updateRoomPeopleCount(item, n, 'child', $event)"
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
                  @change="updateRoomPeopleCount(item, n, 'infants', $event)"
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
        <!-- Card about Additional services  -->
        <div
          class="w-full p-6 bg-white xl:text-lg text-base font-semibold border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-14"
        >
          <h5>Additional Services</h5>
          <hr
            class="h-px w-full bg-black-200 bg-opacity-30 border-none border-opacity-20 mt-2"
          />
          <div class="flex items-baseline justify-between mt-4 space-x-4">
            <form class="max-w-sm">
              <select
                id="additional_services"
                class="bg-white border border-black-200 text-black-200 xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Select Additional Services</option>
                <option value="boat">Boat Riding</option>
                <option value="yoga">Yoga and Meditation Retreats</option>
                <option value="Adventure Sports">Adventure Sports</option>
                <option value="Traditional-Dance">
                  Traditional Dance and Music Performances
                </option>
              </select>
            </form>
            <button
              type="button"
              class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 whitespace-nowrap"
            >
              Add now
            </button>
          </div>
          <div class="flex items-baseline justify-between mt-8 space-x-2">
            <h5
              class="text-black-200 font-medium xl:text-base text-xs whitespace-nowrap"
            >
              Boat Riding
            </h5>
            <h5
              class="text-black-200 font-medium xl:text-base text-xs whitespace-nowrap"
            >
              LKR 6000
            </h5>
            <a
              href="/additionalServices"
              class="text-red-100 font-medium xl:text-base text-xs whitespace-nowrap"
              >View More</a
            >
            <button
              type="button"
              class="buttontext uppercase text-white bg-black-50 bg-opacity-50 hover:bg-black-50 hover:bg-opacity-50 focus:ring-none font-bold rounded-sm lg:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Remove
            </button>
          </div>
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
        <div
          class="flex justify-between mt-4"
          v-for="(item, index) in roomsList"
          :key="index"
        >
          <h5 class="lg:text-base text-sm text-black-200 text-opacity-80">
            {{ item.name }}-{{ item.type }}
          </h5>
          <h5 class="lg:text-base text-sm text-black-200 text-opacity-80">
            LKR
            {{
              parseFloat(item.price) *
              (item.selectedRooms === "" ? 0 : parseInt(item.selectedRooms))
            }}
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
            LKR {{ getTotalRoomRates() }}
          </h5>
        </div>
        <div class="flex justify-between mt-4">
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            Additional Services
          </h5>
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            LKR 0
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
            LKR {{ getTotalRoomRates() }}
          </h5>
        </div>
        <!-- Login and Register modal popups -->
        <div class="flex flex-row space-x-4 items-baseline">
          <button
            class="whitespace-nowrap mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
          >
            Proceed As a Guest
          </button>
          <span class="text-black-200 text-base font-bold">OR</span>
          <button
            @click="toggleModal"
            type="button"
            class="whitespace-nowrap mt-8 buttontext uppercase text-white bg-black-50 bg-opacity-50 hover:bg-black-50 hover:bg-opacity-50 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 px-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Sign In
          </button>
        </div>
        <!-- end of price breakdown section -->
      </div>
    </div>

    <div ref="paymentInfoRef"></div>
    <!-- Guest Info & Payment section -->
    <h2
      class="text-black-100 md:text-4xl text-3xl text-center mt-20 mb-10"
      ref="paymentInfoRef"
    >
      Guest Info & Payment
    </h2>
    <form @submit.prevent="handleSubmit">
      <!-- checkbox section -->
      <div class="flex justify-center space-x-2">
        <h5 class="text-black-200 lg:text-lg text-sm font-medium">
          Are you booking for someone else?
        </h5>
        <div class="flex items-center me-4">
          <input
            id="inline-radio"
            type="radio"
            value="Yes"
            name="inline-radio-group"
            class="w-4 h-4 text-black-200 bg-white border-black-200 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            @change="toggleGuestInfo"
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
            value="No"
            name="inline-radio-group"
            class="w-4 h-4 text-black-200 bg-white border-black-200 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
            @change="toggleGuestInfo"
          />
          <label
            for="inline-
            2-radio"
            class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >No</label
          >
        </div>
      </div>

      <div class="text-center mt-10" v-if="showYourInfo">
        <h5 class="text-red-100 font-semibold text-2xl uppercase mt-8">
          your info
        </h5>
        <!-- user information form -->

        <!-- <form class="mt-4"> -->
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
              v-model="form.first_name"
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
              v-model="form.last_name"
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
              v-model="form.telephone"
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
              v-model="form.email"
            />
          </div>
        </div>
      </div>
      <!-- </form> -->

      <div class="text-center mt-10" v-if="showGuestInfo">
        <h5 class="text-red-100 font-semibold text-2xl uppercase mt-8">
          guest info
        </h5>
        <!-- Guest information form -->
        <!-- <form class="mt-4"> -->
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
              v-model="form.guest_first_name"
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
              v-model="form.guest_last_name"
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
              v-model="form.guest_telephone"
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
              v-model="form.guest_email"
            />
          </div>
          <div>
            <label
              for="nationality"
              class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
              >Nationality *</label
            >
            <select
              id="nationality"
              class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="form.guest_nationality"
            >
              <option selected>Local</option>
              <option value="US">Foreign</option>
            </select>
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
              v-model="form.guest_address"
            />
          </div>
        </div>
      </div>

      <a
        href="/termsAndConditions"
        class="lg:text-lg text-base font-medium text-red-100 underline block mt-10"
        >View Our Terms & Conditions</a
      >
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
        class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="submit"
      >
        proceed to pay
      </button>
    </form>
    <!-- Register and Login Modal Popup -->
    <!-- Register modal -->
    <div
      v-show="isModalVisible"
      @click="closeModal"
      class="fixed inset-0 bg-black-200 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center"
      id="modal_1"
    >
      <div @click.stop class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div
          class="relative bg-white rounded-lg shadow dark:bg-gray-700 px-10 pt-5 pb-14"
        >
          <!-- Modal header -->
          <div
            class="flex items-center justify-between border-none rounded-t dark:border-gray-600"
          >
            <button
              @click="closeModal"
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="static-modal"
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
          <div class="">
            <h2 class="text-3xl mb-4 text-center">Get Started!</h2>
            <p class="mb-12 text-center text-black-200 text-opacity-60">
              Use your social profile to register
            </p>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
              <button
                class="w-full bg-white border border-gray-400 rounded-md py-1 text-center"
              >
                <div class="flex items-center justify-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ffc107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                    />
                    <path
                      fill="#ff3d00"
                      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                    />
                    <path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                    />
                    <path
                      fill="#1976d2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                    />
                  </svg>
                  <span>Google</span>
                </div>
              </button>

              <button
                class="w-full bg-[#3b5998] boder-2 rounded-md py-1 text-center text-white"
              >
                <div class="flex items-center justify-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#fff"
                      d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                    />
                    <path
                      fill="#3b5998"
                      d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
                    />
                  </svg>
                  <span>Facebook</span>
                </div>
              </button>
            </div>
            <!-- Centered "or" text -->
            <!-- Centered "or" text -->
            <div class="flex items-center justify-center">
              <div
                class="flex-1 border-t border-black-200 border-opacity-65"
              ></div>
              <span class="px-4 text-black-200 text-opacity-65 text-sm"
                >Or</span
              >
              <div
                class="flex-1 border-t border-black-200 border-opacity-65"
              ></div>
            </div>
            <form action="#" class="space-y-6 mt-4">
              <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                />
              </div>
              <div class="">
                <input
                  type="text"
                  placeholder="you@email.com"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md"
                />
              </div>
              <div class="">
                <input
                  type="password"
                  placeholder="Password"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md"
                />
              </div>

              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded-none bg-white focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >I Agree To The
                  <a
                    href="/termsAndConditions"
                    class="font-semibold underline underline-offset-4"
                    >Terms & Conditions</a
                  >
                  And
                  <a
                    href="/privacyPolicy"
                    class="font-semibold underline underline-offset-4"
                    >Privacy Policy</a
                  >
                </label>
              </div>
              <div class="mt-5">
                <nuxt-link
                  to="/dashboard"
                  class="w-full bg-red-100 py-3 text-center text-white rounded-md block text-decoration-none"
                >
                  REGISTER
                </nuxt-link>
              </div>

              <div class="flex flex-row items-center text-md space-x-1">
                <p>Already have an account?</p>
                <button
                  @click="toggleModal_1"
                  id="toggle-modal-button"
                  class="block text-red-100 font-medium text-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Login Here
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Login modal -->
    <div
      v-show="isModal2Visible"
      @click="closeModal_1"
      class="fixed inset-0 bg-black-200 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center"
      id="modal_2"
    >
      <div class="relative p-4 w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div
          @click.stop
          class="relative p-6 bg-white rounded-lg shadow dark:bg-gray-700"
        >
          <!-- Modal header -->
          <div
            class="flex items-center justify-between border-none rounded-t dark:border-gray-600"
          >
            <button
              @click="closeModal_1"
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
          <div class="">
            <h2 class="text-3xl mb-4 text-center">Login Into Your Account!</h2>
            <p class="mb-10 text-center text-black-200 text-opacity-60">
              Use your social profile to Login
            </p>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
              <button
                class="w-full bg-white border border-gray-400 rounded-md py-1 text-center"
              >
                <div class="flex items-center justify-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#ffc107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
                    />
                    <path
                      fill="#ff3d00"
                      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
                    />
                    <path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
                    />
                    <path
                      fill="#1976d2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
                    />
                  </svg>
                  <span>Google</span>
                </div>
              </button>

              <button
                class="w-full bg-[#3b5998] boder-2 rounded-md py-1 text-center text-white"
              >
                <div class="flex items-center justify-center space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#fff"
                      d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                    />
                    <path
                      fill="#3b5998"
                      d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
                    />
                  </svg>
                  <span>Facebook</span>
                </div>
              </button>
            </div>
            <!-- Centered "or" text -->
            <div class="flex items-center justify-center">
              <div
                class="flex-1 border-t border-black-200 border-opacity-65"
              ></div>
              <span class="px-4 text-black-200 text-opacity-65 text-sm"
                >Or</span
              >
              <div
                class="flex-1 border-t border-black-200 border-opacity-65"
              ></div>
            </div>

            <form action="#" class="space-y-6 mt-4">
              <div class="">
                <input
                  type="text"
                  placeholder="you@email.com"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md"
                />
              </div>
              <div class="">
                <input
                  type="password"
                  placeholder="Password"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md"
                />
              </div>
              <div class="mt-5">
                <nuxt-link
                  to="/dashboard"
                  class="w-full bg-red-100 py-3 text-center text-white rounded-md block"
                >
                  Log In
                </nuxt-link>
              </div>

              <div class="flex flex-row mt-4 items-center text-md space-x-1">
                <p>Don't have an account?</p>
                <button
                  @click="reopenFirstModal"
                  id="toggle-modal-button"
                  class="block text-red-100 font-medium text-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Register Here
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--End of Register and Login Modal Popup -->
  </div>
</template>

<script>
import CheckoutAvailability from "./CheckoutAvailability.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { initFlowbite } from "flowbite";

export default {
  components: {
    CheckoutAvailability,
  },
  data() {
    return {
      showGuestInfo: false,
      showYourInfo: false,
      isModalOpen: false,
      isModalVisible: false,
      isModal2Visible: false,
      room_types: [],
      roomsList: [],
      boardType: [],
      mealPlans: [],
      price: 0,
      form: {
        first_name: "",
        last_name: "",
        email: "",
        telephone: "",
        address: "",
        nationality: "",
        check_in: this.$route.query.check_in,
        check_out: this.$route.query.check_out,
        rooms: [],
        guest_first_name: "",
        guest_last_name: "",
        guest_email: "",
        guest_telephone: "",
        guest_address: "",
        guest_nationality: "",
      },
    };
  },
  methods: {
    toggleGuestInfo(event) {
      if (event.target.value === "Yes") {
        this.showGuestInfo = true;
        this.showYourInfo = true;
      } else {
        this.showGuestInfo = false;
        this.showYourInfo = true;
      }
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    toggleModal_1() {
      this.isModalVisible = false; // Close the first modal if it's open.
      this.isModal2Visible = !this.isModal2Visible;
    },
    closeModal_1() {
      this.isModal2Visible = false;
    },
    reopenFirstModal() {
      this.closeModal_1(); // Close the second modal if it's open.
      this.toggleModal(); // Toggle the first modal (open it).
    },

    // toggleModal(event) {
    //   event.preventDefault();
    //   this.isModalOpen = !this.isModalOpen;
    //   if (this.isModalOpen) {
    //     document.body.classList.add("overflow-hidden");
    //   } else {
    //     document.body.classList.remove("overflow-hidden");
    //   }
    // },
    addItemToRoomsList(roomDetails) {
      const isAlreadySelected = this.roomsList.find(
        (room) =>
          `${room.id}-${room.type}` === `${roomDetails.id}-${roomDetails.type}`
      );

      if (!isAlreadySelected) {
        this.roomsList.push({
          ...roomDetails,
          rowId: this.roomsList.length + 1,
        });
        this.price = this.price + parseFloat(roomDetails.price);
        console.log("list", this.roomsList, this.fromDate, this.toDate);
      }
    },
    removeItemFromRoomsList(index) {
      this.price -= parseFloat(this.roomsList[index].price);
      this.roomsList.splice(index, 1);
    },
    updateRoomsCount(item, event) {
      console.log("updateRoomsCount ", item);
      const roomToUpdate = this.roomsList.find(
        (room) => room.rowId === item.rowId
      );
      if (roomToUpdate) {
        roomToUpdate.selectedRooms = event.target.value;
      }
    },
    roomRaw(selectedRooms) {
      return Array.from({ length: Number(selectedRooms) }, (_, i) => i + 1);
    },
    updateRoomPeopleCount(item, n, peopleType, event) {
      const roomIndex = this.roomsList.findIndex(
        (room) => room.rowId === item.rowId
      );
      if (roomIndex > -1) {
        const roomToUpdate = this.roomsList[roomIndex];

        const roomDetail = roomToUpdate[n] || {};

        roomDetail[peopleType] = parseInt(event.target.value);
        roomToUpdate[n] = roomDetail;

        this.roomsList[roomIndex] = roomToUpdate;
      }

      console.log(
        "room list with peopole count ",
        roomIndex,
        item,
        n,
        peopleType,
        this.roomsList
      );
    },
    getTotalRoomRates() {
      return this.roomsList.reduce((total, room) => {
        const roomCount = room.selectedRooms === "" ? "0" : room.selectedRooms;
        total = total + parseFloat(room.price) * parseInt(roomCount);

        return total;
      }, 0);
    },
    scrollToBottom() {
      this.$refs.paymentInfoRef?.scrollIntoView({ behavior: "smooth" });
    },
    handleSubmit: async function () {
      const formData = new FormData();

      for (let [key, value] of Object.entries(this.form)) {
        formData.append(key, value);
      }

      const mealPlanMap = {
        "Bed & Breakfast": 1,
        "Half Board": 2,
        "Full Board": 3,
        "Room only": 4,
      };

      const roomsArrangement = this.roomsList.reduce(
        (roomsArrangement, roomData) => {
          const { id, type, selectedRooms } = roomData;

          for (let index = 1; index <= parseInt(selectedRooms); index++) {
            const roomPeople = roomData[index];

            roomsArrangement.push({
              adults: roomPeople["adults"] || 0,
              child: roomPeople["child"] || 0,
              infants: roomPeople["infants"] || 0,
              room_type_id: id,
              meal_plan_id: mealPlanMap[type],
            });
          }

          return roomsArrangement;
        },
        []
      );

      this.form.rooms = roomsArrangement;

      console.log("FORM DATA", this.form);

      await fetch("https://admin.sueennature.com/api/booking", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.form),
      })
        .then((response) => {
          console.log("RESPONSE ", response);
          return response.json();
        })
        .then((data) => {
          console.log("RESPONSE SUCCESS ", data);
          if (data.error) {
            throw new Error(data.error);
          }
          window.location.href = data.ipg;
        })
        .catch((error) => {
          console.log("RESPONSE ERROR ", error);
          alert(error);
          console.error(
            "There has been a problem with your fetch operation:",
            error
          );
        });
    },
  },
  computed: {
    roomTypeId() {
      return this.$route.query.roomTypeId;
    },
    selectedRoomType() {
      if (!this.roomTypeId || !this.room_types.length) return null;
      return this.room_types.find(
        (room) => room.id.toString() === this.roomTypeId.toString()
      );
    },
  },
  mounted() {
    initFlowbite();
    fetch("https://admin.sueennature.com/api/getRoomTypes")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.room_types = data.room_types;
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  },
  setup() {
    const roomsList = ref([]);

    const beforeUnloadListener = (event) => {
      if (roomsList.value.length > 0) {
        event.preventDefault();
        event.returnValue =
          "You have unsaved changes! Are you sure you want to leave?";
      }
    };

    onMounted(() => {
      window.addEventListener("beforeunload", beforeUnloadListener);
    });

    onUnmounted(() => {
      window.removeEventListener("beforeunload", beforeUnloadListener);
    });

    return {
      roomsList,
    };
  },
  beforeRouteLeave(to, from, next) {
    if (this.roomsList.length > 0) {
      const answer = window.confirm(
        "You have unsaved changes! Are you sure you want to leave?"
      );
      if (answer) {
        next();
      } else {
        next(false);
      }
    } else {
      next();
    }
  },
};
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
.buttontext,
p,
input {
  font-family: "Barlow", sans-serif;
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
#infants,
#nationality,
#additional_services {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 10 6'%3e %3cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
}
</style>
