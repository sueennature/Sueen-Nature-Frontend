<template>
  <div class="sm:container px-4 pt-20 mb-20">
    <div
      class="wrapper grid lg:grid-cols-3 grid-cols-1 gap-4 h-auto mt-10 md:mt-20"
    >
      <div v-for="(carousel, index) in filteredCarousels" :key="index">
        <h2 class="font-semibold text-xl text-center mb-2">
          {{carousel.title }}
        </h2>

        <!-- Main Slider for each carousel -->
        <div :id="'main-slider-' + index" class="splide">
          <div class="splide__track">
            <ul class="splide__list">
              <li
                v-for="(item, itemIndex) in carousel.media_urls"
                :key="itemIndex"
                class="splide__slide"
                 @click="openLightbox(index, itemIndex)"
                
               
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
                <!-- Conditionally render thumbnails as either images or videos -->
                <component
                  :is="item.type === 'video' ? 'video' : 'img'"
                  :src="'https://api.sueennature.com/' + item.src"
                  :alt="carousel.title"
                  class="thumbnail-image"
                  v-if="item.type === 'image'"
                />
                <video
                  v-else
                  :src="'https://api.sueennature.com/' + item.src"
                  class="thumbnail-image"
                  muted
                ></video>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Lightbox -->
    <div v-if="lightboxVisible" class="lightbox-overlay" @click="closeLightbox">
      <div class="lightbox-content">
        <button @click="closeLightbox" class="close-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
          <path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></path>
        </svg>
        </button>
        <div v-if="lightboxImages.length" class="lightbox-media">
        <template v-if="lightboxImages[lightboxIndex].type === 'image'">
          <img :src="lightboxImages[lightboxIndex].src" alt="Lightbox Image" class="lightbox-image" />
        </template>
        <template v-else>
          <video
            :src="lightboxImages[lightboxIndex].src"
            controls
            autoplay
            muted
            class="lightbox-video"
          ></video>
        </template>
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
    const lightboxVisible = ref(false);
    const lightboxImages = ref([]);
    const lightboxIndex = ref(0);
    

    const route = useRoute();
    const router = useRouter();

    const fetchRoomData = async () => {
      const runtimeConfig = useRuntimeConfig();

      try {
        const response = await fetch(
          "https://api.sueennature.com/carousels/?skip=0&limit=100",
          {
            method: "GET",
            headers: {
              "x-api-key": runtimeConfig.public.DATABASE_ID,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error(
            `Network response was not ok: ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log("CAROUSELS", data.data);

        // Map data to include media type
        carousels.value = data.data.map((carousel) => ({
          ...carousel,
          media_urls: carousel.media_urls.map((url) => ({
            src: url,
            type: carousel.media_type,
          })),
          tags: carousel.tags || "", // Ensure tags is a string
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
      const thumbnailSliderElement = document.getElementById(
        `thumbnail-slider-${index}`
      );

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
          gap: 6,
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

    const openLightbox = (carouselIndex, mediaIndex) => {
      lightboxImages.value = filteredCarousels.value[carouselIndex].media_urls.map(item => ({
        src: "https://api.sueennature.com/" + item.src,
        type: item.type
      }));
      lightboxIndex.value = mediaIndex;
      lightboxVisible.value = true;
    };

    const closeLightbox = () => {
      lightboxVisible.value = false;
    };

    // Computed property to filter carousels with "Gallery" in tags
    const filteredCarousels = computed(() => {
      return carousels.value.filter(carousel =>
        carousel.tags.includes("Gallery")
      );
    });

    onMounted(() => {
      fetchRoomData();
    });

    return {
      filteredCarousels,
      lightboxVisible,
      lightboxImages,
      lightboxIndex,
      openLightbox,
      closeLightbox,
      
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
  max-width: 100%;
  max-height: 100%;
  margin: 0 auto;
 
  object-fit: contain; /* Ensures that content is visible without cropping */
  
}
.thumbnail-image {
  width: 100%;
  height: auto;
  object-fit: contain; 
 
}

.slider-media,
.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: contain; /* Ensures that content is visible without cropping */
  object-position: center;
}

.lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.lightbox-content {
  position: relative;
  max-width: 80%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px; 
  cursor: pointer;
  font-size: 24px; 
  color: #ffffff; /* White text color */
 
}

.lightbox-media {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
}

.lightbox-media img,
.lightbox-media video {
  max-width: 100%;
  max-height: 100%;
}

.lightbox-image,
.lightbox-video {
  width: 100%; /* Fixed width */
  height: 100%; /* Fixed height */
  object-fit: contain;
}

</style>
  