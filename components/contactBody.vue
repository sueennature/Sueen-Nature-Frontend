<template>
  <div
    class="lg:flex lg:flex-row grid grid-cols-1 justify-center justify-items-center gap-8 my-10 p-4 lg:p-0"
  >
    <div
      class="w-full p-4 max-w-lg bg-white border border-gray-200 rounded-none shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <form class="space-y-6" @submit.prevent="submitForm">
        <h3
          class="text-2xl font-bold text-stone-700 dark:text-white text-center"
        >
          Get in Touch
        </h3>
        <h2
          class="text-6xl font-bold text-stone-700 dark:text-white text-center my-6"
        >
          Book Your Stay
        </h2>
        <p
          class="text-base font-bold text-black-50 dark:text-white text-center my-8"
        >
          Feel free to reach out to us for any inquiries, reservations, or
          feedback. Our dedicated team at Sueen Nature Resort is here to assist
          you.
        </p>

        <div class="grid gap-x-4 mb-6 grid-cols-2 gap-y-6">
          <div>
            <label
              for="name"
              class="block mb-2 text-sm text-black-200 font-bold dark:text-white"
              >Name</label
            >
            <input
              type="text"
              id="name"
              v-model="formData.name"
              class="bg-white border-black-200 text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label
              for="email"
              class="block mb-2 text-sm font-bold text-black-200 dark:text-white"
              >Email</label
            >
            <input
              type="email"
              id="Email"
              v-model="formData.email"
              class="bg-white border-black-200 text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label
              for="phone"
              class="block mb-2 text-sm font-bold text-black-200 dark:text-white"
              >Phone Number</label
            >
            <input
              type="tel"
              id="phone"
              v-model="formData.phone"
              class="bg-white border-black-200 text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+ 1009 12345"
              required
            />
          </div>
          <div>
            <label
              for="countries"
              class="block mb-2 text-sm font-bold text-black-200 dark:text-white"
              >Room</label
            >
            <select
              id="rooms"
              v-model="formData.room"
              class="bg-white border-black-200 text-black-200 text-opacity-60 placeholder:text-black-200 placeholder:text-opacity-40 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            >
            <option value="" disabled selected hidden>Select the room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="Single Room">Single Room</option>
              <option value="Double Room">Double Room</option>
            </select>

          </div>
        </div>

        <label
          for="message"
          class="block mb-2 text-sm font-bold text-black-200 dark:text-white"
          >Message Us</label
        >
        <textarea
          id="message"
          rows="4"
          v-model="formData.message"
          class="block p-2.5 w-full text-sm text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm bg-white border-black-200 rounded-0 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your Message"
        ></textarea>

        <button
          type="submit"
          class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase"
        >
          send request
        </button>
      </form>
    </div>
    <!-- column of contact details inofrmation -->
    <div class="flex flex-col space-y-4">
      <div
        class="max-w-xs p-8 bg-white border border-gray-200 rounded-none shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-2 text-lg font-bold text-stone-700 dark:text-white">
          EMAIL US
        </h5>
        <div class="flex flex-row gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="24"
            viewBox="0 0 27 24"
            fill="none"
          >
            <mask
              id="mask0_397_545"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="27"
              height="24"
            >
              <rect width="26.1494" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_397_545)">
              <path
                d="M4.35783 20C3.75857 20 3.24557 19.8042 2.81883 19.4125C2.39208 19.0208 2.17871 18.55 2.17871 18V6C2.17871 5.45 2.39208 4.97917 2.81883 4.5875C3.24557 4.19583 3.75857 4 4.35783 4H21.7908C22.39 4 22.903 4.19583 23.3298 4.5875C23.7565 4.97917 23.9699 5.45 23.9699 6V18C23.9699 18.55 23.7565 19.0208 23.3298 19.4125C22.903 19.8042 22.39 20 21.7908 20H4.35783ZM13.0743 13L4.35783 8V18H21.7908V8L13.0743 13ZM13.0743 11L21.7908 6H4.35783L13.0743 11ZM4.35783 8V6V18V8Z"
                fill="#3B3A43"
              />
            </g>
          </svg>
          <a
            href="mailto:sueennature@gmail.com"
            class="text-stone-700 hover:underline text-base"
            >sueennature@gmail.com</a
          >
        </div>
      </div>
      <div
        class="max-w-xs p-8 bg-white border border-gray-200 rounded-none shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-2 text-lg font-bold text-stone-700 dark:text-white">
          CALL US
        </h5>
        <div class="flex flex-row gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_397_602"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="23.2437" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_397_602)">
              <path
                d="M19.3216 21C17.3039 21 15.3104 20.5458 13.3412 19.6375C11.3719 18.7292 9.58024 17.4417 7.9661 15.775C6.35196 14.1083 5.10503 12.2583 4.22532 10.225C3.34562 8.19167 2.90576 6.13333 2.90576 4.05C2.90576 3.75 3.00261 3.5 3.19631 3.3C3.39 3.1 3.63213 3 3.92267 3H7.84504C8.07102 3 8.27279 3.07917 8.45034 3.2375C8.6279 3.39583 8.73282 3.58333 8.7651 3.8L9.39462 7.3C9.4269 7.56667 9.41883 7.79167 9.3704 7.975C9.32198 8.15833 9.2332 8.31667 9.10407 8.45L6.75549 10.9C7.07832 11.5167 7.46168 12.1125 7.90557 12.6875C8.34946 13.2625 8.83774 13.8167 9.3704 14.35C9.87079 14.8667 10.3954 15.3458 10.9442 15.7875C11.493 16.2292 12.0741 16.6333 12.6875 17L14.9634 14.65C15.1087 14.5 15.2983 14.3875 15.5324 14.3125C15.7664 14.2375 15.9965 14.2167 16.2224 14.25L19.5637 14.95C19.7897 15.0167 19.9753 15.1375 20.1206 15.3125C20.2659 15.4875 20.3385 15.6833 20.3385 15.9V19.95C20.3385 20.25 20.2417 20.5 20.048 20.7C19.8543 20.9 19.6121 21 19.3216 21ZM5.83543 9L7.43343 7.35L7.02183 5H4.86695C4.94765 5.68333 5.06064 6.35833 5.20591 7.025C5.35119 7.69167 5.56103 8.35 5.83543 9ZM14.5034 17.95C15.1329 18.2333 15.7745 18.4583 16.4282 18.625C17.082 18.7917 17.7397 18.9 18.4015 18.95V16.75L16.1256 16.275L14.5034 17.95Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          <a
            href="tel:+94343307500"
            class="text-stone-700 hover:underline text-base"
            >+(94) 34 3307500

          </a>
        </div>
      </div>
      <div
        class="max-w-xs p-8 bg-white border border-gray-200 rounded-none shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-2 text-lg font-bold text-stone-700 dark:text-white">
          LOCATION
        </h5>
        <div class="flex flex-row gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="30"
            viewBox="0 0 27 24"
            fill="none"
          >
            <mask
              id="mask0_397_595"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="27"
              height="24"
            >
              <rect x="0.168457" width="26.0249" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_397_595)">
              <path
                d="M13.1815 22C11.2658 22 9.7025 21.7208 8.49162 21.1625C7.28073 20.6042 6.67529 19.8833 6.67529 19C6.67529 18.4167 6.93735 17.9083 7.46146 17.475C7.98558 17.0417 8.70849 16.7 9.63021 16.45L10.2537 18.35C9.94648 18.4333 9.66635 18.5375 9.41333 18.6625C9.16031 18.7875 8.98862 18.9 8.89826 19C9.1332 19.2667 9.67539 19.5 10.5248 19.7C11.3742 19.9 12.2598 20 13.1815 20C14.1032 20 14.9933 19.9 15.8518 19.7C16.7103 19.5 17.257 19.2667 17.4919 19C17.4015 18.9 17.2298 18.7875 16.9768 18.6625C16.7238 18.5375 16.4437 18.4333 16.1364 18.35L16.76 16.45C17.6817 16.7 18.4001 17.0417 18.9151 17.475C19.4302 17.9083 19.6878 18.4167 19.6878 19C19.6878 19.8833 19.0823 20.6042 17.8714 21.1625C16.6606 21.7208 15.0972 22 13.1815 22ZM13.1815 15.325C13.5068 14.775 13.8502 14.2708 14.2117 13.8125C14.5731 13.3542 14.9256 12.9167 15.2689 12.5C15.9376 11.7 16.4708 10.9792 16.8684 10.3375C17.266 9.69583 17.4648 8.9 17.4648 7.95C17.4648 6.85 17.0491 5.91667 16.2178 5.15C15.3864 4.38333 14.3743 4 13.1815 4C11.9887 4 10.9766 4.38333 10.1453 5.15C9.31393 5.91667 8.89826 6.85 8.89826 7.95C8.89826 8.9 9.09706 9.69583 9.49466 10.3375C9.89226 10.9792 10.4254 11.7 11.0941 12.5C11.4375 12.9167 11.7899 13.3542 12.1514 13.8125C12.5128 14.2708 12.8562 14.775 13.1815 15.325ZM13.1815 19C12.9827 19 12.802 18.9458 12.6393 18.8375C12.4767 18.7292 12.3592 18.5833 12.2869 18.4C11.8712 17.2167 11.3471 16.225 10.7146 15.425C10.082 14.625 9.46755 13.8583 8.87115 13.125C8.29281 12.3917 7.79129 11.6333 7.36658 10.85C6.94187 10.0667 6.72951 9.1 6.72951 7.95C6.72951 6.28333 7.35303 4.875 8.60005 3.725C9.84708 2.575 11.3742 2 13.1815 2C14.9888 2 16.516 2.575 17.763 3.725C19.01 4.875 19.6335 6.28333 19.6335 7.95C19.6335 9.1 19.4257 10.0667 19.01 10.85C18.5943 11.6333 18.0883 12.3917 17.4919 13.125C16.9136 13.8583 16.3036 14.625 15.662 15.425C15.0204 16.225 14.4918 17.2167 14.0761 18.4C14.0038 18.5833 13.8864 18.7292 13.7237 18.8375C13.5611 18.9458 13.3803 19 13.1815 19ZM13.1815 10.075C13.8141 10.075 14.3563 9.86667 14.8081 9.45C15.2599 9.03333 15.4858 8.53333 15.4858 7.95C15.4858 7.36667 15.2599 6.86667 14.8081 6.45C14.3563 6.03333 13.8141 5.825 13.1815 5.825C12.549 5.825 12.0068 6.03333 11.555 6.45C11.1031 6.86667 10.8772 7.36667 10.8772 7.95C10.8772 8.53333 11.1031 9.03333 11.555 9.45C12.0068 9.86667 12.549 10.075 13.1815 10.075Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          <a
            href="https://maps.app.goo.gl/TaHXpW9rRsbYadZa8"
            class="text-stone-700 hover:underline text-base"
            >Sueen Nature, Palangahawatta, Morapitiya Road, Palenda, Baduraliya,
            Sri Lanka</a
          >
        </div>
      </div>
      <div
        class="max-w-xs p-8 bg-white border border-gray-200 rounded-none shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <h5 class="mb-2 text-lg font-bold text-stone-700 dark:text-white">
          WhatsApp
        </h5>
        <div class="flex flex-row gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <mask
              id="mask0_397_602"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="24"
              height="24"
            >
              <rect width="23.2437" height="24" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_397_602)">
              <path
                d="M19.3216 21C17.3039 21 15.3104 20.5458 13.3412 19.6375C11.3719 18.7292 9.58024 17.4417 7.9661 15.775C6.35196 14.1083 5.10503 12.2583 4.22532 10.225C3.34562 8.19167 2.90576 6.13333 2.90576 4.05C2.90576 3.75 3.00261 3.5 3.19631 3.3C3.39 3.1 3.63213 3 3.92267 3H7.84504C8.07102 3 8.27279 3.07917 8.45034 3.2375C8.6279 3.39583 8.73282 3.58333 8.7651 3.8L9.39462 7.3C9.4269 7.56667 9.41883 7.79167 9.3704 7.975C9.32198 8.15833 9.2332 8.31667 9.10407 8.45L6.75549 10.9C7.07832 11.5167 7.46168 12.1125 7.90557 12.6875C8.34946 13.2625 8.83774 13.8167 9.3704 14.35C9.87079 14.8667 10.3954 15.3458 10.9442 15.7875C11.493 16.2292 12.0741 16.6333 12.6875 17L14.9634 14.65C15.1087 14.5 15.2983 14.3875 15.5324 14.3125C15.7664 14.2375 15.9965 14.2167 16.2224 14.25L19.5637 14.95C19.7897 15.0167 19.9753 15.1375 20.1206 15.3125C20.2659 15.4875 20.3385 15.6833 20.3385 15.9V19.95C20.3385 20.25 20.2417 20.5 20.048 20.7C19.8543 20.9 19.6121 21 19.3216 21ZM5.83543 9L7.43343 7.35L7.02183 5H4.86695C4.94765 5.68333 5.06064 6.35833 5.20591 7.025C5.35119 7.69167 5.56103 8.35 5.83543 9ZM14.5034 17.95C15.1329 18.2333 15.7745 18.4583 16.4282 18.625C17.082 18.7917 17.7397 18.9 18.4015 18.95V16.75L16.1256 16.275L14.5034 17.95Z"
                fill="#1C1B1F"
              />
            </g>
          </svg>
          <a
            href="https://wa.me/+94715840000"
            class="text-stone-700 hover:underline text-base"
            >+(94) 71 584 0000</a

          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';

export default {
  data() {
    return {
      formData:{
        name: '',
        email: '',
        phone: '',
        room:"",
        message: ''
      }
     
    }
  },
  methods: {

    async submitForm(){
      if (!this.formData.room) {
    toast.error("Please select a room");
    return; 
  }
      try {
        const response = await axios.post('https://admin.sueennature.com/api/contact', {
          name: this.formData.name,
          email: this.formData.email,
          message: this.formData.message,
          room: this.formData.room,
          phoneNumber: this.formData.phone
        })
        toast.success("Form Submiited Successfully")
        console.log(response.message)
        this.resetForm()
      } catch (error) {
        toast.error("Something went wrong")
        console.error(error)
      }
    },
    resetForm(){
      this.formData.name = '';
      this.formData.email = '';
      this.formData.phone = '';
      this.formData.room = 'Deluxe Room';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>
h2 {
  font-family: "Philosopher", sans-serif;
}

h3,
.buttontext,
p,
h5,
label,
input,
textarea,
a {
  font-family: "Barlow", sans-serif;
}

#rooms {
  /* Your existing styles here */
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 10 6'%3e %3cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
}
</style>
