import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as _export_sfc, a as useRuntimeConfig } from '../server.mjs';
import { toast } from 'vue3-toastify';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from 'axios';
import { resolveComponent, withCtx, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext, mergeProps, unref, createVNode, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _imports_0$2 } from './footerHome-Dokp2Hbb.mjs';
import { _ as _imports_0$3 } from './logoImg-CDYFSHEn.mjs';
import { useRouter } from 'vue-router';

const _sfc_main$4 = {
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      loadingTest: true,
      // Default to true to show banner initially
      modules: [EffectFade, Navigation, Pagination, Autoplay],
      autoplayConfig: {
        delay: 5e3,
        disableOnInteraction: false
      },
      check_in: "",
      check_out: "",
      roomCategory: null,
      // Ensure this is initially null or an appropriate default value
      roomView: null,
      room_types: [],
      loading: false,
      selectedCategories: [],
      dropdownOpen: false,
      // Holds the selected categories
      userEmail: "",
      discount_code: "",
      isMenuOpen: false,
      authToken: "",
      carousels: []
      // Array to hold fetched carousel data
    };
  },
  computed: {
    allMedia() {
      const uniqueMedia = /* @__PURE__ */ new Set();
      return this.carousels.filter(
        (carousel) => carousel.tags === "Carousel"
        // Filter by specific titles
      ).flatMap(
        (carousel) => carousel.media_urls.map((url) => ({
          path: url,
          media_type: carousel.media_type
        })).filter((media) => {
          if (!uniqueMedia.has(media.path)) {
            uniqueMedia.add(media.path);
            return true;
          }
          return false;
        })
      );
    }
  },
  methods: {
    closeBanner() {
      this.loadingTest = false;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleClickOutside(event) {
      if (this.dropdownOpen && !this.$refs.dropdownContainer.contains(event.target)) {
        this.dropdownOpen = false;
      }
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectCategory(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(
          (c) => c !== category
        );
      } else {
        this.selectedCategories.push(category);
      }
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    async fetchRoomTypes() {
      try {
        const response = await fetch(
          "https://api.sueennature.com/rooms/types",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": this.$config.public.DATABASE_ID
              // Adjust the runtime config reference according to your environment
            }
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.room_types = data.room_types || [];
        console.log("ROOMS", this.room_types);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    },
    async fetchCarousels() {
      const runtimeConfig = useRuntimeConfig();
      try {
        const response = await axios.get(
          "https://api.sueennature.com/carousels/?skip=0&limit=10",
          {
            headers: {
              "x-api-key": runtimeConfig.public.DATABASE_ID,
              // Replace with your actual API key
              "Content-Type": "application/json"
            }
          }
        );
        this.carousels = response.data.data;
      } catch (error) {
        console.error("Error fetching carousels:", error);
      }
    },
    getImageUrl(path) {
      return `https://api.sueennature.com/${path}`;
    },
    setupToast() {
      toast.error("welcome to sda", {
        autoClose: 1e3
      });
    },
    redirectToDashboard() {
      this.$router.push({
        path: "/dashboard",
        query: { guest_id: 30 }
      });
    },
    async checkAvailability() {
      const runtimeConfig = useRuntimeConfig();
      if (!this.check_in || !this.check_out || !this.roomView || this.selectedCategories.length === 0) {
        return toast.error("Please fill all fields");
      }
      const checkInDate = new Date(this.check_in);
      const checkOutDate = new Date(this.check_out);
      const checkInDateOnly = checkInDate.toISOString().split("T")[0];
      const checkOutDateOnly = checkOutDate.toISOString().split("T")[0];
      if (checkInDateOnly === checkOutDateOnly) {
        return toast.error(
          "Check-out date must be different from check-in date."
        );
      }
      if (checkOutDate <= checkInDate) {
        return toast.error("Check-out date must be after check-in date");
      }
      const formatDateToCustom = (dateString) => {
        if (!dateString)
          return "";
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      };
      const formattedCheckIn = formatDateToCustom(this.check_in);
      const formattedCheckOut = formatDateToCustom(this.check_out);
      console.log("DATES", formattedCheckIn, formattedCheckOut);
      const baseUrl = "https://api.sueennature.com/rooms/availability/";
      const categoriesParam = this.selectedCategories.map((category) => `categories=${encodeURIComponent(category)}`).join("&");
      const otherParams = new URLSearchParams({
        check_in: formattedCheckIn,
        check_out: formattedCheckOut
      }).toString();
      const fullUrl = `${baseUrl}?${otherParams}&${categoriesParam}&views=${encodeURIComponent(
        this.roomView
      )}&discount_code=${encodeURIComponent(this.discount_code)}`;
      console.log("Constructed URL:", fullUrl);
      this.loading = true;
      try {
        const response = await fetch(fullUrl, {
          method: "GET",
          headers: {
            "x-api-key": runtimeConfig.public.DATABASE_ID,
            // Ensure this key is valid
            "Content-Type": "application/json"
            // Optional for GET requests
          }
        });
        console.log("first", response);
        const data = await response.json();
        this.loading = false;
        if (response.status === 200) {
          toast.success("Availability checked successfully.");
          setTimeout(() => {
            (void 0).location.reload();
          }, 1500);
          this.$router.push({
            path: "/booking",
            query: {
              fromDate: this.check_in,
              toDate: this.check_out,
              categories: this.selectedCategories.join(","),
              view: this.roomView,
              discount: this.discount_code
            }
          });
        } else if (response.status === 204) {
          toast.error("No rooms available.");
        } else {
          const errorData = await response.json();
          this.setupToastError(
            `An error occurred: ${errorData.message || "Unknown error"}`
          );
        }
      } catch (error) {
        this.loading = false;
        console.error("Error during fetch operation:", error);
      }
    },
    setupToastError(message) {
      toast.error(message, {
        autoClose: 3e3
      });
    },
    setupToastSuccess(message) {
      toast.success(message, {
        autoClose: 3e3
      });
    },
    onSlideChange(swiper) {
      const activeSlide = swiper.slides[swiper.activeIndex];
      const videoElement = this.$refs.video;
      if (activeSlide.contains(videoElement)) {
        swiper.params.autoplay.delay = 3e4;
        videoElement.play();
      } else {
        swiper.params.autoplay.delay = 1e4;
        videoElement.pause();
      }
      swiper.autoplay.start();
    }
  },
  mounted() {
    setTimeout(() => {
      this.loadingTest = false;
    }, 5e3);
    const cookies = (void 0).cookie.split(";");
    const authTokenCookie = cookies.find(
      (cookie) => cookie.trim().startsWith("auth_token=")
    );
    this.authToken = authTokenCookie == null ? void 0 : authTokenCookie.split("=")[1];
    console.log("HOME", this.authToken);
    this.fetchRoomTypes();
    this.fetchCarousels();
    (void 0).addEventListener("click", this.handleClickOutside);
    Promise.all([
      import('../../Datepicker.mjs'),
      import('../../Datepicker.mjs')
    ]).then(([DatePicker1, DatePicker2]) => {
      const datepickerEl1 = this.$refs.datepicker1;
      const datepickerEl2 = this.$refs.datepicker2;
      new DatePicker1.default(datepickerEl1, {
        autohide: true,
        orientation: "bottom right"
      });
      new DatePicker2.default(datepickerEl2, {
        autohide: true,
        orientation: "bottom right"
      });
    });
  },
  beforeDestroy() {
    (void 0).removeEventListener("click", this.handleClickOutside);
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_swiper = resolveComponent("swiper");
  const _component_swiper_slide = resolveComponent("swiper-slide");
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-7f85391b><div data-v-7f85391b><div class="relative min-h-screen" data-v-7f85391b>`);
  _push(ssrRenderComponent(_component_swiper, {
    spaceBetween: 30,
    autoplay: $data.autoplayConfig,
    navigation: true,
    pagination: {
      clickable: true
    },
    modules: $data.modules,
    class: "mySwiper",
    onSlideChange: $options.onSlideChange
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<!--[-->`);
        ssrRenderList($options.allMedia, (item, index) => {
          _push2(ssrRenderComponent(_component_swiper_slide, { key: index }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                if (item.media_type === "video") {
                  _push3(`<video${ssrRenderAttr("src", $options.getImageUrl(item.path))} class="object-cover w-full min-h-screen" autoplay muted loop data-v-7f85391b${_scopeId2}></video>`);
                } else if (item.media_type === "image") {
                  _push3(`<img${ssrRenderAttr("src", $options.getImageUrl(item.path))} class="object-cover w-full min-h-screen" data-v-7f85391b${_scopeId2}>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  item.media_type === "video" ? (openBlock(), createBlock("video", {
                    key: 0,
                    src: $options.getImageUrl(item.path),
                    ref_for: true,
                    ref: "video",
                    class: "object-cover w-full min-h-screen",
                    autoplay: "",
                    muted: "",
                    loop: ""
                  }, null, 8, ["src"])) : item.media_type === "image" ? (openBlock(), createBlock("img", {
                    key: 1,
                    src: $options.getImageUrl(item.path),
                    class: "object-cover w-full min-h-screen"
                  }, null, 8, ["src"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 2
          }, _parent2, _scopeId));
        });
        _push2(`<!--]-->`);
      } else {
        return [
          (openBlock(true), createBlock(Fragment, null, renderList($options.allMedia, (item, index) => {
            return openBlock(), createBlock(_component_swiper_slide, { key: index }, {
              default: withCtx(() => [
                item.media_type === "video" ? (openBlock(), createBlock("video", {
                  key: 0,
                  src: $options.getImageUrl(item.path),
                  ref_for: true,
                  ref: "video",
                  class: "object-cover w-full min-h-screen",
                  autoplay: "",
                  muted: "",
                  loop: ""
                }, null, 8, ["src"])) : item.media_type === "image" ? (openBlock(), createBlock("img", {
                  key: 1,
                  src: $options.getImageUrl(item.path),
                  class: "object-cover w-full min-h-screen"
                }, null, 8, ["src"])) : createCommentVNode("", true)
              ]),
              _: 2
            }, 1024);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<nav class="fixed z-50 top-0 bg-black-200 lg:border-b border-white dark:bg-gray-900 w-full md:hidden" data-v-7f85391b><div class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4" data-v-7f85391b><a href="/home" class="flex items-center space-x-3 rtl:space-x-reverse" data-v-7f85391b><img${ssrRenderAttr("src", _imports_0$2)} alt="logoImg" class="w-auto h-8 md:h-10" data-v-7f85391b></a><div class="lg:hidden flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse" data-v-7f85391b><button data-collapse-toggle="navbar-cta-2" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta-2" aria-expanded="false" data-v-7f85391b><span class="sr-only" data-v-7f85391b>Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-v-7f85391b><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-v-7f85391b></path></svg></button></div><div class="${ssrRenderClass([{ hidden: !$data.isMenuOpen, flex: $data.isMenuOpen }, "lg:hidden items-center justify-between w-full lg:w-auto lg:order-1"])}" id="navbar-cta-2" data-v-7f85391b><ul class="flex flex-col font-medium p-4 w-full lg:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700" data-v-7f85391b><li data-v-7f85391b><a href="/home" class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 rounded lg:bg-transparent hover:bg-gray-100 lg:text-white lg:dark:text-blue-500 uppercase" data-v-7f85391b>Home</a></li><li data-v-7f85391b><a href="/about" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>About</a></li><li data-v-7f85391b><a href="/services" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>Services</a></li><li data-v-7f85391b><a href="/news" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>News</a></li><li data-v-7f85391b><a href="/rooms" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>Rooms</a></li><li data-v-7f85391b><a href="/gallery" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>Gallery</a></li><li data-v-7f85391b><a href="/contact" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>Contact</a></li><li data-v-7f85391b>`);
  if ($data.userEmail && $data.authToken) {
    _push(`<a class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b> Profile </a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li></ul></div><div class="hidden lg:flex lg:flex-row lg:gap-4" data-v-7f85391b><div class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse" data-v-7f85391b><a href="/booking" data-v-7f85391b><button type="button" class="buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase" data-v-7f85391b> Book Now </button></a><button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" data-v-7f85391b><span class="sr-only" data-v-7f85391b>Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-v-7f85391b><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-v-7f85391b></path></svg></button></div><div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta" data-v-7f85391b><ul class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700" data-v-7f85391b><li data-v-7f85391b><a href="/home" class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 bg-blue-700 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase" data-v-7f85391b>Home</a></li><li data-v-7f85391b><a href="/about" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>About</a></li><li data-v-7f85391b><a href="/services" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>Services</a></li><li data-v-7f85391b><a href="/rooms" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>Rooms</a></li><li data-v-7f85391b><a href="/news" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>News</a></li><li data-v-7f85391b><a href="/contact" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>Contact</a></li><li data-v-7f85391b>`);
  if ($data.userEmail && $data.authToken) {
    _push(`<a class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-7f85391b>Profile</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</li></ul></div></div></div></nav><div class="absolute z-40 top-8 left-0 w-full md:flex hidden items-center" data-v-7f85391b><a href="/" class="relative mx-auto" data-v-7f85391b><img${ssrRenderAttr("src", _imports_0$3)} alt="logoImg" class="w-auto h-16 md:h-44" data-v-7f85391b><div class="absolute bottom-0 h-0.5 shadow-slate-800 md:w-40 w-4 bg-white md:-left-48 -left-10 md:block hidden" data-v-7f85391b></div><div class="absolute bottom-0 h-0.5 shadow-slate-800 md:w-40 w-4 bg-white md:-right-48 -right-10 md:block hidden" data-v-7f85391b></div></a></div><div class="absolute z-40 top-20 left-0 right-0 md:flex hidden justify-center md:top-60" data-v-7f85391b><div class="flex flex-row justify-center md:space-x-4 space-x-0" data-v-7f85391b><a href="/" aria-current="true" class="text-slate-600 font-semibold md:text-sm text-xs bg-transparent px-4 py-2 rounded-lg uppercase hover:text-orange-400" data-v-7f85391b> Home </a><a href="/about" class="text-slate-600 font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400" data-v-7f85391b> About </a><a href="/additionalActivites" class="text-slate-600 font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400" data-v-7f85391b>Activites</a><a href="/services" class="text-slate-600 font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400" data-v-7f85391b> Services </a><a href="/news" class="text-slate-600 font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400" data-v-7f85391b> News </a><a href="/rooms" class="text-slate-600 font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400" data-v-7f85391b> Rooms </a><a href="/gallery" class="text-slate-600 font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400" data-v-7f85391b> Gallery </a><a href="/contact" class="text-slate-600 font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400" data-v-7f85391b> Contact </a>`);
  if ($data.userEmail && $data.authToken) {
    _push(`<a class="text-slate-600 font-semibold md:text-sm text-xs px-4 py-2 rounded-lg uppercase hover:text-orange-400" data-v-7f85391b> Profile </a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="absolute z-40 inset-x-0 bottom-56 lg:flex lg:flex-col xl:flex-row flex-col lg:justify-center md:mx-0 mx-4" data-v-7f85391b><div class="xl:flex grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-center bg-black-200 bg-opacity-60 md:space-x-0 border md:rounded-e-none rounded-none md:rounded-lg shadow-lg border-white" data-v-7f85391b><div class="relative md:max-w-sm md:mx-auto" data-v-7f85391b><input type="datetime-local" class="bg-transparent w-full border-none rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Check In Date and Time"${ssrRenderAttr("value", $data.check_in)} data-v-7f85391b></div><div class="w-0.5 bg-white h-8 my-auto xl:flex hidden" data-v-7f85391b></div><div class="relative md:max-w-sm md:mx-auto" data-v-7f85391b><input type="datetime-local" class="bg-transparent w-full border-none rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block" placeholder="Check Out Date and Time"${ssrRenderAttr("value", $data.check_out)} data-v-7f85391b></div><div class="w-0.5 bg-white h-8 my-auto xl:flex hidden" data-v-7f85391b></div><div class="lg:max-w-sm lg:mx-auto" data-v-7f85391b><div class="relative" data-v-7f85391b><div class="text-white text-sm p-4 xl:w-60 lg:w-60 md-48:w-6 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer flex justify-between items-center" data-v-7f85391b><div class="overflow-hidden text-ellipsis whitespace-nowrap w-24" data-v-7f85391b>`);
  if ($data.selectedCategories.length === 0) {
    _push(`<span data-v-7f85391b>Choose Rooms</span>`);
  } else {
    _push(`<span data-v-7f85391b>${ssrInterpolate($data.selectedCategories.join(", "))}</span>`);
  }
  _push(`</div><div class="ml-1" data-v-7f85391b>`);
  if ($data.dropdownOpen) {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-7f85391b><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l7 7a1 1 0 11-1.414 1.414L10 5.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z" clip-rule="evenodd" data-v-7f85391b></path></svg>`);
  } else {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-7f85391b><path fill-rule="evenodd" d="M10 17a1 1 0 01-.707-.293l-7-7a1 1 0 011.414-1.414L10 14.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 17z" clip-rule="evenodd" data-v-7f85391b></path></svg>`);
  }
  _push(`</div></div>`);
  if ($data.dropdownOpen) {
    _push(`<div class="absolute mt-2 w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg z-10" data-v-7f85391b><!--[-->`);
    ssrRenderList($data.room_types, (room) => {
      _push(`<div class="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center" data-v-7f85391b><input type="checkbox"${ssrRenderAttr("value", room.category)}${ssrIncludeBooleanAttr($data.selectedCategories.includes(room.category)) ? " checked" : ""} class="mr-2" data-v-7f85391b><span class="text-gray-900 dark:text-white" data-v-7f85391b>${ssrInterpolate(room.category)}</span></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="w-0.5 bg-white h-8 my-auto xl:flex hidden" data-v-7f85391b></div><div class="lg:max-w-sm lg:mx-auto" data-v-7f85391b><select id="view" class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-7f85391b><option${ssrRenderAttr("value", null)} disabled selected class="text-gray-900" data-v-7f85391b> Choose Room View </option><option value="LAKE" class="text-gray-900" data-v-7f85391b${ssrIncludeBooleanAttr(Array.isArray($data.roomView) ? ssrLooseContain($data.roomView, "LAKE") : ssrLooseEqual($data.roomView, "LAKE")) ? " selected" : ""}>LAKE</option><option value="MOUNTAIN" class="text-gray-900" data-v-7f85391b${ssrIncludeBooleanAttr(Array.isArray($data.roomView) ? ssrLooseContain($data.roomView, "MOUNTAIN") : ssrLooseEqual($data.roomView, "MOUNTAIN")) ? " selected" : ""}>MOUNTAIN</option></select></div><div class="w-0.5 bg-white h-8 my-auto xl:flex hidden" data-v-7f85391b></div><div class="lg:max-w-sm lg:mx-auto" data-v-7f85391b><input${ssrRenderAttr("value", $data.discount_code)} type="text" placeholder="Discount Code" class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-7f85391b></div></div><button class="bg-red-100 hover:bg-red-500 text-sm text-center text-white p-2 md:p-4 rounded xl:rounded-r-lg xl:rounded-l-none hidden justify-center lg:flex" data-v-7f85391b>`);
  if ($data.loading) {
    _push(`<span class="flex" data-v-7f85391b><svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-7f85391b><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-7f85391b></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 01-8 8z" data-v-7f85391b></path></svg> Loading... </span>`);
  } else {
    _push(`<span data-v-7f85391b> Check Availability </span>`);
  }
  _push(`</button><div class="lg:hidden" data-v-7f85391b><button class="bg-red-100 hover:bg-red-500 buttontext text-sm text-white p-4 rounded-none border border-white w-full" data-v-7f85391b>`);
  if ($data.loading) {
    _push(`<span class="flex items-center justify-center" data-v-7f85391b><svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-7f85391b><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-7f85391b></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 01-8 8z" data-v-7f85391b></path></svg> Loading... </span>`);
  } else {
    _push(`<span data-v-7f85391b> Check Availability </span>`);
  }
  _push(`</button></div></div><div data-v-7f85391b></div></div></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/heroHome.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const heroHome = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-7f85391b"]]);
const _imports_0$1 = "" + publicAssetsURL("img/welcomeImg.webp");
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-b9fcdd73><img${ssrRenderAttr("src", _imports_0$1)} alt="backgroundImg" class="object-cover w-full min-h-screen" data-v-b9fcdd73><div class="sm:container px-4 top-5 absolute lg:pt-5 xl:pt-16 pt-2" data-v-b9fcdd73><div class="lg:flex lg:flex-row justify-between grid-cols-2 gap-8" data-v-b9fcdd73><div data-v-b9fcdd73><h3 class="uppercase text-black-50 lg:text-xl text-base" data-v-b9fcdd73>Welcome</h3><h2 class="text-black-100 lg:text-5xl text-2xl mt-4" data-v-b9fcdd73>Embodiment of tranquility</h2><p class="max-w-[80ch] lg:text-base text-sm text-black-50 mt-2" data-v-b9fcdd73>Embrace the endless vista of pure greenery with Sueen Nature \u2013 Baduraliya, escaping the hustle and bustle of everyday routine. Rustling leaves, the songs of birds, and the burbling of water offer you the perfect tonic to relax. We heartily welcome all to your ideal place of tranquillity.</p></div><div class="mt-10" data-v-b9fcdd73><h3 class="uppercase text-black-50 lg:text-lg text-sm" data-v-b9fcdd73>Reservation</h3><h3 class="uppercase text-black-50 lg:text-lg text-sm mt-2 text-nowrap" data-v-b9fcdd73>+(94) 34 330 7500</h3><h3 class="uppercase text-black-50 lg:text-lg text-sm mt-2 text-nowrap" data-v-b9fcdd73>+(94) 71 584 0000</h3></div></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/welcomeHome.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const welcomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-b9fcdd73"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-gradient-to-r from-stone-500 via-stone-600 to-stone-700" }, _attrs))} data-v-03325034><div class="sm:container px-4 pt-20" data-v-03325034><h3 class="uppercase text-gray-500 text-xl xl:ml-7" data-v-03325034>Our Facilities</h3><h2 class="text-gray-500 text-5xl pt-4 xl:ml-7" data-v-03325034>Hotel Amenities</h2><hr class="h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mt-8" data-v-03325034><div class="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 py-0" data-v-03325034><div class="mx-auto my-0 max-w-sm rounded-0 xl:border-r border-none border-stone-500 dark:bg-gray-800 dark:border-gray-700" data-v-03325034><div class="p-8 bg-transparent" data-v-03325034><div class="border border-solid border-white w-10 h-10 p-2 flex justify-center items-center rounded-full" data-v-03325034><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-03325034><path fill="white" d="M11.5 21.5v-4.842l-3.75 3.7l-.708-.708l4.458-4.458V12.5H8.808L4.35 16.958l-.708-.708l3.7-3.75H2.5v-1h4.842l-3.7-3.75l.708-.708L8.808 11.5H11.5V8.808L7.042 4.35l.708-.708l3.75 3.7V2.5h1v4.842l3.75-3.7l.708.708L12.5 8.808V11.5h2.692l4.458-4.458l.708.708l-3.7 3.75H21.5v1h-4.842l3.7 3.75l-.708.708l-4.458-4.458H12.5v2.692l4.458 4.458l-.708.708l-3.75-3.7V21.5z" data-v-03325034></path></svg></div><h5 class="my-2 text-xl font-semibold tracking-wider text-white dark:text-white" data-v-03325034> Air Conditioner </h5><p class="font-normal text-white dark:text-gray-400" data-v-03325034> Stay cool and comfortable with our modern air conditioning system. </p></div></div><hr class="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mt-0" data-v-03325034><div class="mx-auto my-0 max-w-sm rounded-0 xl:border-l border-stone-500 dark:bg-gray-800 dark:border-gray-700" data-v-03325034><div class="p-8 bg-transparent" data-v-03325034><div class="border border-solid border-white w-10 h-10 p-2 flex justify-center items-center rounded-full" data-v-03325034><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-03325034><path fill="white" d="M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2m-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10zm4-5h-2V5h2z" data-v-03325034></path></svg></div><h5 class="my-2 text-xl font-semibold tracking-wider text-white dark:text-white" data-v-03325034> Breakfast </h5><p class="font-normal text-white dark:text-gray-400" data-v-03325034> Enjoy a delightful breakfast selection each morning. </p></div></div><hr class="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mt-0" data-v-03325034><div class="xl:border-l border-stone-500 mx-auto max-w-sm rounded-0 dark:bg-gray-800 dark:border-gray-700" data-v-03325034><div class="p-8 bg-transparent" data-v-03325034><div class="border border-solid border-white w-10 h-10 p-2 flex justify-center items-center rounded-full" data-v-03325034><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-03325034><path fill="white" d="M12 20.423q-.646 0-1.092-.446q-.446-.446-.446-1.092q0-.647.446-1.093q.446-.446 1.092-.446t1.092.446q.446.446.446 1.093q0 .646-.446 1.092q-.446.446-1.092.446M6.35 15.35l-1.023-1.035q1.302-1.302 3.004-2.039q1.702-.738 3.672-.738q1.97 0 3.67.74q1.698.741 3 2.049L17.65 15.35q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35M2.1 11.1l-1.023-1.023q2.088-2.1 4.875-3.32Q8.738 5.539 12 5.539t6.048 1.22q2.787 1.219 4.875 3.319L21.9 11.1q-1.925-1.925-4.462-3.012T12 7Q9.1 7 6.563 8.088T2.1 11.1" data-v-03325034></path></svg></div><h5 class="my-2 text-xl font-semibold tracking-wider text-white dark:text-white" data-v-03325034> Wifi </h5><p class="font-normal text-white dark:text-gray-400" data-v-03325034> Stay connected with WiFi throughout your stay. </p></div></div><hr class="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mt-0" data-v-03325034><div class="mx-auto max-w-sm rounded-0 xl:border-l border-stone-600 dark:bg-gray-800 dark:border-gray-700" data-v-03325034><div class="p-8 bg-transparent" data-v-03325034><div class="border border-solid border-white w-10 h-10 p-2 flex justify-center items-center rounded-full" data-v-03325034><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-03325034><path fill="white" d="M2.5 20.462v-1.039q.777-.096 1.242-.51q.466-.413 1.635-.413q1.17 0 1.733.5q.563.5 1.578.5q1.016 0 1.58-.5q.563-.5 1.732-.5q1.17 0 1.752.5t1.598.5q1.015 0 1.56-.5q.544-.5 1.713-.5t1.635.413q.465.414 1.242.51v1.039q-.898-.116-1.418-.539q-.52-.423-1.459-.423q-.938 0-1.483.5q-.544.5-1.79.5t-1.829-.5q-.583-.5-1.521-.5t-1.502.5q-.563.5-1.81.5q-1.246 0-1.81-.5q-.563-.5-1.501-.5q-.939 0-1.459.423q-.52.423-1.418.539m0-4.5v-1.039q.777-.096 1.242-.51Q4.208 14 5.377 14q1.17 0 1.736.5q.566.5 1.575.5q1.016 0 1.58-.5Q10.83 14 12 14t1.733.5q.563.5 1.579.5q1.015 0 1.578-.5q.564-.5 1.733-.5q1.17 0 1.635.413q.465.414 1.242.51v1.039q-.898-.116-1.418-.539q-.52-.423-1.459-.423q-.938 0-1.474.5t-1.799.5q-1.252 0-1.832-.5q-.58-.5-1.518-.5q-.95 0-1.5.5q-.548.5-1.812.5q-1.263 0-1.818-.5q-.555-.5-1.493-.5q-.939 0-1.459.423q-.52.423-1.418.539m5.285-4.793l3.228-3.229l-1.538-1.538q-.806-.806-1.635-1.133q-.828-.327-2.102-.384V3.5q1.568.058 2.6.441q1.033.384 2.054 1.405l5.823 5.823q-.194.16-.402.245q-.207.086-.482.086q-.67 0-1.32-.5T12 10.5t-2.012.5q-.65.5-1.319.5q-.275 0-.482-.086q-.208-.085-.402-.245m8.646-7.477q.877 0 1.496.622q.62.623.62 1.494q0 .877-.62 1.496t-1.496.62q-.877 0-1.496-.62q-.62-.62-.62-1.496q0-.871.62-1.494q.619-.622 1.496-.622" data-v-03325034></path></svg></div><h5 class="my-2 text-xl font-semibold tracking-wider text-white dark:text-white" data-v-03325034> Pool </h5><p class="font-normal text-white dark:text-gray-400" data-v-03325034> Relax and enjoy our stunningly beautiful poolside. </p></div></div><hr class="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mt-0" data-v-03325034></div><hr class="h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20" data-v-03325034><div class="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 py-0" data-v-03325034><div class="xl:border-none border-stone-500 mx-auto max-w-sm rounded-0 dark:bg-gray-800 dark:border-gray-700" data-v-03325034><div class="p-8 bg-transparent" data-v-03325034><div class="border border-solid border-white w-10 h-10 p-2 flex justify-center items-center rounded-full" data-v-03325034><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-03325034><path fill="white" d="M8 5c-.5 0-1 .21-1.39.6S6 6.45 6 7v3c-.53 0-1 .19-1.41.59S4 11.47 4 12v5h1.34L6 19h1l.69-2h8.67l.64 2h1l.66-2H20v-5c0-.53-.19-1-.59-1.41S18.53 10 18 10V7c0-.55-.2-1-.61-1.4S16.5 5 16 5M8 7h3v3H8m5-3h3v3h-3m-7 2h12v3H6Z" data-v-03325034></path></svg></div><h5 class="my-2 text-xl font-semibold tracking-wider text-white dark:text-white" data-v-03325034> Room Service </h5><p class="font-normal text-white dark:text-gray-400" data-v-03325034> Our facilities feature cozy rooms, perfect for a comfortable and relaxing stay. </p></div></div><hr class="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mt-8" data-v-03325034><div class="xl:border-l border-stone-500 mx-auto max-w-sm rounded-0 dark:bg-gray-800 dark:border-gray-700" data-v-03325034><div class="p-8 bg-transparent" data-v-03325034><div class="border border-solid border-white w-10 h-10 p-2 flex justify-center items-center rounded-full" data-v-03325034><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-03325034><path fill="white" d="M5.23 18v1.5q0 .213-.143.356T4.731 20H4.5q-.213 0-.356-.144T4 19.5v-7.346L5.985 6.5q.073-.238.281-.37q.209-.13.465-.13h10.615q.227 0 .412.138q.186.137.257.362L20 12.154V19.5q0 .213-.144.356T19.5 20h-.23q-.213 0-.357-.144t-.144-.356V18zm.185-6.846h13.17L17.112 7H6.888zm-.415 1V17zm2.428 3.538q.466 0 .788-.326q.322-.327.322-.794t-.326-.788q-.327-.322-.793-.322t-.79.326q-.321.327-.321.793t.326.79q.327.321.794.321m9.153 0q.467 0 .79-.326q.321-.327.321-.794t-.326-.788q-.327-.322-.794-.322t-.788.326q-.322.327-.322.793t.326.79q.327.321.793.321M5 17h14v-4.846H5z" data-v-03325034></path></svg></div><h5 class="my-2 text-xl font-semibold tracking-wider text-white dark:text-white" data-v-03325034> Parking Space </h5><p class="font-normal text-white dark:text-gray-400" data-v-03325034> Our facilities offer ample parking for guests&#39; convenience. </p></div></div><hr class="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mt-8" data-v-03325034><div class="xl:border-l border-stone-500 mx-auto my-0 max-w-sm rounded-0 dark:bg-gray-800 dark:border-gray-700" data-v-03325034><div class="p-8 bg-transparent" data-v-03325034><div class="border border-solid border-white w-10 h-10 p-2 flex justify-center items-center rounded-full" data-v-03325034><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" data-v-03325034><path fill="white" d="M9.365 21q-.67 0-1.143-.472q-.472-.472-.472-1.143v-4.058H5.804q-.75 0-1.277-.537Q4 14.254 4 13.504q0-.552.294-1.02q.294-.469.79-.692L11.5 8.931V7.685q-.823-.172-1.354-.819q-.53-.647-.53-1.481q0-1 .692-1.693Q11 3 12 3q.708 0 1.294.394q.587.394.88 1.04q.018.04.041.214q0 .214-.152.366q-.153.153-.367.153q-.171 0-.284-.079q-.112-.078-.18-.238q-.163-.39-.49-.62Q12.415 4 12 4q-.579 0-.982.403t-.403.982q0 .578.403.981T12 6.77q.213 0 .357.143q.143.144.143.357v1.662l6.396 2.861q.496.223.8.692q.304.468.304 1.02q0 .75-.537 1.286q-.536.537-1.286.537H16.25v4.058q0 .67-.472 1.143q-.472.472-1.143.472zm-3.561-6.673H7.91q.198-.43.58-.687q.383-.255.875-.255h5.27q.492 0 .875.255q.382.256.58.687h2.087q.348 0 .585-.24q.238-.24.238-.595q0-.24-.12-.453q-.12-.212-.36-.32L12 9.815L5.5 12.72q-.24.108-.37.32q-.13.213-.13.453q0 .354.228.595q.228.24.576.24M9.365 20h5.27q.269 0 .442-.173t.173-.442V15q0-.27-.173-.442t-.442-.173h-5.27q-.269 0-.442.173T8.75 15v4.385q0 .269.173.442t.442.173m0-5.615H8.75h6.5z" data-v-03325034></path></svg></div><h5 class="my-2 text-xl font-semibold tracking-wider text-white dark:text-white" data-v-03325034> Laundry </h5><p class="font-normal text-white dark:text-gray-400" data-v-03325034> Enjoy fresh, clean clothes with our convenient laundry services. </p></div></div><hr class="lg:hidden h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mt-8" data-v-03325034><div class="mx-auto my-0 max-w-sm rounded-0 xl:border-l border-stone-600 dark:bg-gray-800 dark:border-gray-700" data-v-03325034><div class="p-8 bg-transparent" data-v-03325034><div class="border border-solid border-white w-10 h-10 p-2 flex justify-center items-center rounded-full" data-v-03325034><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 48 48" data-v-03325034><g fill="none" stroke="white" stroke-width="4" data-v-03325034><path d="M36 15a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z" data-v-03325034></path><path stroke-linecap="round" stroke-linejoin="round" d="m12 16.77l8.003-2.772L31 19.247l-10.997 8.197L31 34.684l-6.992 9.314M35.32 21.643l2.682 1.459L44 17.466M16.849 31.545l-2.97 3.912l-9.875 5.54" data-v-03325034></path></g></svg></div><h5 class="my-2 text-xl font-semibold tracking-wider text-white dark:text-white" data-v-03325034> Sport </h5><p class="font-normal text-white dark:text-gray-400" data-v-03325034> Enjoy a variety of sports and ground facilities for an active stay. </p></div></div></div><hr class="h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mb-8" data-v-03325034><div class="h-8" data-v-03325034></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/facilitiesHome.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const facilitiesHome = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-03325034"]]);
const _imports_0 = "" + publicAssetsURL("img/IMG_0575.jpg");
const _imports_1 = "" + publicAssetsURL("img/IMG_0580.jpg");
const _imports_2 = "" + publicAssetsURL("img/IMG_0590.jpg");
const _imports_3 = "" + publicAssetsURL("img/IMG_0592.jpg");
const _imports_4 = "" + publicAssetsURL("img/IMG_0594.jpg");
const _imports_5 = "" + publicAssetsURL("img/IMG_0596.jpg");
const _imports_6 = "" + publicAssetsURL("img/IMG_0600.jpg");
const _imports_7 = "" + publicAssetsURL("img/IMG_0607.jpg");
const _imports_8 = "" + publicAssetsURL("img/IMG_0626.jpg");
const _imports_9 = "" + publicAssetsURL("img/IMG_0640.jpg");
const _imports_10 = "" + publicAssetsURL("img/IMG_0762-Edit.jpg");
const _imports_11 = "" + publicAssetsURL("img/IMG_0763.jpg");
const _imports_12 = "" + publicAssetsURL("img/IMG_0774-Edit.jpg");
const _imports_13 = "" + publicAssetsURL("img/IMG_0784.jpg");
const _imports_14 = "" + publicAssetsURL("img/IMG_0790.jpg");
const _imports_15 = "" + publicAssetsURL("img/IMG_0797-Edit.jpg");
const _imports_16 = "" + publicAssetsURL("img/IMG_0803.jpg");
const _imports_17 = "" + publicAssetsURL("img/IMG_0803-Edit.jpg");
const _imports_26 = "" + publicAssetsURL("img/sueen-grounds 1.webp");
const _imports_27 = "" + publicAssetsURL("img/sueen-grounds 2.webp");
const _imports_28 = "" + publicAssetsURL("img/sueen-grounds 3.webp");
const _imports_29 = "" + publicAssetsURL("img/sueen-grounds 4.webp");
const _imports_30 = "" + publicAssetsURL("img/footerImg.webp");
const _sfc_main$1 = {
  __name: "servicesHome",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = [Autoplay, Pagination, Navigation, EffectFade];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="sm:container px-4 pt-20" data-v-bc4d1b0c><h2 class="uppercase text-black-100 text-4xl text-center" data-v-bc4d1b0c>Services</h2><h3 class="text-black-50 text-xl pt-1 text-center uppercase tracking-widest" data-v-bc4d1b0c> Dine &amp; Relax </h3><div class="pt-10 lg:gap-y-12 gap-y-0" data-v-bc4d1b0c><div class="flex flex-col items-center lg:flex-row mt-8 p-4 gap-4" data-v-bc4d1b0c><div class="bg-gray-50 bg-opacity-20 flex-1 h-[40vh] w-[45vh] flex flex-col justify-center p-4" data-v-bc4d1b0c><h3 class="text-xl text-black-50 uppercase tracking-widest" data-v-bc4d1b0c> Dining </h3><h2 class="text-black-100 text-4xl pt-2" data-v-bc4d1b0c>Restaurant</h2><p class="text-base text-black-50 pt-2" data-v-bc4d1b0c> Enjoy diverse culinary delights at our restaurant and bar, featuring Sri Lankan and international cuisines. Indulge in all-day dining with breakfast, lunch, and themed dinner options. Relax in our cozy ambiance and unwind at the bar with expertly crafted cocktails. </p><a href="./services" data-v-bc4d1b0c><button type="button" class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-bc4d1b0c> EXPLORE </button></a></div><div class="flex-1 w-[45vh] h-[40vh] flex" data-v-bc4d1b0c>`);
      _push(ssrRenderComponent(unref(Swiper), {
        spaceBetween: 30,
        centeredSlides: true,
        effect: "fade",
        speed: 2e3,
        autoplay: { delay: 4e3, disableOnInteraction: false },
        pagination: {
          clickable: true
        },
        navigation: true,
        modules,
        class: "w-full h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_0,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_1)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_1,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_2)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_3)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_3,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_4)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_4,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_5)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_5,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_6)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_6,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_7)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_7,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_8)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_8,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_9)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_9,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_1,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_2,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_3,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_4,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_5,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_6,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_7,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_8,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_9,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="flex flex-col items-center lg:flex-row mt-8 p-4 gap-4" data-v-bc4d1b0c><div class="flex-1 w-[45vh] h-[40vh] flex" data-v-bc4d1b0c>`);
      _push(ssrRenderComponent(unref(Swiper), {
        spaceBetween: 30,
        centeredSlides: true,
        effect: "fade",
        speed: 2e3,
        autoplay: { delay: 4e3, disableOnInteraction: false },
        pagination: {
          clickable: true
        },
        navigation: true,
        modules,
        class: "w-full h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_10)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_10,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_11)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_11,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_12)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_12,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_13)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_13,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_14)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_14,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_15)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_15,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_16)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_16,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_17)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_17,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_10,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_11,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_12,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_13,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_14,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_15,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_16,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_17,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-gray-50 bg-opacity-20 flex-1 h-[40vh] w-[45vh] flex flex-col justify-center p-4" data-v-bc4d1b0c><h3 class="text-xl text-black-50 uppercase tracking-widest" data-v-bc4d1b0c> Celebrate </h3><h2 class="text-black-100 text-4xl pt-2" data-v-bc4d1b0c>Banquet Hall</h2><p class="text-base text-black-50 pt-2" data-v-bc4d1b0c> Host unforgettable events in our grand banquet hall, perfect for weddings and corporate functions. Explore customizable event packages and exceptional catering services for a flawless experience. Enjoy exquisite culinary offerings and specialized themes to elevate your event at our restaurant. </p><a href="./services" data-v-bc4d1b0c><button type="button" class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-bc4d1b0c> EXPLORE </button></a></div></div><div class="flex flex-col items-center lg:flex-row mt-8 p-4 gap-4" data-v-bc4d1b0c><div class="bg-gray-50 bg-opacity-20 flex-1 h-[40vh] w-[45vh] flex flex-col justify-center p-4" data-v-bc4d1b0c><h3 class="text-xl text-black-50 uppercase tracking-widest" data-v-bc4d1b0c> Playtime </h3><h2 class="text-black-100 text-4xl pt-2" data-v-bc4d1b0c>Sports &amp; Games</h2><p class="text-base text-black-50 pt-2" data-v-bc4d1b0c> At Sueen Nature Resort, embrace leisure with walks, bird watching, and sports like tennis,badminton and volleyball. Thrill-seekers can explore jungle treks and river rafting, while team building activities unite guests. From cricket to football, there&#39;s something for everyone to enjoy. </p><a href="./services" data-v-bc4d1b0c><button type="button" class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-bc4d1b0c> EXPLORE </button></a></div><div class="flex-1 w-[45vh] h-[40vh] flex" data-v-bc4d1b0c>`);
      _push(ssrRenderComponent(unref(Swiper), {
        spaceBetween: 30,
        centeredSlides: true,
        effect: "fade",
        speed: 2e3,
        autoplay: { delay: 4e3, disableOnInteraction: false },
        pagination: {
          clickable: true
        },
        navigation: true,
        modules,
        class: "w-full h-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_26)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_26,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_27)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_27,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_28)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_28,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex lg:flex-row flex-col h-full w-full" data-v-bc4d1b0c${_scopeId2}><div class="w-full h-full" data-v-bc4d1b0c${_scopeId2}><img${ssrRenderAttr("src", _imports_29)} alt="RestaurantImg" class="object-cover h-full w-full rounded-b-md lg:rounded-r-md" data-v-bc4d1b0c${_scopeId2}></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                      createVNode("div", { class: "w-full h-full" }, [
                        createVNode("img", {
                          src: _imports_29,
                          alt: "RestaurantImg",
                          class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_26,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_27,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_28,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex lg:flex-row flex-col h-full w-full" }, [
                    createVNode("div", { class: "w-full h-full" }, [
                      createVNode("img", {
                        src: _imports_29,
                        alt: "RestaurantImg",
                        class: "object-cover h-full w-full rounded-b-md lg:rounded-r-md"
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="mt-20" data-v-bc4d1b0c><img${ssrRenderAttr("src", _imports_30)} alt="PlaytimeImg" class="h-full" data-v-bc4d1b0c></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/servicesHome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const servicesHome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bc4d1b0c"]]);
const _sfc_main = {
  __name: "roomsHome",
  __ssrInlineRender: true,
  setup(__props) {
    const room_carousels = ref([]);
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "px-4 py-20" }, _attrs))} data-v-67d68b05><div class="flex gap-4 items-center justify-center" data-v-67d68b05><h2 class="uppercase text-black-100 text-4xl text-center" data-v-67d68b05> Rooms &amp; Services </h2></div><h3 class="text-black-50 text-xl pt-1 text-center tracking-widest uppercase" data-v-67d68b05> Sueen Nature Resort </h3><div class="xl:grid xl:grid-cols-5 lg:grid lg:grid-cols-1 md:grid md:grid-cols-1 grid grid-cols-1 justify-items-center gap-4 my-10" data-v-67d68b05><figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" data-v-67d68b05><img class="rounded-0 w-64 max-w-md h-60"${ssrRenderAttr("src", `https://api.sueennature.com/${room_carousels.value[4]}`)}${ssrRenderAttr("alt", `Room image`)} data-v-67d68b05><figcaption class="absolute px-4 text-lg text-white bottom-6" data-v-67d68b05><h2 class="text-3xl text-white" data-v-67d68b05>Single Room</h2></figcaption></figure><figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" data-v-67d68b05><img class="rounded-0 w-64 max-w-md h-60"${ssrRenderAttr("src", `https://api.sueennature.com/${room_carousels.value[1]}`)}${ssrRenderAttr("alt", `Room image`)} data-v-67d68b05><figcaption class="absolute px-4 text-lg text-white bottom-6" data-v-67d68b05><h2 class="text-3xl text-white" data-v-67d68b05>Double Room</h2></figcaption></figure><figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" data-v-67d68b05><img class="rounded-0 w-64 max-w-md h-60"${ssrRenderAttr("src", `https://api.sueennature.com/${room_carousels.value[2]}`)}${ssrRenderAttr("alt", `Room image`)} data-v-67d68b05><figcaption class="absolute px-4 text-lg text-white bottom-6" data-v-67d68b05><h2 class="text-3xl text-white" data-v-67d68b05>Deluxe Room</h2></figcaption></figure><figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" data-v-67d68b05><img class="rounded-0 w-64 max-w-md h-60"${ssrRenderAttr("src", `https://api.sueennature.com/${room_carousels.value[0]}`)}${ssrRenderAttr("alt", `Room image`)} data-v-67d68b05><figcaption class="absolute px-4 text-lg text-white bottom-6" data-v-67d68b05><h2 class="text-3xl text-white" data-v-67d68b05>Triple Room</h2></figcaption></figure><figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter" data-v-67d68b05><img class="rounded-0 w-64 max-w-md h-60"${ssrRenderAttr("src", `https://api.sueennature.com/${room_carousels.value[3]}`)}${ssrRenderAttr("alt", `Room image`)} data-v-67d68b05><figcaption class="absolute px-4 text-lg text-white bottom-6" data-v-67d68b05><h2 class="text-3xl text-white" data-v-67d68b05>Family Room</h2></figcaption></figure></div><div class="flex justify-center items-center" data-v-67d68b05><a href="./rooms" data-v-67d68b05><button type="button" class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-67d68b05> VIEW ALL </button></a></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roomsHome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const roomsHome = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-67d68b05"]]);

export { facilitiesHome as f, heroHome as h, roomsHome as r, servicesHome as s, welcomeHome as w };
//# sourceMappingURL=roomsHome-CXrKn_By.mjs.map
