<template>
  <div class="container pt-20">
    <h2 class="uppercase text-black-100 md:text-4xl text-3xl text-center">IN YOUR ROOM</h2>
    <hr class="h-px w-full bg-gray-600 mt-8" />
    <!-- images of faciclities -->
    <div class="md:flex md:flex-row grid grid-cols-2 justify-center items-center gap-16 mt-20">
      <div class="flex-col">
        <img src="../public/img/balcony.png" alt="balconyImg" class="h-full" />

        <h6 class="mt-4 text-gray-300 text-xs">Balcony</h6>
      </div>
      <div class="flex-col">
        <img src="../public/img/chair&desk.png" alt="DeskImg" class="h-full" />

        <h6 class="mt-4 text-gray-300 text-xs">Desk & Chair</h6>
      </div>
      <div class="flex-col">
        <img src="../public/img/tv.png" alt="tvImg" class="h-full" />

        <h6 class="mt-4 text-gray-300 text-xs">TV</h6>
      </div>
      <div class="flex-col">
        <img src="../public/img/wifi.png" alt="wifiImg" class="h-full" />

        <h6 class="mt-4 text-gray-300 text-xs">Wi-Fi</h6>
      </div>
      <div class="flex-col">
        <img src="../public/img/laudry.png" alt="laundryImg" class="h-full" />

        <h6 class="mt-4 text-gray-300 text-xs">Laundry</h6>
      </div>
      <div class="flex-col">
        <img src="../public/img/spa.png" alt="laundryImg" class="h-full" />

        <h6 class="mt-4 text-gray-300 text-xs">Spa</h6>
      </div>
    </div>
    <p class="md:text-xl text-base text-gray-300 text-center mt-20 max-w-[80ch] mx-auto">
      The Master Suite provides an ambience of comfort, elegance and luxury to
      welcome business and leisure travelers. The interior exudes a light
      atmosphere with tasteful tones reflecting the distinctive, individual
      style of Andrew Martin, the renowned British interior designer.
    </p>
    <p class="md:text-xl text-base text-gray-300 text-center mt-8 max-w-[80ch] mx-auto">
      The luxuriously elegant suites at the award-winning Grand Palace Hotel are
      designed to satisfy the most discerning tastes. The welcoming atmosphere,
      together with the impeccable service of our staff, ensures that our guests
      will enjoy their experience in Riga, and take with them many fond memories
      of this historic city.
    </p>
    <!-- single room slider -->
    <div class="wrapper max-w-lg h-auto mx-auto mt-10 md:mt-20">
      <div id="main-slider" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li
              v-for="(slide, index) in slides"
              :key="index"
              class="splide__slide"
            >
              <img :src="slide.src" :alt="slide.alt" />
            </li>
          </ul>
        </div>
      </div>

      <div id="thumbnail-slider" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li
              v-for="(slide, index) in slides"
              :key="index"
              class="splide__slide"
            >
              <img :src="slide.src" :alt="slide.alt" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Bottom line details about the room -->
    <div class="flex flex-row gap-4 justify-center mt-4">
      <h5 class="md:text-sm text-xs text-black-200 pl-4">
        Size: <span class="italic">49 m<sup>2</sup></span>
      </h5>
      <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">Beds: 01 King</h5>
      <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
        Occupancy: 03 Adults / 02 Adults & 02 Kids
      </h5>
      <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">View: Direct Pool</h5>
    </div>
     <!-- room detils section -->
    <h3 class="text-black-200 md:text-4xl text-3xl text-center mt-10">Details</h3>
    <ul class="max-w-md text-base space-y-4 text-black-200 list-disc dark:text-gray-400 mx-auto mt-10 list-outside">
      <li><strong>Beds:</strong> King Bed or Two Double Queens.</li>
      <li><strong>Size:</strong> 455 Square Feet</li>
      <li><strong>Views:</strong> West and East city views.</li>
      <li><strong>Occupancy:</strong> 2 adults, or 2 adults + 1 child. Two double beds: 4 guests, including up to 3 children.</li>
      <li><strong>Bathroom:</strong> One full granite bathroom.</li>
      <li><strong>Features: </strong> Soothing, modern design, and floor-to-ceiling windows.</li>
    </ul>
    <div class="flex items-baseline justify-center mt-20">
        <span class="border-t border-black w-1/4 mx-4"></span>
        <button type="button" class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm whitespace-pre px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase">check availability</button>
        <span class="border-t border-black w-1/4 mx-4"></span>
    </div>
    <h2 class="uppercase text-black-100 md:text-4xl text-3xl text-center mt-16">EXPLORE OTHER ROOMS</h2>
    <!-- images of other rooms  -->
    <div class="lg:flex lg:flex-row grid grid-cols-1 justify-center items-center justify-items-center gap-4 my-20">
      <div class="flex flex-col gap-4">
        <img src="../public/img/junior.png" alt="roomImg" class="h-auto max-w-xs" />
        <h3 class="text-xl text-black-200 font-medium lg:text-center">Junior Suite</h3>
        <h6 class="text-sm text-black-200 font-light max-w-[30ch] lg:mx-auto lg:text-center">With a panoramic view overlooking our grounds and direct access to the south facing porch, the Master Suite provides warmth and brightness for a peaceful getaway.</h6>
        <h6 class="text-red-100 font-bold text-sm lg:text-center">VIEW DETAILS</h6>
      </div>
      <div class="flex flex-col gap-4">
        <img src="../public/img/master.png" alt="roomImg" class="h-auto max-w-xs" />
        <h3 class="text-xl text-black-200 font-medium lg:text-center">Master Suite</h3>
        <h6 class="text-sm text-black-200 font-light max-w-[30ch] lg:mx-auto lg:text-center">With a panoramic view overlooking our grounds and direct access to the south facing porch, the Master Suite provides warmth and brightness for a peaceful getaway.</h6>
        <h6 class="text-red-100 font-bold text-sm lg:text-center">VIEW DETAILS</h6>
      </div>
      <div class="flex flex-col gap-4">
        <img src="../public/img/executive.png" alt="roomImg" class="h-auto max-w-xs" />
        <h3 class="text-xl text-black-200 font-medium lg:text-center">Executive Suite</h3>
        <h6 class="text-sm text-black-200 font-light max-w-[30ch] lg:mx-auto lg:text-center">With a panoramic view overlooking our grounds and direct access to the south facing porch, the Master Suite provides warmth and brightness for a peaceful getaway.</h6>
        <h6 class="text-red-100 font-bold text-sm lg:text-center">VIEW DETAILS</h6>
      </div>

    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Import Splide CSS theme

