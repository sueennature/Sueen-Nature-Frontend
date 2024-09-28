import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { Fireworks } from 'fireworks-js';
import { _ as _imports_0 } from './logoImg-CDYFSHEn.mjs';
import { _ as _export_sfc } from '../server.mjs';
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
import 'vue-router';
import 'axios';

const _imports_1 = "" + publicAssetsURL("img/bg.png");
const _sfc_main$1 = {
  data() {
    return {
      isCurtainOpen: false,
      // Controls whether the curtain is open
      fireworksInstance: null
    };
  },
  mounted() {
    this.$el.focus();
    this.welcomeSound = new Audio("/crowd-cheer-applause-victory-fanfare-clapping-236698.mp3");
  },
  methods: {
    startCurtainOpen() {
      this.welcomeSound.play();
      this.isCurtainOpen = true;
      console.log("Curtain opened, starting fireworks...");
      this.launchFireworks();
    },
    launchFireworks() {
      const container = this.$refs.fireworksContainer;
      if (container) {
        console.log("Fireworks container found:", container);
        const fireworks = new Fireworks(container, {
          maxRockets: 5,
          // Number of rockets launched per interval
          rocketSpawnInterval: 150,
          // Time between each rocket launch
          numParticles: 100,
          // Number of particles per explosion
          explosionMinHeight: 0.2,
          // Min height for the explosion
          explosionMaxHeight: 0.8,
          // Max height for the explosion
          explosionChance: 0.08
          // Chance for an explosion per frame
        });
        console.log("Fireworks initialized:", fireworks);
        fireworks.start();
        console.log("Fireworks started");
      } else {
        console.error("Fireworks container not found");
      }
    },
    enterSite() {
      localStorage.setItem("hasVisited", "true");
      this.$router.push("/home");
    }
  },
  beforeDestroy() {
    if (this.fireworksInstance) {
      this.fireworksInstance.stop();
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "launching-page h-screen relative overflow-hidden",
    tabindex: "0"
  }, _attrs))} data-v-f83c9469><div class="${ssrRenderClass(["curtain curtain-left", { open: $data.isCurtainOpen }])}" data-v-f83c9469></div><div class="${ssrRenderClass(["curtain curtain-right", { open: $data.isCurtainOpen }])}" data-v-f83c9469></div><div class="${ssrRenderClass(["content absolute inset-0 flex flex-col items-center justify-center text-center", { "opacity-0": !$data.isCurtainOpen }])}" data-v-f83c9469>`);
  if ($data.isCurtainOpen) {
    _push(`<img${ssrRenderAttr("src", _imports_0)} alt="Hotel Logo" class="logo-popup mb-4" data-v-f83c9469>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.isCurtainOpen) {
    _push(`<img${ssrRenderAttr("src", _imports_1)} alt="Hotel Image" class="bg-popup mb-4" data-v-f83c9469>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<h1 class="welcome-text text-4xl mb-4 text-white" data-v-f83c9469>Welcome to Sueen Nature Hotel Official Website</h1><button class="text-white px-4 py-2 rounded-lg enter-btn hover:text-red-600" data-v-f83c9469> Click Here </button><div class="gradient-bottom" data-v-f83c9469></div></div><div class="fireworks-container" data-v-f83c9469></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/launching.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const launching = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f83c9469"]]);
const _sfc_main = {
  __name: "launchingPage",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(launching, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/launchingPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=launchingPage-CuNAaVd-.mjs.map
