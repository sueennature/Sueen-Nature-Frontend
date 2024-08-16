<template>
  <div class="sm:container px-4 my-20">
    <h2 class="text-black-100 md:text-4xl text-3xl text-center">
      Check Availability
    </h2>
    <div class="mt-8">
      <CheckoutAvailability />
    </div>

    <div>
      <div
        class="flex flex-col lg-flex-row xl:flex-row items-start justify-between w-full gap-8"
      >
        <div
          class="w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-14"
        >
          <h6 class="text-black-200 xl:text-lg text-base font-bold">
            Discounts
          </h6>
          <div
            class="flex items-center mb-4 mt-8 w-full"
            v-for="(discount, index) in discounts"
            :key="discount.id"
          >
            <div class="w-full">
              <div class="flex items-center w-full gap-4">
                <div>{{ discount.name }}</div>
                <div>:</div>
                <div class="font-bold">{{ discount.percentage }}%</div>
              </div>
              <div class="flex items-center w-full justify-between mt-4">
                <div class="font-bold">
                  {{ formatDate(discount.start_date) }}
                </div>
                <div>-</div>
                <div class="font-bold">{{ formatDate(discount.end_date) }}</div>
              </div>
            </div>
          </div>
        </div>
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
              <strong>LKR {{ formatPrice(activity.price) }}</strong>
            </label>
          </div>

          <!-- <img
            :src="`https://admin.sueennature.com/uploads/${activity.image}`"
            alt="roomImg"
            class="w-full object-cover"
          /> -->
        </div>
      </div>
      <div class="flex flex-col items-start w-full mt-4 gap-4">
        <div class="font-bold text-xl mt-10">
          Select a rooms to further process
        </div>
        <div class="mt-4">
          <h4 class="text-lg font-bold">Available Rooms</h4>
          <select
            v-model="selectedRoom"
            @change="toggleRoom"
            class="w-72 border border-gray-600 rounded-lg"
          >
            <option value="null" disabled>Select a room</option>
            <option
              v-for="room in rooms"
              :key="room.room_number"
              :value="room.room_number"
              :disabled="selectedRoomNumbers.includes(room.room_number)"
            >
              Room {{ room.room_number }}
            </option>
          </select>

          <!-- Display selected rooms with close icons -->
          <div v-if="selectedRoomNumbers.length">
            <span
              v-for="roomNumber in selectedRoomNumbers"
              :key="roomNumber"
              class="selected-room"
            >
              Room {{ roomNumber }}
              <button @click="removeRoom(roomNumber)" class="close-icon">
                &times;
              </button>
            </span>
          </div>
        </div>
      </div>
      <h3 class="text-lg font-bold mb-2 mt-4">Room Details:</h3>

      <div
        v-if="selectedRoomNumbers.length"
        class="flex flex-col items-start gap-8"
      >
        <div
          v-for="room in selectedRoomNumbers"
          :key="room"
          class="mb-4 flex gap-4 items-start justify-start"
        >
          <h4
            class="text-md font-semibold border border-gray-300 p-2 mb-1 rounded text-center h-fit"
          >
            Room {{ room }}
          </h4>

          <!-- Select fields for each room -->
          <div class="flex flex-col lg:flex-row xl:flex-row items-start gap-4">
            <div class="mb-2">
              <label for="adults-{{ room }}" class="block mb-1">Adults:</label>
              <select
                id="adults-{{ room }}"
                v-model="roomDetails[room].adults"
                class="border border-gray-300 p-2 rounded"
              >
                <option
                  v-for="num in adultOptions(room)"
                  :key="num"
                  :value="num"
                >
                  {{ num }}
                </option>
              </select>
            </div>

            <div class="mb-2">
              <label for="children-{{ room }}" class="block mb-1"
                >Children:</label
              >
              <select
                id="children-{{ room }}"
                v-model="roomDetails[room].children"
                class="border border-gray-300 p-2 rounded"
              >
                <option
                  v-for="num in childOptions(room)"
                  :key="num"
                  :value="num"
                >
                  {{ num }}
                </option>
              </select>
              <div v-if="roomDetails[room].children > 0" class="mb-4">
                <div
                  v-for="index in roomDetails[room].children"
                  :key="'child-age-' + index"
                  class="mb-2 mt-4"
                >
                  <label
                    :for="'child-age-' + room + '-' + index"
                    class="block mb-1 font-bold"
                    >Child {{ index }} Age</label
                  >
                  <select
                    :id="'child-age-' + room + '-' + index"
                    v-model="roomDetails[room].childrenAges[index - 1]"
                    class="border border-gray-300 p-2 rounded"
                  >
                    <option
                      v-for="age in childAgeOptions"
                      :key="age"
                      :value="age"
                    >
                      {{ age }}
                    </option>
                  </select>
                </div>
              </div>
            </div>

            <div class="mb-2">
              <label for="infants-{{ room }}" class="block mb-1"
                >Infants:</label
              >
              <select
                id="infants-{{ room }}"
                v-model="roomDetails[room].infants"
                class="border border-gray-300 p-2 rounded"
              >
                <option v-for="num in [0, 1, 2]" :key="num" :value="num">
                  {{ num }}
                </option>
              </select>
              <div v-if="roomDetails[room].infants > 0" class="mb-4">
                <div
                  v-for="index in roomDetails[room].infants"
                  :key="'infant-age-' + index"
                  class="mb-2 mt-4"
                >
                  <label
                    :for="'infant-age-' + room + '-' + index"
                    class="block mb-1 font-bold"
                    >Infant {{ index }} Age</label
                  >
                  <select
                    :id="'infant-age-' + room + '-' + index"
                    v-model="roomDetails[room].infantAges[index - 1]"
                    class="border border-gray-300 p-2 rounded"
                  >
                    <option
                      v-for="age in infantAgeOptions"
                      :key="age"
                      :value="age"
                    >
                      {{ age }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
            <div class="mb-2">
  <label for="meal-plan-{{ room }}" class="block mb-1">Meal Plan:</label>
  <select
    id="meal-plan-{{ room }}"
    v-model="roomDetails[room].mealPlan"
    class="border border-gray-300 p-2 rounded"
  >
    <option
      v-for="plan in mealPlans"
      :key="plan.value"
      :value="plan.value"
    >
      {{ plan.label }}
    </option>
  </select>
</div>

            <!-- Meal time selection -->
            <div class="mb-2">
              <label for="meal-time-{{ room }}" class="block mb-1"
                >Meal Time:</label
              >
              <select
                id="meal-time-{{ room }}"
                v-model="roomDetails[room].mealTime"
                class="border border-gray-300 p-2 rounded"
              >
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div v-if="selectedRoomNumbers.length">
        <button
          class="mt-8 buttontext rounded-xl text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          @click="submitPayload"
        >
          Please Click to get final rates to proceed further
        </button>
      </div>

      <!-- Login and Register modal popups -->

      <!-- end of price breakdown section -->
    </div>
    <div class="mt-8">
      <div v-if="Object.keys(total_rate).length > 0" class="text-xl font-bold">
        Total Rates
      </div>
      <div v-if="Object.keys(total_rate).length > 0">
        <div class="flex justify-between mt-4">
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            Total Activities
          </h5>
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            {{
              total_rate.total_activities_amount === 0
                ? "-"
                : `LKR ${formatPrice(total_rate.total_activities_amount)}`
            }}
          </h5>
        </div>
        <div class="flex justify-between mt-4">
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            Total Rooms
          </h5>
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            {{
              total_rate.total_rooms_amount === 0
                ? "-"
                : `LKR ${formatPrice(total_rate.total_rooms_amount)}`
            }}
          </h5>
        </div>
        <div class="flex justify-between mt-4">
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            Total Meal Plan
          </h5>
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            {{
              total_rate.total_meal_plan_amount === 0
                ? "-"
                : `LKR ${formatPrice(total_rate.total_meal_plan_amount)}`
            }}
          </h5>
        </div>
        <div class="flex justify-between mt-4">
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            Total Taxes
          </h5>
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            {{
              total_rate.total_tax_amount === 0
                ? "-"
                : `LKR ${formatPrice(total_rate.total_tax_amount)}`
            }}
          </h5>
        </div>
        <div class="flex justify-between mt-4">
          <h5 class="lg:text-base text-sm font-medium text-black-200">
            Total Discounts
          </h5>
          <h5 class="lg:text-base text-sm font-medium text-red-400">
            {{
              total_rate.total_discount_amount === 0
                ? "-"
                : `- LKR ${formatPrice(total_rate.total_discount_amount)}`
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
            {{
              total_rate.total_amount === 0
                ? "-"
                : `LKR ${formatPrice(total_rate.total_amount)}`
            }}
          </h5>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full mt-8"></div>

    <div class="flex flex-row space-x-4 items-baseline">
      <button
        class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        type="button"
        @click="scrollToPaymentInfo"
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
    <div ref="paymentInfoRef"></div>
    <div class="flex flex-col lg:flex-row xl:flex-row gap-8 mt-12">
      <div class="flex flex-col w-72">
        <label class="text-xl font-bold mb-5">Booking Notes</label>
        <textarea
          v-model="booking_note"
          placeholder="Comments..."
          class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
        ></textarea>
      </div>
      <div class="flex flex-col w-72">
        <label class="text-xl font-bold mb-5">Payment Notes</label>
        <textarea
          type="text"
          v-model="payment_note"
          placeholder="Comments..."
          class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
        ></textarea>
      </div>
    </div>
    <!-- Guest Info & Payment section -->
    <h2
      class="text-black-100 md:text-4xl text-3xl text-center mt-20 mb-10"
      ref="paymentInfoRef"
    >
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
          value="Yes"
          name="inline-radio-group"
          class="w-4 h-4 text-black-200 bg-white border-black-200 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          v-model="bookingForSomeoneElse"
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
          v-model="bookingForSomeoneElse"
          @change="toggleGuestInfo"
        />
        <label
          for="inline-2-radio"
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
            <option value="" disabled>Select Nationality</option>
            <option
              v-for="country in countries"
              :key="country.code"
              :value="country.name"
            >
              {{ country.name }}
            </option>
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
            <option value="" disabled>Select Nationality</option>
            <option
              v-for="country in countries"
              :key="country.code"
              :value="country.name"
            >
              {{ country.name }}
            </option>
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
    <div      v-if="Object.keys(total_rate).length > 0" class="text-xl font-bold">
      <button
      v-if="isRoomSelected"
      class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      @click="handleSubmit"
    >
      Proceed to Pay
    </button>
    </div>

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

              <div class="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5">
                <!-- Additional fields for createGuest API -->
                <input
                  type="text"
                  v-model="guestDetails.telephone"
                  placeholder="Telephone"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                />
                <input
                  type="text"
                  v-model="guestDetails.address"
                  placeholder="Address"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                />
                <select
                  v-model="guestDetails.nationality"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                >
                  <option value="" disabled>Select Nationality</option>
                  <option
                    v-for="country in countries"
                    :key="country.code"
                    :value="country.name"
                  >
                    {{ country.name }}
                  </option>
                </select>
                <select
                  v-model="guestDetails.identification_type"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                >
                  <option value="" disabled>Select Identification Type</option>
                  <option value="passport">Passport</option>
                  <option value="driver_license">Driver's License</option>
                  <option value="id_card">ID Card</option>
                  <!-- Add more options as needed -->
                </select>
                <input
                  type="text"
                  v-model="guestDetails.identification_no"
                  placeholder="Identification No"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                />

                <select
                  v-model="guestDetails.gender"
                  class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                >
                  <option value="" disabled>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <div class="flex flex-col">
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    v-model="guestDetails.dob"
                    placeholder="Date of Birth"
                    class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                  />
                </div>
                <div class="flex flex-col">
                  <label>Identification Issue Date</label>
                  <input
                    type="date"
                    v-model="guestDetails.identification_issue_date"
                    placeholder="Identification Issue Date"
                    class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md"
                  />
                </div>
              </div>

              <div class="flex items-start mt-5">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="w-4 h-4 border border-gray-300 rounded-none bg-white focus:ring-3 focus:ring-blue-300"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ms-2 text-sm font-medium text-gray-900"
                >
                  I Agree To The
                  <a
                    href="/termsAndConditions"
                    class="font-semibold underline underline-offset-4"
                  >
                    Terms & Conditions
                  </a>
                  And
                  <a
                    href="/privacyPolicy"
                    class="font-semibold underline underline-offset-4"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>

              <div class="mt-5">
                <button
                  type="submit"
                  class="w-full bg-red-100 py-3 text-center text-white rounded-md block text-decoration-none"
                >
                  REGISTER
                </button>
              </div>

              <div class="flex flex-row items-center text-md space-x-1 mt-5">
                <p>Already have an account?</p>
                <button
                  @click="toggleModal_1"
                  id="toggle-modal-button"
                  class="block text-red-100 font-medium text-md text-center"
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
import { useNuxtApp } from "#app";
import SocialLogin from "./SocialLogin.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";
import countries from "./countries.json"; // Adjust the path according to where you put your JSON file

export default {
  components: {
    CheckoutAvailability,
    SocialLogin,
  },
  data() {
    return {
      bookingForSomeoneElse: "No",
      showPassword: false,
      showGuestInfo: false,
      showYourInfo: true,
      isModalOpen: false,
      isModalVisible: false,
      isModal2Visible: false,
      selectedInfants: 0,
      selectedChildren: 0,
      total_rate: 0,
      countries: countries,
      isSpecialRateApplied: false,
      infantAges: [],
      childrenAges: [],
      discount_data: {},
      rooms: [],
      selectedNumberOfRooms: "", // Selected number of rooms from the dropdown
      selectedRoomNumbers: [],
      roomDetails: {}, // Object to store details for each room
      mealPlans: [
        // Example meal plan options
        { value: "room_only", label: "Room Only" },
        { value: "bread_breakfast", label: "Bed & Breakfast" },
        { value: "half_board", label: "Half Board" },
        { value: "full_board", label: "Full Board" },
      ],
      childAgeOptions: [3, 4, 5, 6], // Options for children's ages
      infantAgeOptions: [0, 1, 2], // Age options for children
      selectedOption: "",
      boardType: [],
      special_rate: 0,
      view_type_id: null,
      view_types: [],
      childFormAges: [],
      infantFormAges: [],
      activities: [],
      discounts: [],
      taxes: [],
      isSocialLogin: false,
      price: 0,
      roomPeopleCount: [],
      booking_note: "",
      payment_note: "",
      form: {
        first_name: "",
        last_name: "",
        email: "",
        telephone: "",
        address: "",
        nationality: "",
        check_in: this.$route.query.check_in,
        check_out: this.$route.query.check_out,
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
      guestDetails: {
        telephone: "",
        address: "",
        nationality: "",
        // profile_image: [],
        identification_type: "",
        identification_no: "",
        identification_issue_date: "",
        dob: "",
        gender: "",
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
    selectedRoomNumbers(newVal, oldVal) {
      this.submitPayload();
    },
    roomDetails(newVal, oldVal) {
      this.submitPayload();
    },
    activities(newVal, oldVal) {
      this.submitPayload();
    },
    taxes(newVal, oldVal) {
      this.submitPayload();
    },
    discounts(newVal, oldVal) {
      this.submitPayload();
    },
    $route(query) {
      // If route parameters change
      this.submitPayload();
    }
  },
  computed: {
    isRoomSelected() {
      return this.selectedRoomNumbers.length > 0;
    },
    // Calculate the number of rooms
    numberOfRooms() {
      return this.rooms.length
        ? Array.from({ length: this.rooms.length }, (_, i) => i + 1)
        : [];
    },
    childrenAges() {
      const ages = {};
      this.selectedRoomNumbers.forEach((room) => {
        const numChildren = this.roomDetails[room]?.children || 0;
        ages[room] = Array.from({ length: numChildren }, (_, i) => i); // Use indices for children
      });
      return ages;
    },
  },

  methods: {
    toggleRoom() {
      const roomNumber = this.selectedRoom;
      const index = this.selectedRoomNumbers.indexOf(roomNumber);

      if (index === -1) {
        // Room number is not in the array, add it
        this.selectedRoomNumbers.push(roomNumber);
      } else {
        // Room number is in the array, remove it
        this.selectedRoomNumbers.splice(index, 1);
      }

      this.selectedRoom = ""; // Reset the select dropdown
      this.updateRoomDetails(); // Update only the details of selected rooms
    },
    removeRoom(roomNumber) {
      const index = this.selectedRoomNumbers.indexOf(roomNumber);
      if (index > -1) {
        this.selectedRoomNumbers.splice(index, 1);
        this.updateRoomDetails(); // Update only the details of selected rooms
      }
    },

    updateRoomDetails() {
      this.roomDetails = this.selectedRoomNumbers.reduce((acc, roomNumber) => {
        const room = this.rooms.find((r) => r.room_number === roomNumber);
        if (room) {
          acc[roomNumber] = {
            adults:
              this.roomDetails[roomNumber]?.adults ??
              Math.min(1, room.max_adults),
            children:
              this.roomDetails[roomNumber]?.children ??
              Math.min(0, room.max_childs),
            mealPlan: this.roomDetails[roomNumber]?.mealPlan ?? "room_only",
            infants: this.roomDetails[roomNumber]?.infants ?? 0,
            childrenAges:
              this.roomDetails[roomNumber]?.childrenAges ??
              Array(this.roomDetails[roomNumber]?.children || 0).fill(0),
            infantAges:
              this.roomDetails[roomNumber]?.infantAges ??
              Array(this.roomDetails[roomNumber]?.infants || 0).fill(0),
            mealTime: this.roomDetails[roomNumber]?.mealTime ?? "breakfast", // Default to breakfast if not set
          };
        }
        return acc;
      }, {});
    },
    formatDatePayload(dateString) {
      const date = new Date(dateString);
      return date.toISOString(); // Converts to ISO 8601 format: "YYYY-MM-DDTHH:mm:ss.sssZ"
    },

    initializeActivities() {
      this.activities = this.activities.map((activity) => ({
        ...activity,
        checked: false,
      }));
    },
    preparePayload() {
      const checkInDate = this.formatDatePayload(this.$route.query.fromDate);
      const checkOutDate = this.formatDatePayload(this.$route.query.toDate);
      const discountCode = this.$route.query.discount;
      const taxes = this.taxes.map((tax) => ({ tax_id: tax.id }));
      const discounts = this.discounts.map((discount) => ({
        discount_id: discount.id,
      }));
      const selectedActivities = this.activities
        .filter((activity) => activity.checked)
        .map((activity) => ({ activity_id: activity.id }));

      return {
        check_in: checkInDate,
        check_out: checkOutDate,
        rooms: this.selectedRoomNumbers.map((roomNumber) => {
          const room = this.rooms.find((r) => r.room_number === roomNumber);
          return {
            room_id: room.id,
            adults: this.roomDetails[roomNumber]?.adults || 0,
            children:
              this.roomDetails[roomNumber]?.childrenAges.map(
                (age) => age || 0
              ) || [],
            infants:
              this.roomDetails[roomNumber]?.infantAges.map((age) => age || 0) ||
              [],
            meal_plan: this.roomDetails[roomNumber]?.mealPlan || "room_only",
          };
        }),
        taxes: taxes,
        discounts: discounts,
        activities: selectedActivities,
        discount_code: discountCode,
      };
    },
    preparePayloadBooking() {
      const checkInDate = this.formatDatePayload(this.$route.query.fromDate);
      const checkOutDate = this.formatDatePayload(this.$route.query.toDate);
      const discountCode = this.$route.query.discount;
      const taxes = this.taxes.map((tax) => ({ tax_id: tax.id }));
      const discounts = this.discounts.map((discount) => ({
        discount_id: discount.id,
      }));
      const selectedActivities = this.activities
        .filter((activity) => activity.checked)
        .map((activity) => ({
          activity_id: activity.id,
          activity_name: activity.name,
        }));

      return {
        check_in: checkInDate,
        check_out: checkOutDate,
        booking_type:"online",
        rooms: this.selectedRoomNumbers.map((roomNumber) => {
          const room = this.rooms.find((r) => r.room_number === roomNumber);
          console.log(room);
          return {
            room_id: room.id,
            room_number: room.room_number,
            category: this.$route.query.roomType,
            adults: this.roomDetails[roomNumber]?.adults || 0,
            children:
              this.roomDetails[roomNumber]?.childrenAges.map(
                (age) => age || 0
              ) || [],
            infants:
              this.roomDetails[roomNumber]?.infantAges.map((age) => age || 0) ||
              [],
            meal_plan: this.roomDetails[roomNumber]?.mealPlan || "room_only",
            starting_meals_with:
              this.roomDetails[roomNumber]?.mealTime || "breakfast",
            view: this.$route.query.view,
          };
        }),
        taxes: taxes,
        discounts: discounts,
        activities: selectedActivities,
        discount_code: discountCode,
        total_taxes: this.total_rate.total_tax_amount,
        total_rooms_charge: this.total_rate.total_rooms_amount,
        total_activities_charge: this.total_rate.total_activities_amount,
        total_discount_amount: this.total_rate.total_discount_amount,
        total_amount: this.total_rate.total_meal_plan_amount,
        total_additional_services_amount: 0,
        payment_method: "sueen_web",
        is_partial_payment: false,
        paid_amount: 0,
        agent_info: {
          first_name: this.form.first_name,
          last_name: this.form.last_name,
          email: this.form.email,
          telephone: this.form.telephone,
          address: this.form.address,
          nationality: this.form.nationality,
        },
        guest_info: {
          first_name: this.form.guest_info.first_name,
          last_name: this.form.guest_info.last_name,
          email: this.form.guest_info.email,
          telephone: this.form.guest_info.telephone,
          address: this.form.guest_info.guest_address,
          nationality: this.form.guest_info.nationality,
          identification_type: "<string>",
          identification_no: "<string>",
          gender: "<string>",
          profile_image: ["<string>", "<string>"],
          identification_issue_date: "<dateTime>",
          dob: "<dateTime>",
        },
        booking_note: this.booking_note,
        payment_note: this.payment_note,
      };
    },

    async submitPayload() {
      try {
        const payload = this.preparePayload();
        const runtimeConfig = useRuntimeConfig();
        console.log(payload);
        const response = await fetch(
          "https://api.sueennature.com/rooms/get-rates/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": runtimeConfig.public.DATABASE_ID,
            },
            body: JSON.stringify(payload),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        this.total_rate = data;
        console.log("RATES", this.total_rate);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    },
    async handleSubmit() {
      const payload = this.preparePayloadBooking();
      console.log("Submiited payload",payload);
    },
    updateRoomNumbers() {
      if (this.selectedNumberOfRooms) {
        const num = parseInt(this.selectedNumberOfRooms, 10);
        this.selectedRoomNumbers = this.rooms
          .slice(0, num)
          .map((room) => room.room_number);
        this.initializeRoomDetails();
      } else {
        this.selectedRoomNumbers = [];
        this.roomDetails = {};
      }
    },
    initializeRoomDetails() {
      // Initialize room details for selected rooms only
      this.selectedRoomNumbers.forEach((room) => {
        if (!this.roomDetails[room]) {
          const roomData = this.rooms.find((r) => r.room_number === room);
          this.$set(this.roomDetails, room, {
            adults: Math.min(1, roomData.max_adults),
            children: Math.min(0, roomData.max_childs),
            mealPlan: "room_only",
            infants: 0,
            childrenAges: Array(Math.min(0, roomData.max_childs)).fill(0),
            infantAges: Array(0).fill(0),
          });
        }
      });
    },
    adultOptions(room) {
      const maxAdults = this.rooms.find(
        (r) => r.room_number === room
      ).max_adults;
      return Array.from({ length: maxAdults }, (_, i) => i + 1);
    },
    childOptions(room) {
      const maxChildren = this.rooms.find(
        (r) => r.room_number === room
      ).max_childs;
      return Array.from({ length: maxChildren + 1 }, (_, i) => i); // Including 0 to maxChildren
    },
    scrollToPaymentInfo() {
      this.$nextTick(() => {
        this.$refs.paymentInfoRef.scrollIntoView({ behavior: "smooth" });
      });
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
      try {
        // Step 1: Create guest
        const guestPayload = {
          first_name: this.registerUser.name,
          last_name: this.registerUser.lname,
          email: this.registerUser.email,
          telephone: this.guestDetails.telephone || "",
          address: this.guestDetails.address || "",
          nationality: this.guestDetails.nationality || "",
          profile_image: this.registerUser.profile_image || [],
          identification_type: this.registerUser.identification_type || "",
          identification_no: this.guestDetails.identification_no || "",
          identification_issue_date:
            this.registerUser.identification_issue_date ||
            new Date().toISOString(),
          dob: this.registerUser.dob || new Date().toISOString(),
          gender: this.guestDetails.gender || "",
          password: this.registerUser.password,
        };

        const { data: guestResponse } = await axios.post(
          "https://api.sueennature.com/guests",
          guestPayload,
          {
            headers: {
              "x-api-key": this.$config.public.DATABASE_ID,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Create guest response", guestPayload);

        // Step 2: Register user
        const { data: registerResponse } = await axios.post(
          "https://api.sueennature.com/users/register",
          {
            username: this.registerUser.name + " " + this.registerUser.lname,
            email: this.registerUser.email,
            role: "guest",
            password: this.registerUser.password,
          },
          {
            headers: {
              "x-api-key": this.$config.public.DATABASE_ID,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Register response", registerResponse);
        localStorage.setItem("userEmail", this.registerUser.email);

        // Set auth token and other necessary operations
        this.nuxtApp.$auth.setAuthToken(registerResponse.access_token);
        this.setAuthTokenInCookie(registerResponse.access_token);
        localStorage.setItem("userEmail", this.registerUser.email);
        this.$router.push({
          path: "/dashboard",
          query: { email: this.registerUser.email },
        });
      } catch (error) {
        console.error("An error occurred:", error);
        this.setupToastError("An error occurred. Please try again later.");
      }
    },

    async login() {
      const {
        public: { DATABASE_ID },
      } = useRuntimeConfig();

      const headers = {
        "x-api-key": DATABASE_ID, // Set the X-API-Key header
        "Content-Type": "application/json",
      };
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
      const queryParams = new URLSearchParams({
        email: this.loginUser.email,
        password: this.loginUser.password,
      }).toString();

      const response = await fetch(
        `https://api.sueennature.com/users/login?${queryParams}`,
        {
          method: "POST",
          headers: {
            "x-api-key": DATABASE_ID, // Set the X-API-Key header
          },
        }
      )
        .then(async (response) => {
          // console.log("Status:", response.status);
          localStorage.setItem("userEmail", this.loginUser.email);
          const data = await response.json();
          console.log(data);
          this.setAuthTokenInCookie(data.access_token);
          this.nuxtApp.$auth.setAuthToken(data.access_token);
          if (data.access_token) {
            this.$router.push({
              path: "/dashboard",
              query: { email: this.loginUser.email },
            });

            return toast.success(`Successfully logged In`);
          } else if ((data.detail = "Invalid credentials")) {
            return toast.error(`Invalid Credentials`);
          } else {
            return toast.error("Something went wrong");
          }
          this.$router.push({
            path: "/dashboard",
            query: { email: this.loginUser.email },
          });
          // this.setupToastSucess("Successfully Logged In")
        })
        .catch((error) => {
          if (error.response) {
            // console.log("Error status:", error.response.status);
            // console.log("Error data:", error.response.data);

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
        });
    },
    setAuthTokenInCookie(token) {
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
      return value?.toLocaleString("en-US");
    },
    redirectToRegister() {
      this.$router.push("/register");
    },
    toggleButtonGuestInfo() {
      this.showGuestInfo = true;
      this.showYourInfo = false;
    },
    toggleGuestInfo(event) {
      this.bookingForSomeoneElse = event.target.value;
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

    scrollToBottom() {
      this.$refs.paymentInfoRef?.scrollIntoView({ behavior: "smooth" });
    },
  },

  mounted() {
    this.initializeActivities();
    const formatDateToISO = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      return date.toISOString();
    };

    if (
      new Date(this.$route.query.fromDate) >= new Date(this.$route.query.toDate)
    ) {
      this.setupToastError("Check-out date must be after check-in date.");
      return;
    }

    const formattedCheckIn = formatDateToISO(this.$route.query.fromDate);
    const formattedCheckOut = formatDateToISO(this.$route.query.toDate);
    const runtimeConfig = useRuntimeConfig();

    const baseUrl = "https://api.sueennature.com/rooms/availability/";
    const params = new URLSearchParams({
      check_in: formattedCheckIn,
      check_out: formattedCheckOut,
      categories: this.$route.query.roomType,
      views: this.$route.query.view,
      discount_code: this.$route.query.discount,
    });
    const url = `${baseUrl}?${params.toString()}`;

    fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": runtimeConfig.public.DATABASE_ID,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Response Data:", data);
        this.activities = data.activities;
        this.rooms = data.rooms;
        this.discounts = data.discounts;
        this.taxes = data.taxes;
        console.log(this.rooms);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    const cookies = document.cookie.split(";");
    const authTokenCookie = cookies.find((cookie) =>
      cookie.trim().startsWith("auth_token=")
    );
    this.isSignedIn = !!authTokenCookie;
    initFlowbite();
  },
  setup() {
    const nuxtApp = useNuxtApp();

    const isLoggedIn = computed(() => authStore.token !== null);

    return {
      isLoggedIn,
      nuxtApp,
    };
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
.selected-room {
  display: inline-flex;
  align-items: center;
  margin: 5px;
  padding: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.close-icon {
  background: none;
  border: none;
  font-size: 16px;
  color: red;
  cursor: pointer;
  margin-left: 5px;
}
</style>
