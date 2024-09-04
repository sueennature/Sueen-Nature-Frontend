<template>
    <div class="sm:container px-4 pt-20 mb-20">
      <div class="wrapper max-w-lg flex flex-col gap-20 h-auto mx-auto mt-10 md:mt-20">
        <div v-for="(carousel, index) in carousels" :key="index">
          <h2 class="font-semibold text-xl text-center mb-2">{{ carousel.title }}</h2>
  
          <!-- Main Slider for each carousel -->
          <div :id="'main-slider-' + index" class="splide">
            <div class="splide__track">
              <ul class="splide__list">
                <li
                  v-for="(item, itemIndex) in carousel.media_urls"
                  :key="itemIndex"
                  class="splide__slide"
                >
                  <!-- Conditionally render images or videos -->
                  <component
                    :is="item.type === 'video' ? 'video' : 'img'"
                    :src="'https://api.sueennature.com/' + item.src"
                    :alt="carousel.title"
                    :controls="item.type === 'video'"
                    class="slider-media"
                  />
                </li>
              </ul>
            </div>
          </div>
  
          <!-- Thumbnail Slider for each carousel -->
          <div :id="'thumbnail-slider-' + index" class="splide">
            <div class="splide__track">
              <ul class="splide__list">
                <li
                  v-for="(item, itemIndex) in carousel.media_urls"
                  :key="'thumb-' + itemIndex"
                  class="splide__slide"
                >
                  <img :src="'https://api.sueennature.com/' + item.src" :alt="carousel.title" class="thumbnail-image" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  

  <script>
import { defineComponent, ref, onMounted, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import CheckoutAvailability from "./CheckoutAvailability.vue";

export default defineComponent({
  name: "ImageSlider",
  components: {
    CheckoutAvailability,
  },
  setup() {
    const carousels = ref([]);

    const route = useRoute();
    const router = useRouter();

    const fetchRoomData = async () => {
      const runtimeConfig = useRuntimeConfig();

      try {
        const response = await fetch(
          "https://api.sueennature.com/carousels/?skip=0&limit=10",
          {
            method: "GET",
            headers: {
              "x-api-key": runtimeConfig.public.DATABASE_ID,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("CAROUSELS", data.data);

        // Map data to include media type
        carousels.value = data.data.map(carousel => ({
          ...carousel,
          media_urls: carousel.media_urls.map(url => ({
            src: url,
            type: carousel.media_type
          }))
        }));

        nextTick(() => {
          carousels.value.forEach((_, index) => {
            initializeCarousels(index);
          });
        });
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        // Optionally, set an error state to display to the user
      }
    };

    const initializeCarousels = (index) => {
      const mainSliderElement = document.getElementById(`main-slider-${index}`);
      const thumbnailSliderElement = document.getElementById(`thumbnail-slider-${index}`);

      if (mainSliderElement && thumbnailSliderElement) {
        const main = new Splide(mainSliderElement, {
          type: "fade",
          heightRatio: 0.5,
          pagination: false,
          arrows: false,
          cover: true,
        });

        const thumbnails = new Splide(thumbnailSliderElement, {
          rewind: true,
          fixedWidth: 80,
          fixedHeight: 45,
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
              fixedWidth: 50,
              fixedHeight: 30,
            },
          },
        });

        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
      }
    };

    onMounted(() => {
      fetchRoomData();
    });

    return {
      carousels,
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
  .buttontext,
  h6,
  ul li {
    font-family: "Barlow", sans-serif;
  }
  .splide__slide img,
  .splide__slide video {
    display: block;
    width: 100%;
    height: auto;
    max-width: 600px;
    max-height: 400px;
    margin: 0 auto;
    object-fit: cover;
  }
  .thumbnail-image {
    width: 100%;
    height: auto;
  }
  </style>
  