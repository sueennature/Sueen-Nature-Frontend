import { ref, mergeProps, useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderList, ssrLooseContain, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_0$1, f as footerHome } from "./footerHome-Dokp2Hbb.js";
import { _ as _export_sfc, a as useRuntimeConfig } from "../server.mjs";
import "flowbite";
import axios from "axios";
import { toast } from "vue3-toastify";
/* empty css               */
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./nuxt-link-CBXZo5aS.js";
import "ufo";
import "./logoImg-CDYFSHEn.js";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "defu";
import "klona";
import "devalue";
import "destr";
import "cookie-es";
import "ohash";
import "jwt-decode";
const _sfc_main$3 = {
  __name: "navbarDashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const isMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "bg-black-200 z-40 dark:bg-gray-900 fixed w-full border-none dark:border-gray-600 md:px-20 px-0" }, _attrs))} data-v-70438a99><div class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4" data-v-70438a99><a href="/" class="flex items-center space-x-3 rtl:space-x-reverse" data-v-70438a99><img${ssrRenderAttr("src", _imports_0$1)} alt="logoImg" class="w-auto h-8 md:h-10" data-v-70438a99></a><div class="lg:hidden flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse" data-v-70438a99><button style="${ssrRenderStyle(!isMenuOpen.value ? null : { display: "none" })}" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" data-v-70438a99><span class="sr-only" data-v-70438a99>Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-v-70438a99><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-v-70438a99></path></svg></button><button style="${ssrRenderStyle(isMenuOpen.value ? null : { display: "none" })}" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="true" data-v-70438a99><span class="sr-only" data-v-70438a99>Close menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-70438a99><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1L1 13M1 1l12 12" data-v-70438a99></path></svg></button></div><div class="${ssrRenderClass([{ hidden: !isMenuOpen.value, flex: isMenuOpen.value }, "lg:hidden items-center justify-between w-full lg:w-auto lg:order-1"])}" id="navbar-cta" data-v-70438a99><ul class="flex flex-col font-medium w-full p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-transparent lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700" data-v-70438a99><li data-v-70438a99><a href="/" class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 hover:bg-slate-500 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase" data-v-70438a99>Home</a></li><li data-v-70438a99><a href="/about" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>About</a></li><li data-v-70438a99><a href="/additionalActivites" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>Acitivities</a></li><li data-v-70438a99><a href="/services" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>Services</a></li><li data-v-70438a99><a href="/rooms" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>Rooms</a></li><li data-v-70438a99><a href="/gallery" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>Gallery</a></li><li data-v-70438a99><a href="/news" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>News</a></li><li data-v-70438a99><a href="/contact" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-slate-500 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>Contact</a></li></ul></div><div class="hidden lg:flex lg:flex-row lg:gap-4" data-v-70438a99><div class="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse" data-v-70438a99><button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" data-v-70438a99><span class="sr-only" data-v-70438a99>Open main menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-v-70438a99><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-v-70438a99></path></svg></button><button style="${ssrRenderStyle(isMenuOpen.value ? null : { display: "none" })}" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="true" data-v-70438a99><span class="sr-only" data-v-70438a99>Close menu</span><svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" data-v-70438a99><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1L1 13M1 1l12 12" data-v-70438a99></path></svg></button></div><div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar-cta" data-v-70438a99><ul class="flex flex-col font-medium p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700" data-v-70438a99><li data-v-70438a99><a href="/" class="block py-2 px-3 lg:p-0 text-white lg:hover:text-orange-300 bg-blue-700 rounded lg:bg-transparent lg:text-white lg:dark:text-blue-500 uppercase" data-v-70438a99>Home</a></li><li data-v-70438a99><a href="/about" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>About</a></li><li data-v-70438a99><a href="/additionalActivites" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>Activities</a></li><li data-v-70438a99><a href="/services" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>Services</a></li><li data-v-70438a99><a href="/rooms" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>Rooms</a></li><li data-v-70438a99><a href="/gallery" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>Gallery</a></li><li data-v-70438a99><a href="/news" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>News</a></li><li data-v-70438a99><a href="/contact" class="block py-2 px-3 lg:p-0 text-white rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-orange-300 lg:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700 uppercase" data-v-70438a99>Contact</a></li></ul></div></div></div></nav>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/navbarDashboard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const navbarDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-70438a99"]]);
