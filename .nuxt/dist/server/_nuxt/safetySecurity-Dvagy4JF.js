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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:container px-4 py-20" }, _attrs))} data-v-a26512cd><h2 class="text-black-200 md:text-4xl text-xl font-bold text-center max-w-[50ch] mx-auto" data-v-a26512cd> Sueen Nature Resort Safety and Security </h2><p class="text-base text-gray-300 mt-16" data-v-a26512cd> Safety and security are paramount at Sueen Nature Resort, and we are committed to providing a secure environment for all our guests. Here are some of the safety and security measures we have in place: </p><ol class="w-full mt-4 space-y-6 text-gray-300 list-decimal list-inside dark:text-gray-400" data-v-a26512cd><li data-v-a26512cd><strong data-v-a26512cd>Staff Training and Awareness: </strong> All staff members are considered part of the security team and are trained to prioritize guest safety and security. They are vigilant and proactive in identifying and addressing potential security concerns. </li><li data-v-a26512cd><strong data-v-a26512cd>Closed Circuit Television (CCTV) Surveillance: </strong>We have installed the latest CCTV technology at key areas throughout the resort premises. Trained security officers monitor these cameras 24/7 to ensure the safety of our guests and the security of the property. </li><li data-v-a26512cd><strong data-v-a26512cd>Regular Security Audits: </strong>Comprehensive security audits are conducted regularly to assess and enhance security measures. These audits help identify any vulnerabilities and ensure that our security protocols are up to date and effective. </li><li data-v-a26512cd><strong data-v-a26512cd>Dedicated Fire/Life/Safety Officers: </strong> We have appointed dedicated Fire/Life/Safety Officers whose primary responsibility is to monitor and maintain all fire, life, and safety systems within the resort. They are trained to respond swiftly and effectively in case of any emergency situations. </li><li data-v-a26512cd><strong data-v-a26512cd>Ongoing Staff Training Workshops: </strong> Our security staff regularly participate in training workshops to ensure they are well-equipped to handle various emergency situations. These workshops cover a wide range of scenarios and provide our staff with the necessary skills and knowledge to respond effectively. </li><li data-v-a26512cd><strong data-v-a26512cd>24/7 Emergency Response Teams: </strong>We have cross-functional emergency response teams available on-site 24 hours a day, 7 days a week. These teams are trained to respond to emergencies promptly and efficiently, ensuring the safety and well-being of our guests at all times. </li></ol><p class="text-base text-gray-300 mt-6" data-v-a26512cd> At Sueen Nature Resort, we prioritize the safety and security of our guests above all else. You can relax and enjoy your stay knowing that we have implemented stringent security measures to protect you and provide you with a safe and secure environment. If you have any concerns or require assistance during your stay, please do not hesitate to contact our staff or security team. Your safety is our top priority. </p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contentSafetySecurity.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const contentSafetySecurity = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-a26512cd"]]);
const _sfc_main = {
  __name: "safetySecurity",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "SAFETY AND SECURITY",
        imageNav: "/img/hero-booking.png"
      }, null, _parent));
      _push(ssrRenderComponent(contentSafetySecurity, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/safetySecurity.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=safetySecurity-Dvagy4JF.js.map
