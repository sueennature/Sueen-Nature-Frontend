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
            :src="`https://admin.sueennature.com/uploads/${
              JSON.parse(selectedRoomType.image)[0]
            }`"
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
              <h5 class="xl:text-xl text-sm text-black-200 font-semibold">
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

        <!-- Activities -->
        <div
          class="w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-14"
        >
          <h6 class="text-black-200 xl:text-lg text-base font-bold">
            Activities
          </h6>
          <div
            class="flex items-center mb-4 mt-8"
            v-for="(activity, index) in activities"
            :key="activity.id"
          >
            <input
              :id="'checkbox-' + activity.id"
              v-model="activity.checked"
              type="checkbox"
              :value="activity.id"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              :for="'checkbox-' + activity.id"
              class="ms-2 text-[17px] font-medium text-gray-900 dark:text-gray-300 flex items-center justify-between w-full"
            >
              {{ activity.name }} -
              <strong>LKR {{ formatPrice(activity.amount) }}</strong>
            </label>
          </div>

          <!-- <img
            :src="`https://admin.sueennature.com/uploads/${activity.image}`"
            alt="roomImg"
            class="w-full object-cover"
          /> -->
        </div>

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
            v-for="(n, index) in roomRaw(item.selectedRooms)"
            :key="`${index}-${n}`"
          >
            <div
              class="lg:flex lg:flex-row flex-col items-baseline justify-between mt-4 space-y-2"
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
                    <option
                      v-for="index in selectedRoomType.name === 'Single Room'
                        ? 1
                        : selectedRoomType.name === 'Double Room'
                        ? 2
                        : selectedRoomType.name === 'Deluxe Room'
                        ? 3
                        : selectedRoomType.name === 'Family Room'
                        ? 4
                        : '0'"
                      :key="index"
                      :value="index"
                    >
                      {{ index }}
                    </option>
                  </select>
                </form>
                <form class="max-w-sm w-full">
                  <select
                    id="children"
                    class="bg-white border border-black-200 text-black-200 xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full lg:p-2.5 px-1 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    @change="updateRoomPeopleCount(item, n, 'child', $event)"
                  >
                    <option selected>Children</option>
                    <option
                      v-for="index in selectedRoomType.name === 'Single Room'
                        ? 1
                        : selectedRoomType.name === 'Double Room'
                        ? 2
                        : selectedRoomType.name === 'Deluxe Room'
                        ? 3
                        : selectedRoomType.name === 'Family Room'
                        ? 4
                        : '0'"
                      :key="index"
                      :value="index"
                    >
                      {{ index }}
                    </option>
                  </select>
                </form>
                <form class="max-w-sm w-full">
                  <select
                    id="infants"
                    class="bg-white border border-black-200 text-black-200 xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full lg:p-2.5 px-1 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    @change="updateRoomPeopleCount(item, n, 'infants', $event)"
                  >
                    <option selected>Infants</option>
                    <option v-for="index in 4" :key="index" :value="index">
                      {{ index }}
                    </option>
                  </select>
                </form>
              </div>
            </div>
            <div
              v-if="item"
              v-for="(age, index) in item[n]?.infants"
              :key="'infant-' + index"
              class="flex items-baseline justify-between mt-4"
            >
              <h5 class="text-black font-medium xl:text-lg text-sm">
                Select age of infant {{ index + 1 }}
              </h5>

              <form class="max-w-sm">
                <select
                  :id="'infant-age-' + index"
                  required
                  class="bg-white border border-gray-100 text-black xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled selected>Age</option>
                  <option
                    v-for="year in 3"
                    :key="'year-' + year"
                    :value="year - 1"
                  >
                    {{ year - 1 }}
                  </option>
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
            class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            type="button"
          >
            Proceed As a Guest
          </button>
          <span class="text-black-200 text-base font-bold">OR</span>
          <div>
            <button
              @click="getClickMethod"
              type="button"
              class="mt-8 buttontext uppercase text-white bg-black-50 bg-opacity-50 hover:bg-black-50 hover:bg-opacity-50 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 px-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              {{ isSignedIn ? "Sign Off" : "Sign In" }}
            </button>
          </div>
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
            checked
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
            <!-- SOCIAL MEDIA LOGIN -->
            <SocialLogin />

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
            <!-- Modal -->
            <form action="#" class="space-y-6 mt-4" @submit.prevent="register">
              <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
                <input
                  type="text"
                  v-model="registerUser.name"
                  placeholder="Name"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                />
                <input
                  type="text"
                  v-model.trim="registerUser.lname"
                  placeholder="Last Name"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                />
              </div>
              <div class="">
                <input
                  type="text"
                  v-model.trim="registerUser.email"
                  placeholder="you@email.com"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md"
                />
              </div>
              <div class="relative">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model.trim="registerUser.password"
                  placeholder="Password"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md pr-10"
                />
                <button
                  @click="togglePasswordVisibility"
                  class="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <span v-if="showPassword">🔓</span>
                  <span v-else>🔒</span>
                </button>
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
                <div class="mt-5">
                  <button
                    type="submit"
                    class="w-full bg-red-100 py-3 text-center text-white rounded-md block text-decoration-none"
                  >
                    REGISTER
                  </button>
                </div>
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
            <!-- SOCIAL LOGIN -->
            <SocialLogin />

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

            <form @submit.prevent="login" class="space-y-6 mt-4">
              <div>
                <input
                  v-model="loginUser.email"
                  type="text"
                  placeholder="you@email.com"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md"
                />
                <p v-if="errors.email" class="error">{{ errors.email[0] }}</p>
              </div>

              <div class="relative">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  v-model="loginUser.password"
                  placeholder="Password"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md pr-10"
                />
                <p v-if="errors.password" class="error">
                  {{ errors.password[0] }}
                </p>
                <button
                  @click="togglePasswordVisibility"
                  class="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <span v-if="showPassword">🔓</span>
                  <span v-else>🔒</span>
                </button>
              </div>
              <div class="mt-5">
                <div class="text"></div>
                <button
                  type="submit"
                  class="w-full bg-red-100 py-3 text-center text-white rounded-md block"
                >
                  Log In
                </button>
              </div>

              <!-- <div class="flex flex-row mt-4 items-center text-md space-x-1">
                <p>Don't have an account?</p>
                <button @click="redirectToRegister" id="toggle-modal-button" class="block text-red-100 font-medium text-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Register Here</button>
              </div>-->
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
import { apiRequest } from "@/utils/api";
import { useNuxtApp } from "#app";
import SocialLogin from "./SocialLogin.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  components: {
    CheckoutAvailability,
    SocialLogin,
  },
  data() {
    return {
      showPassword: false,
      showGuestInfo: false,
      showYourInfo: true,
      isSignedIn: false,
      isModalOpen: false,
      isModalVisible: false,
      isModal2Visible: false,
      selectedInfants: 0,
      infantAges: [],
      room_types: [],
      roomsList: [],
      boardType: [],
      mealPlans: [],
      activities: [],
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
      registerUser: {
        name: "",
        lname: "",
        email: "",
        password: "",
      },
      loginUser: {
        email: "",
        password: "",
      },
      errors: {
        email: [],
        password: [],
      },
    };
  },
  methods: {
    getClickMethod() {
      if (this.isSignedIn) {
        localStorage.removeItem("userEmail");
      } else {
        this.toggleModal();
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    async login() {
      if (!this.loginUser.email || !this.loginUser.password) {
        this.setupToastError("Please fill in all fields.");
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.loginUser.email)) {
        this.setupToastError("Please enter a valid email address.");
        return;
      }
      try {
        const response = await apiRequest(
          "https://admin.sueennature.com/api/login",
          "POST",
          {
            email: this.loginUser.email,
            password: this.loginUser.password,
          }
        );
        this.nuxtApp.$auth.setAuthToken(response.access_token);
        localStorage.setItem("userEmail", this.loginUser.email);

        this.setupToastSucess("Succcessfully Logged In");
        setTimeout(() => {
          this.$router.push({
            path: "/dashboard",
            query: { email: this.loginUser.email },
          });
        }, 3000);
      } catch (error) {
        this.setupToastError("An error occurred. Please try again later.");
        console.log("ERR", error.message);
      }
    },

    logout() {
      this.$auth.logout();
      this.$router.push("/login");
    },
    async register() {
      if (
        !this.registerUser.name ||
        !this.registerUser.lname ||
        !this.registerUser.email ||
        !this.registerUser.password
      ) {
        this.setupToastError("Please fill in all fields.");
        return;
      }

      if (this.registerUser.password.length < 8) {
        this.setupToastError(
          "The password field must be at least 8 characters"
        );
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.registerUser.email)) {
        this.setupToastError("Please enter a valid email address.");
        return;
      }
      const response = await apiRequest(
        "https://admin.sueennature.com/api/register",
        "POST",
        {
          name: this.registerUser.name,
          lname: this.registerUser.lname,
          email: this.registerUser.email,
          password: this.registerUser.password,
        }
      );
      try {
        this.nuxtApp.$auth.setAuthToken(response.access_token);
        this.setupToastSucess("Succcessfully Registered");
        setTimeout(() => {
          this.$router.push({
            path: "/dashboard",
            query: { email: this.registerUser.email },
          });
        }, 3000);
      } catch (error) {
        this.setupToastError("An error occurred. Please try again later.");
        console.log(error);
      }
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    redirectToRegister() {
      // Redirect to the registration page
      this.$router.push("/register");
    },
    toggleGuestInfo(event) {
      if (event.target.value === "Yes") {
        this.showGuestInfo = true;
        this.showYourInfo = false;
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
    setupToastSucess(message) {
      toast.success(message, {
        autoClose: 3000,
      });
    },
    setupToastError(message) {
      toast.error(message, {
        autoClose: 3000,
      });
    },
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
        console.log("rooms list", this.roomsList);
      }
    },
    removeItemFromRoomsList(index) {
      this.price -= parseFloat(this.roomsList[index].price);
      this.roomsList.splice(index, 1);
    },
    updateRoomsCount(item, event) {
      console.log("updateRoomsCount ", item);
      console.log("ROOMS UPDATED", this.roomsList);
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

        if (peopleType === "infants") {
          this.infantAges = Array.from({ length: event.target.value }, () => 0);
        }

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
      let roomRatesTotal = this.roomsList.reduce((total, room) => {
        const roomCount = room.selectedRooms === "" ? "0" : room.selectedRooms;
        total = total + parseFloat(room.price) * parseInt(roomCount);
        return total;
      }, 0);

      let activitiesTotal = this.activities.reduce((total, activity) => {
        if (activity.checked) {
          total += parseFloat(activity.amount);
        }
        return total;
      }, 0);

      return roomRatesTotal + activitiesTotal;
    },

    scrollToBottom() {
      this.$refs.paymentInfoRef?.scrollIntoView({ behavior: "smooth" });
    },
    handleSubmit: async function () {
      const cookies = document.cookie.split(";");
      const authTokenCookie = cookies.find((cookie) =>
        cookie.trim().startsWith("auth_token=")
      );
      if (!authTokenCookie) {
        console.error("Auth Token not found in cookies.");
      }
      const authToken = authTokenCookie?.split("=")[1];

      const headers = {
        "Content-Type": "application/json",
      };

      if (authToken) {
        headers.Authorization = `Bearer ${authToken.replace(/%7C/g, "|")}`;
      }

      console.log("BODYHeader", headers);

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
      const selectedActivities = this.activities
        .filter((activity) => activity.checked)
        .map((activity) => ({
          activity_id: activity.id,
          activity_name: activity.name,
        }));
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
      this.form.activities = selectedActivities;

      // console.log(this.form);
      // return;

      console.log("FORM DATA", this.form);

      // await fetch("https://admin.sueennature.com/api/booking", {
      //   method: "POST",
      //   headers: headers,
      //   body: JSON.stringify(this.form),
      // })
      //   .then((response) => {
      //     console.log("RESPONSE ", response);
      //     return response.json();
      //   })
      //   .then((data) => {
      //     console.log("RESPONSE SUCCESS ", data);
      //     if (data.error) {
      //       throw new Error(data.error);
      //     }
      //     toast.success("Your hotel booking has been successfully confirmed. Proceeding to payment.");
      //     // window.location.href = data.ipg;
      //   })
      //   .catch((error) => {
      //     console.log("RESPONSE ERROR ", error);
      //     console.error("There has been a problem with your fetch operation:", error);
      //     if (error instanceof Error) {
      //       toast.error(error.message);
      //     } else {
      //       toast.error("An unknown error occurred.");
      //     }
      //   });
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
    const cookies = document.cookie.split(";");
    const authTokenCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("auth_token=")
    );
    this.isSignedIn = !!authTokenCookie;
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

    fetch("https://admin.sueennature.com/api/get-services")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        this.activities = data.services;
        console.log("SER", data);
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  },
  setup() {
    const nuxtApp = useNuxtApp();
    const roomsList = ref([]);

    const beforeUnloadListener = (event) => {
      if (roomsList.value.length > 0) {
        event.preventDefault();
        event.returnValue =
          "You have unsaved changes! Are you sure you want to leave?";
      }
    };

    const isLoggedIn = computed(() => authStore.token !== null);

    onMounted(() => {
      window.addEventListener("beforeunload", beforeUnloadListener);
    });

    onUnmounted(() => {
      window.removeEventListener("beforeunload", beforeUnloadListener);
    });

    return {
      isLoggedIn,
      roomsList,
      nuxtApp,
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

<style scoped>
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
#nationality {
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 10 6'%3e %3cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
}
</style>
