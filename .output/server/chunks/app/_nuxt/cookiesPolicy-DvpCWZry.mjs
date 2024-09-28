import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:container px-4 py-20" }, _attrs))} data-v-9854a87a><h2 class="text-black-200 md:text-4xl text-xl font-bold text-center max-w-[50ch] mx-auto" data-v-9854a87a> Sueen Nature Resort Cookies Policy </h2><p class="text-base text-gray-300 mt-14" data-v-9854a87a> Welcome to the Sueen Nature Resort. This Cookies Policy explains how we, Sueen Nature Resort, located at Sueen Nature, Palangahawatta, Morapitiya Road, Palanda, Baduraliya, Sri Lanka, use cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them. </p><h5 class="text-black-200 font-semibold md:text-3xl text-lg text-left my-8" data-v-9854a87a> 1. What Are Cookies? </h5><p class="text-base text-gray-300 mt-2" data-v-9854a87a> Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information. </p><h5 class="text-black-200 font-semibold md:text-3xl text-lg text-left my-8" data-v-9854a87a> 2. Why Do We Use Cookies? </h5><p class="text-base text-gray-300 mt-2" data-v-9854a87a> We use cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as &quot;essential&quot; or &quot;strictly necessary&quot; cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our website. Third parties serve cookies through our website for advertising, analytics, and other purposes. </p><h5 class="text-black-200 font-semibold md:text-3xl text-lg text-left my-8" data-v-9854a87a> 3. Types of Cookies Used </h5><ul class="w-full mt-4 space-y-1 text-gray-300 list-disc list-inside dark:text-gray-400" data-v-9854a87a><li data-v-9854a87a><strong data-v-9854a87a>Strictly Necessary Cookies:</strong> These cookies are essential for you to browse the website and use its features, such as accessing secure areas. </li><li data-v-9854a87a><strong data-v-9854a87a>Performance and Analytics Cookies:</strong> These cookies collect information about how you use our website, such as which pages you visit most often and if you receive error messages from certain pages. </li><li data-v-9854a87a><strong data-v-9854a87a>Functionality Cookies:</strong> These cookies allow our website to remember choices you&#39;ve made in the past, like what language you prefer, to provide a more personalized experience. </li><li data-v-9854a87a><strong data-v-9854a87a>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests. </li></ul><h5 class="text-black-200 font-semibold md:text-3xl text-lg text-left my-8" data-v-9854a87a> 4. Controlling Cookies </h5><p class="text-base text-gray-300 mt-2" data-v-9854a87a> You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly necessary to provide you with services. </p><h5 class="text-black-200 font-semibold md:text-3xl text-lg text-left my-8" data-v-9854a87a> 5. Changes to This Cookies Policy </h5><p class="text-base text-gray-300 mt-2" data-v-9854a87a> We may update this Cookies Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookies Policy regularly to stay informed about our use of cookies and related technologies. </p><h5 class="text-black-200 md:text-3xl text-lg font-semibold text-left my-8" data-v-9854a87a> 6. Contact Us </h5><p class="text-base text-gray-300 mt-2" data-v-9854a87a> If you have any questions about our use of cookies or other technologies, please email us at sueennature@gmail.com or contact us by phone at +71 256 58 54 </p><h5 class="text-black-200 md:text-3xl text-lg font-semibold text-left my-8" data-v-9854a87a> Effective Date: 04/04/2024 </h5></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contentCookiesPolicy.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const contentCookiesPolicy = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-9854a87a"]]);
const _sfc_main = {
  __name: "cookiesPolicy",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "COOKIES POLICY",
        imageNav: "/img/hero-booking.png"
      }, null, _parent));
      _push(ssrRenderComponent(contentCookiesPolicy, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cookiesPolicy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=cookiesPolicy-DvpCWZry.mjs.map
