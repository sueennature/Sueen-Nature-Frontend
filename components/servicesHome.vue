<template>
  <div class="sm:container px-4 pt-20">
    <h2 class="uppercase text-black-100 text-4xl text-center">Services</h2>
    <h3
      class="text-black-50 text-xl pt-1 text-center uppercase tracking-widest"
    >
      Dine & Relax
    </h3>
    <div class="pt-10 lg:gap-y-12 gap-y-0">
  
 
      <div class="flex flex-col items-center lg:flex-row mt-8 p-4 gap-4">
         <div
          class="bg-gray-50 bg-opacity-20 flex-1 h-[40vh] w-[45vh] flex flex-col justify-center p-4"
        >
          <h3 class="text-xl text-black-50 uppercase tracking-widest">
            Dining
          </h3>
          <h2 class="text-black-100 text-4xl pt-2">Restaurant</h2>
          <p class="text-base text-black-50 pt-2">
            Enjoy diverse culinary delights at our restaurant and bar, featuring
          Sri Lankan and international cuisines. Indulge in all-day dining with
          breakfast, lunch, and themed dinner options. Relax in our cozy
          ambiance and unwind at the bar with expertly crafted cocktails.          </p>
          <a href="./services">
            <button
              type="button"
              class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              EXPLORE
            </button>
          </a>
        </div>
        <div class="flex-1 w-[45vh] h-[40vh] flex">
          <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :effect="'fade'"
            :speed=2000
            :autoplay="{ delay: 4000, disableOnInteraction: false }"
            :pagination="{
              clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="w-full h-full"
          >
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/IMG_0575.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/IMG_0580.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/IMG_0590.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/IMG_0592.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/IMG_0594.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/IMG_0596.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/IMG_0600.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/IMG_0607.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/IMG_0626.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/IMG_0640.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>

      <div class="flex flex-col items-center lg:flex-row mt-8 p-4 gap-4">
        <div class="flex-1 w-[45vh] h-[40vh] flex">
          <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :effect="'fade'"
            :speed=2000
            :autoplay="{ delay: 4000, disableOnInteraction: false }"
            :pagination="{
              clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="w-full h-full"
          >
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                    src="/img/IMG_0762-Edit.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                    src="/img/IMG_0763.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                    src="/img/IMG_0774-Edit.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                    src="/img/IMG_0784.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                    src="/img/IMG_0790.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                    src="/img/IMG_0797-Edit.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                    src="/img/IMG_0803.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                    src="/img/IMG_0803-Edit.jpg"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div
          class="bg-gray-50 bg-opacity-20 flex-1 h-[40vh] w-[45vh] flex flex-col justify-center p-4"
        >
          <h3 class="text-xl text-black-50 uppercase tracking-widest">
            Celebrate
          </h3>
          <h2 class="text-black-100 text-4xl pt-2">Banquet Hall</h2>
          <p class="text-base text-black-50 pt-2">
            Host unforgettable events in our grand banquet hall, perfect for
            weddings and corporate functions. Explore customizable event
            packages and exceptional catering services for a flawless
            experience. Enjoy exquisite culinary offerings and specialized
            themes to elevate your event at our restaurant.
          </p>
          <a href="./services">
            <button
              type="button"
              class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              EXPLORE
            </button>
          </a>
        </div>
      </div>

      <div class="flex flex-col items-center lg:flex-row mt-8 p-4 gap-4">
         <div
          class="bg-gray-50 bg-opacity-20 flex-1 h-[40vh] w-[45vh] flex flex-col justify-center p-4"
        >
          <h3 class="text-xl text-black-50 uppercase tracking-widest">
            Playtime
          </h3>
          <h2 class="text-black-100 text-4xl pt-2">Sports & Games</h2>
          <p class="text-base text-black-50 pt-2">
            At Sueen Nature Resort, embrace leisure with walks, bird watching, and sports like tennis,badminton and volleyball. Thrill-seekers can explore jungle treks and river rafting, while team building activities unite guests. From cricket to football, there's something for everyone to enjoy.
          </p>
          <a href="./services">
            <button
              type="button"
              class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              EXPLORE
            </button>
          </a>
        </div>
        <div class="flex-1 w-[45vh] h-[40vh] flex">
          <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :effect="'fade'"
            :speed=2000
            :autoplay="{ delay: 4000, disableOnInteraction: false }"
            :pagination="{
              clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            class="w-full h-full"
          >
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/sueen-grounds 1.webp"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/sueen-grounds 2.webp"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/sueen-grounds 3.webp"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="flex lg:flex-row flex-col h-full w-full">
                <div class="w-full h-full">
                  <img
                  src="/img/sueen-grounds 4.webp"
                    alt="RestaurantImg"
                    class="object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                  />
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
       
      </div>

   
    </div>
  </div>
  <div class="mt-20">
    <img src="/img/footerImg.webp" alt="PlaytimeImg" class="h-full" />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation,EffectFade } from "swiper/modules";

// You can define your modules directly here
const modules = [Autoplay, Pagination, Navigation,EffectFade];
</script>

<style scoped>
@import "swiper/css";
@import "swiper/css/pagination";
@import "swiper/css/navigation";
@import 'swiper/css/effect-fade';


h2 {
  font-family: "Philosopher", sans-serif;
}
h3,
.buttontext,
p {
  font-family: "Barlow", sans-serif;
}

/* Swipper Carousel custom styles */
/* Add your styles here */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #ffffff8c !important; /* Change to your desired color */
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-size: 30px !important; /* Change the size of the navigation arrows */
}

/* Optional: Add hover effect */
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  color: #505250d1 !important; /* Change to your desired hover color */
}
</style>
