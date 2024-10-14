<template>
  <div class="masonry-grid my-24 mx-14">
    <!-- Loop through all the media URLs from all carousels and display them -->
    <div v-for="(url, idx) in allMedia" :key="idx" class="masonry-item">
      <!-- Image handling -->
      <img
        v-if="url.media_type === 'image'"
        :src="getImageUrl(url.path)"
        class="w-full h-auto object-cover rounded-none cursor-pointer"
        alt="carousel image"
        @click="openLightbox(idx)"
      />
      
      <!-- Video handling -->
      <video v-if="url.media_type === 'video'" controls class="w-full h-auto rounded-lg">
        <source :src="getImageUrl(url.path)" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

    <!-- Lightbox Component -->
    <vue-easy-lightbox
      :visible="visible"
      :imgs="imageUrls"
      :index="lightboxIndex"
      :zoom-percent="120"
      @hide="visible = false"
    />

  </div>
</template>

<script>
import axios from 'axios';
import VueEasyLightbox from 'vue-easy-lightbox';

export default {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      carousels: [], // Raw carousels fetched from the API
      visible: false, // Controls the lightbox visibility
      lightboxIndex: 0, // Index of the current image in the lightbox
    };
  },
  computed: {
    allMedia() {
      const uniqueMedia = new Set(); // Create a Set to store unique media paths

      return this.carousels
        .filter(carousel => carousel.tags && carousel.tags.includes('Gallery')) // Filter "Gallery" tagged carousels
        .flatMap(carousel =>
          carousel.media_urls
            .map(url => ({ path: url, media_type: carousel.media_type }))
            .filter(media => {
              if (!uniqueMedia.has(media.path)) {
                uniqueMedia.add(media.path); // Add unique path to the Set
                return true; // Include this media
              }
              return false; // Skip duplicate media
            })
        );
    },
    imageUrls() {
      // Extract the image paths only for the lightbox
      return this.allMedia.filter(media => media.media_type === 'image').map(media => this.getImageUrl(media.path));
    }
  },
  mounted() {
    this.fetchCarousels();
  },
  methods: {
    async fetchCarousels() {
      const runtimeConfig = useRuntimeConfig();
      try {
        const response = await axios.get('https://api.sueennature.com/carousels/?skip=0&limit=10', {
          headers: {
            'x-api-key': runtimeConfig.public.X_API_KEY, // Replace with your actual API key
            "Content-Type": "application/json",
          }
        });
        this.carousels = response.data.data; // Assign the fetched carousels data
      } catch (error) {
        console.error('Error fetching carousels:', error);
      }
    },
    getImageUrl(path) {
      return `https://api.sueennature.com/${path}`;
    },
    openLightbox(index) {
      this.lightboxIndex = index; // Set the current index of the image
      this.visible = true; // Show the lightbox
    }
  }
};

</script>

<style scoped>
/* Masonry Layout */
.masonry-grid {
  column-count: 2; /* Number of columns */
  column-gap: 0.5rem; /* Gap between columns */
}

@media (min-width: 768px) {
  .masonry-grid {
    column-count: 4; /* Adjust the number of columns for larger screens */
  }
}

/* Gap between individual items */
.masonry-item {
  margin-bottom: 0.5rem; /* Adds gap between images */
  overflow: hidden; /* Prevent the image from expanding outside the container */
}

/* Style for images and videos */
.masonry-grid img, 
.masonry-grid video {
  break-inside: avoid; /* Prevent media from being broken across columns */
  width: 100%; /* Ensure full width within column */
  transition: transform 0.3s ease-in-out; /* Smooth transition for zoom effect */
}

/* Subtle zoom-in effect on hover */
.masonry-grid img:hover, 
.masonry-grid video:hover {
  transform: scale(1.1); /* Subtle zoom, keep size controlled */
}
</style>

  