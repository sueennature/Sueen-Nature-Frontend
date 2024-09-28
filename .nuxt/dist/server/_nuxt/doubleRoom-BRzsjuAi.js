import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1, b as _imports_2, c as __nuxt_component_0, h as heroRoomsSingle } from "./heroRoomsSingle-soRTuzZZ.js";
import { f as footerHome } from "./footerHome-Dokp2Hbb.js";
import "@splidejs/splide";
/* empty css                            */
import { _ as _export_sfc } from "../server.mjs";
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
import "vue-router";
import "defu";
import "klona";
import "devalue";
import "destr";
import "cookie-es";
import "ohash";
import "jwt-decode";
import "axios";
const _sfc_main$1 = defineComponent({
  name: "ImageSlider",
  setup() {
    const slides = ref([
      { src: "/img/double_1.jpg", alt: "Image 1" },
      { src: "/img/double_2.jpg", alt: "Image 2" },
      { src: "/img/double_3.jpg", alt: "Image 3" },
      { src: "/img/double_1.jpg", alt: "Image 3" },
      { src: "/img/double_2.jpg", alt: "Image 3" },
      { src: "/img/double_3.jpg", alt: "Image 3" }
      // Add more images as needed
    ]);
    return {
      slides
    };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_checkAvailability = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:container px-4 pt-20" }, _attrs))} data-v-82d0a435><h2 class="uppercase text-black-100 md:text-4xl text-3xl text-center" data-v-82d0a435> IN YOUR ROOM </h2><hr class="h-px w-full bg-gray-600 mt-8" data-v-82d0a435><div class="md:flex md:flex-row grid grid-cols-2 justify-center items-center justify-items-center gap-16 mt-20" data-v-82d0a435><div class="flex flex-col justify-center items-center" data-v-82d0a435><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-82d0a435><path fill="#636363" d="M11.5 21.5v-4.842l-3.75 3.7l-.708-.708l4.458-4.458V12.5H8.808L4.35 16.958l-.708-.708l3.7-3.75H2.5v-1h4.842l-3.7-3.75l.708-.708L8.808 11.5H11.5V8.808L7.042 4.35l.708-.708l3.75 3.7V2.5h1v4.842l3.75-3.7l.708.708L12.5 8.808V11.5h2.692l4.458-4.458l.708.708l-3.7 3.75H21.5v1h-4.842l3.7 3.75l-.708.708l-4.458-4.458H12.5v2.692l4.458 4.458l-.708.708l-3.75-3.7V21.5z" data-v-82d0a435></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-82d0a435>Air Conditioner</h6></div><div class="flex flex-col justify-center items-center" data-v-82d0a435><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-82d0a435><path fill="#636363" d="M4 19h16v2H4zM20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2a2 2 0 0 0 2-2V5c0-1.11-.89-2-2-2m-4 10c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V5h10zm4-5h-2V5h2z" data-v-82d0a435></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-82d0a435>Breakfast</h6></div><div class="flex flex-col justify-center items-center" data-v-82d0a435><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-82d0a435><path fill="#636363" d="M12 20.423q-.646 0-1.092-.446q-.446-.446-.446-1.092q0-.647.446-1.093q.446-.446 1.092-.446t1.092.446q.446.446.446 1.093q0 .646-.446 1.092q-.446.446-1.092.446M6.35 15.35l-1.023-1.035q1.302-1.302 3.004-2.039q1.702-.738 3.672-.738q1.97 0 3.67.74q1.698.741 3 2.049L17.65 15.35q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35M2.1 11.1l-1.023-1.023q2.088-2.1 4.875-3.32Q8.738 5.539 12 5.539t6.048 1.22q2.787 1.219 4.875 3.319L21.9 11.1q-1.925-1.925-4.462-3.012T12 7Q9.1 7 6.563 8.088T2.1 11.1" data-v-82d0a435></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-82d0a435>Fiber Wifi</h6></div><div class="flex flex-col justify-center items-center" data-v-82d0a435><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-82d0a435><path fill="#636363" d="M2.5 20.462v-1.039q.777-.096 1.242-.51q.466-.413 1.635-.413q1.17 0 1.733.5q.563.5 1.578.5q1.016 0 1.58-.5q.563-.5 1.732-.5q1.17 0 1.752.5t1.598.5q1.015 0 1.56-.5q.544-.5 1.713-.5t1.635.413q.465.414 1.242.51v1.039q-.898-.116-1.418-.539q-.52-.423-1.459-.423q-.938 0-1.483.5q-.544.5-1.79.5t-1.829-.5q-.583-.5-1.521-.5t-1.502.5q-.563.5-1.81.5q-1.246 0-1.81-.5q-.563-.5-1.501-.5q-.939 0-1.459.423q-.52.423-1.418.539m0-4.5v-1.039q.777-.096 1.242-.51Q4.208 14 5.377 14q1.17 0 1.736.5q.566.5 1.575.5q1.016 0 1.58-.5Q10.83 14 12 14t1.733.5q.563.5 1.579.5q1.015 0 1.578-.5q.564-.5 1.733-.5q1.17 0 1.635.413q.465.414 1.242.51v1.039q-.898-.116-1.418-.539q-.52-.423-1.459-.423q-.938 0-1.474.5t-1.799.5q-1.252 0-1.832-.5q-.58-.5-1.518-.5q-.95 0-1.5.5q-.548.5-1.812.5q-1.263 0-1.818-.5q-.555-.5-1.493-.5q-.939 0-1.459.423q-.52.423-1.418.539m5.285-4.793l3.228-3.229l-1.538-1.538q-.806-.806-1.635-1.133q-.828-.327-2.102-.384V3.5q1.568.058 2.6.441q1.033.384 2.054 1.405l5.823 5.823q-.194.16-.402.245q-.207.086-.482.086q-.67 0-1.32-.5T12 10.5t-2.012.5q-.65.5-1.319.5q-.275 0-.482-.086q-.208-.085-.402-.245m8.646-7.477q.877 0 1.496.622q.62.623.62 1.494q0 .877-.62 1.496t-1.496.62q-.877 0-1.496-.62q-.62-.62-.62-1.496q0-.871.62-1.494q.619-.622 1.496-.622" data-v-82d0a435></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-82d0a435>Pool</h6></div><div class="flex flex-col justify-center items-center" data-v-82d0a435><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-82d0a435><path fill="#636363" d="M5.23 18v1.5q0 .213-.143.356T4.731 20H4.5q-.213 0-.356-.144T4 19.5v-7.346L5.985 6.5q.073-.238.281-.37q.209-.13.465-.13h10.615q.227 0 .412.138q.186.137.257.362L20 12.154V19.5q0 .213-.144.356T19.5 20h-.23q-.213 0-.357-.144t-.144-.356V18zm.185-6.846h13.17L17.112 7H6.888zm-.415 1V17zm2.428 3.538q.466 0 .788-.326q.322-.327.322-.794t-.326-.788q-.327-.322-.793-.322t-.79.326q-.321.327-.321.793t.326.79q.327.321.794.321m9.153 0q.467 0 .79-.326q.321-.327.321-.794t-.326-.788q-.327-.322-.794-.322t-.788.326q-.322.327-.322.793t.326.79q.327.321.793.321M5 17h14v-4.846H5z" data-v-82d0a435></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-82d0a435>Parking space</h6></div><div class="flex flex-col justify-center items-center" data-v-82d0a435><svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" data-v-82d0a435><path fill="#636363" d="M9.365 21q-.67 0-1.143-.472q-.472-.472-.472-1.143v-4.058H5.804q-.75 0-1.277-.537Q4 14.254 4 13.504q0-.552.294-1.02q.294-.469.79-.692L11.5 8.931V7.685q-.823-.172-1.354-.819q-.53-.647-.53-1.481q0-1 .692-1.693Q11 3 12 3q.708 0 1.294.394q.587.394.88 1.04q.018.04.041.214q0 .214-.152.366q-.153.153-.367.153q-.171 0-.284-.079q-.112-.078-.18-.238q-.163-.39-.49-.62Q12.415 4 12 4q-.579 0-.982.403t-.403.982q0 .578.403.981T12 6.77q.213 0 .357.143q.143.144.143.357v1.662l6.396 2.861q.496.223.8.692q.304.468.304 1.02q0 .75-.537 1.286q-.536.537-1.286.537H16.25v4.058q0 .67-.472 1.143q-.472.472-1.143.472zm-3.561-6.673H7.91q.198-.43.58-.687q.383-.255.875-.255h5.27q.492 0 .875.255q.382.256.58.687h2.087q.348 0 .585-.24q.238-.24.238-.595q0-.24-.12-.453q-.12-.212-.36-.32L12 9.815L5.5 12.72q-.24.108-.37.32q-.13.213-.13.453q0 .354.228.595q.228.24.576.24M9.365 20h5.27q.269 0 .442-.173t.173-.442V15q0-.27-.173-.442t-.442-.173h-5.27q-.269 0-.442.173T8.75 15v4.385q0 .269.173.442t.442.173m0-5.615H8.75h6.5z" data-v-82d0a435></path></svg><h6 class="mt-4 text-gray-300 text-xs" data-v-82d0a435>Laundry</h6></div></div><p class="md:text-xl text-base text-gray-300 text-center mt-20 max-w-[80ch] mx-auto" data-v-82d0a435> The Master Suite provides an ambience of comfort, elegance and luxury to welcome business and leisure travelers. The interior exudes a light atmosphere with tasteful tones reflecting the distinctive, individual style of Andrew Martin, the renowned British interior designer.</p><p class="md:text-xl text-base text-gray-300 text-center mt-8 max-w-[80ch] mx-auto" data-v-82d0a435> The luxuriously elegant suites at the award-winning Grand Palace Hotel are designed to satisfy the most discerning tastes. The welcoming atmosphere, together with the impeccable service of our staff, ensures that our guests will enjoy their experience in Riga, and take with them many fond memories of this historic city. </p><div class="wrapper max-w-lg h-auto mx-auto mt-10 md:mt-20" data-v-82d0a435><div id="main-slider" class="splide" data-v-82d0a435><div class="splide__track" data-v-82d0a435><ul class="splide__list" data-v-82d0a435><!--[-->`);
  ssrRenderList(_ctx.slides, (slide, index) => {
    _push(`<li class="splide__slide" data-v-82d0a435><img${ssrRenderAttr("src", slide.src)}${ssrRenderAttr("alt", slide.alt)} data-v-82d0a435></li>`);
  });
  _push(`<!--]--></ul></div></div><div id="thumbnail-slider" class="splide" data-v-82d0a435><div class="splide__track" data-v-82d0a435><ul class="splide__list" data-v-82d0a435><!--[-->`);
  ssrRenderList(_ctx.slides, (slide, index) => {
    _push(`<li class="splide__slide" data-v-82d0a435><img${ssrRenderAttr("src", slide.src)}${ssrRenderAttr("alt", slide.alt)} data-v-82d0a435></li>`);
  });
  _push(`<!--]--></ul></div></div></div><div class="flex flex-row gap-4 justify-center mt-4" data-v-82d0a435><h5 class="md:text-sm text-xs text-black-200 pl-4" data-v-82d0a435> Size: <span class="italic" data-v-82d0a435>42 m<sup data-v-82d0a435>2</sup></span></h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4" data-v-82d0a435> Beds: 01 Queen Bed / 02 Queen Beds </h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4" data-v-82d0a435> Occupancy: 02 Adults / 01 Adult &amp; 01 Kid </h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4" data-v-82d0a435> View: Garden </h5></div><h3 class="text-black-200 md:text-4xl text-3xl text-center mt-10" data-v-82d0a435> Details </h3><ul class="max-w-md text-base space-y-4 text-black-200 list-disc dark:text-gray-400 mx-auto mt-10 list-outside" data-v-82d0a435><li data-v-82d0a435><strong data-v-82d0a435>Beds:</strong> 01 Queen Bed / 02 Queen Beds.</li><li data-v-82d0a435><strong data-v-82d0a435>Size:</strong> 455 Square Feet</li><li data-v-82d0a435><strong data-v-82d0a435>Views:</strong> Garden.</li><li data-v-82d0a435><strong data-v-82d0a435>Occupancy:</strong> 2 adults, or 1 adult + 1 child </li><li data-v-82d0a435><strong data-v-82d0a435>Bathroom:</strong> One full granite bathroom.</li><li data-v-82d0a435><strong data-v-82d0a435>Features: </strong> Soothing, modern design, and floor-to-ceiling windows. </li></ul><div class="mt-8" data-v-82d0a435>`);
  _push(ssrRenderComponent(_component_checkAvailability, null, null, _parent));
  _push(`</div><h2 class="uppercase text-black-100 md:text-4xl text-3xl text-center mt-16" data-v-82d0a435> EXPLORE OTHER ROOMS </h2><div class="lg:flex lg:flex-row grid grid-cols-1 justify-center justify-items-center gap-4 my-20" data-v-82d0a435><div class="flex flex-col gap-4" data-v-82d0a435><img${ssrRenderAttr("src", _imports_0)} alt="roomImg" class="h-auto max-w-xs" data-v-82d0a435><h3 class="text-xl text-black-200 font-medium lg:text-center" data-v-82d0a435> Deluxe Room </h3><h6 class="text-sm text-black-200 font-light max-w-[30ch] lg:mx-auto lg:text-center" data-v-82d0a435> A warm welcome by the gentle breeze early in the morning is a perfect beginning to the day. The bright chirps of the sun add more elegance to it. All you need is a cup of tea to chill. </h6><h6 class="text-red-100 font-bold text-sm lg:text-center" data-v-82d0a435> VIEW DETAILS </h6></div><div class="flex flex-col gap-4" data-v-82d0a435><img${ssrRenderAttr("src", _imports_1)} alt="roomImg" class="h-auto max-w-xs" data-v-82d0a435><h3 class="text-xl text-black-200 font-medium lg:text-center" data-v-82d0a435> Double Room </h3><h6 class="text-sm text-black-200 font-light max-w-[30ch] lg:mx-auto lg:text-center" data-v-82d0a435> Kickstart the day in a warm and spacious room directed towards the glorious lake view. Enjoy your stay with pleasant surprises until you leave Sueen Nature. </h6><h6 class="text-red-100 font-bold text-sm lg:text-center" data-v-82d0a435> VIEW DETAILS </h6></div><div class="flex flex-col gap-4" data-v-82d0a435><img${ssrRenderAttr("src", _imports_2)} alt="roomImg" class="h-auto max-w-xs" data-v-82d0a435><h3 class="text-xl text-black-200 font-medium lg:text-center" data-v-82d0a435> Triple Room </h3><h6 class="text-sm text-black-200 font-light max-w-[30ch] lg:mx-auto lg:text-center" data-v-82d0a435> Wake up with a breathtaking view of lush greenery from your private balcony in one of the most beautiful hotels in Baduraliya. Feel the true sense of relaxation with unique features. </h6><h6 class="text-red-100 font-bold text-sm lg:text-center" data-v-82d0a435> VIEW DETAILS </h6></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contentRoomDouble.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const contentRoomDouble = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-82d0a435"]]);
const _sfc_main = {
  __name: "doubleRoom",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(heroRoomsSingle, null, null, _parent));
      _push(ssrRenderComponent(contentRoomDouble, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/doubleRoom.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=doubleRoom-BRzsjuAi.js.map
