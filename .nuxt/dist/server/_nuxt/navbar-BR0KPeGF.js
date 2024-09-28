import { ssrRenderClass, ssrRenderStyle, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { _ as _imports_0 } from "./footerHome-Dokp2Hbb.js";
import { ref, onUnmounted, useSSRContext } from "vue";
import "flowbite";
import { useRouter } from "vue-router";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main = {
  __name: "navbar",
  __ssrInlineRender: true,
  props: [
    "pageTitle",
    "pageTitleTwo",
    "pageTitleThree",
    "imageNav"
  ],
  setup(__props) {
    const isNavbarBackgroundBlack = ref(false);
    useRouter();
    const userEmail = ref(null);
    const authToken = ref(null);
    const handleScroll = () => {
      const scrollTop = (void 0).scrollY;
      const scrollThreshold = 50;
      isNavbarBackgroundBlack.value = scrollTop > scrollThreshold;
    };
    onUnmounted(() => {
      (void 0).removeEventListener("scroll", handleScroll);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="${ssrRenderClass([{ "bg-black-200": isNavbarBackgroundBlack.value }, "dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-none dark:border-gray-600 md:px-20 px-0"])}" style="${ssrRenderStyle({ opacity: isNavbarBackgroundBlack.value ? "0.9" : "1" })}" data-v-bdebad2a><div class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4" data-v-bdebad2a><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" data-v-bdebad2a><img${ssrRenderAttr("src", _imports_0)} alt="logoImg" class="w-auto h-8 md:h-10" data-v-bdebad2a></a><div class="lg:hidden flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse" data-v-bdebad2a><button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-transparent dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" data-v-bdebad2a><span class="sr-only" data-v-bdebad2a>Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-v-bdebad2a><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-v-bdebad2a></path></svg></button></div><div class="lg:hidden items-center justify-between hidden w-full lg:w-auto lg:order-1" id="navbar-cta" data-v-bdebad2a><ul class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-900 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700" data-v-bdebad2a><li data-v-bdebad2a><a href="/" class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 hover:bg-slate-500 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase" data-v-bdebad2a>Home</a></li><li data-v-bdebad2a><a href="/about" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>About</a></li><li data-v-bdebad2a><a href="/additionalActivites" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Activities</a></li><li data-v-bdebad2a><a href="/services" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Services</a></li><li data-v-bdebad2a><a href="/rooms" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Rooms</a></li><li data-v-bdebad2a><a href="/gallery" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Gallery</a></li><li data-v-bdebad2a><a href="/news" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>News</a></li><li data-v-bdebad2a><a href="/contact" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Contact</a></li><li data-v-bdebad2a>`);
      if (userEmail.value && authToken.value) {
        _push(`<a class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Profile</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul></div><div class="hidden lg:flex lg:flex-row lg:gap-4 bg-re" data-v-bdebad2a><div class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse" data-v-bdebad2a><button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" data-v-bdebad2a><span class="sr-only" data-v-bdebad2a>Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-v-bdebad2a><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-v-bdebad2a></path></svg></button></div><div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta" data-v-bdebad2a><ul class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700" data-v-bdebad2a><li data-v-bdebad2a><a href="/" class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 bg-blue-700 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase" data-v-bdebad2a>Home</a></li><li data-v-bdebad2a><a href="/about" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>About</a></li><li data-v-bdebad2a><a href="/additionalActivites" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Activities</a></li><li data-v-bdebad2a><a href="/services" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Services</a></li><li data-v-bdebad2a><a href="/rooms" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Rooms</a></li><li data-v-bdebad2a><a href="/gallery" class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 bg-blue-700 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase" data-v-bdebad2a>Gallery</a></li><li data-v-bdebad2a><a href="/news" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>News</a></li><li data-v-bdebad2a><a href="/contact" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Contact</a></li><li data-v-bdebad2a>`);
      if (userEmail.value && authToken.value) {
        _push(`<a class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-bdebad2a>Profile</a>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</li></ul></div></div></div></nav><div class="relative" data-v-bdebad2a><img${ssrRenderAttr("src", __props.imageNav)} alt="hero-rooms-Img" class="w-full z-10 object-cover min-h-screen lg:min-h-0" data-v-bdebad2a><div class="absolute inset-0 bg-black-200 opacity-50 z-20" data-v-bdebad2a></div><div class="absolute inset-0 flex flex-col justify-center items-center text-center z-40" data-v-bdebad2a><h4 class="text-white md:text-2xl text-1xl mt-5" data-v-bdebad2a>${ssrInterpolate(__props.pageTitleThree)}</h4><h2 class="text-white md:text-6xl text-5xl font-semibold mt-5" data-v-bdebad2a>${ssrInterpolate(__props.pageTitle)}</h2><h4 class="text-white md:text-2xl text-1xl mt-5" data-v-bdebad2a>${ssrInterpolate(__props.pageTitleTwo)}</h4></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const navbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bdebad2a"]]);
export {
  navbar as n
};
//# sourceMappingURL=navbar-BR0KPeGF.js.map
