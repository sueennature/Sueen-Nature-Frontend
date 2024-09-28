import { defineComponent, ref, mergeProps, useSSRContext, nextTick } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { n as navbar } from "./navbar-BR0KPeGF.js";
import { f as footerHome } from "./footerHome-Dokp2Hbb.js";
import { _ as _export_sfc, a as useRuntimeConfig } from "../server.mjs";
import { useRoute, useRouter } from "vue-router";
import Splide from "@splidejs/splide";
/* empty css                            */
import { C as CheckoutAvailability } from "./CheckoutAvailability-BMKP4iSF.js";
import "flowbite";
import "./nuxt-link-CBXZo5aS.js";
import "ufo";
import "./logoImg-CDYFSHEn.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "defu";
import "klona";
import "devalue";
import "destr";
import "cookie-es";
import "ohash";
import "jwt-decode";
import "axios";
import "vue3-toastify";
/* empty css               */
const _imports_0 = "" + __publicAssetsURL("img/Single Room.webp");
const _imports_1 = "" + __publicAssetsURL("img/Double Room.webp");
const _imports_2 = "" + __publicAssetsURL("img/Delux Room.webp");
const _imports_3 = "" + __publicAssetsURL("img/Triple Room.webp");
const _imports_4 = "" + __publicAssetsURL("img/Family Room.webp");
const _imports_5 = "" + __publicAssetsURL("img/room_5.jpg");
const _sfc_main$1 = defineComponent({
  name: "ImageSlider",
  components: {
    CheckoutAvailability
  },
  setup() {
    const matchedRoomTypes = ref([]);
    const nonMatchedRoomTypes = ref([]);
    const slides = ref([]);
    const roomData = ref(null);
    const unSelectedRoomData = ref([]);
    useRoute();
    const router = useRouter();
    const fetchRoomData = async (roomId) => {
      var _a, _b;
      const runtimeConfig = useRuntimeConfig();
      try {
        const response = await fetch("https://api.sueennature.com/rooms/types", {
          method: "GET",
          headers: {
            "x-api-key": runtimeConfig.public.DATABASE_ID,
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        matchedRoomTypes.value = data.room_types.filter(
          (room) => room.category === roomId
        );
        nonMatchedRoomTypes.value = data.room_types.filter(
          (room) => room.category !== roomId
        );
        unSelectedRoomData.value = nonMatchedRoomTypes.value;
        const matchedRoom = (_a = matchedRoomTypes.value[0]) == null ? void 0 : _a.rooms[0];
        if (matchedRoom) {
          if (matchedRoom.secondary_category === roomId) {
            roomData.value = {
              ...matchedRoom,
              max_adults: matchedRoom.secondary_max_adults,
              max_childs: matchedRoom.secondary_max_childs,
              max_people: matchedRoom.secondary_max_people,
              size: matchedRoom.secondary_size,
              beds: matchedRoom.secondary_beds
            };
          } else if (matchedRoom.category === roomId) {
            roomData.value = {
              ...matchedRoom,
              max_adults: matchedRoom.max_adults,
              max_childs: matchedRoom.max_childs,
              max_people: matchedRoom.max_people,
              size: matchedRoom.size,
              beds: matchedRoom.beds
            };
          }
        }
        if (matchedRoomTypes.value.length > 0) {
          slides.value = (_b = matchedRoom.images) == null ? void 0 : _b.map((image) => ({
            src: `https://api.sueennature.com/${image}`,
            alt: matchedRoom.name
          }));
          nextTick(() => {
            initializeCarousels();
          });
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    const navigateToRoomTypePage = (roomTypeName) => {
      (void 0).scrollTo({ top: 0, behavior: "smooth" });
      router.push({ query: { name: roomTypeName } });
      fetchRoomData(roomTypeName);
    };
    const initializeCarousels = () => {
      const mainSliderElement = (void 0).getElementById("main-slider");
      const thumbnailSliderElement = (void 0).getElementById("thumbnail-slider");
      if (mainSliderElement && thumbnailSliderElement) {
        const main = new Splide(mainSliderElement, {
          type: "fade",
          heightRatio: 0.5,
          pagination: false,
          arrows: false,
          cover: true
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
            touch: 10
          },
          breakpoints: {
            640: {
              fixedWidth: 50,
              fixedHeight: 30
            }
          }
        });
        main.sync(thumbnails);
        main.mount();
        thumbnails.mount();
      }
    };
    return {
      slides,
      roomData,
      unSelectedRoomData,
      navigateToRoomTypePage
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:container px-4 pt-20" }, _attrs))} data-v-4c4ac089><h2 class="uppercase text-black-100 md:text-4xl text-3xl text-center" data-v-4c4ac089> IN YOUR ROOM </h2><hr class="h-px w-full bg-gray-600 mt-8" data-v-4c4ac089><div class="md:flex md:flex-row grid grid-cols-2 justify-center items-center justify-items-center gap-16 mt-20" data-v-4c4ac089><div class="flex flex-col justify-center items-center" data-v-4c4ac089><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-4c4ac089><path fill="#636363" d="M11.5 21.5v-4.842l-3.75 3.7l-.708-.708l4.458-4.458V12.5H8.808L4.35 16.958l-.708-.708l3.7-3.75H2.5v-1h4.842l-3.7-3.75l.708-.708L8.808 11.5H11.5V8.808L7.042 4.35l.708-.708l3.75 3.7V2.5h1v4.842l3.75-3.7l.708.708L12.5 8.808V11.5h2.692l4.458-4.458l.708.708l-3.7 3.75H21.5v1h-4.842l3.7 3.75l-.708.708l-4.458-4.458H12.5v2.692l4.458 4.458l-.708.708l-3.75-3.7V21.5z" data-v-4c4ac089></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-4c4ac089>Air Conditioner</h6></div><div class="flex flex-col justify-center items-center" data-v-4c4ac089><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-4c4ac089><path fill="#636363" d="M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2m-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10zm4-5h-2V5h2z" data-v-4c4ac089></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-4c4ac089>Breakfast</h6></div><div class="flex flex-col justify-center items-center" data-v-4c4ac089><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-4c4ac089><path fill="#636363" d="M12 20.423q-.646 0-1.092-.446q-.446-.446-.446-1.092q0-.647.446-1.093q.446-.446 1.092-.446t1.092.446q.446.446.446 1.093q0 .646-.446 1.092q-.446.446-1.092.446M6.35 15.35l-1.023-1.035q1.302-1.302 3.004-2.039q1.702-.738 3.672-.738q1.97 0 3.67.74q1.698.741 3 2.049L17.65 15.35q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35M2.1 11.1l-1.023-1.023q2.088-2.1 4.875-3.32Q8.738 5.539 12 5.539t6.048 1.22q2.787 1.219 4.875 3.319L21.9 11.1q-1.925-1.925-4.462-3.012T12 7Q9.1 7 6.563 8.088T2.1 11.1" data-v-4c4ac089></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-4c4ac089>Wifi</h6></div><div class="flex flex-col justify-center items-center" data-v-4c4ac089><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-4c4ac089><path fill="#636363" d="M2.5 20.462v-1.039q.777-.096 1.242-.51q.466-.413 1.635-.413q1.17 0 1.733.5q.563.5 1.578.5q1.016 0 1.58-.5q.563-.5 1.732-.5q1.17 0 1.752.5t1.598.5q1.015 0 1.56-.5q.544-.5 1.713-.5t1.635.413q.465.414 1.242.51v1.039q-.898-.116-1.418-.539q-.52-.423-1.459-.423q-.938 0-1.483.5q-.544.5-1.79.5t-1.829-.5q-.583-.5-1.521-.5t-1.502.5q-.563.5-1.81.5q-1.246 0-1.81-.5q-.563-.5-1.501-.5q-.939 0-1.459.423q-.52.423-1.418.539m0-4.5v-1.039q.777-.096 1.242-.51Q4.208 14 5.377 14q1.17 0 1.736.5q.566.5 1.575.5q1.016 0 1.58-.5Q10.83 14 12 14t1.733.5q.563.5 1.579.5q1.015 0 1.578-.5q.564-.5 1.733-.5q1.17 0 1.635.413q.465.414 1.242.51v1.039q-.898-.116-1.418-.539q-.52-.423-1.459-.423q-.938 0-1.474.5t-1.799.5q-1.252 0-1.832-.5q-.58-.5-1.518-.5q-.95 0-1.5.5q-.548.5-1.812.5q-1.263 0-1.818-.5q-.555-.5-1.493-.5q-.939 0-1.459.423q-.52.423-1.418.539m5.285-4.793l3.228-3.229l-1.538-1.538q-.806-.806-1.635-1.133q-.828-.327-2.102-.384V3.5q1.568.058 2.6.441q1.033.384 2.054 1.405l5.823 5.823q-.194.16-.402.245q-.207.086-.482.086q-.67 0-1.32-.5T12 10.5t-2.012.5q-.65.5-1.319.5q-.275 0-.482-.086q-.208-.085-.402-.245m8.646-7.477q.877 0 1.496.622q.62.623.62 1.494q0 .877-.62 1.496t-1.496.62q-.877 0-1.496-.62q-.62-.62-.62-1.496q0-.871.62-1.494q.619-.622 1.496-.622" data-v-4c4ac089></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-4c4ac089>Pool</h6></div><div class="flex flex-col justify-center items-center" data-v-4c4ac089><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-4c4ac089><path fill="#636363" d="M5.23 18v1.5q0 .213-.143.356T4.731 20H4.5q-.213 0-.356-.144T4 19.5v-7.346L5.985 6.5q.073-.238.281-.37q.209-.13.465-.13h10.615q.227 0 .412.138q.186.137.257.362L20 12.154V19.5q0 .213-.144.356T19.5 20h-.23q-.213 0-.357-.144t-.144-.356V18zm.185-6.846h13.17L17.112 7H6.888zm-.415 1V17zm2.428 3.538q.466 0 .788-.326q.322-.327.322-.794t-.326-.788q-.327-.322-.793-.322t-.79.326q-.321.327-.321.793t.326.79q.327.321.794.321m9.153 0q.467 0 .79-.326q.321-.327.321-.794t-.326-.788q-.327-.322-.794-.322t-.788.326q-.322.327-.322.793t.326.79q.327.321.793.321M5 17h14v-4.846H5z" data-v-4c4ac089></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-4c4ac089>Parking space</h6></div><div class="flex flex-col justify-center items-center" data-v-4c4ac089><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-4c4ac089><path fill="#636363" d="M9.365 21q-.67 0-1.143-.472q-.472-.472-.472-1.143v-4.058H5.804q-.75 0-1.277-.537Q4 14.254 4 13.504q0-.552.294-1.02q.294-.469.79-.692L11.5 8.931V7.685q-.823-.172-1.354-.819q-.53-.647-.53-1.481q0-1 .692-1.693Q11 3 12 3q.708 0 1.294.394q.587.394.88 1.04q.018.04.041.214q0 .214-.152.366q-.153.153-.367.153q-.171 0-.284-.079q-.112-.078-.18-.238q-.163-.39-.49-.62Q12.415 4 12 4q-.579 0-.982.403t-.403.982q0 .578.403.981T12 6.77q.213 0 .357.143q.143.144.143.357v1.662l6.396 2.861q.496.223.8.692q.304.468.304 1.02q0 .75-.537 1.286q-.536.537-1.286.537H16.25v4.058q0 .67-.472 1.143q-.472.472-1.143.472zm-3.561-6.673H7.91q.198-.43.58-.687q.383-.255.875-.255h5.27q.492 0 .875.255q.382.256.58.687h2.087q.348 0 .585-.24q.238-.24.238-.595q0-.24-.12-.453q-.12-.212-.36-.32L12 9.815L5.5 12.72q-.24.108-.37.32q-.13.213-.13.453q0 .354.228.595q.228.24.576.24M9.365 20h5.27q.269 0 .442-.173t.173-.442V15q0-.27-.173-.442t-.442-.173h-5.27q-.269 0-.442.173T8.75 15v4.385q0 .269.173.442t.442.173m0-5.615H8.75h6.5z" data-v-4c4ac089></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-4c4ac089>Laundry</h6></div></div><p class="md:text-xl text-base text-gray-300 text-center mt-20 max-w-[80ch] mx-auto" data-v-4c4ac089>The Master Suite offers an unparalleled blend of comfort, elegance, and luxury, creating the perfect sanctuary for both business and leisure travelers. The thoughtfully curated interior features soft, sophisticated tones that reflect the distinctive character of the suite, while ensuring a serene and relaxing environment. Every detail has been meticulously crafted to enhance the overall experience, providing guests with a space that is both inviting and refined. </p><p class="md:text-xl text-base text-gray-300 text-center mt-8 max-w-[80ch] mx-auto" data-v-4c4ac089> At the prestigious, award-winning Grand Palace Hotel, our exquisitely designed Master Suites cater to the most discerning of tastes. The luxurious ambiance, coupled with the impeccable service provided by our dedicated staff, guarantees an unforgettable stay. Whether visiting for business or pleasure, guests are embraced by a warm and welcoming atmosphere that complements the charm and history of Riga, leaving them with cherished memories of both the hotel and the city itself. </p><div class="wrapper max-w-lg h-auto mx-auto mt-10 md:mt-20" data-v-4c4ac089><div id="main-slider" class="splide" data-v-4c4ac089><div class="splide__track" data-v-4c4ac089><ul class="splide__list" data-v-4c4ac089><!--[-->`);
  ssrRenderList(_ctx.slides, (slide, index) => {
    _push(`<li class="splide__slide" data-v-4c4ac089><img${ssrRenderAttr("src", slide.src)}${ssrRenderAttr("alt", slide.alt)} data-v-4c4ac089></li>`);
  });
  _push(`<!--]--></ul></div></div><div id="thumbnail-slider" class="splide" data-v-4c4ac089><div class="splide__track" data-v-4c4ac089><ul class="splide__list" data-v-4c4ac089><!--[-->`);
  ssrRenderList(_ctx.slides, (slide, index) => {
    _push(`<li class="splide__slide" data-v-4c4ac089><img${ssrRenderAttr("src", slide.src)}${ssrRenderAttr("alt", slide.alt)} data-v-4c4ac089></li>`);
  });
  _push(`<!--]--></ul></div></div></div>`);
  if (_ctx.roomData) {
    _push(`<div data-v-4c4ac089><div class="flex flex-col items-center" data-v-4c4ac089><div class="flex flex-row gap-4 justify-center mt-4" data-v-4c4ac089><h5 class="md:text-sm text-xs text-black-200 pl-4" data-v-4c4ac089> Size: <span class="italic" data-v-4c4ac089>${ssrInterpolate(_ctx.roomData.size)} m<sup data-v-4c4ac089>2</sup></span></h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4" data-v-4c4ac089> Bed: ${ssrInterpolate(_ctx.roomData.beds || "01 Queen")}</h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4" data-v-4c4ac089> Occupancy: Max adult${ssrInterpolate(_ctx.roomData.max_adults > 1 ? "s" : "")} ${ssrInterpolate(_ctx.roomData.max_adults)} ${ssrInterpolate(_ctx.roomData.max_childs ? ", Max Children " + _ctx.roomData.max_childs + (_ctx.roomData.max_childs > 1 ? " " : " ") : "")}</h5></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h2 class="uppercase text-black-100 md:text-4xl text-3xl text-center mt-16" data-v-4c4ac089> EXPLORE OTHER ROOMS </h2>`);
  if (((_a = _ctx.unSelectedRoomData) == null ? void 0 : _a.length) > 0) {
    _push(`<div class="lg:flex lg:flex-row grid grid-cols-1 justify-center justify-items-center gap-4 my-20" data-v-4c4ac089><!--[-->`);
    ssrRenderList(_ctx.unSelectedRoomData, (category, categoryIndex) => {
      _push(`<div class="category-section" data-v-4c4ac089>`);
      if (category.rooms.length > 0) {
        _push(`<div class="room-card" data-v-4c4ac089><div class="image-gallery" data-v-4c4ac089>`);
        if (category.category === "Single") {
          _push(`<img${ssrRenderAttr("src", _imports_0)} alt="Single Room Image" class="room-image w-[300px] h-[300px]" data-v-4c4ac089>`);
        } else if (category.category === "Double") {
          _push(`<img${ssrRenderAttr("src", _imports_1)} alt="Double Room Image" class="room-image w-[300px] h-[300px]" data-v-4c4ac089>`);
        } else if (category.category === "Deluxe") {
          _push(`<img${ssrRenderAttr("src", _imports_2)} alt="Deluxe Room Image" class="room-image w-[300px] h-[300px]" data-v-4c4ac089>`);
        } else if (category.category === "Triple") {
          _push(`<img${ssrRenderAttr("src", _imports_3)} alt="Triple Room Image" class="room-image w-[300px] h-[300px]" data-v-4c4ac089>`);
        } else if (category.category === "Family") {
          _push(`<img${ssrRenderAttr("src", _imports_4)} alt="Family Room Image" class="room-image w-[300px] h-[300px]" data-v-4c4ac089>`);
        } else {
          _push(`<img${ssrRenderAttr("src", _imports_5)} alt="Default Room Image" class="room-image w-[300px] h-[300px]" data-v-4c4ac089>`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="text-xl mt-2 mb-2 text-center" data-v-4c4ac089>${ssrInterpolate(category.category)}</h2><p class="text-center text-[14px]" data-v-4c4ac089>${ssrInterpolate(category.rooms[0].description)}</p><div class="text-center mt-2 mb-2" data-v-4c4ac089><button class="text-red-100 font-bold text-sm lg:text-center" data-v-4c4ac089> VIEW DETAILS </button></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/roomComponet.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const roomComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4c4ac089"]]);
const _sfc_main = {
  __name: "room",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "Attention to detail like never before.",
        pageTitleTwo: "EXPLORE OUR HOTEL",
        pageTitleThree: "STAY WITH US",
        imageNav: "/img/hero-rooms.png"
      }, null, _parent));
      _push(ssrRenderComponent(roomComponent, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/room.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=room-CbKie5--.js.map
