import { mergeProps, useSSRContext, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { n as navbar } from './navbar-BR0KPeGF.mjs';
import { _ as _export_sfc } from '../server.mjs';
import { f as footerHome } from './footerHome-Dokp2Hbb.mjs';
import 'vue-router';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'axios';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './nuxt-link-CBXZo5aS.mjs';
import './logoImg-CDYFSHEn.mjs';

const _sfc_main$1 = {
  __name: "contentNews",
  __ssrInlineRender: true,
  setup(__props) {
    const services = ref([]);
    const error = ref(null);
    const isLoading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:container px-4 py-20" }, _attrs))} data-v-dfc0f9ff><div class="grid xl:grid-cols-3 grid-cols-1 justify-items-center gap-8" data-v-dfc0f9ff>`);
      if (isLoading.value) {
        _push(`<div class="text-center" data-v-dfc0f9ff><p data-v-dfc0f9ff>Loading...</p></div>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(services.value, (service) => {
          _push(`<div class="max-w-xl mt-16 flex flex-col" data-v-dfc0f9ff><img${ssrRenderAttr("src", `https://api.sueennature.com/${service.images[0]}`)} alt="serviceImg" class="flex-grow object-cover rounded-t-md" data-v-dfc0f9ff><div class="h-96 flex flex-col items-center p-8 bg-gray-500 rounded-lg shadow-lg space-y-4 dark:bg-gray-800 dark:border-gray-700 flex-grow" data-v-dfc0f9ff><h3 class="2xl:text-4xl text-2xl text-black-200" data-v-dfc0f9ff>${ssrInterpolate(service.title)}</h3><p class="font-extralight text-base text-center text-black-200 dark:text-gray-400 mt-4" data-v-dfc0f9ff>${ssrInterpolate(service.content)}</p></div></div>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</div>`);
      if (error.value) {
        _push(`<div class="text-red-500" data-v-dfc0f9ff>${ssrInterpolate(error.value)}</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contentNews.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const contentNews = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dfc0f9ff"]]);
const _sfc_main = {
  __name: "news",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "NEWS",
        pageTitleThree: "BLOG",
        imageNav: "/img/hero-contact.png"
      }, null, _parent));
      _push(ssrRenderComponent(contentNews, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=news-CAJN3-Gt.mjs.map
