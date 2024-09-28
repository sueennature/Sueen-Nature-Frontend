import { ref, mergeProps, useSSRContext, unref } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { n as navbar } from "./navbar-BR0KPeGF.js";
import "hookable";
import { _ as _export_sfc } from "../server.mjs";
import { f as footerHome } from "./footerHome-Dokp2Hbb.js";
import "flowbite";
import "vue-router";
import "#internal/nitro";
import "ofetch";
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
const _sfc_main$1 = {
  __name: "contentAdditionalServices",
  __ssrInlineRender: true,
  setup(__props) {
    const services = ref([]);
    const error = ref(null);
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:container px-4 py-20" }, _attrs))} data-v-2d3ed0e8><div class="grid xl:grid-cols-3 grid-cols-1 justify-items-center gap-8" data-v-2d3ed0e8>`);
      if (isLoading.value) {
        _push(`<div class="text-center" data-v-2d3ed0e8><p data-v-2d3ed0e8>Loading...</p></div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(services.value, (service) => {
          _push(`<div class="max-w-xl mt-16 flex flex-col" data-v-2d3ed0e8><img${ssrRenderAttr("src", service.media[0] ? `https://api.sueennature.com/${service.media[0]}` : "")} alt="serviceImg" class="flex-grow object-cover rounded-t-md" data-v-2d3ed0e8><div class="h-96 flex flex-col items-center p-8 bg-gray-500 rounded-lg shadow-lg space-y-4 dark:bg-gray-800 dark:border-gray-700 flex-grow rounded-t-sm" data-v-2d3ed0e8><h3 class="2xl:text-4xl text-2xl text-black-200" data-v-2d3ed0e8>${ssrInterpolate(service.name)}</h3><p class="font-extralight text-base text-center text-black-200 dark:text-gray-400 mt-4" data-v-2d3ed0e8>${ssrInterpolate(service.description)}</p></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      if (error.value) {
        _push(`<div class="text-red-500" data-v-2d3ed0e8>${ssrInterpolate(error.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contentAdditionalServices.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const additionalServices = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2d3ed0e8"]]);
const _sfc_main = {
  __name: "additionalActivites",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "Attention to detail like never before",
        pageTitleTwo: "EXPLORE OUR HOTEL",
        pageTitleThree: "LEARN ABOUT US",
        imageNav: "/img/hero-activities.webp"
      }, null, _parent));
      _push(ssrRenderComponent(unref(additionalServices), null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/additionalActivites.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=additionalActivites-BkzG67CF.js.map
