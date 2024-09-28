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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:container px-4 py-20" }, _attrs))} data-v-4401d25a><h5 class="text-black-200 md:text-3xl text-lg font-semibold text-left my-8" data-v-4401d25a> Data Deletion Instructions </h5><p class="text-base text-gray-300 mt-2" data-v-4401d25a> At sueennature app, we value your privacy and are committed to ensuring that your personal data is handled securely. If you wish to delete your data from our application, please follow the instructions below: </p><ul class="w-full mt-4 space-y-7 text-gray-300 list-decimal list-inside dark:text-gray-400" data-v-4401d25a><li data-v-4401d25a> Removing Access via Facebook Settings. <ul class="list-disc list-inside mt-[10px]" data-v-4401d25a><li data-v-4401d25a>Log in to your Facebook account</li><li data-v-4401d25a> Navigate to the Apps and Websites <a href="https://www.facebook.com/settings?tab=applications" class="text-blue-500 font-bold" data-v-4401d25a>settings</a></li><li data-v-4401d25a>Locate and remove our app from the list of active apps</li></ul></li><li data-v-4401d25a> Data Deletion Request <ul class="list-disc list-inside mt-[10px]" data-v-4401d25a><li data-v-4401d25a>Upon removal of our app from your Facebook account, a data deletion request will be automatically initiated</li><li data-v-4401d25a>Our system will process the deletion of any data we have collected from Facebook about you</li></ul></li><li data-v-4401d25a> Manual Deletion Request. <ul class="list-disc list-inside mt-[10px]" data-v-4401d25a><li data-v-4401d25a>If you face any issues or need further assistance, please contact our support team at sueennaturebooking@gmail.com</li><li data-v-4401d25a>Provide your Facebook user ID and a brief description of your request. Our team will manually process your request and provide confirmation once completed</li></ul></li></ul><h5 class="text-black-200 md:text-3xl text-lg font-semibold text-left my-8" data-v-4401d25a> Important Notes </h5><ul class="w-full mt-4 space-y-1 text-gray-300 list-disc list-inside dark:text-gray-400" data-v-4401d25a><li data-v-4401d25a> Processing Time: The data deletion process may take some time. Please allow up to 30 days for your data to be completely removed from our systems. </li><li data-v-4401d25a> Retention of Non-Personal Data: Some non-personal data may be retained for legal, regulatory, or internal business purposes. </li></ul><p class="text-base text-gray-300 mt-8" data-v-4401d25a> For more information, please refer to our <a href="/privacyPolicy" class="text-blue-500 font-bold" data-v-4401d25a>privacy policy</a><br data-v-4401d25a> Thank you for using sueennature app. If you have any questions or concerns, feel free to reach out to our support team. </p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contentFBPolicy.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const contentFBPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-4401d25a"]]);
const _sfc_main = {
  __name: "metaAppDataDeletionInstructions",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "Meta App Data Deletion Instructions",
        imageNav: "/img/hero-booking.png"
      }, null, _parent));
      _push(ssrRenderComponent(contentFBPolicy, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/metaAppDataDeletionInstructions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=metaAppDataDeletionInstructions-B_LaqVID.js.map
