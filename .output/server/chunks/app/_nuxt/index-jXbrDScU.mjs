import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { h as heroHome, w as welcomeHome, r as roomsHome, f as facilitiesHome, s as servicesHome } from './roomsHome-CXrKn_By.mjs';
import { f as footerHome } from './footerHome-Dokp2Hbb.mjs';
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
import '../server.mjs';
import 'vue-router';
import 'axios';
import 'vue3-toastify';
import 'swiper/vue';
import 'swiper/modules';
import './logoImg-CDYFSHEn.mjs';
import './nuxt-link-CBXZo5aS.mjs';

const _sfc_main = {
  __name: "index",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-jXbrDScU.mjs.map
