import { mergeProps, useSSRContext, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as useRuntimeConfig } from '../server.mjs';
import axios from 'axios';
import VueEasyLightbox from 'vue-easy-lightbox';
import { f as footerHome } from './footerHome-Dokp2Hbb.mjs';
import { n as navbar } from './navbar-BR0KPeGF.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './nuxt-link-CBXZo5aS.mjs';
import './logoImg-CDYFSHEn.mjs';

const _sfc_main$1 = {
  components: {
    VueEasyLightbox
  },
  data() {
    return {
      carousels: [],
      // Raw carousels fetched from the API
      visible: false,
      // Controls the lightbox visibility
      lightboxIndex: 0
      // Index of the current image in the lightbox
    };
  },
  computed: {
    allMedia() {
      const uniqueMedia = /* @__PURE__ */ new Set();
      return this.carousels.filter((carousel) => carousel.tags && carousel.tags.includes("Gallery")).flatMap(
        (carousel) => carousel.media_urls.map((url) => ({ path: url, media_type: carousel.media_type })).filter((media) => {
          if (!uniqueMedia.has(media.path)) {
            uniqueMedia.add(media.path);
            return true;
          }
          return false;
        })
      );
    },
    imageUrls() {
      return this.allMedia.filter((media) => media.media_type === "image").map((media) => this.getImageUrl(media.path));
    }
  },
  mounted() {
    this.fetchCarousels();
  },
  methods: {
    async fetchCarousels() {
      const runtimeConfig = useRuntimeConfig();
      try {
        const response = await axios.get("https://api.sueennature.com/carousels/?skip=0&limit=10", {
          headers: {
            "x-api-key": runtimeConfig.public.DATABASE_ID,
            // Replace with your actual API key
            "Content-Type": "application/json"
          }
        });
        this.carousels = response.data.data;
      } catch (error) {
        console.error("Error fetching carousels:", error);
      }
    },
    getImageUrl(path) {
      return `https://api.sueennature.com/${path}`;
    },
    openLightbox(index) {
      this.lightboxIndex = index;
      this.visible = true;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_vue_easy_lightbox = resolveComponent("vue-easy-lightbox");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "masonry-grid my-24 mx-14" }, _attrs))} data-v-c36aa653><!--[-->`);
  ssrRenderList($options.allMedia, (url, idx) => {
    _push(`<div class="masonry-item" data-v-c36aa653>`);
    if (url.media_type === "image") {
      _push(`<img${ssrRenderAttr("src", $options.getImageUrl(url.path))} class="w-full h-auto object-cover rounded-none cursor-pointer" alt="carousel image" data-v-c36aa653>`);
    } else {
      _push(`<!---->`);
    }
    if (url.media_type === "video") {
      _push(`<video controls class="w-full h-auto rounded-lg" data-v-c36aa653><source${ssrRenderAttr("src", $options.getImageUrl(url.path))} type="video/mp4" data-v-c36aa653> Your browser does not support the video tag. </video>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  });
  _push(`<!--]-->`);
  _push(ssrRenderComponent(_component_vue_easy_lightbox, {
    visible: $data.visible,
    imgs: $options.imageUrls,
    index: $data.lightboxIndex,
    "zoom-percent": 120,
    onHide: ($event) => $data.visible = false
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/galleryComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const galleryBody = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c36aa653"]]);
const _sfc_main = {
  __name: "gallery",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "GALLERY",
        pageTitleThree: "EXPLORE OUR SPACES",
        imageNav: "/img/hero-contact.webp"
      }, null, _parent));
      _push(ssrRenderComponent(galleryBody, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gallery.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gallery-ocHXo0K5.mjs.map
