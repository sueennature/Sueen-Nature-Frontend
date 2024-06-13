<template>
    <div>
      <!-- Main slider -->
      <div id="main-slider" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li v-for="slide in slides" :key="slide.src" class="splide__slide">
              <img :src="slide.src" :alt="slide.alt" />
            </li>
          </ul>
        </div>
      </div>
  
      <!-- Thumbnail slider -->
      <div id="thumbnail-slider" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li v-for="(slide, index) in slides" :key="slide.src" class="splide__slide">
              <img :src="slide.src" :alt="slide.alt" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref, onMounted, watch } from "vue";
  import { useRoute, useRouter } from "vue-router";
  import Splide from "@splidejs/splide";
  import "@splidejs/splide/dist/css/splide.min.css";
  
  export default defineComponent({
    name: "ImageSlider",
    setup() {
      const matchedRoomTypes = ref([]);
      const nonMatchedRoomTypes = ref([]);
      const slides = ref([]);
      const route = useRoute();
      const router = useRouter();
  
      const navigateToRoomTypePage = (roomTypeName) => {
        router.push({ name: "room", query: { name: roomTypeName } });
      };
  
      const initializeCarousels = () => {
        const mainSliderElement = document.getElementById("main-slider");
        const thumbnailSliderElement = document.getElementById("thumbnail-slider");
  
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
  
      const fetchData = async () => {
        const roomId = route.query.name;
  
        try {
          const response = await fetch("https://admin.sueennature.com/api/getRoomTypes");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
  
          matchedRoomTypes.value = data.room_types.filter(
            (room) => room.id == roomId
          );
  
          nonMatchedRoomTypes.value = data.room_types.filter(
            (room) => room.id != roomId
          );
  
          if (matchedRoomTypes.value.length > 0) {
            const matchedRoom = matchedRoomTypes.value[0];
            slides.value = Object.values(matchedRoom.images).map((image) => ({
              src: `https://admin.sueennature.com/uploads/${image}`,
              alt: matchedRoom.name,
            }));
  
            // Initialize carousels after slides are set
            nextTick(() => {
              initializeCarousels();
            });
          }
        } catch (error) {
          console.error("There was a problem with the fetch operation:", error);
        }
      };
  
      onMounted(() => {
        fetchData();
      });
  
      watch(route, fetchData);
  
      return {
        slides,
        matchedRoomTypes,
        nonMatchedRoomTypes,
        navigateToRoomTypePage,
      };
    },
  });
  </script>
  
  <style scoped>
  .splide__slide img {
    display: block;
    width: 80%; /* Adjust this value to lower the width */
    height: auto; /* Maintain aspect ratio */
    max-height: 300px; /* Adjust this value to lower the height if needed */
    object-fit: cover; /* Ensure the image covers the space */
  }
  </style>
  