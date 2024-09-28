import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { n as navbar } from "./navbar-BR0KPeGF.js";
import { _ as _export_sfc } from "../server.mjs";
import { f as footerHome } from "./footerHome-Dokp2Hbb.js";
import "flowbite";
import "vue-router";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "ufo";
import "defu";
import "klona";
import "devalue";
import "destr";
import "cookie-es";
import "ohash";
import "jwt-decode";
import "axios";
import "./nuxt-link-CBXZo5aS.js";
import "./logoImg-CDYFSHEn.js";
const _imports_0 = "" + __publicAssetsURL("Logo.png");
const _sfc_main$1 = {
  data() {
    return {
      offers: [
        {
          id: 1,
          title: "Seasonal Offer",
          description: "Enjoy an exclusive summer 2-night stay package at Sueen Nature.",
          dateRange: "Aug 2023 - Nov 2023",
          imgSrc: "/img/hero-contact.png",
          altText: "Spa Summer Offer"
        },
        {
          id: 2,
          title: "Winter Getaway",
          description: "Experience a cozy retreat with our winter 3-night stay package.",
          dateRange: "Dec 2023 - Feb 2024",
          imgSrc: "/img/image_playground.png",
          altText: "Winter Getaway"
        },
        {
          id: 3,
          title: "Summer Getaway",
          description: "Experience a cozy retreat with our summer 3-night stay package.",
          dateRange: "Jun 2023 - Aug 2023",
          imgSrc: "/img/image_roof_top_bar.png",
          altText: "Summer Getaway"
        },
        {
          id: 4,
          title: "Summer Getaway",
          description: "Experience a cozy retreat with our summer 3-night stay package.",
          dateRange: "Jun 2023 - Aug 2023",
          imgSrc: "/img/hero-home 2.webp",
          altText: "Summer Getaway"
        }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "px-16 py-20" }, _attrs))} data-v-27056d62><div class="flex justify-center w-full" data-v-27056d62><div class="grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 w-full" data-v-27056d62><!--[-->`);
  ssrRenderList($data.offers, (offer) => {
    _push(`<div class="flex max-w-[500px] flex-col rounded-xl bg-gray-500 text-gray-700 shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 relative" data-v-27056d62><div class="image-container" data-v-27056d62><img${ssrRenderAttr("src", offer.imgSrc)}${ssrRenderAttr("alt", offer.altText)} class="rounded-t-md object-cover w-full h-[290px] sm:h-[300px] md:h-[300px] lg:h-[390px]" data-v-27056d62><div class="flex items-center justify-end w-full z-10 absolute top-0 right-0 left-10 bottom-30 mt-4" data-v-27056d62><img${ssrRenderAttr("src", _imports_0)} alt="Logo" class="w-48" data-v-27056d62></div></div><div class="px-6" data-v-27056d62><h4 class="mb-2 mt-4 text-2xl font-semibold text-blue-gray-900" data-v-27056d62>${ssrInterpolate(offer.title)}</h4><div class="h-12" data-v-27056d62><p class="text-base font-light" data-v-27056d62>${ssrInterpolate(offer.description)}</p></div><p class="mt-8 sm:mt-4 text-lg font-bold" data-v-27056d62>${ssrInterpolate(offer.dateRange)}</p></div><div class="px-4 mb-4 pt-0 w-full mt-4" data-v-27056d62><a href="/" class="w-full text-center px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-white text-black inline-block" aria-label="Book Now" data-v-27056d62><span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-600 group-hover:h-full opacity-90" data-v-27056d62></span><span class="relative group-hover:text-white" data-v-27056d62>Book Now</span></a></div></div>`);
  });
  _push(`<!--]--></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/offersHome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const offersHome = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-27056d62"]]);
const _sfc_main = {
  __name: "offers",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "Exclusive Resort Offers",
        pageTitleThree: "BLOG",
        imageNav: "/img/hero-contact.png"
      }, null, _parent));
      _push(ssrRenderComponent(offersHome, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/offers.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=offers-Btr9fWqy.js.map