export default defineComponent({
  name: "ImageSlider",

  setup() {
    const slides = ref([
      { src: "/img/slider.png", alt: "Image 1" },
      { src: "/img/room.png", alt: "Image 2" },
      { src: "/img/room.png", alt: "Image 3" },
      { src: "/img/room.png", alt: "Image 3" },
      { src: "/img/room.png", alt: "Image 3" },
      { src: "/img/room.png", alt: "Image 3" },
      // Add more images as needed
    ]);

    onMounted(() => {
      const main = new Splide("#main-slider", {
        type: "fade",
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true,
      });

      const thumbnails = new Splide("#thumbnail-slider", {
        rewind: true,
        fixedWidth: 104,
        fixedHeight: 58,
        isNavigation: true,
        gap: 10,
        focus: "center",
        pagination: false,
        cover: true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints: {
          640: {
            fixedWidth: 66,
            fixedHeight: 38,
          },
        },
      });

      main.sync(thumbnails);
      main.mount();
      thumbnails.mount();
    });

    return {
      slides,
    };
  },
});
</script>

<style scoped>
h2 {
  font-family: "Philosopher", sans-serif;
}
p,
h3,
.buttontext {
  font-family: "Work Sans", sans-serif;
}
h6 , ul li {
  font-family: "Open Sans", sans-serif;
}
</style>

