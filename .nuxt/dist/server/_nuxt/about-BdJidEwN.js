import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:container px-4 py-20" }, _attrs))} data-v-8d3387ed><h2 class="text-black-200 md:text-4xl text-3xl font-medium my-20 text-center" data-v-8d3387ed> We invite you to experience the essence of tranquility and luxury at Sueen Nature Resort, where every stay is an unforgettable journey. </h2><p class="text-base text-gray-300 mt-2 text-center" data-v-8d3387ed> Welcome to Sueen Nature Resort Established in 2024, Sueen Nature Resort is a premier hospitality destination founded by Mr. Dinusha Sampath Liyanage, Managing Director of Sampath Super Property Developments &amp; Invesments (Pvt) Ltd. Nestled in the tranquil surroundings of Baduraliya, our resort offers an unparalleled retreat where guests can indulge in luxury amidst nature&#39;s beauty. </p><h5 class="text-black-200 text-4xl text-center my-8" data-v-8d3387ed> Our Vision </h5><p class="text-base text-gray-300 mt-2 text-center" data-v-8d3387ed> We aspire to set the standard for exceptional hospitality in Sri Lanka, providing guests with unforgettable experiences that seamlessly blend luxury with the wonders of nature. </p><h5 class="text-black-200 text-4xl text-center my-8" data-v-8d3387ed> Our Mission </h5><p class="text-base text-gray-300 mt-2 text-center" data-v-8d3387ed> At Sueen Nature Resort, we are dedicated to curating extraordinary experiences for our guests. Our mission is to deliver personalized, friendly, and professional service that surpasses expectations, ensuring each guest enjoys unparalleled comfort, service, and attention to detail. </p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contentAbout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const contentAbout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-8d3387ed"]]);
const _sfc_main = {
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "Attention to detail like never before.",
        pageTitleTwo: "EXPLORE OUR HOTEL",
        pageTitleThree: "LEARN ABOUT US",
        imageNav: "/img/hero-about.webp"
      }, null, _parent));
      _push(ssrRenderComponent(contentAbout, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-BdJidEwN.js.map
