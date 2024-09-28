import { mergeProps, useSSRContext, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { f as footerHome } from './footerHome-Dokp2Hbb.mjs';
import { n as navbar } from './navbar-BR0KPeGF.mjs';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './nuxt-link-CBXZo5aS.mjs';
import '../server.mjs';
import 'axios';
import './logoImg-CDYFSHEn.mjs';

const _sfc_main$1 = {
  __name: "contentRooms",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const view = ref("view");
    const viewDouble = ref("viewDouble");
    const viewDeluxe = ref("viewDeluxe");
    const viewTriple = ref("viewTriple");
    const viewFamily = ref("viewFamily");
    const getImageSrc = () => {
      return view.value === "view" ? "./img/Single Roomv.webp" : viewTriple.value == "lake" ? "./img/single_room_two.jpg" : "./img/single_room_one.jpg";
    };
    const getImageSrcDouble = () => {
      return viewDouble.value === "viewDouble" ? "./img/Double Roomv.webp" : viewDouble.value == "lake" ? "./img/room_2.jpg" : "./img/room_1.jpg";
    };
    const getImageSrcDeluxe = () => {
      return viewDeluxe.value === "viewDeluxe" ? "./img/Delux Roomv.webp" : viewDeluxe.value == "lake" ? "./img/room_5.jpg" : "./img/room_3.jpg";
    };
    const getImageSrcTriple = () => {
      return viewTriple.value === "viewTriple" ? "./img/Triple Roomv.webp" : viewTriple.value == "lake" ? "./img/room_5.jpg" : "./img/family_room_four.jpg";
    };
    const getImageSrcFamily = () => {
      return viewFamily.value === "viewFamily" ? "./img/Family Roomv.webp" : viewFamily.value == "lake" ? "./img/family_room_one.jpg" : "./img/family_room_two.jpg";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "lg:container px-4 py-20" }, _attrs))}><h2 class="text-black-200 md:text-4xl text-xl font-medium text-center max-w-[50ch] mx-auto"> Experience the epitome of comfort and luxury amidst the tranquil surroundings of Sueen Nature Resort. </h2><p class="text-gray-300 md:text-xl text-lg text-center mt-10 max-w-[70ch] mx-auto"> Our thoughtfully designed rooms and suites offer a perfect blend of contemporary elegance and natural charm, providing guests with an unforgettable retreat away from the hustle and bustle of everyday life. Whether you choose to wake up to the serene beauty of the lake or the majestic mountains, our rooms and suites at Sueen Nature Resort promise a blissful retreat amidst nature&#39;s splendor. Immerse yourself in comfort, style, and natural beauty during your stay with us. </p><div><div class="flex items-center justify-center md:mt-20 md:mb-10 my-6"><span class="border-t border-black w-1/4 mx-4"></span><h2 class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre"> Single Room </h2><span class="border-t border-black w-1/4 mx-4"></span></div><div class="relative max-w-5xl mx-auto"><div class="relative h-56 overflow-hidden rounded-lg md:h-96"><img${ssrRenderAttr("src", getImageSrc())} alt="Single Room View"></div></div><div class="flex flex-row gap-4 justify-center mt-2"><h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]"> Size: <span class="italic">42 m<sup>2</sup></span></h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]"> Bed: 01 Queen </h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]"> Occupancy: 01 Adult </h5><div class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4"><span class="mb-2 md:mb-0 hidden md:inline">View:</span><select class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"><option value="view"${ssrIncludeBooleanAttr(Array.isArray(view.value) ? ssrLooseContain(view.value, "view") : ssrLooseEqual(view.value, "view")) ? " selected" : ""}>select</option><option value="mountain"${ssrIncludeBooleanAttr(Array.isArray(view.value) ? ssrLooseContain(view.value, "mountain") : ssrLooseEqual(view.value, "mountain")) ? " selected" : ""}>Mountain</option><option value="lake"${ssrIncludeBooleanAttr(Array.isArray(view.value) ? ssrLooseContain(view.value, "lake") : ssrLooseEqual(view.value, "lake")) ? " selected" : ""}>Lake</option></select></div></div><div class="flex justify-center items-center"><button type="button" class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> VIEW ALL </button></div></div><div><div class="flex items-center justify-center md:mt-20 md:mb-10 my-6"><span class="border-t border-black w-1/4 mx-4"></span><h2 class="md:text-4xl text-xl uppercase text-black-200 mx-4 whitespace-pre"> Deluxe ROOM </h2><span class="border-t border-black w-1/4 mx-4"></span></div><div class="relative max-w-5xl mx-auto"><div class="relative h-56 overflow-hidden rounded-lg md:h-96"><img${ssrRenderAttr("src", getImageSrcDeluxe())} alt="Deluxe Room View"></div></div><div class="flex flex-row gap-4 justify-center mt-2"><h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]"> Size: <span class="italic">42 m<sup>2</sup></span></h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]"> Beds: 01 King </h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]"> Occupancy: 02 Adults / 01 Adult &amp; 01 Kid </h5><div class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4"><span class="mb-2 md:mb-0 hidden md:inline">View:</span><select class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"><option value="viewDeluxe"${ssrIncludeBooleanAttr(Array.isArray(viewDeluxe.value) ? ssrLooseContain(viewDeluxe.value, "viewDeluxe") : ssrLooseEqual(viewDeluxe.value, "viewDeluxe")) ? " selected" : ""}>select</option><option value="mountain"${ssrIncludeBooleanAttr(Array.isArray(viewDeluxe.value) ? ssrLooseContain(viewDeluxe.value, "mountain") : ssrLooseEqual(viewDeluxe.value, "mountain")) ? " selected" : ""}>Mountain</option><option value="lake"${ssrIncludeBooleanAttr(Array.isArray(viewDeluxe.value) ? ssrLooseContain(viewDeluxe.value, "lake") : ssrLooseEqual(viewDeluxe.value, "lake")) ? " selected" : ""}>Lake</option></select></div></div><div class="flex justify-center items-center"><button type="button" class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> VIEW ALL </button></div></div><div><div class="flex items-center justify-center md:mt-20 md:mb-10 my-6"><span class="border-t border-black w-1/4 mx-4"></span><h2 class="md:text-4xl text-xl uppercase text-black-200 mx-4 whitespace-pre"> Double ROOM </h2><span class="border-t border-black w-1/4 mx-4"></span></div><div class="relative max-w-5xl mx-auto"><div class="relative h-56 overflow-hidden rounded-lg md:h-96"><img${ssrRenderAttr("src", getImageSrcDouble())} alt="Deluxe Room View"></div></div><div class="flex flex-row gap-4 justify-center mt-2"><h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]"> Size: <span class="italic">42 m<sup>2</sup></span></h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]"> Beds: 01 King </h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]"> Occupancy: 02 Adults / 01 Adult &amp; 01 Kid </h5><div class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4"><span class="mb-2 md:mb-0 hidden md:inline">View:</span><select class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"><option value="viewDouble"${ssrIncludeBooleanAttr(Array.isArray(viewDouble.value) ? ssrLooseContain(viewDouble.value, "viewDouble") : ssrLooseEqual(viewDouble.value, "viewDouble")) ? " selected" : ""}>select</option><option value="mountain"${ssrIncludeBooleanAttr(Array.isArray(viewDouble.value) ? ssrLooseContain(viewDouble.value, "mountain") : ssrLooseEqual(viewDouble.value, "mountain")) ? " selected" : ""}>Mountain</option><option value="lake"${ssrIncludeBooleanAttr(Array.isArray(viewDouble.value) ? ssrLooseContain(viewDouble.value, "lake") : ssrLooseEqual(viewDouble.value, "lake")) ? " selected" : ""}>Lake</option></select></div></div><div class="flex justify-center items-center"><button type="button" class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> VIEW ALL </button></div></div><div><div class="flex items-center justify-center md:mt-20 md:mb-10 my-6"><span class="border-t border-black w-1/4 mx-4"></span><h2 class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre"> Triple Room </h2><span class="border-t border-black w-1/4 mx-4"></span></div><div class="flex justify-center items-center"><img${ssrRenderAttr("src", getImageSrcTriple())} alt="Triple Room View" class="h-96 w-full max-w-5xl rounded-lg"></div><div class="flex flex-row gap-4 justify-center mt-2"><h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]"> Size: <span class="italic">49 m<sup>2</sup></span></h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]"> Beds: 02 Queens </h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]"> Occupancy: 03 Adults / 02 Adults &amp; 01 Kid / 01 Adults &amp; 02 Kids </h5><div class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4"><span class="mb-2 md:mb-0 hidden md:inline">View:</span><select class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"><option value="viewTriple"${ssrIncludeBooleanAttr(Array.isArray(viewTriple.value) ? ssrLooseContain(viewTriple.value, "viewTriple") : ssrLooseEqual(viewTriple.value, "viewTriple")) ? " selected" : ""}>select</option><option value="mountain"${ssrIncludeBooleanAttr(Array.isArray(viewTriple.value) ? ssrLooseContain(viewTriple.value, "mountain") : ssrLooseEqual(viewTriple.value, "mountain")) ? " selected" : ""}>Mountain</option><option value="lake"${ssrIncludeBooleanAttr(Array.isArray(viewTriple.value) ? ssrLooseContain(viewTriple.value, "lake") : ssrLooseEqual(viewTriple.value, "lake")) ? " selected" : ""}>Lake</option></select></div></div><div class="flex justify-center items-center"><button type="button" class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> VIEW ALL </button></div></div><div><div class="flex items-center justify-center md:mt-20 md:mb-10 my-6"><span class="border-t border-black w-1/4 mx-4"></span><h2 class="md:text-4xl text-2xl uppercase text-black-200 mx-4 whitespace-pre"> Family Room </h2><span class="border-t border-black w-1/4 mx-4"></span></div><div class="relative max-w-5xl mx-auto"><div class="relative h-56 overflow-hidden rounded-lg md:h-96"><img${ssrRenderAttr("src", getImageSrcFamily())} alt="Family Room View"></div></div><div class="flex flex-row gap-4 justify-center mt-2"><h5 class="md:text-sm text-xs text-black-200 pl-4 mt-[6px]"> Size: <span class="italic">49 m<sup>2</sup></span></h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]"> Beds: 02 Queen </h5><h5 class="md:text-sm text-xs text-black-200 border-l pl-4 mt-[6px]"> Occupancy: 04 Adults / 02 Adults &amp; 02 Kids </h5><div class="flex flex-col items-center justify-start md:flex-row md:text-sm text-xs text-black-200 border-l pl-2 md:pl-4"><span class="mb-2 md:mb-0 hidden md:inline">View:</span><select class="ml-0 md:ml-2 border rounded-sm text-xs h-8 px-2"><option value="viewFamily"${ssrIncludeBooleanAttr(Array.isArray(viewFamily.value) ? ssrLooseContain(viewFamily.value, "viewFamily") : ssrLooseEqual(viewFamily.value, "viewFamily")) ? " selected" : ""}>select</option><option value="mountain"${ssrIncludeBooleanAttr(Array.isArray(viewFamily.value) ? ssrLooseContain(viewFamily.value, "mountain") : ssrLooseEqual(viewFamily.value, "mountain")) ? " selected" : ""}>Mountain</option><option value="lake"${ssrIncludeBooleanAttr(Array.isArray(viewFamily.value) ? ssrLooseContain(viewFamily.value, "lake") : ssrLooseEqual(viewFamily.value, "lake")) ? " selected" : ""}>Lake</option></select></div></div><div class="flex justify-center items-center"><button type="button" class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"> VIEW ALL </button></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contentRooms.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const roomContent = _sfc_main$1;
const _sfc_main = {
  __name: "rooms",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "Attention to detail like never before.",
        pageTitleTwo: "EXPLORE OUR HOTEL",
        pageTitleThree: "STAY WITH US",
        imageNav: "/img/hero-rooms.webp"
      }, null, _parent));
      _push(ssrRenderComponent(roomContent, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rooms.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=rooms-DeOK_2TA.mjs.map
