import { useSSRContext, mergeProps, defineComponent, ref, unref, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderStyle, ssrRenderDynamicModel } from 'vue/server-renderer';
import { n as navbar } from './navbar-BR0KPeGF.mjs';
import { C as CheckoutAvailability } from './CheckoutAvailability-BMKP4iSF.mjs';
import { _ as _export_sfc, a as useRuntimeConfig, d as useNuxtApp } from '../server.mjs';
import { initFlowbite } from 'flowbite';
import { GoogleSignInButton } from 'vue3-google-signin';
import VueJwtDecode from 'vue-jwt-decode';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
import axios from 'axios';
import { f as footerHome } from './footerHome-Dokp2Hbb.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import '../../handlers/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import './nuxt-link-CBXZo5aS.mjs';
import './logoImg-CDYFSHEn.mjs';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "SocialLogin",
  __ssrInlineRender: true,
  emits: ["loginSuccess"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    useRouter();
    ref(null);
    const handleLoginSuccess = (response) => {
      const { credential } = response;
      console.log("Access Token", credential);
      console.log("Response", response);
      if (response) {
        const decoded = VueJwtDecode.decode(credential);
        console.log("Decoded", decoded);
        const email = decoded.email;
        const password = decoded.sub;
        const name = decoded.given_name;
        const lname = decoded.family_name;
        emit("loginSuccess", { name, lname, email, password });
        toast.success("Successfully Logged In");
      }
    };
    const handleLoginError = () => {
      toast.error("Something Went Wrong");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid md:grid-cols-2 grid-cols-1 gap-4 mb-4" }, _attrs))}><div class="flex items-center justify-center space-x-4">`);
      _push(ssrRenderComponent(unref(GoogleSignInButton), {
        onSuccess: handleLoginSuccess,
        onError: handleLoginError,
        scope: "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
      }, null, _parent));
      _push(`</div><button class="bg-[#3b5998] boder-2 rounded-md py-1 text-center text-white mx-8"><div class="flex items-center justify-center space-x-4"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="#fff" d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"></path><path fill="#3b5998" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"></path></svg><span>Facebook</span></div></button></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SocialLogin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const countries = [
  {
    code: "af",
    name: "Afghanistan"
  },
  {
    code: "al",
    name: "Albania"
  },
  {
    code: "dz",
    name: "Algeria"
  },
  {
    code: "as",
    name: "American Samoa"
  },
  {
    code: "ad",
    name: "Andorra"
  },
  {
    code: "ao",
    name: "Angola"
  },
  {
    code: "ai",
    name: "Anguilla"
  },
  {
    code: "ag",
    name: "Antigua and Barbuda"
  },
  {
    code: "ar",
    name: "Argentina"
  },
  {
    code: "am",
    name: "Armenia"
  },
  {
    code: "aw",
    name: "Aruba"
  },
  {
    code: "au",
    name: "Australia"
  },
  {
    code: "at",
    name: "Austria"
  },
  {
    code: "az",
    name: "Azerbaijan"
  },
  {
    code: "bs",
    name: "Bahamas"
  },
  {
    code: "bh",
    name: "Bahrain"
  },
  {
    code: "bd",
    name: "Bangladesh"
  },
  {
    code: "bb",
    name: "Barbados"
  },
  {
    code: "by",
    name: "Belarus"
  },
  {
    code: "be",
    name: "Belgium"
  },
  {
    code: "bz",
    name: "Belize"
  },
  {
    code: "bj",
    name: "Benin"
  },
  {
    code: "bm",
    name: "Bermuda"
  },
  {
    code: "bt",
    name: "Bhutan"
  },
  {
    code: "bo",
    name: "Bolivia"
  },
  {
    code: "ba",
    name: "Bosnia and Herzegovina"
  },
  {
    code: "bw",
    name: "Botswana"
  },
  {
    code: "br",
    name: "Brazil"
  },
  {
    code: "io",
    name: "British Indian Ocean Territory"
  },
  {
    code: "bn",
    name: "Brunei"
  },
  {
    code: "bg",
    name: "Bulgaria"
  },
  {
    code: "bf",
    name: "Burkina Faso"
  },
  {
    code: "bi",
    name: "Burundi"
  },
  {
    code: "cv",
    name: "Cabo Verde"
  },
  {
    code: "kh",
    name: "Cambodia"
  },
  {
    code: "cm",
    name: "Cameroon"
  },
  {
    code: "ca",
    name: "Canada"
  },
  {
    code: "ky",
    name: "Cayman Islands"
  },
  {
    code: "cf",
    name: "Central African Republic"
  },
  {
    code: "td",
    name: "Chad"
  },
  {
    code: "cl",
    name: "Chile"
  },
  {
    code: "cn",
    name: "China"
  },
  {
    code: "cx",
    name: "Christmas Island"
  },
  {
    code: "cc",
    name: "Cocos (Keeling) Islands"
  },
  {
    code: "co",
    name: "Colombia"
  },
  {
    code: "km",
    name: "Comoros"
  },
  {
    code: "cg",
    name: "Congo (Congo-Brazzaville)"
  },
  {
    code: "cd",
    name: "Congo (Congo-Kinshasa)"
  },
  {
    code: "ck",
    name: "Cook Islands"
  },
  {
    code: "cr",
    name: "Costa Rica"
  },
  {
    code: "ci",
    name: "C\xF4te d'Ivoire"
  },
  {
    code: "hr",
    name: "Croatia"
  },
  {
    code: "cu",
    name: "Cuba"
  },
  {
    code: "cw",
    name: "Cura\xE7ao"
  },
  {
    code: "cy",
    name: "Cyprus"
  },
  {
    code: "cz",
    name: "Czechia (Czech Republic)"
  },
  {
    code: "dk",
    name: "Denmark"
  },
  {
    code: "dj",
    name: "Djibouti"
  },
  {
    code: "dm",
    name: "Dominica"
  },
  {
    code: "do",
    name: "Dominican Republic"
  },
  {
    code: "ec",
    name: "Ecuador"
  },
  {
    code: "eg",
    name: "Egypt"
  },
  {
    code: "sv",
    name: "El Salvador"
  },
  {
    code: "gq",
    name: "Equatorial Guinea"
  },
  {
    code: "er",
    name: "Eritrea"
  },
  {
    code: "ee",
    name: "Estonia"
  },
  {
    code: "et",
    name: "Ethiopia"
  },
  {
    code: "fk",
    name: "Falkland Islands"
  },
  {
    code: "fo",
    name: "Faroe Islands"
  },
  {
    code: "fj",
    name: "Fiji"
  },
  {
    code: "fi",
    name: "Finland"
  },
  {
    code: "fr",
    name: "France"
  },
  {
    code: "gf",
    name: "French Guiana"
  },
  {
    code: "pf",
    name: "French Polynesia"
  },
  {
    code: "tf",
    name: "French Southern Territories"
  },
  {
    code: "ga",
    name: "Gabon"
  },
  {
    code: "gm",
    name: "Gambia"
  },
  {
    code: "ge",
    name: "Georgia"
  },
  {
    code: "de",
    name: "Germany"
  },
  {
    code: "gh",
    name: "Ghana"
  },
  {
    code: "gi",
    name: "Gibraltar"
  },
  {
    code: "gr",
    name: "Greece"
  },
  {
    code: "gl",
    name: "Greenland"
  },
  {
    code: "gd",
    name: "Grenada"
  },
  {
    code: "gp",
    name: "Guadeloupe"
  },
  {
    code: "gu",
    name: "Guam"
  },
  {
    code: "gt",
    name: "Guatemala"
  },
  {
    code: "gg",
    name: "Guernsey"
  },
  {
    code: "gn",
    name: "Guinea"
  },
  {
    code: "gw",
    name: "Guinea-Bissau"
  },
  {
    code: "gy",
    name: "Guyana"
  },
  {
    code: "ht",
    name: "Haiti"
  },
  {
    code: "hm",
    name: "Heard Island and McDonald Islands"
  },
  {
    code: "hn",
    name: "Honduras"
  },
  {
    code: "hk",
    name: "Hong Kong"
  },
  {
    code: "hu",
    name: "Hungary"
  },
  {
    code: "is",
    name: "Iceland"
  },
  {
    code: "in",
    name: "India"
  },
  {
    code: "id",
    name: "Indonesia"
  },
  {
    code: "ir",
    name: "Iran"
  },
  {
    code: "iq",
    name: "Iraq"
  },
  {
    code: "ie",
    name: "Ireland"
  },
  {
    code: "im",
    name: "Isle of Man"
  },
  {
    code: "il",
    name: "Israel"
  },
  {
    code: "it",
    name: "Italy"
  },
  {
    code: "je",
    name: "Jersey"
  },
  {
    code: "jp",
    name: "Japan"
  },
  {
    code: "jo",
    name: "Jordan"
  },
  {
    code: "kz",
    name: "Kazakhstan"
  },
  {
    code: "ke",
    name: "Kenya"
  },
  {
    code: "ki",
    name: "Kiribati"
  },
  {
    code: "kp",
    name: "North Korea"
  },
  {
    code: "kr",
    name: "South Korea"
  },
  {
    code: "kw",
    name: "Kuwait"
  },
  {
    code: "kg",
    name: "Kyrgyzstan"
  },
  {
    code: "la",
    name: "Laos"
  },
  {
    code: "lv",
    name: "Latvia"
  },
  {
    code: "lb",
    name: "Lebanon"
  },
  {
    code: "ls",
    name: "Lesotho"
  },
  {
    code: "lr",
    name: "Liberia"
  },
  {
    code: "ly",
    name: "Libya"
  },
  {
    code: "li",
    name: "Liechtenstein"
  },
  {
    code: "lt",
    name: "Lithuania"
  },
  {
    code: "lu",
    name: "Luxembourg"
  },
  {
    code: "mo",
    name: "Macao"
  },
  {
    code: "mk",
    name: "North Macedonia"
  },
  {
    code: "mg",
    name: "Madagascar"
  },
  {
    code: "mw",
    name: "Malawi"
  },
  {
    code: "my",
    name: "Malaysia"
  },
  {
    code: "mv",
    name: "Maldives"
  },
  {
    code: "ml",
    name: "Mali"
  },
  {
    code: "mt",
    name: "Malta"
  },
  {
    code: "mh",
    name: "Marshall Islands"
  },
  {
    code: "mq",
    name: "Martinique"
  },
  {
    code: "mr",
    name: "Mauritania"
  },
  {
    code: "mu",
    name: "Mauritius"
  },
  {
    code: "yt",
    name: "Mayotte"
  },
  {
    code: "mx",
    name: "Mexico"
  },
  {
    code: "fm",
    name: "Micronesia"
  },
  {
    code: "md",
    name: "Moldova"
  },
  {
    code: "mc",
    name: "Monaco"
  },
  {
    code: "mn",
    name: "Mongolia"
  },
  {
    code: "me",
    name: "Montenegro"
  },
  {
    code: "ms",
    name: "Montserrat"
  },
  {
    code: "ma",
    name: "Morocco"
  },
  {
    code: "mz",
    name: "Mozambique"
  },
  {
    code: "mm",
    name: "Myanmar (formerly Burma)"
  },
  {
    code: "na",
    name: "Namibia"
  },
  {
    code: "nr",
    name: "Nauru"
  },
  {
    code: "np",
    name: "Nepal"
  },
  {
    code: "nl",
    name: "Netherlands"
  },
  {
    code: "nc",
    name: "New Caledonia"
  },
  {
    code: "nz",
    name: "New Zealand"
  },
  {
    code: "ni",
    name: "Nicaragua"
  },
  {
    code: "ne",
    name: "Niger"
  },
  {
    code: "ng",
    name: "Nigeria"
  },
  {
    code: "nu",
    name: "Niue"
  },
  {
    code: "nf",
    name: "Norfolk Island"
  },
  {
    code: "mp",
    name: "Northern Mariana Islands"
  },
  {
    code: "no",
    name: "Norway"
  },
  {
    code: "om",
    name: "Oman"
  },
  {
    code: "pk",
    name: "Pakistan"
  },
  {
    code: "pw",
    name: "Palau"
  },
  {
    code: "pa",
    name: "Panama"
  },
  {
    code: "pg",
    name: "Papua New Guinea"
  },
  {
    code: "py",
    name: "Paraguay"
  },
  {
    code: "pe",
    name: "Peru"
  },
  {
    code: "ph",
    name: "Philippines"
  },
  {
    code: "pn",
    name: "Pitcairn Islands"
  },
  {
    code: "pl",
    name: "Poland"
  },
  {
    code: "pt",
    name: "Portugal"
  },
  {
    code: "pr",
    name: "Puerto Rico"
  },
  {
    code: "qa",
    name: "Qatar"
  },
  {
    code: "re",
    name: "R\xE9union"
  },
  {
    code: "ro",
    name: "Romania"
  },
  {
    code: "ru",
    name: "Russia"
  },
  {
    code: "rw",
    name: "Rwanda"
  },
  {
    code: "bl",
    name: "Saint Barth\xE9lemy"
  },
  {
    code: "sh",
    name: "Saint Helena"
  },
  {
    code: "kn",
    name: "Saint Kitts and Nevis"
  },
  {
    code: "lc",
    name: "Saint Lucia"
  },
  {
    code: "mf",
    name: "Saint Martin"
  },
  {
    code: "pm",
    name: "Saint Pierre and Miquelon"
  },
  {
    code: "vc",
    name: "Saint Vincent and the Grenadines"
  },
  {
    code: "ws",
    name: "Samoa"
  },
  {
    code: "sm",
    name: "San Marino"
  },
  {
    code: "sa",
    name: "Saudi Arabia"
  },
  {
    code: "sn",
    name: "Senegal"
  },
  {
    code: "rs",
    name: "Serbia"
  },
  {
    code: "sc",
    name: "Seychelles"
  },
  {
    code: "sl",
    name: "Sierra Leone"
  },
  {
    code: "sg",
    name: "Singapore"
  },
  {
    code: "sx",
    name: "Sint Maarten"
  },
  {
    code: "sk",
    name: "Slovakia"
  },
  {
    code: "si",
    name: "Slovenia"
  },
  {
    code: "sb",
    name: "Solomon Islands"
  },
  {
    code: "so",
    name: "Somalia"
  },
  {
    code: "za",
    name: "South Africa"
  },
  {
    code: "gs",
    name: "South Georgia and the South Sandwich Islands"
  },
  {
    code: "ss",
    name: "South Sudan"
  },
  {
    code: "es",
    name: "Spain"
  },
  {
    code: "lk",
    name: "Sri Lanka"
  },
  {
    code: "sd",
    name: "Sudan"
  },
  {
    code: "sr",
    name: "Suriname"
  },
  {
    code: "sj",
    name: "Svalbard and Jan Mayen"
  },
  {
    code: "sz",
    name: "Eswatini"
  },
  {
    code: "se",
    name: "Sweden"
  },
  {
    code: "ch",
    name: "Switzerland"
  },
  {
    code: "sy",
    name: "Syria"
  },
  {
    code: "tw",
    name: "Taiwan"
  },
  {
    code: "tj",
    name: "Tajikistan"
  },
  {
    code: "tz",
    name: "Tanzania"
  },
  {
    code: "th",
    name: "Thailand"
  },
  {
    code: "tl",
    name: "Timor-Leste"
  },
  {
    code: "tg",
    name: "Togo"
  },
  {
    code: "tk",
    name: "Tokelau"
  },
  {
    code: "to",
    name: "Tonga"
  },
  {
    code: "tt",
    name: "Trinidad and Tobago"
  },
  {
    code: "tn",
    name: "Tunisia"
  },
  {
    code: "tr",
    name: "Turkey"
  },
  {
    code: "tm",
    name: "Turkmenistan"
  },
  {
    code: "tv",
    name: "Tuvalu"
  },
  {
    code: "ug",
    name: "Uganda"
  },
  {
    code: "ua",
    name: "Ukraine"
  },
  {
    code: "ae",
    name: "United Arab Emirates"
  },
  {
    code: "gb",
    name: "United Kingdom"
  },
  {
    code: "us",
    name: "United States"
  },
  {
    code: "uy",
    name: "Uruguay"
  },
  {
    code: "uz",
    name: "Uzbekistan"
  },
  {
    code: "vu",
    name: "Vanuatu"
  },
  {
    code: "ve",
    name: "Venezuela"
  },
  {
    code: "vn",
    name: "Vietnam"
  },
  {
    code: "wf",
    name: "Wallis and Futuna"
  },
  {
    code: "eh",
    name: "Western Sahara"
  },
  {
    code: "ye",
    name: "Yemen"
  },
  {
    code: "zm",
    name: "Zambia"
  },
  {
    code: "zw",
    name: "Zimbabwe"
  }
];
const _sfc_main$1 = {
  components: {
    CheckoutAvailability,
    SocialLogin: _sfc_main$2
  },
  data() {
    return {
      bookingForSomeoneElse: "No",
      showPassword: false,
      showGuestInfo: false,
      showYourInfo: true,
      isModalOpen: false,
      isModalVisible: false,
      isModal2Visible: false,
      selectedInfants: 0,
      selectedChildren: 0,
      total_rate: 0,
      countries,
      isSpecialRateApplied: false,
      infantAges: [],
      childrenAges: [],
      discount_data: {},
      rooms: [],
      roomCategory: "",
      selectedNumberOfRooms: "",
      // Selected number of rooms from the dropdown
      selectedRoomNumbers: [],
      randomizedCategories: {},
      roomDetails: {},
      // Object to store details for each room
      mealPlans: [
        // Example meal plan options
        { value: "room_only", label: "Room Only" },
        { value: "bread_breakfast", label: "Bed & Breakfast" },
        { value: "half_board", label: "Half Board" },
        { value: "full_board", label: "Full Board" }
      ],
      childAgeOptions: [3, 4, 5, 6, 7, 8, 9, 10],
      // Options for children's ages
      infantAgeOptions: [0, 1, 2],
      // Age options for children
      selectedOption: "",
      boardType: [],
      special_rate: 0,
      roomCategories: [],
      view_type_id: null,
      view_types: [],
      childFormAges: [],
      infantFormAges: [],
      activities: [],
      categories: [],
      book_loading: false,
      discounts: [],
      taxes: [],
      isSocialLogin: false,
      price: 0,
      roomPeopleCount: [],
      booking_note: "",
      payment_note: "",
      form: {
        first_name: "",
        last_name: "",
        email: "",
        telephone: "",
        address: "",
        nationality: "",
        check_in: this.$route.query.check_in,
        check_out: this.$route.query.check_out,
        guest_info: {
          first_name: "",
          last_name: "",
          email: "",
          telephone: "",
          address: "",
          nationality: "",
          identification_type: "",
          identification_no: "",
          identification_issue_date: "",
          dob: "",
          gender: ""
        }
      },
      registerUser: {
        name: "",
        lname: "",
        email: "",
        password: ""
      },
      guestDetails: {
        telephone: "",
        address: "",
        nationality: "",
        // profile_image: [],
        identification_type: "",
        identification_no: "",
        identification_issue_date: "",
        dob: "",
        gender: ""
      },
      loginUser: {
        email: "",
        password: ""
      },
      errors: {
        email: [],
        password: []
      }
    };
  },
  watch: {
    selectedRoomNumbers(newVal, oldVal) {
      console.log("selectedRoomNumbers changed:", { newVal, oldVal });
      this.submitPayload();
    },
    roomDetails: {
      handler(newVal, oldVal) {
        console.log("roomDetails changed:", { newVal, oldVal });
        this.submitPayload();
      },
      deep: true
      // Enables deep watching for nested properties
    },
    activities(newVal, oldVal) {
      console.log("activities changed:", { newVal, oldVal });
      this.submitPayload();
    },
    taxes(newVal, oldVal) {
      console.log("taxes changed:", { newVal, oldVal });
      this.submitPayload();
    },
    discounts(newVal, oldVal) {
      console.log("discounts changed:", { newVal, oldVal });
      this.submitPayload();
    },
    $route(query) {
      console.log("Route changed:", query);
      this.submitPayload();
    }
  },
  computed: {
    randomizedRoomCategories() {
      const categoriesFromUrl = this.$route.query.categories ? this.$route.query.categories.split(",") : [];
      if (Object.keys(this.randomizedCategories).length === 0) {
        this.randomizedCategories = this.rooms.reduce((acc, room) => {
          const availableCategories = [];
          if (categoriesFromUrl.includes(room.category)) {
            availableCategories.push(room.category);
          }
          if (categoriesFromUrl.includes(room.secondary_category)) {
            availableCategories.push(room.secondary_category);
          }
          const shuffledCategories = this.shuffleArray(availableCategories);
          acc[room.room_number] = shuffledCategories[0] || "Unknown";
          return acc;
        }, {});
      }
      return this.randomizedCategories;
    },
    categoriesFromUrl() {
      const urlCategories = this.$route.query.categories;
      return urlCategories ? urlCategories.split(",") : [];
    },
    shouldShowChildrenColumn() {
      console.log("first");
      return this.rooms.some((room) => this.randomizedRoomCategories[room] !== "Single");
    },
    // Method to get random category, ensuring it is consistent
    roomCategories() {
      return this.rooms.map((room) => {
        const urlCategories = this.categoriesFromUrl;
        const roomCategories = [];
        if (urlCategories.includes(room.category)) {
          roomCategories.push(room.category);
        }
        if (urlCategories.includes(room.secondary_category)) {
          roomCategories.push(room.secondary_category);
        }
        if (roomCategories.length === 0) {
          return "No matching category";
        }
        const randomIndex = Math.floor(Math.random() * roomCategories.length);
        return roomCategories[randomIndex];
      });
    },
    isRoomSelected() {
      return this.selectedRoomNumbers.length > 0;
    },
    // Calculate the number of rooms
    numberOfRooms() {
      return this.rooms.length ? Array.from({ length: this.rooms.length }, (_, i) => i + 1) : [];
    },
    childrenAges() {
      const ages = {};
      this.selectedRoomNumbers.forEach((room) => {
        var _a;
        const numChildren = ((_a = this.roomDetails[room]) == null ? void 0 : _a.children) || 0;
        ages[room] = Array.from({ length: numChildren }, (_, i) => i);
      });
      return ages;
    }
  },
  methods: {
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    // Function to get the categories from URL
    getCategoriesFromUrl() {
      const urlCategories = this.$route.query.categories;
      return urlCategories ? urlCategories.split(",") : [];
    },
    // Randomly select a category if it matches the ones in URL
    getRandomCategory(room) {
      const urlCategories = this.getCategoriesFromUrl();
      const roomCategories = [];
      if (urlCategories.includes(room.category)) {
        roomCategories.push(room.category);
      }
      if (urlCategories.includes(room.secondary_category)) {
        roomCategories.push(room.secondary_category);
      }
      if (roomCategories.length === 0) {
        return "No matching category";
      }
      const randomIndex = Math.floor(Math.random() * roomCategories.length);
      return roomCategories[randomIndex];
    },
    handleActivityChange() {
      console.log("Updated activities:", this.activities);
      this.submitPayload();
    },
    toggleRoom() {
      const roomNumber = this.selectedRoom;
      const index = this.selectedRoomNumbers.indexOf(roomNumber);
      if (index === -1) {
        this.selectedRoomNumbers.push(roomNumber);
      } else {
        this.selectedRoomNumbers.splice(index, 1);
      }
      this.selectedRoom = "";
      this.updateRoomDetails();
    },
    removeRoom(roomNumber) {
      const index = this.selectedRoomNumbers.indexOf(roomNumber);
      if (index > -1) {
        this.selectedRoomNumbers.splice(index, 1);
        this.updateRoomDetails();
      }
    },
    updateCategory(roomNumber) {
      const selectedCategory = this.roomDetails[roomNumber].selectedCategory;
      const room = this.rooms.find((r) => r.room_number === roomNumber);
      if (selectedCategory === room.category) {
        this.roomDetails[roomNumber].adults = Math.min(1, room.max_adults);
        this.roomDetails[roomNumber].children = 0;
        this.roomDetails[roomNumber].infants = 0;
      } else if (selectedCategory === room.secondary_category) {
        this.roomDetails[roomNumber].adults = Math.min(
          1,
          room.secondary_max_adults
        );
        this.roomDetails[roomNumber].children = 0;
        this.roomDetails[roomNumber].infants = 0;
      }
    },
    updateRoomDetails() {
      this.roomDetails = this.selectedRoomNumbers.reduce((acc, roomNumber) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const room = this.rooms.find((r) => r.room_number === roomNumber);
        if (room) {
          const selectedCategory = ((_a = this.roomDetails[roomNumber]) == null ? void 0 : _a.selectedCategory) || room.category;
          const currentChildren = ((_b = this.roomDetails[roomNumber]) == null ? void 0 : _b.children) || 0;
          const currentChildrenAges = (((_c = this.roomDetails[roomNumber]) == null ? void 0 : _c.childrenAges) || []).slice(0, currentChildren);
          acc[roomNumber] = {
            selectedCategory,
            primaryCategory: room.category,
            secondaryCategory: room.secondary_category,
            adults: ((_d = this.roomDetails[roomNumber]) == null ? void 0 : _d.adults) || Math.min(1, room.max_adults),
            children: currentChildren,
            infants: ((_e = this.roomDetails[roomNumber]) == null ? void 0 : _e.infants) || 0,
            mealPlan: ((_f = this.roomDetails[roomNumber]) == null ? void 0 : _f.mealPlan) || "room_only",
            childrenAges: currentChildrenAges,
            // Adjusted childrenAges array
            infantAges: ((_g = this.roomDetails[roomNumber]) == null ? void 0 : _g.infantAges) || [],
            mealTime: ((_h = this.roomDetails[roomNumber]) == null ? void 0 : _h.mealTime) || " "
          };
        }
        return acc;
      }, {});
    },
    formatDatePayload(dateString) {
      const date = new Date(dateString);
      return date.toISOString();
    },
    initializeActivities() {
      this.activities = this.activities.map((activity) => ({
        ...activity,
        checked: false
      }));
    },
    preparePayload() {
      var _a;
      const checkInDate = this.formatDatePayload(this.$route.query.fromDate);
      const checkOutDate = this.formatDatePayload(this.$route.query.toDate);
      const discountCode = this.$route.query.discount;
      const taxes = [];
      const discounts = [];
      const latestDiscount = ((_a = this.discounts) == null ? void 0 : _a.length) > 0 ? this.discounts[0] : null;
      if (latestDiscount) {
        discounts.push({
          discount_id: latestDiscount.id
        });
      }
      const selectedActivities = this.activities.filter((activity) => activity.checked).map((activity) => ({ activity_id: activity.id }));
      return {
        check_in: checkInDate,
        check_out: checkOutDate,
        rooms: this.selectedRoomNumbers.map((roomNumber) => {
          const room = this.rooms.find((r) => r.room_number === roomNumber);
          const roomDetail = this.roomDetails[roomNumber] || {};
          const childrenCount = roomDetail.children || 0;
          const childrenAges = roomDetail.childrenAges.slice(0, childrenCount);
          const infantAges = roomDetail.infants > 0 ? roomDetail.infantAges.slice(0, roomDetail.infants) : [];
          const randomizedCategory = this.randomizedCategories[roomNumber] || room.category;
          return {
            room_id: room.id,
            adults: roomDetail.adults || 0,
            children: childrenAges,
            // Trimmed childrenAges
            infants: infantAges,
            // Trimmed infantAges
            meal_plan: roomDetail.mealPlan || "room_only",
            category: randomizedCategory
            // Use randomized category here
          };
        }),
        taxes,
        discounts,
        // Pass the updated discounts array with the latest discount
        activities: selectedActivities,
        discount_code: discountCode
      };
    },
    preparePayloadBooking() {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
      const formatDateToISO = (dateString) => {
        if (!dateString)
          return "";
        const date = new Date(dateString);
        const offset = date.getTimezoneOffset();
        const adjustedDate = new Date(date.getTime() - offset * 60 * 1e3);
        return adjustedDate.toISOString().slice(0, 19);
      };
      const checkInDate = formatDateToISO(this.$route.query.fromDate);
      const checkOutDate = formatDateToISO(this.$route.query.toDate);
      const discountCode = this.$route.query.discount;
      const taxes = [];
      const discounts = [];
      const latestDiscount = ((_a = this.discounts) == null ? void 0 : _a.length) > 0 ? this.discounts[0] : null;
      if (latestDiscount) {
        discounts.push({
          discount_id: latestDiscount.id
        });
      }
      const selectedActivities = this.activities.filter((activity) => activity.checked).map((activity) => ({
        activity_id: activity.id,
        activity_name: activity.name
      }));
      const agentInfo = this.showGuestInfo ? {
        first_name: this.form.first_name || "",
        last_name: this.form.last_name || "",
        email: this.form.email || "",
        telephone: this.form.telephone || "",
        address: this.form.address || "",
        nationality: this.form.nationality || ""
      } : {
        first_name: "",
        last_name: "",
        email: "",
        telephone: "",
        address: "",
        nationality: ""
      };
      return {
        check_in: checkInDate,
        check_out: checkOutDate,
        booking_type: "website",
        rooms: this.selectedRoomNumbers.map((roomNumber) => {
          const room = this.rooms.find((r) => r.room_number === roomNumber);
          const roomDetail = this.roomDetails[roomNumber] || {};
          const randomizedCategory = this.randomizedCategories[roomNumber] || room.category;
          const childrenCount = roomDetail.children || 0;
          const infantsCount = roomDetail.infants || 0;
          return {
            room_id: room.id,
            room_number: room.room_number,
            category: randomizedCategory,
            // Use randomized category here
            adults: roomDetail.adults || 0,
            children: childrenCount > 0 ? (roomDetail.childrenAges || []).slice(0, childrenCount) : [],
            infants: infantsCount > 0 ? (roomDetail.infantAges || []).slice(0, infantsCount) : [],
            meal_plan: roomDetail.mealPlan || "room_only",
            starting_meals_with: roomDetail.mealTime || "",
            view: this.$route.query.view || "default"
          };
        }),
        taxes,
        discounts,
        // Pass the updated discounts array with the latest discount
        activities: selectedActivities,
        discount_code: discountCode || "",
        total_taxes: ((_b = this.total_rate) == null ? void 0 : _b.total_tax_amount) || 0,
        total_rooms_charge: ((_c = this.total_rate) == null ? void 0 : _c.total_rooms_amount) || 0,
        total_meal_plan_amount: ((_d = this.total_rate) == null ? void 0 : _d.total_meal_plan_amount) || 0,
        total_activities_charge: ((_e = this.total_rate) == null ? void 0 : _e.total_activities_amount) || 0,
        total_discount_amount: ((_f = this.total_rate) == null ? void 0 : _f.total_discount_amount) || 0,
        total_amount: ((_g = this.total_rate) == null ? void 0 : _g.total_amount) || 0,
        total_additional_services_amount: 0,
        payment_method: "sueen_web",
        is_partial_payment: false,
        paid_amount: 0,
        agent_info: agentInfo,
        guest_info: {
          first_name: this.form.guest_info.first_name,
          last_name: this.form.guest_info.last_name,
          email: this.form.guest_info.email,
          telephone: this.form.guest_info.telephone,
          address: this.form.guest_info.guest_address,
          nationality: this.form.guest_info.nationality,
          identification_type: ((_i = (_h = this.form) == null ? void 0 : _h.guest_info) == null ? void 0 : _i.identification_type) || "",
          identification_no: ((_k = (_j = this.form) == null ? void 0 : _j.guest_info) == null ? void 0 : _k.identification_no) || "",
          gender: ((_m = (_l = this.form) == null ? void 0 : _l.guest_info) == null ? void 0 : _m.gender) || "",
          profile_image: ((_o = (_n = this.form) == null ? void 0 : _n.guest_info) == null ? void 0 : _o.profile_image) || [],
          identification_issue_date: ((_p = this.form.guest_info) == null ? void 0 : _p.identification_issue_date) ? this.formatDatePayload(this.form.guest_info.identification_issue_date) : null,
          dob: ((_q = this.form.guest_info) == null ? void 0 : _q.dob) ? this.formatDatePayload(this.form.guest_info.dob) : null
        },
        booking_note: this.booking_note || "",
        payment_note: this.payment_note || ""
      };
    },
    async submitPayload() {
      try {
        const payload = this.preparePayload();
        const runtimeConfig = useRuntimeConfig();
        console.log(payload);
        const response = await fetch(
          "https://api.sueennature.com/rooms/get-rates/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": runtimeConfig.public.DATABASE_ID
            },
            body: JSON.stringify(payload)
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        this.total_rate = data;
        console.log("RATES", this.total_rate);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    },
    handleSubmit() {
      const payload = this.preparePayloadBooking();
      console.log("Submitted payload", payload);
      if (!payload.guest_info.first_name | !payload.guest_info.nationality | !payload.guest_info.last_name | !payload.guest_info.telephone | !payload.guest_info.address | !payload.guest_info.identification_no | !payload.guest_info.identification_type) {
        return toast.error("Please fill fields in Guest info & Payment");
      }
      const headers = {
        "x-api-key": this.$config.public.DATABASE_ID,
        "Content-Type": "application/json"
      };
      this.book_loading = true;
      axios.post("https://api.sueennature.com/bookings/", payload, { headers }).then((response) => {
        console.log("Response received:", response.data);
        this.book_loading = false;
        toast.success("Proceeding to payment");
        setTimeout(() => {
          (void 0).location.href = response.data.payment_url;
        }, 1500);
      }).catch((error) => {
        console.error("An error occurred:", error);
        this.book_loading = false;
        this.setupToastError("An error occurred. Please try again later.");
      });
    },
    updateRoomNumbers() {
      if (this.selectedNumberOfRooms) {
        const num = parseInt(this.selectedNumberOfRooms, 10);
        this.selectedRoomNumbers = this.rooms.slice(0, num).map((room) => room.room_number);
        this.initializeRoomDetails();
      } else {
        this.selectedRoomNumbers = [];
        this.roomDetails = {};
      }
    },
    initializeRoomDetails() {
      this.selectedRoomNumbers.forEach((room) => {
        if (!this.roomDetails[room]) {
          const roomData = this.rooms.find((r) => r.room_number === room);
          this.$set(this.roomDetails, room, {
            adults: Math.min(1, roomData.max_adults),
            children: Math.min(0, roomData.max_childs),
            mealPlan: "room_only",
            infants: 0,
            childrenAges: Array(Math.min(0, roomData.max_childs)).fill(0),
            infantAges: Array(0).fill(0)
          });
        }
      });
    },
    adultOptions(room) {
      const roomDetails = this.rooms.find((r) => r.room_number === room);
      const randomizedCategory = this.randomizedRoomCategories[room] || roomDetails.category;
      let maxAdults;
      if (randomizedCategory === roomDetails.secondary_category) {
        maxAdults = roomDetails.secondary_max_adults;
      } else {
        maxAdults = roomDetails.max_adults;
      }
      return Array.from({ length: maxAdults }, (_, i) => i + 1);
    },
    childOptions(room) {
      const roomDetails = this.rooms.find((r) => r.room_number === room);
      const randomizedCategory = this.randomizedRoomCategories[room] || roomDetails.category;
      let maxChildren;
      if (randomizedCategory === roomDetails.secondary_category) {
        maxChildren = roomDetails.secondary_max_childs;
      } else {
        maxChildren = roomDetails.max_childs;
      }
      return Array.from({ length: maxChildren + 1 }, (_, i) => i);
    },
    scrollToPaymentInfo() {
      this.$nextTick(() => {
        this.$refs.paymentInfoRef.scrollIntoView({ behavior: "smooth" });
      });
    },
    formatDate(dateString) {
      const date = new Date(dateString);
      const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];
      const month = months[date.getMonth()];
      const day = date.getDate();
      const daySuffix = this.getDaySuffix(day);
      const year = date.getFullYear();
      return `${month} ${day}${daySuffix} ${year}`;
    },
    getDaySuffix(day) {
      if (day > 3 && day < 21)
        return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    },
    getClickMethod() {
      if (this.isSignedIn) {
        this.$auth.setAuthToken(null);
        localStorage.removeItem("userEmail");
        toast.success("Successfully Logged Out");
        setTimeout(() => {
          this.$router.push("/home");
        }, 2e3);
      } else {
        this.toggleModal();
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    handleGoogleLoginData({ name, lname, email, password }) {
      this.isSocialLogin = true, this.registerUser.name = name;
      this.registerUser.lname = lname;
      this.registerUser.email = email;
      this.registerUser.password = password;
      this.loginUser.email = email;
      this.loginUser.password = password;
      this.login();
    },
    async register() {
      try {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(this.registerUser.email)) {
          this.setupToastError("Please enter a valid email address.");
          return;
        }
        if (this.registerUser.password.length < 8) {
          this.setupToastError("Password must be at least 8 characters long.");
          return;
        }
        const guestPayload = {
          first_name: this.registerUser.name,
          last_name: this.registerUser.lname,
          email: this.registerUser.email,
          telephone: this.guestDetails.telephone || "",
          address: this.guestDetails.address || "",
          nationality: this.guestDetails.nationality || "",
          profile_image: this.registerUser.profile_image || [],
          identification_type: this.registerUser.identification_type || "",
          identification_no: this.guestDetails.identification_no || "",
          identification_issue_date: this.registerUser.identification_issue_date || (/* @__PURE__ */ new Date()).toISOString(),
          dob: this.registerUser.dob || (/* @__PURE__ */ new Date()).toISOString(),
          gender: this.guestDetails.gender || "",
          password: this.registerUser.password
        };
        const { data: guestResponse } = await axios.post(
          "https://api.sueennature.com/guests",
          guestPayload,
          {
            headers: {
              "x-api-key": this.$config.public.DATABASE_ID,
              "Content-Type": "application/json"
            }
          }
        );
        console.log("Create guest response", guestPayload);
        const { data: registerResponse } = await axios.post(
          "https://api.sueennature.com/users/register",
          {
            username: this.registerUser.name + " " + this.registerUser.lname,
            email: this.registerUser.email,
            role: "guest",
            password: this.registerUser.password
          },
          {
            headers: {
              "x-api-key": this.$config.public.DATABASE_ID,
              "Content-Type": "application/json"
            }
          }
        );
        console.log("Register response", registerResponse);
        localStorage.setItem("userEmail", this.registerUser.email);
        this.toggleModal_1();
        this.nuxtApp.$auth.setAuthToken(registerResponse.access_token);
        this.setAuthTokenInCookie(registerResponse.access_token);
        localStorage.setItem("userEmail", this.registerUser.email);
      } catch (error) {
        console.error("An error occurred:", error);
        if (error.response && error.response.data && error.response.data.detail === "Email already registered") {
          this.setupToastError("Email already registered");
        } else if (error.response && error.response.data && error.response.data.detail === "Username already exists") {
          this.setupToastError("Username already exists");
        } else {
          this.setupToastError("An error occurred. Please try again later.");
        }
      }
    },
    async login() {
      const {
        public: { DATABASE_ID }
      } = useRuntimeConfig();
      if (!this.loginUser.email || !this.loginUser.password) {
        this.setupToastError("Please fill in all fields.");
        return;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.loginUser.email)) {
        this.setupToastError("Please enter a valid email address.");
        return;
      }
      const queryParams = new URLSearchParams({
        email: this.loginUser.email,
        password: this.loginUser.password
      }).toString();
      await fetch(
        `https://api.sueennature.com/users/login?${queryParams}`,
        {
          method: "POST",
          headers: {
            "x-api-key": DATABASE_ID
            // Set the X-API-Key header
          }
        }
      ).then(async (response2) => {
        localStorage.setItem("userEmail", this.loginUser.email);
        const data = await response2.json();
        console.log(data);
        this.setAuthTokenInCookie(data.access_token);
        localStorage.setItem("guest_id", data.guest_id);
        this.setAuthTokenInCookie(data.guest_id);
        this.nuxtApp.$auth.setAuthToken(data.access_token);
        if (data.access_token) {
          this.$router.push({
            path: "/dashboard",
            query: { guest_id: data.guest_id }
          });
          return toast.success(`Successfully logged In`);
        } else if (data.detail = "Invalid credentials") {
          return toast.error(`Invalid Credentials`);
        } else {
          return toast.error("Something went wrong");
        }
      }).catch((error) => {
        if (error.response) {
          if (error.response.data.message === "Invalid Credentials") {
            if (this.isSocialLogin) {
              this.register();
            } else {
              this.setupToastError("Please check your credentials");
            }
          }
        } else if (error.request) {
          console.log("Error request:", error.request);
        } else {
          console.log("Error", error.message);
        }
      });
    },
    setAuthTokenInCookie(token) {
      const cookieName = "auth_token=";
      const daysValid = 7;
      const expiryDate = /* @__PURE__ */ new Date();
      expiryDate.setTime(
        expiryDate.getTime() + daysValid * 24 * 60 * 60 * 1e3
      );
      const expires = "expires=" + expiryDate.toUTCString();
      (void 0).cookie = cookieName + token + ";" + expires + ";path=/";
    },
    logout() {
      this.$auth.setAuthToken(null);
      localStorage.removeItem("userEmail");
      localStorage.removeItem("guest_id");
      this.$router.push("/home");
    },
    formatPrice(value) {
      return value == null ? void 0 : value.toLocaleString("en-US");
    },
    redirectToRegister() {
      this.$router.push("/register");
    },
    toggleButtonGuestInfo() {
      this.showGuestInfo = true;
      this.showYourInfo = false;
    },
    toggleGuestInfo(event) {
      this.bookingForSomeoneElse = event.target.value;
      if (event.target.value === "Yes") {
        this.showGuestInfo = true;
        this.showYourInfo = false;
      } else {
        this.showGuestInfo = false;
        this.showYourInfo = true;
      }
    },
    toggleModal() {
      this.isModalVisible = !this.isModalVisible;
      this.isModal2Visible = false;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    toggleModal_1() {
      this.isModalVisible = false;
      this.isModal2Visible = !this.isModal2Visible;
    },
    closeModal_1() {
      this.isModal2Visible = false;
    },
    reopenFirstModal() {
      this.closeModal_1();
      this.toggleModal();
    },
    setupToastSucess(message) {
      toast.success(message, {
        autoClose: 3e3
      });
    },
    setupToastError(message) {
      toast.error(message, {
        autoClose: 3e3
      });
    },
    scrollToBottom() {
      var _a;
      (_a = this.$refs.paymentInfoRef) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
    }
  },
  mounted() {
    const queryParams = this.$route.query;
    if (queryParams.categories) {
      this.categories = queryParams.categories.replace(/[\[\]']+/g, "").split(",");
    }
    console.log("Categories:", this.categories);
    const { fromDate, toDate, view, discount, categories } = this.$route.query;
    const categoryList = Array.isArray(categories) ? categories : categories ? categories.split(",") : [];
    this.initializeActivities();
    const formatDateToISO = (dateString) => {
      if (!dateString)
        return "";
      const date = new Date(dateString);
      const offset = date.getTimezoneOffset();
      const adjustedDate = new Date(date.getTime() - offset * 60 * 1e3);
      return adjustedDate.toISOString().slice(0, 19);
    };
    if (new Date(fromDate) >= new Date(toDate)) {
      this.setupToastError("Check-out date must be after check-in date.");
      return;
    }
    const formattedCheckIn = formatDateToISO(fromDate);
    const formattedCheckOut = formatDateToISO(toDate);
    console.log(
      "BOOKING_FORMAT",
      fromDate,
      formattedCheckIn,
      toDate,
      formattedCheckOut
    );
    const runtimeConfig = useRuntimeConfig();
    const baseUrl = "https://api.sueennature.com/rooms/availability/";
    const params = new URLSearchParams();
    params.append("check_in", formattedCheckIn);
    params.append("check_out", formattedCheckOut);
    params.append("views", view);
    params.append("discount_code", discount || "");
    categoryList.forEach((category) => params.append("categories", category));
    const url = `${baseUrl}?${params.toString()}`;
    console.log("BOOKING", url);
    fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": runtimeConfig.public.DATABASE_ID,
        "Content-Type": "application/json"
      }
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }).then((data) => {
      console.log("Response Data:", data);
      this.activities = data.activities;
      this.rooms = data.rooms;
      this.discounts = data.discounts;
      this.taxes = data.taxes;
      console.log(this.rooms);
    }).catch((error) => {
      console.error("Error:", error);
    });
    const cookies = (void 0).cookie.split(";");
    const authTokenCookie = cookies.find(
      (cookie) => cookie.trim().startsWith("auth_token=")
    );
    this.isSignedIn = !!authTokenCookie;
    initFlowbite();
  },
  setup() {
    const nuxtApp = useNuxtApp();
    const isLoggedIn = computed(() => authStore.token !== null);
    return {
      isLoggedIn,
      nuxtApp
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CheckoutAvailability = CheckoutAvailability;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:container px-4 my-20" }, _attrs))} data-v-b0952021><h2 class="text-black-100 md:text-4xl text-3xl text-center" data-v-b0952021> Check Availability </h2><div class="mt-8" data-v-b0952021>`);
  _push(ssrRenderComponent(_component_CheckoutAvailability, null, null, _parent));
  _push(`</div><div data-v-b0952021><div class="flex flex-col lg-flex-row xl:flex-row items-start justify-between w-full gap-8" data-v-b0952021>`);
  if ($data.discounts.length > 0) {
    _push(`<div class="w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-14" data-v-b0952021><h6 class="text-black-200 xl:text-lg text-base font-bold" data-v-b0952021> Discounts </h6><!--[-->`);
    ssrRenderList($data.discounts, (discount, index) => {
      _push(`<div class="flex items-center mb-4 mt-8 w-full" data-v-b0952021><div class="w-full" data-v-b0952021><div class="flex items-center justify-between w-full" data-v-b0952021><div data-v-b0952021>${ssrInterpolate(discount.name)} :</div><div class="font-bold" data-v-b0952021>${ssrInterpolate(discount.percentage)}%</div></div><div class="flex items-center w-full justify-between mt-4" data-v-b0952021><div class="font-bold" data-v-b0952021>${ssrInterpolate($options.formatDate(discount.start_date))} : </div><div class="font-bold" data-v-b0952021>${ssrInterpolate($options.formatDate(discount.end_date))}</div></div></div></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow mt-14" data-v-b0952021><h6 class="text-black-200 xl:text-lg text-base font-bold" data-v-b0952021> Activities </h6><!--[-->`);
  ssrRenderList($data.activities, (activity, index) => {
    _push(`<div class="flex items-center mb-4 mt-8" data-v-b0952021><input${ssrRenderAttr("id", "checkbox-" + activity.id)}${ssrIncludeBooleanAttr(Array.isArray(activity.checked) ? ssrLooseContain(activity.checked, activity.id) : activity.checked) ? " checked" : ""} type="checkbox"${ssrRenderAttr("value", activity.id)} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" data-v-b0952021><label${ssrRenderAttr("for", "checkbox-" + activity.id)} class="ms-2 text-[17px] font-medium text-gray-900 dark:text-gray-300 flex items-center justify-between w-full" data-v-b0952021>${ssrInterpolate(activity.name)} - <strong data-v-b0952021>LKR ${ssrInterpolate($options.formatPrice(activity.price))}</strong></label></div>`);
  });
  _push(`<!--]--></div></div><div class="flex flex-col items-start w-full mt-4 gap-4" data-v-b0952021><div class="font-bold text-xl mt-10" data-v-b0952021> Select a rooms to further process </div><div class="mt-4 w-full" data-v-b0952021><h4 class="text-lg font-bold" data-v-b0952021>Available Rooms</h4><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" data-v-b0952021><!--[-->`);
  ssrRenderList($data.rooms, (room, index) => {
    _push(`<div${ssrRenderAttr("value", room.room_number)} class="w-full flex items-start"${ssrIncludeBooleanAttr($data.selectedRoomNumbers.includes(room.room_number)) ? " disabled" : ""} data-v-b0952021><span class="border flex flex-col border-gray-700 rounded-lg p-2 w-40" data-v-b0952021><span data-v-b0952021><strong data-v-b0952021>Room:</strong> ${ssrInterpolate(room.room_number)}</span> ${ssrInterpolate(" ")} <span data-v-b0952021><strong data-v-b0952021>Category:</strong> ${ssrInterpolate($options.randomizedRoomCategories[room.room_number] || "Unknown")}</span> ${ssrInterpolate(" ")} <span data-v-b0952021><strong data-v-b0952021>View:</strong> ${ssrInterpolate(room.view)}</span></span></div>`);
  });
  _push(`<!--]--></div><select class="w-72 border border-gray-600 rounded-lg mt-8" data-v-b0952021><option value="null" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray(_ctx.selectedRoom) ? ssrLooseContain(_ctx.selectedRoom, "null") : ssrLooseEqual(_ctx.selectedRoom, "null")) ? " selected" : ""}>Select a room</option><!--[-->`);
  ssrRenderList($data.rooms, (room) => {
    _push(`<option${ssrRenderAttr("value", room.room_number)}${ssrIncludeBooleanAttr($data.selectedRoomNumbers.includes(room.room_number)) ? " disabled" : ""} data-v-b0952021><span class="flex justify-between w-full gap-4" data-v-b0952021><span data-v-b0952021>Room: ${ssrInterpolate(room.room_number)}</span> ${ssrInterpolate(" ")}</span></option>`);
  });
  _push(`<!--]--></select>`);
  if ($data.selectedRoomNumbers.length) {
    _push(`<div data-v-b0952021><!--[-->`);
    ssrRenderList($data.selectedRoomNumbers, (roomNumber) => {
      _push(`<span class="selected-room" data-v-b0952021> Room ${ssrInterpolate(roomNumber)} <button class="close-icon" data-v-b0952021> \xD7 </button></span>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
  if ($data.selectedRoomNumbers.length) {
    _push(`<div class="w-full p-0 mt-4" data-v-b0952021><div class="p-4" data-v-b0952021><h3 class="text-lg font-bold mb-2" data-v-b0952021>Room Details:</h3><div class="overflow-x-auto" data-v-b0952021><table class="min-w-full bg-white shadow-lg border border-gray-100" data-v-b0952021><thead data-v-b0952021><tr data-v-b0952021><th class="py-2 px-4 border-b min-w-[150px]" data-v-b0952021>Room Number</th><th class="py-2 px-4 border-b min-w-[200px]" data-v-b0952021>Category</th><th class="py-2 px-4 border-b min-w-[100px]" data-v-b0952021>Adults</th><th class="py-2 px-4 border-b min-w-[100px]" data-v-b0952021>Children</th><th class="py-2 px-4 border-b min-w-[100px]" data-v-b0952021>Infants</th><th class="py-2 px-4 border-b min-w-[200px]" data-v-b0952021>Meal Plan</th><th class="py-2 px-4 border-b min-w-[120px]" data-v-b0952021> Starting Meal </th><th class="py-2 px-4 border-b min-w-[100px]" data-v-b0952021>Action</th></tr></thead>`);
    if ($data.selectedRoomNumbers.length) {
      _push(`<tbody data-v-b0952021><!--[-->`);
      ssrRenderList($data.selectedRoomNumbers, (room) => {
        _push(`<tr class="border-t" data-v-b0952021><td class="py-2 px-4 min-w-[150px]" data-v-b0952021><h4 class="text-md font-semibold border border-gray-300 p-2 rounded text-center" data-v-b0952021> Room ${ssrInterpolate(room)}</h4></td><td class="py-2 px-4 min-w-[200px]" data-v-b0952021><div class="mb-2 text-center" data-v-b0952021><span class="border flex flex-col border-gray-700 rounded-lg p-2" data-v-b0952021>${ssrInterpolate($options.randomizedRoomCategories[room] || "Unknown")}</span></div></td><td class="py-2 px-4 min-w-[100px]" data-v-b0952021><div class="mb-2" data-v-b0952021><select id="adults-{{ room }}" class="border border-gray-300 p-2 rounded w-full" data-v-b0952021><!--[-->`);
        ssrRenderList($options.adultOptions(room), (num) => {
          _push(`<option${ssrRenderAttr("value", num)} data-v-b0952021>${ssrInterpolate(num)}</option>`);
        });
        _push(`<!--]--></select></div></td><td class="py-2 px-4 min-w-[100px]" data-v-b0952021><div class="mb-2" data-v-b0952021><select id="children-{{ room }}" class="p-2 rounded w-full" data-v-b0952021><!--[-->`);
        ssrRenderList($options.childOptions(room), (num) => {
          _push(`<option${ssrRenderAttr("value", num)} data-v-b0952021>${ssrInterpolate(num)}</option>`);
        });
        _push(`<!--]--></select>`);
        if ($data.roomDetails[room].children > 0) {
          _push(`<div class="mt-4" style="${ssrRenderStyle({ "min-height": "100px" })}" data-v-b0952021><!--[-->`);
          ssrRenderList($data.roomDetails[room].children, (index) => {
            _push(`<div class="mb-2" data-v-b0952021><label${ssrRenderAttr("for", "child-age-" + room + "-" + index)} class="block mb-1 font-bold" data-v-b0952021> Child ${ssrInterpolate(index)} Age </label><select${ssrRenderAttr("id", "child-age-" + room + "-" + index)} class="border border-red-500 p-2 rounded w-full" data-v-b0952021><!--[-->`);
            ssrRenderList($data.childAgeOptions, (age) => {
              _push(`<option${ssrRenderAttr("value", age)} data-v-b0952021>${ssrInterpolate(age)}</option>`);
            });
            _push(`<!--]--></select></div>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td><td class="py-2 px-4 min-w-[100px]" data-v-b0952021>`);
        if ($data.rooms.find((r) => r.room_number === room).category !== "Single") {
          _push(`<div class="mb-2" data-v-b0952021><select id="infants-{{ room }}" class="p-2 rounded w-full" data-v-b0952021><!--[-->`);
          ssrRenderList($options.randomizedRoomCategories[room] === "Single" ? [0, 1] : [0, 1, 2], (num) => {
            _push(`<option${ssrRenderAttr("value", num)} data-v-b0952021>${ssrInterpolate(num)}</option>`);
          });
          _push(`<!--]--></select>`);
          if ($data.roomDetails[room].infants > 0) {
            _push(`<div class="mt-4" data-v-b0952021><!--[-->`);
            ssrRenderList($data.roomDetails[room].infants, (index) => {
              _push(`<div class="mb-2" data-v-b0952021><label${ssrRenderAttr("for", "infant-age-" + room + "-" + index)} class="block mb-1 font-bold" data-v-b0952021> Infant ${ssrInterpolate(index)} Age </label><select${ssrRenderAttr("id", "infant-age-" + room + "-" + index)} class="border border-red-500 p-2 rounded w-full" data-v-b0952021><!--[-->`);
              ssrRenderList($data.infantAgeOptions, (age) => {
                _push(`<option${ssrRenderAttr("value", age)} data-v-b0952021>${ssrInterpolate(age)}</option>`);
              });
              _push(`<!--]--></select></div>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="py-2 px-4 min-w-[200px]" data-v-b0952021>`);
        if ($data.rooms.find((r) => r.room_number === room).category !== "Single") {
          _push(`<div class="mb-2" data-v-b0952021><select id="meal-plan-{{ room }}" class="border border-gray-300 p-2 rounded w-full" data-v-b0952021><!--[-->`);
          ssrRenderList($data.mealPlans, (plan) => {
            _push(`<option${ssrRenderAttr("value", plan.value)} data-v-b0952021>${ssrInterpolate(plan.label)}</option>`);
          });
          _push(`<!--]--></select></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="py-2 px-4 min-w-[150px]" data-v-b0952021>`);
        if ($data.roomDetails[room].mealPlan !== "room_only" && $data.roomDetails[room].mealPlan !== "bread_breakfast" && $data.rooms.find((r) => r.room_number === room).category !== "Single") {
          _push(`<div class="mb-2" data-v-b0952021><select id="meal-time-{{ room }}" class="border border-gray-300 p-2 rounded w-full" data-v-b0952021><option value="breakfast" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.roomDetails[room].mealTime) ? ssrLooseContain($data.roomDetails[room].mealTime, "breakfast") : ssrLooseEqual($data.roomDetails[room].mealTime, "breakfast")) ? " selected" : ""}>Breakfast</option><option value="lunch" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.roomDetails[room].mealTime) ? ssrLooseContain($data.roomDetails[room].mealTime, "lunch") : ssrLooseEqual($data.roomDetails[room].mealTime, "lunch")) ? " selected" : ""}>Lunch</option><option value="dinner" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.roomDetails[room].mealTime) ? ssrLooseContain($data.roomDetails[room].mealTime, "dinner") : ssrLooseEqual($data.roomDetails[room].mealTime, "dinner")) ? " selected" : ""}>Dinner</option></select></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="py-2 px-4 min-w-[150px] text-center" data-v-b0952021><button class="mb-2 text-red-400 font-semibold border border-red-400 w-4 p-3 h-4 rounded-lg hover:text-red-600" data-v-b0952021><span class="flex items-center justify-center text-center w-full h-full" data-v-b0952021> X</span></button></td></tr>`);
      });
      _push(`<!--]--></tbody>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</table></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.selectedRoomNumbers.length) {
    _push(`<div data-v-b0952021><button class="mt-8 buttontext rounded-xl text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-b0952021> Please Click to get final rates to proceed further </button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="mt-8" data-v-b0952021>`);
  if (Object.keys($data.total_rate).length > 0) {
    _push(`<div class="text-xl font-bold" data-v-b0952021> Total Rates </div>`);
  } else {
    _push(`<!---->`);
  }
  if (Object.keys($data.total_rate).length > 0) {
    _push(`<div data-v-b0952021><div class="flex justify-between mt-4" data-v-b0952021><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021> Total Activities </h5><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021>${ssrInterpolate($data.total_rate.total_activities_amount === 0 ? "-" : `LKR ${$options.formatPrice($data.total_rate.total_activities_amount)}`)}</h5></div><div class="flex justify-between mt-4" data-v-b0952021><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021> Total Rooms </h5><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021>${ssrInterpolate($data.total_rate.total_rooms_amount === 0 ? "-" : `LKR ${$options.formatPrice($data.total_rate.total_rooms_amount)}`)}</h5></div><div class="flex justify-between mt-4" data-v-b0952021><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021> Total Meal Plan </h5><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021>${ssrInterpolate($data.total_rate.total_meal_plan_amount === 0 ? "-" : `LKR ${$options.formatPrice($data.total_rate.total_meal_plan_amount)}`)}</h5></div><div class="flex justify-between mt-4" data-v-b0952021><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021> Total Taxes </h5><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021>${ssrInterpolate($data.total_rate.total_tax_amount === 0 ? "-" : `LKR ${$options.formatPrice($data.total_rate.total_tax_amount)}`)}</h5></div><div class="flex justify-between mt-4" data-v-b0952021><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021> Total Discounts </h5><h5 class="lg:text-base text-sm font-medium text-red-400" data-v-b0952021>${ssrInterpolate($data.total_rate.total_discount_amount === 0 ? "-" : `- LKR ${$options.formatPrice($data.total_rate.total_discount_amount)}`)}</h5></div><hr class="h-px w-full bg-black-200 bg-opacity-30 border-none border-opacity-20 mt-4" data-v-b0952021><div class="flex justify-between mt-4" data-v-b0952021><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021> Total Room Rates </h5><h5 class="lg:text-base text-sm font-medium text-black-200" data-v-b0952021>${ssrInterpolate($data.total_rate.total_amount === 0 ? "-" : `LKR ${$options.formatPrice($data.total_rate.total_amount)}`)}</h5></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="flex flex-col w-full mt-8" data-v-b0952021></div><div class="flex flex-row space-x-4 items-baseline" data-v-b0952021><button class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-v-b0952021> Proceed As a Guest </button><span class="text-black-200 text-base font-bold" data-v-b0952021>OR</span><div data-v-b0952021><button type="button" class="mt-8 buttontext uppercase text-white bg-black-50 bg-opacity-50 hover:bg-black-50 hover:bg-opacity-50 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 px-8 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-b0952021>${ssrInterpolate(_ctx.isSignedIn ? "Sign Off" : "Sign In")}</button></div></div><div data-v-b0952021></div><div class="flex flex-col w-72 mt-16" data-v-b0952021><label class="text-xl font-bold mb-5" data-v-b0952021>Booking Notes</label><textarea placeholder="Comments..." class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021>${ssrInterpolate($data.booking_note)}</textarea></div><h2 class="text-black-100 md:text-4xl text-3xl text-center mt-20 mb-10" data-v-b0952021> Guest Info &amp; Payment </h2><div class="flex justify-center space-x-2" data-v-b0952021><h5 class="text-black-200 lg:text-lg text-sm font-medium" data-v-b0952021> Are you booking for someone else? </h5><div class="flex items-center me-4" data-v-b0952021><input id="inline-radio" type="radio" value="Yes" name="inline-radio-group" class="w-4 h-4 text-black-200 bg-white border-black-200 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"${ssrIncludeBooleanAttr(ssrLooseEqual($data.bookingForSomeoneElse, "Yes")) ? " checked" : ""} data-v-b0952021><label for="inline-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" data-v-b0952021>Yes</label></div><div class="flex items-center me-4" data-v-b0952021><input id="inline-2-radio" type="radio" value="No" name="inline-radio-group" class="w-4 h-4 text-black-200 bg-white border-black-200 focus:ring-0 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"${ssrIncludeBooleanAttr(ssrLooseEqual($data.bookingForSomeoneElse, "No")) ? " checked" : ""} data-v-b0952021><label for="inline-2-radio" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300" data-v-b0952021>No</label></div></div>`);
  if ($data.showYourInfo) {
    _push(`<div class="text-center mt-10" data-v-b0952021><h5 class="text-red-100 font-semibold text-2xl uppercase mt-8" data-v-b0952021> your info </h5><div class="grid gap-6 md:grid-cols-2 grid-cols-1" data-v-b0952021><div data-v-b0952021><label for="first_name" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>First name *</label><input type="text" id="first_name" class="bg-white border border-black-200 text-black-200 placeholder:text-black-200 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.guest_info.first_name)} data-v-b0952021></div><div data-v-b0952021><label for="last_name" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Last name *</label><input type="text" id="last_name" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.guest_info.last_name)} data-v-b0952021></div><div data-v-b0952021><label for="phone" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Phone *</label><input type="tel" id="phone" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.guest_info.telephone)} data-v-b0952021></div><div data-v-b0952021><label for="email" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>E-mail *</label><input type="email" id="email" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.guest_info.email)} data-v-b0952021></div><div data-v-b0952021><label for="nationality" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Nationality *</label><select id="nationality" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021><option value="" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.nationality) ? ssrLooseContain($data.form.guest_info.nationality, "") : ssrLooseEqual($data.form.guest_info.nationality, "")) ? " selected" : ""}>Select Nationality</option><!--[-->`);
    ssrRenderList($data.countries, (country) => {
      _push(`<option${ssrRenderAttr("value", country.name)} data-v-b0952021>${ssrInterpolate(country.name)}</option>`);
    });
    _push(`<!--]--></select></div><div data-v-b0952021><label for="address" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Address *</label><input type="text" id="address" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""${ssrRenderAttr("value", $data.form.guest_info.guest_address)} data-v-b0952021></div><div data-v-b0952021><label for="address" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Identification Type *</label><select class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021><option value="" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.identification_type) ? ssrLooseContain($data.form.guest_info.identification_type, "") : ssrLooseEqual($data.form.guest_info.identification_type, "")) ? " selected" : ""}>Select Identification Type</option><option value="passport" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.identification_type) ? ssrLooseContain($data.form.guest_info.identification_type, "passport") : ssrLooseEqual($data.form.guest_info.identification_type, "passport")) ? " selected" : ""}>Passport</option><option value="driver_license" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.identification_type) ? ssrLooseContain($data.form.guest_info.identification_type, "driver_license") : ssrLooseEqual($data.form.guest_info.identification_type, "driver_license")) ? " selected" : ""}>Driver&#39;s License</option><option value="id_card" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.identification_type) ? ssrLooseContain($data.form.guest_info.identification_type, "id_card") : ssrLooseEqual($data.form.guest_info.identification_type, "id_card")) ? " selected" : ""}>ID Card</option></select></div><div data-v-b0952021><label for="address" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Identification No *</label><input type="text"${ssrRenderAttr("value", $data.form.guest_info.identification_no)} class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021></div><div data-v-b0952021><label for="address" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Gender </label><select class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021><option value="" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.gender) ? ssrLooseContain($data.form.guest_info.gender, "") : ssrLooseEqual($data.form.guest_info.gender, "")) ? " selected" : ""}>Select Gender</option><option value="male" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.gender) ? ssrLooseContain($data.form.guest_info.gender, "male") : ssrLooseEqual($data.form.guest_info.gender, "male")) ? " selected" : ""}>Male</option><option value="female" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.gender) ? ssrLooseContain($data.form.guest_info.gender, "female") : ssrLooseEqual($data.form.guest_info.gender, "female")) ? " selected" : ""}>Female</option><option value="other" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.gender) ? ssrLooseContain($data.form.guest_info.gender, "other") : ssrLooseEqual($data.form.guest_info.gender, "other")) ? " selected" : ""}>Other</option></select></div><div class="flex flex-col" data-v-b0952021><label class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Date of Birth </label><input type="date"${ssrRenderAttr("value", $data.form.guest_info.dob)} placeholder="Date of Birth" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021></div><div class="flex flex-col" data-v-b0952021><label class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Identification Issue Date </label><input type="date"${ssrRenderAttr("value", $data.form.guest_info.identification_issue_date)} placeholder="Identification Issue Date" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if ($data.showGuestInfo) {
    _push(`<div class="text-center mt-10" data-v-b0952021><h5 class="text-red-100 font-semibold text-2xl uppercase mt-8" data-v-b0952021> guest info </h5><div class="grid gap-6 md:grid-cols-2 grid-cols-1" data-v-b0952021><div data-v-b0952021><label for="first_name" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>First name *</label><input type="text" id="first_name" class="bg-white border border-black-200 text-black-200 placeholder:text-black-200 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.guest_info.first_name)} data-v-b0952021></div><div data-v-b0952021><label for="last_name" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Last name *</label><input type="text" id="last_name" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.guest_info.last_name)} data-v-b0952021></div><div data-v-b0952021><label for="phone" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Phone *</label><input type="tel" id="phone" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.guest_info.telephone)} data-v-b0952021></div><div data-v-b0952021><label for="email" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>E-mail *</label><input type="email" id="email" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.guest_info.email)} data-v-b0952021></div><div data-v-b0952021><label for="nationality" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Nationality *</label><select id="nationality" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021><option value="" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.nationality) ? ssrLooseContain($data.form.guest_info.nationality, "") : ssrLooseEqual($data.form.guest_info.nationality, "")) ? " selected" : ""}>Select Nationality</option><!--[-->`);
    ssrRenderList($data.countries, (country) => {
      _push(`<option${ssrRenderAttr("value", country.name)} data-v-b0952021>${ssrInterpolate(country.name)}</option>`);
    });
    _push(`<!--]--></select></div><div data-v-b0952021><label for="address" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Address *</label><input type="text" id="address" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""${ssrRenderAttr("value", $data.form.guest_info.guest_address)} data-v-b0952021></div><div data-v-b0952021><label for="address" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Identification Type *</label><select class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021><option value="" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.identification_type) ? ssrLooseContain($data.form.guest_info.identification_type, "") : ssrLooseEqual($data.form.guest_info.identification_type, "")) ? " selected" : ""}>Select Identification Type</option><option value="passport" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.identification_type) ? ssrLooseContain($data.form.guest_info.identification_type, "passport") : ssrLooseEqual($data.form.guest_info.identification_type, "passport")) ? " selected" : ""}>Passport</option><option value="driver_license" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.identification_type) ? ssrLooseContain($data.form.guest_info.identification_type, "driver_license") : ssrLooseEqual($data.form.guest_info.identification_type, "driver_license")) ? " selected" : ""}>Driver&#39;s License</option><option value="id_card" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.identification_type) ? ssrLooseContain($data.form.guest_info.identification_type, "id_card") : ssrLooseEqual($data.form.guest_info.identification_type, "id_card")) ? " selected" : ""}>ID Card</option></select></div><div data-v-b0952021><label for="address" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Identification No *</label><input type="text"${ssrRenderAttr("value", $data.form.guest_info.identification_no)} class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021></div><div data-v-b0952021><label for="address" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Gender *</label><select class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021><option value="" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.gender) ? ssrLooseContain($data.form.guest_info.gender, "") : ssrLooseEqual($data.form.guest_info.gender, "")) ? " selected" : ""}>Select Gender</option><option value="male" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.gender) ? ssrLooseContain($data.form.guest_info.gender, "male") : ssrLooseEqual($data.form.guest_info.gender, "male")) ? " selected" : ""}>Male</option><option value="female" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.gender) ? ssrLooseContain($data.form.guest_info.gender, "female") : ssrLooseEqual($data.form.guest_info.gender, "female")) ? " selected" : ""}>Female</option><option value="other" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.guest_info.gender) ? ssrLooseContain($data.form.guest_info.gender, "other") : ssrLooseEqual($data.form.guest_info.gender, "other")) ? " selected" : ""}>Other</option></select></div><div class="flex flex-col" data-v-b0952021><label class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Date of Birth *</label><input type="date"${ssrRenderAttr("value", $data.form.guest_info.dob)} placeholder="Date of Birth" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021></div><div class="flex flex-col" data-v-b0952021><label class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Identification Issue Date *</label><input type="date"${ssrRenderAttr("value", $data.form.guest_info.identification_issue_date)} placeholder="Identification Issue Date" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021></div></div><h5 class="text-red-100 font-semibold text-2xl uppercase mt-8" data-v-b0952021> your info </h5><div class="grid gap-6 md:grid-cols-2 grid-cols-1" data-v-b0952021><div data-v-b0952021><label for="first_name" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>First name *</label><input type="text" id="first_name" class="bg-white border border-black-200 text-black-200 placeholder:text-black-200 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.first_name)} data-v-b0952021></div><div data-v-b0952021><label for="last_name" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Last name *</label><input type="text" id="last_name" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.last_name)} data-v-b0952021></div><div data-v-b0952021><label for="phone" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Phone *</label><input type="tel" id="phone" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.telephone)} data-v-b0952021></div><div data-v-b0952021><label for="email" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>E-mail *</label><input type="email" id="email" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required${ssrRenderAttr("value", $data.form.email)} data-v-b0952021></div><div data-v-b0952021><label for="nationality" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Nationality *</label><select id="nationality" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-b0952021><option value="" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.form.nationality) ? ssrLooseContain($data.form.nationality, "") : ssrLooseEqual($data.form.nationality, "")) ? " selected" : ""}>Select Nationality</option><!--[-->`);
    ssrRenderList($data.countries, (country) => {
      _push(`<option${ssrRenderAttr("value", country.name)} data-v-b0952021>${ssrInterpolate(country.name)}</option>`);
    });
    _push(`<!--]--></select></div><div data-v-b0952021><label for="address" class="block mb-2 lg:text-base text-sm font-semibold text-black-200 dark:text-white" data-v-b0952021>Address *</label><input type="text" id="address" class="bg-white border border-black-200 text-gray-900 lg:text-base text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""${ssrRenderAttr("value", $data.form.address)} data-v-b0952021></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<a href="/termsAndConditions" class="lg:text-lg text-base font-medium text-red-100 underline block mt-10" data-v-b0952021>View Our Terms &amp; Conditions</a><div class="flex items-center mt-4" data-v-b0952021><div class="flex items-center h-5" data-v-b0952021><input id="remember" type="checkbox" value="" class="w-4 h-4 border border-black-200 rounded bg-gray-50 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required data-v-b0952021></div><label for="remember" class="ms-2 lg:text-lg text-sm font-medium text-black-200 dark:text-gray-300" data-v-b0952021>I have read and I agree to the terms and conditions.</label></div>`);
  if (Object.keys($data.total_rate).length > 0) {
    _push(`<div class="text-xl font-bold" data-v-b0952021>`);
    if ($options.isRoomSelected) {
      _push(`<button class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-bold rounded-sm lg:text-base text-sm p-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"${ssrIncludeBooleanAttr($data.book_loading) ? " disabled" : ""} data-v-b0952021>`);
      if ($data.book_loading) {
        _push(`<span class="flex items-center justify-center" data-v-b0952021><svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-b0952021><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-b0952021></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 01-8 8z" data-v-b0952021></path></svg> Loading... </span>`);
      } else {
        _push(`<span data-v-b0952021> Proceed to Pay</span>`);
      }
      _push(`</button>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div style="${ssrRenderStyle($data.isModalVisible ? null : { display: "none" })}" class="fixed inset-0 bg-black-200 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center" id="modal_1" data-v-b0952021><div class="relative w-full max-w-2xl max-h-full" data-v-b0952021><div class="relative bg-white rounded-lg shadow dark:bg-gray-700 px-10 pt-5 pb-14" data-v-b0952021><div class="flex items-center justify-between border-none rounded-t dark:border-gray-600" data-v-b0952021><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal" data-v-b0952021><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-b0952021><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-b0952021></path></svg><span class="sr-only" data-v-b0952021>Close modal</span></button></div><div class="" data-v-b0952021><h2 class="text-3xl mb-4 text-center" data-v-b0952021>Get Started!</h2><form action="#" class="space-y-6 mt-4" data-v-b0952021><div class="grid md:grid-cols-2 grid-cols-1 gap-5" data-v-b0952021><input type="text"${ssrRenderAttr("value", $data.registerUser.name)} placeholder="Name" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021><input type="text"${ssrRenderAttr("value", $data.registerUser.lname)} placeholder="Last Name" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021></div><div class="" data-v-b0952021><input type="text"${ssrRenderAttr("value", $data.registerUser.email)} placeholder="you@email.com" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md" data-v-b0952021></div><div class="relative" data-v-b0952021><input${ssrRenderAttr("type", $data.showPassword ? "text" : "password")}${ssrRenderDynamicModel($data.showPassword ? "text" : "password", $data.registerUser.password, null)} placeholder="Password" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md pr-10" data-v-b0952021><button class="absolute inset-y-0 right-0 flex items-center pr-3" data-v-b0952021>`);
  if ($data.showPassword) {
    _push(`<span data-v-b0952021>\u{1F513}</span>`);
  } else {
    _push(`<span data-v-b0952021>\u{1F512}</span>`);
  }
  _push(`</button></div><div class="grid md:grid-cols-2 grid-cols-1 gap-5 mt-5" data-v-b0952021><input type="text"${ssrRenderAttr("value", $data.guestDetails.telephone)} placeholder="Telephone" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021><input type="text"${ssrRenderAttr("value", $data.guestDetails.address)} placeholder="Address" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021><select class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021><option value="" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.guestDetails.nationality) ? ssrLooseContain($data.guestDetails.nationality, "") : ssrLooseEqual($data.guestDetails.nationality, "")) ? " selected" : ""}>Select Nationality</option><!--[-->`);
  ssrRenderList($data.countries, (country) => {
    _push(`<option${ssrRenderAttr("value", country.name)} data-v-b0952021>${ssrInterpolate(country.name)}</option>`);
  });
  _push(`<!--]--></select><select class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021><option value="" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.guestDetails.identification_type) ? ssrLooseContain($data.guestDetails.identification_type, "") : ssrLooseEqual($data.guestDetails.identification_type, "")) ? " selected" : ""}>Select Identification Type</option><option value="passport" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.guestDetails.identification_type) ? ssrLooseContain($data.guestDetails.identification_type, "passport") : ssrLooseEqual($data.guestDetails.identification_type, "passport")) ? " selected" : ""}>Passport</option><option value="driver_license" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.guestDetails.identification_type) ? ssrLooseContain($data.guestDetails.identification_type, "driver_license") : ssrLooseEqual($data.guestDetails.identification_type, "driver_license")) ? " selected" : ""}>Driver&#39;s License</option><option value="id_card" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.guestDetails.identification_type) ? ssrLooseContain($data.guestDetails.identification_type, "id_card") : ssrLooseEqual($data.guestDetails.identification_type, "id_card")) ? " selected" : ""}>ID Card</option></select><input type="text"${ssrRenderAttr("value", $data.guestDetails.identification_no)} placeholder="Identification No" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021><select class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021><option value="" disabled data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.guestDetails.gender) ? ssrLooseContain($data.guestDetails.gender, "") : ssrLooseEqual($data.guestDetails.gender, "")) ? " selected" : ""}>Select Gender</option><option value="male" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.guestDetails.gender) ? ssrLooseContain($data.guestDetails.gender, "male") : ssrLooseEqual($data.guestDetails.gender, "male")) ? " selected" : ""}>Male</option><option value="female" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.guestDetails.gender) ? ssrLooseContain($data.guestDetails.gender, "female") : ssrLooseEqual($data.guestDetails.gender, "female")) ? " selected" : ""}>Female</option><option value="other" data-v-b0952021${ssrIncludeBooleanAttr(Array.isArray($data.guestDetails.gender) ? ssrLooseContain($data.guestDetails.gender, "other") : ssrLooseEqual($data.guestDetails.gender, "other")) ? " selected" : ""}>Other</option></select><div class="flex flex-col" data-v-b0952021><label data-v-b0952021>Date of Birth</label><input type="date"${ssrRenderAttr("value", $data.guestDetails.dob)} placeholder="Date of Birth" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021></div><div class="flex flex-col" data-v-b0952021><label data-v-b0952021>Identification Issue Date</label><input type="date"${ssrRenderAttr("value", $data.guestDetails.identification_issue_date)} placeholder="Identification Issue Date" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 rounded-md" data-v-b0952021></div></div><div class="flex items-start mt-5" data-v-b0952021><div class="flex items-center h-5" data-v-b0952021><input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded-none bg-white focus:ring-3 focus:ring-blue-300" required data-v-b0952021></div><label for="remember" class="ms-2 text-sm font-medium text-gray-900" data-v-b0952021> I Agree To The <a href="/termsAndConditions" class="font-semibold underline underline-offset-4" data-v-b0952021> Terms &amp; Conditions </a> And <a href="/privacyPolicy" class="font-semibold underline underline-offset-4" data-v-b0952021> Privacy Policy </a></label></div><div class="mt-5" data-v-b0952021><button type="submit" class="w-full bg-red-100 py-3 text-center text-white rounded-md block text-decoration-none" data-v-b0952021> REGISTER </button></div><div class="flex flex-row items-center text-md space-x-1 mt-5" data-v-b0952021><p data-v-b0952021>Already have an account?</p><button id="toggle-modal-button" class="block text-red-100 font-medium text-md text-center" type="button" data-v-b0952021> Login Here </button></div></form></div></div></div></div><div style="${ssrRenderStyle($data.isModal2Visible ? null : { display: "none" })}" class="fixed inset-0 bg-black-200 bg-opacity-50 overflow-y-auto h-full w-full z-50 flex items-center justify-center" id="modal_2" data-v-b0952021><div class="relative p-4 w-full max-w-2xl max-h-full" data-v-b0952021><div class="relative p-6 bg-white rounded-lg shadow dark:bg-gray-700" data-v-b0952021><div class="flex items-center justify-between border-none rounded-t dark:border-gray-600" data-v-b0952021><button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" data-v-b0952021><svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-b0952021><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" data-v-b0952021></path></svg><span class="sr-only" data-v-b0952021>Close modal</span></button></div><div class="" data-v-b0952021><h2 class="text-3xl mb-4 text-center" data-v-b0952021>Login Into Your Account!</h2><form class="space-y-6 mt-4" data-v-b0952021><div data-v-b0952021><input${ssrRenderAttr("value", $data.loginUser.email)} type="text" placeholder="you@email.com" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md" data-v-b0952021>`);
  if ($data.errors.email) {
    _push(`<p class="error" data-v-b0952021>${ssrInterpolate($data.errors.email[0])}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="relative" data-v-b0952021><input${ssrRenderAttr("type", $data.showPassword ? "text" : "password")}${ssrRenderDynamicModel($data.showPassword ? "text" : "password", $data.loginUser.password, null)} placeholder="Password" class="text-black-200 placeholder:text-black-200 placeholder:text-opacity-60 placeholder:text-sm border border-gray-400 py-3 px-2 w-full rounded-md pr-10" data-v-b0952021>`);
  if ($data.errors.password) {
    _push(`<p class="error" data-v-b0952021>${ssrInterpolate($data.errors.password[0])}</p>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<button class="absolute inset-y-0 right-0 flex items-center pr-3" data-v-b0952021>`);
  if ($data.showPassword) {
    _push(`<span data-v-b0952021>\u{1F513}</span>`);
  } else {
    _push(`<span data-v-b0952021>\u{1F512}</span>`);
  }
  _push(`</button></div><div class="mt-5" data-v-b0952021><div class="text" data-v-b0952021></div><button type="submit" class="w-full bg-red-100 py-3 text-center text-white rounded-md block" data-v-b0952021> Log In </button></div><div class="flex flex-row items-center text-md space-x-1" data-v-b0952021><p data-v-b0952021>Don&#39;t have an account?</p><button id="toggle-modal-button" class="block text-red-100 font-medium text-md text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-v-b0952021> Register Here </button></div></form></div></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/bookingBody.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const bookingBody = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-b0952021"]]);
const _sfc_main = {
  __name: "booking",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbar, {
        pageTitle: "CHECKOUT",
        pageTitleThree: "GET IN TOUCH",
        imageNav: "/img/footerImg.webp"
      }, null, _parent));
      _push(ssrRenderComponent(bookingBody, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/booking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=booking-BhHZ13PB.mjs.map
