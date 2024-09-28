import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { useSSRContext, ref, onUnmounted, mergeProps } from 'vue';
import { ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import { _ as _imports_0$1 } from './footerHome-Dokp2Hbb.mjs';

const _sfc_main$1 = {
  mounted() {
    Promise.all([
      import('../../Datepicker.mjs'),
      import('../../Datepicker.mjs')
    ]).then(([DatePicker1, DatePicker2]) => {
      const datepickerEl1 = this.$refs.datepicker1;
      const datepickerEl2 = this.$refs.datepicker2;
      new DatePicker1.default(datepickerEl1, {
        autohide: true,
        // This will enable autohide feature for the first datepicker
        orientation: "bottom right"
        // Set orientation for the first datepicker
      });
      new DatePicker2.default(datepickerEl2, {
        autohide: true,
        // This will enable autohide feature for the second datepicker
        orientation: "bottom right"
        // Set orientation for the second datepicker
      });
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-f4cfddd6><div class="inset-x-0 md:flex md:flex-row flex-col md:justify-center md:mx-0 mx-4" data-v-f4cfddd6><div class="md:flex grid grid-cols-1 justify-center md:space-x-4 border rounded-none md:rounded-e-none md:rounded-lg shadow-lg border-white bg-black-200" data-v-f4cfddd6><div class="relative md:max-w-xs md:mx-auto" data-v-f4cfddd6><div class="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none" data-v-f4cfddd6><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" data-v-f4cfddd6><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 10l5 5m0 0l5-5" data-v-f4cfddd6></path></svg></div><input type="text" class="bg-black-200 w-full border rounded-t-lg rounded-b-lg border-l-0 border-r-0 border-t-0 border-b-0 border-white text-white placeholder:text-white text-sm placeholder:text-sm focus:ring-0 focus:border-none block p-4 pe-8 text-left md:padding-left dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="From Date" data-v-f4cfddd6></div><div class="w-0.5 bg-white h-8 my-auto md:flex hidden" data-v-f4cfddd6></div><div class="relative md:max-w-xs md:mx-auto" data-v-f4cfddd6><div class="absolute inset-y-0 end-0 flex items-center pe-2 pointer-events-none" data-v-f4cfddd6><svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" data-v-f4cfddd6><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="m7 10l5 5m0 0l5-5" data-v-f4cfddd6></path></svg></div><input type="text" class="bg-black-200 w-full border rounded-l rounded-lg border-l-0 border-r-0 border-t-0 border-b-0 border-white text-white placeholder:text-white text-sm placeholder:text-sm focus:ring-0 focus:border-none block p-4 pe-8 text-left md:padding-left dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="To Date" data-v-f4cfddd6></div></div><a href="/checkout" data-v-f4cfddd6><button class="buttontext bg-red-100 text-sm text-white md:ml-2 md:p-4 p-2 rounded-r-lg rounded-l-none md:flex hidden" data-v-f4cfddd6> Check Availability </button></a><div class="md:hidden" data-v-f4cfddd6><a href="/checkout" data-v-f4cfddd6><button class="buttontext bg-red-100 text-sm text-white p-4 rounded-none border border-white w-full" data-v-f4cfddd6> Check Availability </button></a></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkAvailability.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f4cfddd6"]]);
const _imports_0 = "" + publicAssetsURL("img/DeluxeRoom.jpg");
const _imports_1$1 = "" + publicAssetsURL("img/DoubleRoom.jpg");
const _imports_2 = "" + publicAssetsURL("img/TripleRoom.jpg");
const _imports_1 = "" + publicAssetsURL("img/hero-rooms.png");
const _sfc_main = {
  __name: "heroRoomsSingle",
  __ssrInlineRender: true,
  setup(__props) {
    const isNavbarBackgroundBlack = ref(false);
    const handleScroll = () => {
      const scrollTop = (void 0).scrollY;
      const scrollThreshold = 50;
      isNavbarBackgroundBlack.value = scrollTop > scrollThreshold;
    };
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="${ssrRenderClass([{ "bg-black-200": isNavbarBackgroundBlack.value }, "dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-none dark:border-gray-600 md:px-20 px-0"])}" style="${ssrRenderStyle({ opacity: isNavbarBackgroundBlack.value ? "0.7" : "1" })}" data-v-d7bffe1f><div class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4" data-v-d7bffe1f><a href="/home" class="flex items-center space-x-3 rtl:space-x-reverse" data-v-d7bffe1f><img${ssrRenderAttr("src", _imports_0$1)} alt="logoImg" class="w-auto h-8 md:h-10" data-v-d7bffe1f></a><div class="lg:hidden flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse" data-v-d7bffe1f><a href="/booking" data-v-d7bffe1f><button type="button" class="buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase" data-v-d7bffe1f> book now </button></a><button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" data-v-d7bffe1f><span class="sr-only" data-v-d7bffe1f>Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-v-d7bffe1f><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-v-d7bffe1f></path></svg></button></div><div class="lg:hidden items-center justify-between hidden w-full lg:w-auto lg:order-1" id="navbar-cta" data-v-d7bffe1f><ul class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700" data-v-d7bffe1f><li data-v-d7bffe1f><a href="/home" class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 hover:bg-gray-100 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase" data-v-d7bffe1f>Home</a></li><li data-v-d7bffe1f><a href="/about" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-d7bffe1f>About</a></li><li data-v-d7bffe1f><a href="/additionalActivites" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-d7bffe1f>Activities</a></li><li data-v-d7bffe1f><a href="/services" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-d7bffe1f>Services</a></li><li data-v-d7bffe1f><a href="/rooms" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-d7bffe1f>Rooms</a></li><li data-v-d7bffe1f><a href="/contact" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-d7bffe1f>Contact</a></li></ul></div><div class="hidden lg:flex lg:flex-row lg:gap-4" data-v-d7bffe1f><div class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse" data-v-d7bffe1f><a href="/booking" data-v-d7bffe1f><button type="button" class="buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase" data-v-d7bffe1f> book now </button></a><button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" data-v-d7bffe1f><span class="sr-only" data-v-d7bffe1f>Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-v-d7bffe1f><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-v-d7bffe1f></path></svg></button></div><div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta" data-v-d7bffe1f><ul class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700" data-v-d7bffe1f><li data-v-d7bffe1f><a href="/home" class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 bg-blue-700 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase" data-v-d7bffe1f>Home</a></li><li data-v-d7bffe1f><a href="/about" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-d7bffe1f>About</a></li><li data-v-d7bffe1f><a href="/additionalActivites" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-d7bffe1f>Activities</a></li><li data-v-d7bffe1f><a href="/services" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-d7bffe1f>Services</a></li><li data-v-d7bffe1f><a href="/rooms" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-d7bffe1f>Rooms</a></li><li data-v-d7bffe1f><a href="/contact" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-d7bffe1f>Contact</a></li></ul></div></div></div></nav><div class="relative" data-v-d7bffe1f><img${ssrRenderAttr("src", _imports_1)} alt="hero-rooms-Img" class="w-full z-10 min-h-screen object-cover lg:min-h-0" data-v-d7bffe1f><div class="absolute inset-0 bg-black-200 opacity-50 z-20" data-v-d7bffe1f></div><div class="absolute inset-0 flex flex-col justify-center items-center text-center md:px-40 px-0 z-40" data-v-d7bffe1f><h6 class="text-white text-xl font-semibold mt-40" data-v-d7bffe1f>STAY WITH US</h6><h2 class="text-white md:text-6xl text-5xl font-semibold mt-28 hidden lg:block" data-v-d7bffe1f> Attention to detail like never before. </h2><button type="button" class="text-white buttontext mt-10 bg-black-700 bg-opacity-60 hover:bg-black-200 hover:bg-opacity-60 focus:outline-none focus:ring-0 font-medium rounded-full text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-v-d7bffe1f>view Image Gallery</button></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/heroRoomsSingle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const heroRoomsSingle = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d7bffe1f"]]);

export { _imports_0 as _, _imports_1$1 as a, _imports_2 as b, __nuxt_component_0 as c, heroRoomsSingle as h };
//# sourceMappingURL=heroRoomsSingle-soRTuzZZ.mjs.map
