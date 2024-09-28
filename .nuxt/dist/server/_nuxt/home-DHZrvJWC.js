import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { h as heroHome, w as welcomeHome, r as roomsHome, f as facilitiesHome, s as servicesHome } from "./roomsHome-CXrKn_By.js";
import { f as footerHome } from "./footerHome-Dokp2Hbb.js";
import "../server.mjs";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "ufo";
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
import "swiper/vue";
import "swiper/modules";
import "./logoImg-CDYFSHEn.js";
import "./nuxt-link-CBXZo5aS.js";
const _sfc_main = {
  __name: "home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(heroHome, null, null, _parent));
      _push(ssrRenderComponent(welcomeHome, null, null, _parent));
      _push(ssrRenderComponent(roomsHome, null, null, _parent));
      _push(ssrRenderComponent(facilitiesHome, null, null, _parent));
      _push(ssrRenderComponent(servicesHome, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=home-DHZrvJWC.js.map
