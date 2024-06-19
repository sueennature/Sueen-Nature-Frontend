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
    >
      <!-- room image with paragraph -->
      <div>
        <div class="relative">
          <img
            :src="room_types.image ? `https://admin.sueennature.com/uploads/${JSON.parse(room_types.image)[0]}` : ''"
            alt="roomImg"
            class="w-full object-cover"
          />

          <div
            class="absolute lg:top-10 top-16 bg-white bg-opacity-80 text-xl text-black-200 py-2 px-8 rounded-r-md image-label"
          >
            {{ room_types.name }}
          </div>
        </div>
        <p class="text-gray-300 text-base mt-8">
          {{ room_types.description }}
        </p>
      </div>
      <!-- room selector options -->
      <div>
        <!-- Card about special rate -->
         <div
          class="w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="lg:flex flex-col grid grid-cols-1 justify-between gap-2">
            <h6 class="text-red-100 xl:text-lg text-base font-bold">
              Special Rate (After {{ discount_data.discount}}% Discount)
            </h6>
            <div
              class="flex flex-col lg:justify-center items-baseline space-x-2"
            >
              <h5 class="xl:text-lg text-sm text-black-200">Starting at: {{ formatDate(discount_data.start_date)}}</h5>
              <h5 class="xl:text-lg text-sm text-black-200">Ending at: {{ formatDate(discount_data.end_date)}}</h5>
            </div>
          </div>
          <div class="lg:flex lg:justify-end justify-start">
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
          {{ room_types.name }}
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
                  LKR {{ formatPrice(room_types.bread_breakfast) }}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 whitespace-nowrap"
                  @click="
                    addItemToRoomsList({
                      id: room_types.id,
                      name: room_types.name,
                      type: 'Bed & Breakfast',
                      price: room_types.bread_breakfast,
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
                  LKR {{ formatPrice(room_types.half_board) }}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  @click="
                    addItemToRoomsList({
                      id: room_types.id,
                      name: room_types.name,
                      type: 'Half Board',
                      price: room_types.half_board,
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
                  LKR {{ formatPrice(room_types.full_board )}}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  @click="
                    addItemToRoomsList({
                      id: room_types.id,
                      name: room_types.name,
                      type: 'Full Board',
                      price: room_types.full_board,
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
                  LKR {{ formatPrice(room_types.room_only) }}
                </h5>
              </div>
              <div class="inline-flex">
                <button
                  type="button"
                  class="buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm xl:text-base text-xs lg:px-8 px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  @click="
                    addItemToRoomsList({
                      id: room_types.id,
                      name: room_types.name,
                      type: 'Room only',
                      price: room_types.room_only,
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
            {{ room_types.name }} - Special Rate (4 Rooms Available)
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
                    @change="
                      updateRoomPeopleCount(
                        item,
                        n,
                        'adults',
                        $event,
                        room_types.name
                      )
                    "
                  >
                    <option selected>Adults</option>
                    <option
                      v-for="index in room_types.name === 'Single Room'
                        ? 1
                        : room_types.name === 'Double Room'
                        ? 2
                        : room_types.name === 'Triple Room'
                        ? 3
                        : room_types.name === 'Family Room'
                        ? 4
                        : '0'"
                      :key="index"
                      :value="index"
                    >
                      {{ index }}
                    </option>
                  </select>
                </form>
                <form
                  class="max-w-sm w-full"
                  v-if="room_types.name !== 'Single Room'"
                >
                  <select
                    id="children"
                    class="bg-white border border-black-200 text-black-200 xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full lg:p-2.5 px-1 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    @change="
                      updateRoomPeopleCount(
                        item,
                        n,
                        'child',
                        $event,
                        room_types.name
                      )
                    "
                  >
                    <option selected value="0">Children</option>
                    <option
                      v-for="index in getChildrenRoomCapacity(item, n)"
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
                    @change="
                      updateRoomPeopleCount(
                        item,
                        n,
                        'infants',
                        $event,
                        room_types.name
                      )
                    "
                  >
                    <option selected value="0">Infants</option>
                    <option v-for="index in 4" :key="index" :value="index">
                      {{ index }}
                    </option>
                  </select>
                </form>
              </div>
            </div>
            <div
              v-if="item"
              v-for="(age, index) in item[n]?.child?.count"
              :key="'child-' + index"
              class="flex items-baseline justify-between mt-4"
            >
              <h5 class="text-black font-medium xl:text-lg text-sm">
                Select age of child {{ index + 1 }}  {{item[n]?.child?.childFee > 0 ? " 50%" : "Check"}}
              </h5>

              <form class="max-w-sm">
                <select
                  :id="'child-age-' + index"
                  required
                  @change="updateAges(item, n, 'child', $event)"
                  class="bg-white border  border-gray-100 text-black xl:text-base text-xs rounded-md focus:ring-none focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option disabled selected>Age</option>
                  
                  <option :key="'year-' + 1" :value="6">3-10</option>
                </select>
              </form>
            </div>
            <div
              v-if="item"
              v-for="(age, index) in item[n]?.infants?.count"
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
                  @change="updateAges(item, n, 'infants', $event)"
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
<!-- 
        <h5 class="text-red-100 font-medium lg:text-lg text-base mt-8">
          Special Rate
          <span v-if="isSpecialRateApplied">({{discount_data.discount}}%)</span>
        </h5>  -->
      
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
              parseFloat((item.price)) *
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
            LKR {{ formatPrice(getTotalRoomRates()) }}
          </h5>
        </div>
        <div class="flex justify-between mt-4">
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            Total Activities
          </h5>
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            LKR {{ formatPrice(getTotalActivities()) }}
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
            LKR {{ formatPrice(getTotalAmount()) }}
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
              for="nationality"
              class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white"
              >Nationality *</label
            >
            <select
              id="nationality"
              class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              v-model="form.nationality"
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
              required
              v-model="form.address"
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
              v-model="form.guest_info.first_name"
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
              v-model="form.guest_info.last_name"
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
              v-model="form.guest_info.telephone"
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
              v-model="form.guest_info.email"
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
              v-model="form.guest_info.nationality"
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
              v-model="form.guest_info.guest_address"
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
            <SocialLogin @login-success="handleGoogleLoginData" />

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
            <SocialLogin @login-success="handleGoogleLoginData" />

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
              <div class="flex flex-row items-center text-md space-x-1">
                <p>Don't have an account?</p>
                <button
                  @click="toggleModal"
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
import { apiRequest } from "@/utils/api";
import { useNuxtApp } from "#app";
import SocialLogin from "./SocialLogin.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";

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
      isModalOpen: false,
      isModalVisible: false,
      isModal2Visible: false,
      selectedInfants: 0,
      selectedChildren: 0,
      isSpecialRateApplied: false,
      infantAges: [],
      childrenAges: [],
      discount_data: {},
      room_types: {},
      roomsList: [],
      boardType: [],
      special_rate: 0,
      view_type_id: null,
      view_types: [],
      mealPlans: [],
      childFormAges: [],
      infantFormAges: [],
      activities: [],
      isSocialLogin: false,
      price: 0,
      roomPeopleCount: [],
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
        guest_info: {
          first_name: "",
          last_name: "",
          email: "",
          telephone: "",
          address: "",
          nationality: "",
        },
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
  watch: {
    isSpecialRateApplied(newVal, oldVal) {
      console.log(`Special rate changed from ${oldVal} to ${newVal}`);
    },
  },

  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      
      const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      
      const month = months[date.getMonth()];
      const day = date.getDate();
      const daySuffix = this.getDaySuffix(day);
      const year = date.getFullYear();

      return `${month} ${day}${daySuffix} ${year}`;
    },
    getDaySuffix(day) {
      if (day > 3 && day < 21) return 'th';
      switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
      }
    },
    getChildrenRoomCapacity(roomDataRow, roomTypeRowId) {
      const type = 'adults'
      const roomIndex = this.roomsList.findIndex(
        (room) => room.rowId === roomDataRow.rowId
      );
      let adultCount = 0;
      if (roomIndex > -1) {
        const roomToUpdate = this.roomsList[roomIndex];
        const roomDetail = roomToUpdate[roomTypeRowId] || {};
        adultCount=roomDetail[type]?.count;
   

      }
      switch (this.room_types.name) {
        case "Single Room":
          return type === "adults" ? 1 : 0;
        case "Double Room":
          return adultCount >=1 ? 1 : 0;
        case "Triple Room":
          return adultCount >= 3 ? 1 : 2;
        case "Family Room":
          return adultCount >= 4 ? 1 : adultCount >= 3 ? 2 :3 
        default:
          return 0;
      }
    },
    getClickMethod() {
      if (this.isSignedIn) {
        this.$auth.setAuthToken(null);
        localStorage.removeItem("userEmail");
        toast.success("Successfully Logged Out");
        setTimeout(() => {
          this.$router.push("/home");
        }, 2000);
      } else {
        this.toggleModal();
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    handleGoogleLoginData({ name, lname, email, password }) {
      (this.isSocialLogin = true), (this.registerUser.name = name);
      this.registerUser.lname = lname;
      this.registerUser.email = email;
      this.registerUser.password = password;
      this.loginUser.email = email;
      this.loginUser.password = password;
      this.login();
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
      )
        .then((response) => {
          console.log("Register response", response);
          this.nuxtApp.$auth.setAuthToken(response.access_token);
          this.setAuthTokenInCookie(response.access_token);
          localStorage.setItem("userEmail", this.registerUser.email);
          this.$router.push({
            path: "/dashboard",
            query: { email: this.registerUser.email },
          });
        })
        .catch((error) => {
          this.setupToastError("An error occurred. Please try again later.");
          console.log(error);
        });
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
      // try {
      const response = await axios
        .post("https://admin.sueennature.com/api/login", {
          email: this.loginUser.email,
          password: this.loginUser.password,
        })
        .then((response) => {
          console.log("Status:", response.status);
          console.log("Data:", response.data);

          this.setAuthTokenInCookie(response.data.access_token);
          this.nuxtApp.$auth.setAuthToken(response.access_token);
          localStorage.setItem("userEmail", this.loginUser.email);
          this.$router.push({
            path: "/dashboard",
            query: { email: this.loginUser.email },
          });
          // this.setupToastSucess("Successfully Logged In")
        })
        .catch((error) => {
          if (error.response) {
            console.log("Error status:", error.response.status);
            console.log("Error data:", error.response.data);

            if (error.response.data.message === "Invalid Credentials") {
              if (this.isSocialLogin) {
                this.register();
              } else {
                this.setupToastError("Please check your credentials");
              }
            }
          } else if (error.request) {
            console.log("Error request:", error.request);
          } else {
            console.log("Error", error.message);
          }

          // this.setupToastError("An error occurred. Please try again.");
        });

      //   this.nuxtApp.$auth.setAuthToken(response.access_token);
      //   console.log("RES",response)
      //   this.setupToastSucess("Successfully Logged In")
      //     // setTimeout(() => {
      //     this.$router.push({ path: '/dashboard', });
      //     //   }, 3000);
      // } catch (error) {
      //   // this.setupToastError("An error occurred. Please try again later.");

      //     let errorMessage = "An error occurred. Please try again later.";
      //     if (error.response && error.response.data && error.response.data.message) {
      //       errorMessage = error.response.data.message;
      //     } else if (error.message) {
      //       errorMessage = error.message;
      //     }

      //   this.setupToastError("An error occurred. Please try again later.");
      //   console.log("ERR", error );

      // }
    },
    setAuthTokenInCookie(token) {
      console.log("Token setAuthTokenInCookie", token);
      const cookieName = "auth_token=";
      const daysValid = 7;
      const expiryDate = new Date();
      expiryDate.setTime(
        expiryDate.getTime() + daysValid * 24 * 60 * 60 * 1000
      );
      const expires = "expires=" + expiryDate.toUTCString();

      document.cookie = cookieName + token + ";" + expires + ";path=/";
    },
    logout() {
      this.$auth.setAuthToken(null);
      localStorage.removeItem("userEmail");
      this.$router.push("/home");
    },
    formatPrice(value) {
      return value?.toLocaleString('en-US'); 
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
      this.isModal2Visible = false;
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
      this.isSpecialRateApplied = false;
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
    handlePeopleSelection(item, n, peopleType, peopleCount, room_types) {
      if (room_types === "Double Room") {
        if (peopleType === "adults") {
        }
      }
    },
    updateRoomPeopleCount(item, n, peopleType, event, room_types) {
      const double_room_max_adult_count = 2;
      const triple_room_max_adult_count = 3;
      const family_room_max_adult_count = 4;
      const roomTypeMap = {
        "Full Board": "full_board",
        "Bed & Breakfast": "bread_breakfast",
        "Half Board": "half_board"
      };

  console.log("Item", item);

  const roomIndex = this.roomsList.findIndex((room) => room.rowId === item.rowId);
  if (roomIndex > -1) {
    const roomToUpdate = this.roomsList[roomIndex];

    const roomDetail = roomToUpdate[n] || {};
    const newPeopleCount = parseInt(event.target.value);

    let shouldSetChildFeeToZero = false;
    if (roomToUpdate.name === "Double Room" && roomDetail.adults.count <= double_room_max_adult_count) {
        shouldSetChildFeeToZero = true;
      } else if (roomToUpdate.name === "Triple Room" && roomDetail.adults?.count <= triple_room_max_adult_count) {
        shouldSetChildFeeToZero = true;
      } else if (roomToUpdate.name === "Family Room" && roomDetail.adults.count <= family_room_max_adult_count) {
        shouldSetChildFeeToZero = true;
      }

    roomDetail["child"] = roomDetail["child"] || {
      count: 0,
      ages: [],
      childFee: 0
    };

    if (peopleType === "adults") {
      roomDetail["adults"] = {
        count: newPeopleCount,
        ages: [], 
      };
    }
    if (peopleType === "infants") {
      roomDetail["infants"] = {
        count: newPeopleCount,
        ages: [], 
      };
    }
    if (peopleType === "child") {
      console.log("LOWERED");
      roomDetail["child"] = {
        count: newPeopleCount,
        ages: [], 
        childFee: shouldSetChildFeeToZero || newPeopleCount === 0 ? 0 : roomDetail["child"].childFee
      };
}



if (roomDetail["child"].count === 0 || shouldSetChildFeeToZero) {
  roomDetail["child"].childFee = 0;
}


    if (["Full Board", "Bed & Breakfast", "Half Board"].includes(roomToUpdate.type)) {
      if (roomToUpdate.name === "Double Room" && roomDetail.adults.count === double_room_max_adult_count) {
        roomDetail["child"].childFee = (this.room_types[roomTypeMap[roomToUpdate.type]] - this.room_types.room_only) / (double_room_max_adult_count * 2);
      }

      if (roomToUpdate.name === "Triple Room" && roomDetail.adults.count === triple_room_max_adult_count) {
        roomDetail["child"].childFee = (this.room_types[roomTypeMap[roomToUpdate.type]] - this.room_types.room_only) / (triple_room_max_adult_count * 2);
      }

      if (roomToUpdate.name === "Family Room" && roomDetail.adults.count === family_room_max_adult_count) {
        roomDetail["child"].childFee = (this.room_types[roomTypeMap[roomToUpdate.type]] - this.room_types.room_only) / (family_room_max_adult_count * 2);
      }
    }

    roomToUpdate[n] = roomDetail;
    this.roomsList[roomIndex] = roomToUpdate;
  }

  let allChildCountsZero = true;
  for (let i = 0; i < this.roomsList.length; i++) {
    const room = this.roomsList[i];
    for (const key in room) {
      const roomDetail = room[key];
      if (roomDetail && roomDetail['child'] && roomDetail['child']?.count !== 0) {
        allChildCountsZero = false;
        break;
      }
    }
    if (!allChildCountsZero) {
      break;
    }
  }

  // Remove special rate if all child counts are zero
  if (allChildCountsZero) {
    this.removeSpecialRate();
  }

},


    updateAges(roomDetails, roomIndex, peopleType, event) {
    console.log("AGE", roomDetails, roomIndex, peopleType, event)
      const selectedAge = parseInt(event.target.value);
      const roomListIndex = this.roomsList.findIndex(
        (room) => room.rowId === roomDetails.rowId
      );
      if (roomListIndex > -1) {
        const roomToUpdate = this.roomsList[roomListIndex];

        const roomDetail = roomToUpdate[roomIndex] || {};

        const roomPeopleDetails = roomDetail[peopleType];
        roomPeopleDetails.ages.push(selectedAge);
        roomDetail[peopleType] = roomPeopleDetails;

        roomToUpdate[roomIndex] = roomDetail;

        this.roomsList[roomListIndex] = roomToUpdate;

        if (selectedAge >= 3 && selectedAge <= 10) {
          this.applySpecialRate();
        } else {
          this.removeSpecialRate();
        }
      }
    },
    applySpecialRate() {
      this.isSpecialRateApplied = true;
    },
    removeSpecialRate() {
      this.isSpecialRateApplied = false;
    },
    getTotalRoomRates() {
      let total = this.roomsList.reduce((total, room) => {
        const roomCount = room.selectedRooms === "" ? "0" : room.selectedRooms;
        total += parseFloat(room.price) * parseInt(roomCount);
        return total;
      }, 0);
      // if (this.isSpecialRateApplied) {
      //   total *= (1-(this.special_rate/100));
      // } 
      return total;

      
    },

    getTotalActivities() {
      return this.activities.reduce((total, activity) => {
        if (activity.checked) {
          total += parseFloat(activity.amount);
        }
        return total;
      }, 0);
    },

    getTotalAmount() {
      return this.getTotalActivities() + this.getTotalRoomRates();
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
        Authorization: `Bearer ${authToken?.replace(/%7C/g, "|")}`,
        "Content-Type": "application/json",
      };

      // if (authToken) {
      //   headers.Authorization = `Bearer ${authToken.replace(/%7C/g, "|")}`;
      //   console.log("asd",headers.Authorization)
      // }

      // console.log("BODYHeader", headers);

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
          let adults = 0;
          let child = 0;
          let infants = 0;

          for (let index = 1; index <= parseInt(selectedRooms); index++) {
            const roomPeople = roomData[index];
            adults += roomPeople["adults"]?.count || 0;
            child += roomPeople["child"]?.count || 0;
            infants += roomPeople["infants"]?.count || 0;

            roomsArrangement.push({
              adults: roomPeople["adults"]?.count || 0,
              child: roomPeople["child"]?.ages || 0,
              infants: roomPeople["infants"]?.ages || 0,
              room_id: id,
              meal_plan_id: mealPlanMap[type],
              room_view_id: parseInt(this.$route.query.viewTypeId),
            });
          }

          // Add total counts to form data
          this.form.adults = adults;
          this.form.child = child;
          this.form.infants = infants;

          return roomsArrangement;
        },
        []
      );

      this.form.rooms = roomsArrangement;
      this.form.activities = selectedActivities;
      // this.form.specialRateApplied = this.isSpecialRateApplied;

      // console.log(this.form);
      // return;

      console.log("FORM DATA", this.form);

      await fetch("https://admin.sueennature.com/api/booking", {
        method: "POST",
        headers: headers,

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
//     room_types() {
//   if (this.room_type && this.room_type.id.toString() === this.roomTypeId.toString()) {
//     return this.room_type;
//   } else {
//     return null; // or handle the case where room_type doesn't match roomTypeId
//   }
// }

  },
  mounted() {
    fetch("https://admin.sueennature.com/api/checkAvailability", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    check_in:this.$route.query.check_in,
    check_out:this.$route.query.check_out,
    room_type_id:this.$route.query.roomTypeId
  })
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    this.room_types = data.room_type;
    this.discount_data = data.discount_details;
    this.special_rate = this.discount_data.discount
    console.log('CE',  this.room_types);

  })
  .catch((error) => {
    console.error(
      "There has been a problem with your fetch operation:",
      error
    );
  });

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
        // this.room_types = data.room_types;
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