const _sfc_main$2 = {
  data() {
    return {
      filteredBookingHistory: [],
      selectedRows: [],
      originalBookingHistory: [],
      // Store the original data here
      selectedRowIndices: [],
      selectedDate: null
    };
  },
  computed: {
    allSelected() {
      return this.selectedRowIndices.length === this.filteredBookingHistory.length;
    }
  },
  mounted() {
    this.getBookingHistory();
  },
  methods: {
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
      const day = date.getDate();
      const daySuffix = this.getDaySuffix(day);
      return `${months[date.getMonth()]} ${day}${daySuffix} ${date.getFullYear()}`;
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
    async getBookingHistory() {
      const runtimeConfig = useRuntimeConfig();
      const guest_id = this.$route.query.guest_id;
      if (this.editModeFirstName || this.editModeLastName || this.editModeEmail || this.editModePhoneNumber || this.editModeAddress) {
        toast.error("Please save your changes");
        return;
      }
      const body = {
        guest_id
      };
      const cookies = (void 0).cookie.split(";");
      const authTokenCookie = cookies.find((cookie) => cookie.trim().startsWith("auth_token="));
      if (!authTokenCookie) {
        console.error("Auth Token not found in cookies.");
        return;
      }
      const authToken = authTokenCookie.split("=")[1];
      console.log("TOKEN", authToken);
      const headers = {
        "Authorization": `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID
        // Ensure this key is valid
      };
      try {
        const response = await axios.post(`https://api.sueennature.com/bookings/guest/history`, body, { headers });
        this.originalBookingHistory = response.data;
        console.log("History", response.data);
        this.filteredBookingHistory = [...this.originalBookingHistory];
        toast.success("Retrived Successfully");
      } catch (error) {
        console.error("Error updating profile:", error);
        this.setupToastError("An error occurred. Please try again later.");
      }
    },
    dateChanged() {
      if (this.selectedDate) {
        const selectedDate = new Date(this.selectedDate);
        selectedDate.setHours(0, 0, 0, 0);
        this.filteredBookingHistory = this.originalBookingHistory.filter((booking) => {
          const checkInDate = new Date(booking.check_in);
          checkInDate.setHours(0, 0, 0, 0);
          return checkInDate.getTime() === selectedDate.getTime();
        });
      } else {
        this.filteredBookingHistory = [...this.originalBookingHistory];
      }
    },
    clearDate() {
      this.selectedDate = null;
    },
    selectAll(event) {
      this.selectedRowIndices = event.target.checked ? this.filteredBookingHistory.map((_, index) => index) : [];
      this.updateSelectedRows();
    },
    updateSelectedRows() {
      this.selectedRows = this.selectedRowIndices.map((index) => this.filteredBookingHistory[index]);
    },
    async generateReport() {
      const formatDate = (dateString) => {
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
        const day = date.getDate();
        const daySuffix = this.getDaySuffix(day);
        return `${months[date.getMonth()]} ${day}${daySuffix} ${date.getFullYear()}`;
      };
      try {
        const doc = new jsPDF("p", "pt", "a4");
        doc.setFontSize(18);
        doc.text("Booking History Report", 40, 40);
        const tableData = this.filteredBookingHistory.map((booking) => {
          var _a, _b, _c;
          return {
            RoomNo: (_a = booking == null ? void 0 : booking.rooms[0]) == null ? void 0 : _a.room_number,
            Check_IN: formatDate(booking == null ? void 0 : booking.check_in),
            Check_Out: formatDate(booking == null ? void 0 : booking.check_out),
            Category: (_b = booking == null ? void 0 : booking.rooms[0]) == null ? void 0 : _b.category,
            View: (_c = booking == null ? void 0 : booking.rooms[0]) == null ? void 0 : _c.view
          };
        });
        doc.autoTable({
          head: [
            ["Room Number", "Check In", "Check Out", "Category", "View"]
          ],
          body: tableData.map((row) => [row.RoomNo, row.Check_IN, row.Check_Out, row.Category, row.View]),
          startY: 70,
          margin: { top: 80 },
          didDrawPage: function(data) {
            doc.setFontSize(18);
            doc.setTextColor(40);
            doc.text("Booking History Report", 40, 40);
          },
          styles: {
            head: {
              fillColor: [173, 216, 230],
              textColor: [173, 216, 230]
            },
            body: {
              textColor: [0, 0, 0]
              // Black text color for body rows
            }
          }
        });
        doc.save("booking-history.pdf");
      } catch (error) {
        console.error("Error generating PDF:", error);
        toast.error("Error generating PDF");
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full p-4 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-8 shadow-lg shadow-gray-300" }, _attrs))} data-v-055d10a0><div class="flex flex-col sm:flex-row justify-between items-center mb-8" data-v-055d10a0><h2 class="text-3xl uppercase font-medium text-gray-900 dark:text-white mb-4 sm:mb-0" data-v-055d10a0>Booking History</h2><div class="flex space-x-2" data-v-055d10a0><input type="date"${ssrRenderAttr("value", $data.selectedDate)} class="text-orange-200 bg-orange-50 hover:bg-orange-50 font-medium rounded-lg text-sm border-none focus:ring-0" data-v-055d10a0></div></div><div data-v-055d10a0><div class="overflow-x-auto" data-v-055d10a0><table class="min-w-full" id="bookingTable" data-v-055d10a0><thead data-v-055d10a0><tr data-v-055d10a0><th data-v-055d10a0><input type="checkbox"${ssrIncludeBooleanAttr($options.allSelected) ? " checked" : ""} class="black-checkbox checkbox" data-v-055d10a0></th><th data-v-055d10a0>Booking Id</th><th data-v-055d10a0>Room No</th><th data-v-055d10a0>Check In</th><th data-v-055d10a0>Check Out</th><th data-v-055d10a0>View</th><th data-v-055d10a0>Room Category</th></tr></thead><tbody class="bg-white divide-y divide-gray-200" data-v-055d10a0><!--[-->`);
  ssrRenderList($data.filteredBookingHistory, (booking, index) => {
    var _a, _b, _c;
    _push(`<tr data-v-055d10a0><td data-v-055d10a0><input type="checkbox"${ssrRenderAttr("value", index)}${ssrIncludeBooleanAttr(Array.isArray($data.selectedRowIndices) ? ssrLooseContain($data.selectedRowIndices, index) : $data.selectedRowIndices) ? " checked" : ""} class="black-checkbox checkbox" data-v-055d10a0></td><td data-v-055d10a0>${ssrInterpolate(booking == null ? void 0 : booking.id)}</td><td data-v-055d10a0>${ssrInterpolate((_a = booking == null ? void 0 : booking.rooms[0]) == null ? void 0 : _a.room_number)}</td><td data-v-055d10a0>${ssrInterpolate($options.formatDate(booking == null ? void 0 : booking.check_in))}</td><td data-v-055d10a0>${ssrInterpolate($options.formatDate(booking == null ? void 0 : booking.check_out))}</td><td data-v-055d10a0>${ssrInterpolate((_b = booking == null ? void 0 : booking.rooms[0]) == null ? void 0 : _b.view)}</td><td data-v-055d10a0>${ssrInterpolate((_c = booking == null ? void 0 : booking.rooms[0]) == null ? void 0 : _c.category)}</td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BookingHistoryTable.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SelectableTable = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-055d10a0"]]);
const _imports_0 = "" + __buildAssetsURL("Sueen_User_Profile.BUFt4QZm.png");
const _sfc_main$1 = {
  components: {
    SelectableTable
  },
  mounted() {
    this.getBookingHistory();
    const runtimeConfig = useRuntimeConfig();
    const guest_id = this.$route.query.guest_id;
    const cookies = (void 0).cookie.split(";");
    const authTokenCookie = cookies.find(
      (cookie) => cookie.trim().startsWith("auth_token=")
    );
    if (authTokenCookie) {
      const authToken = authTokenCookie.split("=")[1];
      console.log("Auth Token:", authToken);
      const headers = {
        Authorization: `Bearer ${authToken.replace(/%7C/g, "|")}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID
        // Ensure this key is valid
      };
      console.log("Headers", headers);
      axios.get(`https://api.sueennature.com/guests/guest/${guest_id}`, {
        headers
      }).then((response) => {
        console.log("RES", response.data);
        this.firstName = response.data.first_name;
        this.lastName = response.data.last_name;
        this.email = response.data.email;
        if (response.data.telephone === null) {
          this.phoneNumber = "Not Available";
        } else {
          this.phoneNumber = response.data.telephone;
        }
        if (response.data.address === null) {
          this.address = "Not Available";
        } else {
          this.address = response.data.address;
        }
      }).catch((error) => console.error("Error:", error));
    } else {
      console.log("Auth Token not found in cookies.");
      toast.error("Please login again through booking page");
      setTimeout(() => {
        this.$router.push({
          path: "/"
        });
      }, 1500);
    }
    if (authTokenCookie) {
      const authToken = authTokenCookie.split("=")[1];
      console.log("Auth Token:", authToken);
      const headers = {
        Authorization: `Bearer ${authToken.replace(/%7C/g, "|")}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID
        // Ensure this key is valid
      };
      console.log("Headers", headers);
      axios.get("https://admin.sueennature.com/api/user/current-booking", {
        headers
      }).then((response) => {
        console.log("Booking", response.data.currentBooking);
        this.apiRespone = response.data.currentBooking;
        this.refID = response.data.currentBooking.reqid;
        this.checkIN = response.data.currentBooking.check_in;
        this.checkOut = response.data.currentBooking.check_out;
        this.roomCapacity = response.data.currentBooking;
        this.roomType = response.data.RoomType[0];
      }).catch((error) => console.error("Error:", error));
    } else {
      console.log("Auth Token not found in cookies.");
    }
    if (authTokenCookie) {
      const authToken = authTokenCookie.split("=")[1];
      console.log("Auth Token:", authToken);
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID
        // Ensure this key is valid
      };
      console.log("Headers", headers);
      axios.get("https://admin.sueennature.com/api/user/history-booking", {
        headers
      }).then((response) => {
        console.log("BookingList", response.data.bookingHistory);
      }).catch((error) => console.error("Error:", error));
    } else {
      console.log("Auth Token not found in cookies.");
      toast.error("Please login again through booking page");
      setTimeout(() => {
        this.$router.push({
          path: "/"
        });
      }, 1500);
    }
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      emailFromParams: "",
      address: "",
      editModeFirstName: false,
      editModeLastName: false,
      editModePhoneNumber: false,
      editModeEmail: false,
      latestBookingHistory: "",
      editModeAddress: false,
      checkIN: "",
      checkOut: "",
      refID: "",
      roomCapacity: "",
      roomType: "",
      apiRespone: [],
      roomType: []
    };
  },
  computed: {
    totalPeople() {
      return this.roomCapacity.adults + this.roomCapacity.child;
    },
    formattedCheckIN() {
      return this.formatDate(this.checkIN);
    },
    formattedCheckOut() {
      return this.formatDate(this.checkOut);
    }
  },
  methods: {
    logout() {
      this.$auth.setAuthToken(null);
      localStorage.removeItem("userEmail");
      localStorage.removeItem("guest_id");
      this.$router.push("/home");
    },
    getChildCapacity(childString) {
      return parseInt(childString.replace(/[\[\]]/g, ""));
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
    async updateUserProfile() {
      const runtimeConfig = useRuntimeConfig();
      const guest_id = this.$route.query.guest_id;
      if (this.editModeFirstName || this.editModeLastName || this.editModeEmail || this.editModePhoneNumber || this.editModeAddress) {
        toast.error("Please save your changes");
        return;
      }
      const body = {
        name: this.firstName,
        lname: this.lastName,
        phone: this.phoneNumber,
        email: this.email,
        address: this.address
      };
      const cookies = (void 0).cookie.split(";");
      const authTokenCookie = cookies.find(
        (cookie) => cookie.trim().startsWith("auth_token=")
      );
      if (!authTokenCookie) {
        console.error("Auth Token not found in cookies.");
        return;
      }
      const authToken = authTokenCookie.split("=")[1];
      console.log("TOKEN", authToken);
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID
        // Ensure this key is valid
      };
      try {
        const response = await axios.put(
          `https://api.sueennature.com/guests/${guest_id}`,
          body,
          { headers }
        );
        console.log("Update successful:", response.data);
        toast.success("User Updated Successfully");
      } catch (error) {
        console.error("Error updating profile:", error);
        this.setupToastError("An error occurred. Please try again later.");
      }
    },
    async getBookingHistory() {
      const runtimeConfig = useRuntimeConfig();
      const guest_id = this.$route.query.guest_id;
      if (this.editModeFirstName || this.editModeLastName || this.editModeEmail || this.editModePhoneNumber || this.editModeAddress) {
        toast.error("Please save your changes");
        return;
      }
      const body = {
        guest_id
      };
      const cookies = (void 0).cookie.split(";");
      const authTokenCookie = cookies.find(
        (cookie) => cookie.trim().startsWith("auth_token=")
      );
      if (!authTokenCookie) {
        console.error("Auth Token not found in cookies.");
        return;
      }
      const authToken = authTokenCookie.split("=")[1];
      console.log("TOKEN", authToken);
      const headers = {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json",
        "x-api-key": runtimeConfig.public.DATABASE_ID
        // Ensure this key is valid
      };
      try {
        const response = await axios.post(
          `https://api.sueennature.com/bookings/guest/history`,
          body,
          { headers }
        );
        this.originalBookingHistory = response.data;
        if (this.originalBookingHistory && this.originalBookingHistory.length > 0) {
          const latestBooking = this.originalBookingHistory[this.originalBookingHistory.length - 1];
          this.latestBookingHistory = latestBooking;
          console.log(this.latestBooking);
        }
        toast.success("Retrived Successfully");
      } catch (error) {
        console.error("Error updating profile:", error);
        this.setupToastError("An error occurred. Please try again later.");
      }
    },
    toggleEditFirstName() {
      this.editModeFirstName = !this.editModeFirstName;
    },
    toggleEditLastName() {
      this.editModeLastName = !this.editModeLastName;
    },
    toggleEditPhoneNumber() {
      this.editModePhoneNumber = !this.editModePhoneNumber;
    },
    toggleEditEmail() {
      this.editModeEmail = !this.editModeEmail;
    },
    toggleEditAddress() {
      this.editModeAddress = !this.editModeAddress;
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const _component_SelectableTable = resolveComponent("SelectableTable");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "sm:container px-4 py-20" }, _attrs))} data-v-60f19322><h2 class="uppercase text-black-100 md:text-4xl text-3xl text-left mt-8" data-v-60f19322> Dashboard </h2><div class="grid xl:grid-cols-3 grid-cols-1 gap-8" data-v-60f19322><div class="w-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-4 mt-8 shadow-lg shadow-gray-300" data-v-60f19322><div class="flex flex-col items-center pb-10" data-v-60f19322><img class="w-44 h-44 mb-3 rounded-full shadow-lg"${ssrRenderAttr("src", _imports_0)} alt="user image" data-v-60f19322><h4 class="mt-4 text-2xl whitespace-nowrap font-light text-blue-100 dark:text-white" data-v-60f19322> User ID #0123456789012 </h4><h3 class="mt-4 text-3xl whitespace-nowrap font-bold text-black-200 dark:text-white" data-v-60f19322>${ssrInterpolate($data.firstName)}</h3><div class="flex flex-col mt-10 space-y-4" data-v-60f19322><div class="flex items-center space-x-8" data-v-60f19322><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 32 32" data-v-60f19322><path fill="currentColor" d="M8.656 3c-.523 0-1.039.188-1.469.531l-.062.031l-.031.032l-3.125 3.219l.031.03a3.134 3.134 0 0 0-.844 3.376c.004.008-.004.023 0 .031c.848 2.426 3.016 7.11 7.25 11.344c4.25 4.25 8.996 6.332 11.344 7.25h.031a3.59 3.59 0 0 0 3.469-.688L28.406 25c.828-.828.828-2.266 0-3.094l-4.062-4.062l-.032-.063c-.828-.828-2.296-.828-3.125 0l-2 2a16.176 16.176 0 0 1-4.093-2.812c-1.637-1.563-2.473-3.36-2.781-4.063l2-2c.84-.84.855-2.238-.032-3.062l.031-.032l-.093-.093l-4-4.125l-.031-.031l-.063-.032A2.356 2.356 0 0 0 8.656 3m0 2a.35.35 0 0 1 .219.094l4 4.093l.094.094c-.008-.008.058.098-.063.219l-2.5 2.5l-.469.438l.22.624s1.148 3.075 3.562 5.376l.219.187C16.261 20.746 19 21.906 19 21.906l.625.282l2.969-2.97c.172-.171.14-.171.312 0L27 23.314c.172.171.172.109 0 .28l-3.063 3.063c-.46.395-.949.477-1.53.282c-2.266-.891-6.669-2.825-10.595-6.75c-3.957-3.958-6.023-8.446-6.78-10.625c-.153-.407-.044-1.008.312-1.313l.062-.063l3.032-3.093A.35.35 0 0 1 8.655 5z" data-v-60f19322></path></svg><h4 class="text-xl font-bold text-black-200" data-v-60f19322>${ssrInterpolate($data.phoneNumber)}</h4></div><div class="flex items-center space-x-8" data-v-60f19322><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16" data-v-60f19322><path fill="currentColor" d="M15 2.5H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1.3 1.25L8.42 8.56a.62.62 0 0 1-.84 0L2.3 3.75zm-12.45 8.5V4.48l5.49 5a1.86 1.86 0 0 0 2.52 0l5.49-5v7.77z" data-v-60f19322></path></svg><h4 class="text-xl font-bold text-black-200" data-v-60f19322>${ssrInterpolate($data.email)}</h4></div><button class="buttontext bg-red-100 text-sm text-white lg:ml-2 lg:p-4 p-2 rounded" data-v-60f19322> Log out </button></div></div></div><div class="mt-8 w-full xl:col-span-2 col-span-1 p-4 bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 shadow-lg shadow-gray-300" data-v-60f19322><div class="space-y-6" data-v-60f19322><h2 class="text-3xl uppercase font-medium text-gray-900 dark:text-white" data-v-60f19322> Personal Info </h2><div class="grid gap-6 mb-6 md:grid-cols-2" data-v-60f19322><div data-v-60f19322><div class="flex items-baseline space-x-2" data-v-60f19322><label for="first_name" class="block mb-2 text-2xl font-bold text-black-200 dark:text-white" data-v-60f19322>First name</label><button class="${ssrRenderClass([{
    "text-red-500 hover:text-red-600": $data.editModeFirstName
  }, "text-blue-200 text-sm hover:text-blue-500"])}" data-v-60f19322>${ssrInterpolate(!$data.editModeFirstName ? "Edit" : "Save")}</button></div><input type="text" id="first_name" class="bg-white border border-black-200 text-black-200 focus:ring-blue-500 focus:border-blue-500 placeholder:text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${ssrRenderAttr("value", $data.firstName)}${ssrIncludeBooleanAttr(!$data.editModeFirstName) ? " readonly" : ""} data-v-60f19322></div><div data-v-60f19322><div class="flex items-baseline space-x-2" data-v-60f19322><label for="last_name" class="block mb-2 text-2xl font-bold text-black-200 dark:text-white" data-v-60f19322>Last name</label><button class="${ssrRenderClass([{
    "text-red-500 hover:text-red-600": $data.editModeLastName
  }, "text-blue-200 text-sm hover:text-blue-500"])}" data-v-60f19322>${ssrInterpolate(!$data.editModeLastName ? "Edit" : "Save")}</button></div><input type="text" id="last_name" class="bg-white border border-black-200 text-black-200 placeholder:text-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${ssrRenderAttr("value", $data.lastName)}${ssrIncludeBooleanAttr(!$data.editModeLastName) ? " readonly" : ""} data-v-60f19322></div></div><div class="mb-6" data-v-60f19322><div class="flex items-baseline space-x-2" data-v-60f19322><label for="phone" class="block mb-2 text-2xl font-bold text-black-200 dark:text-white" data-v-60f19322>Phone Number</label><button class="${ssrRenderClass([{
    "text-red-500 hover:text-red-600": $data.editModePhoneNumber
  }, "text-blue-200 text-sm hover:text-blue-500"])}" data-v-60f19322>${ssrInterpolate(!$data.editModePhoneNumber ? "Edit" : "Save")}</button></div><input type="tel" id="phone" class="bg-white border border-black-200 text-black-200 placeholder:text-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${ssrRenderAttr("value", $data.phoneNumber)}${ssrIncludeBooleanAttr(!$data.editModePhoneNumber) ? " readonly" : ""} data-v-60f19322></div><div class="mb-6" data-v-60f19322><div class="flex items-baseline space-x-2" data-v-60f19322><label for="email" class="block mb-2 text-2xl font-bold text-black-200 dark:text-white" data-v-60f19322>Email</label><button class="${ssrRenderClass([{ "text-red-500 hover:text-red-600": $data.editModeEmail }, "text-blue-200 text-sm hover:text-blue-500"])}" data-v-60f19322>${ssrInterpolate(!$data.editModeEmail ? "Edit" : "Save")}</button></div><input type="email" id="email" class="bg-white border border-black-200 text-black-200 placeholder:text-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"${ssrRenderAttr("value", $data.email)} required${ssrIncludeBooleanAttr(!$data.editModeEmail) ? " readonly" : ""} data-v-60f19322></div><div class="flex items-baseline space-x-2" data-v-60f19322><label for="address" class="block mb-2 text-2xl font-bold text-black-200 dark:text-white" data-v-60f19322>Address</label><button class="${ssrRenderClass([{ "text-red-500 hover:text-red-600": $data.editModeAddress }, "text-blue-200 text-sm hover:text-blue-500"])}" data-v-60f19322>${ssrInterpolate(!$data.editModeAddress ? "Edit" : "Save")}</button></div><textarea id="address" rows="4" class="block p-2.5 w-full text-sm bg-white border border-black-200 text-black-200 placeholder:text-black-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required${ssrIncludeBooleanAttr(!$data.editModeAddress) ? " readonly" : ""} data-v-60f19322>${ssrInterpolate($data.address)}</textarea><div data-v-60f19322><button class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" data-v-60f19322> Update </button></div></div></div></div>`);
  if ($data.latestBookingHistory) {
    _push(`<div class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-8 shadow-lg shadow-gray-300" data-v-60f19322><div class="" data-v-60f19322><div class="flex flex-col items-start" data-v-60f19322><h2 class="text-3xl uppercase font-medium text-gray-900 dark:text-white whitespace-nowrap" data-v-60f19322> Current booking </h2></div><div class="mt-6 xl:mt-0" data-v-60f19322><div class="flex flex-col justify-start gap-6" data-v-60f19322><div class="flex flex-row items-center space-x-3 mt-8" data-v-60f19322><div class="flex bg-orange-100 rounded-full w-12 h-12 items-center justify-center" data-v-60f19322><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" transform="rotate(-45)" data-v-60f19322><path fill="#ffffff" d="M8.95 8.6a6.554 6.554 0 0 1 6.55-6.55c3.596 0 6.55 2.819 6.55 6.45a6.554 6.554 0 0 1-6.55 6.55a6.243 6.243 0 0 1-1.552-.204A1.25 1.25 0 0 1 12.7 16.05h-1.75v1.75c0 .69-.56 1.25-1.25 1.25H7.95v1.25a1.75 1.75 0 0 1-1.75 1.75H3.7a1.75 1.75 0 0 1-1.75-1.75v-2.172c0-.73.29-1.429.806-1.944L8.99 9.948a.275.275 0 0 0 .07-.244A6.386 6.386 0 0 1 8.95 8.6m9.3-1.6a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0" data-v-60f19322></path></svg></div><div class="flex items-start flex-col" data-v-60f19322><h5 class="text-sm text-blue-100 font-light whitespace-nowrap" data-v-60f19322> Room No: ${ssrInterpolate((_b = (_a = $data.latestBookingHistory) == null ? void 0 : _a.rooms[0]) == null ? void 0 : _b.room_number)}</h5><h5 class="text-sm text-blue-100 font-light whitespace-nowrap" data-v-60f19322> Booking Id : ${ssrInterpolate($data.latestBookingHistory.id)}</h5></div></div><div class="flex flex-row items-center gap-6" data-v-60f19322><div class="flex flex-row items-center space-x-2" data-v-60f19322><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" fill="none" data-v-60f19322><circle cx="48" cy="16" r="8" stroke="black" stroke-width="2" fill="none" data-v-60f19322></circle><path d="M0 48C10.667 44 21.333 44 32 48C42.667 52 53.333 52 64 48V52C53.333 56 42.667 56 32 52C21.333 48 10.667 48 0 52V48Z" fill="black" data-v-60f19322></path><path d="M0 40C10.667 36 21.333 36 32 40C42.667 44 53.333 44 64 40V44C53.333 48 42.667 48 32 44C21.333 40 10.667 40 0 44V40Z" fill="black" data-v-60f19322></path><rect x="20" y="28" width="4" height="20" fill="black" data-v-60f19322></rect><path d="M22 28C28 24 34 24 40 28C36 24 34 16 28 20C26 14 20 18 22 28Z" fill="black" data-v-60f19322></path><path d="M22 28C16 24 10 24 4 28C8 24 10 16 16 20C18 14 24 18 22 28Z" fill="black" data-v-60f19322></path><circle cx="21" cy="34" r="2" fill="black" data-v-60f19322></circle><circle cx="25" cy="34" r="2" fill="black" data-v-60f19322></circle></svg><h5 class="text-black-200" data-v-60f19322>Room View</h5></div><h5 class="font-bold text-base text-black-200 xl:ml-0 ml-2" data-v-60f19322>${ssrInterpolate((_d = (_c = $data.latestBookingHistory) == null ? void 0 : _c.rooms[0]) == null ? void 0 : _d.view)}</h5></div><div class="flex flex-row items-center gap-6" data-v-60f19322><div class="flex flex-row items-center space-x-2" data-v-60f19322><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 58 44" fill="none" data-v-60f19322><rect width="58" height="44" fill="url(#pattern3)" data-v-60f19322></rect><defs data-v-60f19322><pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1" data-v-60f19322><use xlink:href="#image0_996_255" transform="matrix(0.02 0 0 0.0263636 0 -0.159091)" data-v-60f19322></use></pattern><image id="image0_996_255" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYElEQVR4nO2YO2hUQRiFP9hVEAO6QcGURrQwVooIaiFJoZ1roa2QJq0IFgqaQvGBEoLEQvs02gg+Oi1MlUZQU0WjoomVkUASGyEjE86VyebuJpvZvXtnnQ+GZV7/PWdn7j+zC5FIJBKJRNqTzcAd4Adgcl5mgFvSvIrbORBo6iw304zMqPMo+eeYszKrSFyGgqmmNxppEea/XZEC0AtcBkaBt8AU8BOY15x51afUP6rxdl5RxSdGwdfIIWDSM0V+UvGJMSktGzbyVW3TwBDQDxwBuoEdQIfGdajerf5+jZ924vrG+OJjJGmzW2MjFBscw9uID82KYXyMbAIOAGXgEvAAeAK8Bt4Dn4FfKgspe33B6bdj32nuY2BEMW3sHj2r4UYGgVfAYob3qEU9c9DHiE13AynBl5RBXgAPgavAeaBPWWWvXtZdQMl5kS1b1dalMfs0p08xrgGPgJfARz2r8vkDTipe08hxYMKpfwOGgZPANrJjO3AKuA98d/RMSOOaRv7o0+7501UOo6wpAGeADxUaaxqxS3rdI102kyJwo2LbrWCn03mB/HPR+dI73Y5hdTwlHJ5J872kYQswJ3f7CYceGZmTB06oYZzwGJd262H5LFixRAExJO1XbOW5KmcJj3PSbt+X5fuOrRwkPA5Lu/0h9u++v5vw2OPcPvitSpbXj0ZRknbrIbPbbLMLbWckVEw0EtqKlIExYDYH+39WWsr1GilX+anZ6rKUYqamkTG13VWubjUl3QWtpjf1GEm2Ux5MJHRKk/1/eN1G8pqSTS2tbWfEpJ2WOcOs52QP2shfOH9tW4/TaUYAAAAASUVORK5CYII=" data-v-60f19322></image></defs></svg><h5 class="text-black-200" data-v-60f19322>Room type</h5></div><h5 class="font-bold text-base text-black-200 xl:ml-0 ml-2" data-v-60f19322>${ssrInterpolate((_f = (_e = $data.latestBookingHistory) == null ? void 0 : _e.rooms[0]) == null ? void 0 : _f.category)}</h5></div><div class="flex flex-row items-center gap-3" data-v-60f19322><div class="flex flex-row items-center space-x-2" data-v-60f19322><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 54 55" fill="none" data-v-60f19322><rect width="54" height="55" fill="url(#pattern1)" data-v-60f19322></rect><defs data-v-60f19322><pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1" data-v-60f19322><use xlink:href="#image0_999_257" transform="matrix(0.0203704 0 0 0.02 -0.00925926 0)" data-v-60f19322></use></pattern><image id="image0_999_257" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADE0lEQVR4nO2Zz29NQRTHP0kpFhKJtqIhFmqDhGoiaGJh1YX+sLKzsrARJEIt6AIJ7UaQNNbix0JsLRC0dIU/QJTkVcXCRoSi3hs5yZlmTOfe96O9r/Pa900m9809c2bme8+vue9C6egCJgCjLaf35gtZzz+DnLOIu1itzD8DO3lSP/b5a4/IIeBzwLx+8xea72ZRbJzstY8ASiERExEDTIaIFDNlbK5lkuRLhkgusvRrKiXS5S2WRUHMlTF/xURig6kTqTWLmBprs7DoiNQKTJ1IZDBL3iImlmCeq0UWHZEYZII6EVO3CHXXMkSctQrAE+A40A6sTVivEHP6fQRspTR0AE+zJFKJ7I93byPQD4zq31C/9ToKnAM2pOxjwYjIJrv190pgCJgqYrkpYBBojInIMb22AGM6Lg/cAQ4C64Hleu0G7qrc6PimWIhYS1gS74GdpKMdGNfxL1U/CiKDDolmSkOzQ+bSQmatESewxef/BiyxG7jlte2OfJe6mei3LhSRk6rXr32JCR8DwC/gtdP2eWPuqf7p+SZSrmxUZRLYPh6oPA09qu/XlGvAt3I3U0yeJrOfKyQr+XgHvAXeAF+A60CDN6ZV9T8F9JuqXUdMoCasAr5qVjoM3NZxR71xK5z5p5WQuFtnJRudC5HJFIv4xKaBhwkWCbUbwLJqERlRma3uFvs1uI9of5MeFCVzuehV/We66c3AeeCH3r9Z7awlFdvFav2u/l0z2kfd3DZv3H3VP+vd3+OQ6cySyAuvjuS1YrsQdxsGnqvf7wicgEXvJ7AusKcLodRejMhccFXnHi+jsrcAH1TvcsKYtlBGy5KIZJ5XDhmp2GnocEiM6aEyaV6jRbUqRFBLWDJ5daUezUqNeu3VmLCnX0nNa1LmtBaZqCYR+wSvqM+XEmdDReYbCMWIzfdZNHlDPOGsJW+AZzTIJ9U15OOnpNhTWiCNFtMDCST26gMp6O8Z9GVMRtrjQGZKwrDzEC4CW/S9pE0tYa0qx5qo0eCQCTWxhJCYVdljhRzrJQYk24kLSmBL/z93+gdBclQRc72kPwAAAABJRU5ErkJggg==" data-v-60f19322></image></defs></svg><h5 class="text-black-200" data-v-60f19322>Booking Date</h5></div><h5 class="font-bold text-[1a6px] text-black-200" data-v-60f19322>${ssrInterpolate($options.formatDate((_g = $data.latestBookingHistory) == null ? void 0 : _g.check_in))} - ${ssrInterpolate($options.formatDate((_h = $data.latestBookingHistory) == null ? void 0 : _h.check_out))}</h5></div></div></div></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_SelectableTable, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/contentDashboard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const contentDashboard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-60f19322"]]);
const __default__ = {
  router: {
    middleware: ["auth"]
  }
  // ...
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main overflow-hidden" }, _attrs))}>`);
      _push(ssrRenderComponent(navbarDashboard, null, null, _parent));
      _push(ssrRenderComponent(contentDashboard, null, null, _parent));
      _push(ssrRenderComponent(footerHome, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=dashboard-CM8Xgyaz.js.map
