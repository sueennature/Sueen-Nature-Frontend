import { _ as _export_sfc, a as useRuntimeConfig } from '../server.mjs';
import { toast } from 'vue3-toastify';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';

const _sfc_main = {
  data() {
    return {
      check_in: "",
      check_out: "",
      roomCategory: null,
      roomView: null,
      room_types: [],
      selectedCategories: [],
      discount_code: "",
      dropdownOpen: false,
      loading: false
    };
  },
  methods: {
    formatDateToISO(dateString) {
      const date = new Date(dateString);
      const year = date.getUTCFullYear();
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const day = String(date.getUTCDate()).padStart(2, "0");
      const hours = String(date.getUTCHours()).padStart(2, "0");
      const minutes = String(date.getUTCMinutes()).padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}:00.000Z`;
    },
    populateFieldsFromQuery() {
      const { fromDate, toDate, categories, view, discount } = this.$route.query;
      this.check_in = fromDate || this.formatDateTime(/* @__PURE__ */ new Date());
      this.check_out = toDate || this.formatDateTime(
        new Date((/* @__PURE__ */ new Date()).getTime() + 2 * 60 * 60 * 1e3)
      );
      this.roomView = view || null;
      this.discount_code = discount || "";
      console.log("FROM_URL", this.check_in, this.check_out);
      if (categories) {
        this.selectedCategories = categories.split(",");
      } else {
        this.selectedCategories = [];
      }
      console.log("Populated Categories:", this.selectedCategories);
    },
    formatDateTime(date) {
      if (!(date instanceof Date) || isNaN(date)) {
        return "";
      }
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      return `${year}-${month}-${day}T${hours}:${minutes}`;
    },
    selectCategory(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(
          (c) => c !== category
        );
      } else {
        this.selectedCategories.push(category);
      }
      console.log("Selected Categories after update:", this.selectedCategories);
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
    },
    selectCategory(category) {
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(
          (c) => c !== category
        );
      } else {
        this.selectedCategories.push(category);
      }
    },
    closeDropdown() {
      this.dropdownOpen = false;
    },
    async fetchRoomTypes() {
      try {
        const response = await fetch(
          "https://api.sueennature.com/rooms/types",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": this.$config.public.DATABASE_ID
              // Adjust the runtime config reference according to your environment
            }
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        this.room_types = data.room_types || [];
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    },
    async checkAvailability() {
      if (!this.check_in || !this.check_out || !this.roomView || this.selectedCategories.length === 0) {
        return this.setupToastError("Please fill all fields");
      }
      const checkInDate = new Date(this.check_in);
      const checkOutDate = new Date(this.check_out);
      const checkInDateOnly = checkInDate.toISOString().split("T")[0];
      const checkOutDateOnly = checkOutDate.toISOString().split("T")[0];
      if (checkInDateOnly === checkOutDateOnly) {
        return toast.error(
          "Check-out date must be different from check-in date."
        );
      }
      if (checkOutDate <= checkInDate) {
        return this.setupToastError(
          "Check-out date must be after check-in date"
        );
      }
      const formatDateToISO = (date) => {
        const localDate = new Date(date);
        const offset = localDate.getTimezoneOffset();
        const adjustedDate = new Date(localDate.getTime() - offset * 60 * 1e3);
        return adjustedDate.toISOString().slice(0, 19);
      };
      const formattedCheckIn = formatDateToISO(this.check_in);
      const formattedCheckOut = formatDateToISO(this.check_out);
      console.log("FORMATTED", formattedCheckIn, formattedCheckOut);
      const runtimeConfig = useRuntimeConfig();
      const baseUrl = "https://api.sueennature.com/rooms/availability/";
      const params = new URLSearchParams({
        check_in: formattedCheckIn,
        check_out: formattedCheckOut,
        views: this.roomView,
        discount_code: this.discount_code
      });
      this.selectedCategories.forEach((category) => {
        params.append("categories", category);
      });
      const url = `${baseUrl}?${params.toString()}`;
      console.log("URL", url);
      this.loading = true;
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "x-api-key": runtimeConfig.public.DATABASE_ID,
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        this.loading = false;
        if (response.status === 200) {
          this.setupToastSuccess("Availability checked successfully.");
          setTimeout(() => {
            (void 0).location.reload();
          }, 1500);
          this.$router.push({
            path: "/booking",
            query: {
              fromDate: this.check_in,
              toDate: this.check_out,
              categories: this.selectedCategories.join(","),
              view: this.roomView,
              discount: this.discount_code
            }
          });
        } else if (response.status === 204) {
          this.setupToastError("No rooms available.");
        } else {
          const errorData = await response.json();
          this.setupToastError(
            `An error occurred: ${errorData.message || "Unknown error"}`
          );
        }
      } catch (error) {
        this.loading = false;
        this.setupToastError(`An error occurred: ${error.message}`);
      }
    },
    setupToastSuccess(message) {
      toast.success(message, { autoClose: 3e3 });
    },
    setupToastError(message) {
      toast.error(message, { autoClose: 3e3 });
    },
    handleClickOutside(event) {
      if (this.dropdownOpen && !this.$refs.dropdownContainer.contains(event.target)) {
        this.dropdownOpen = false;
      }
    }
  },
  mounted() {
    this.populateFieldsFromQuery();
    (void 0).addEventListener("click", this.handleClickOutside);
    this.fetchRoomTypes();
    Promise.all([
      import('../../Datepicker.mjs'),
      import('../../Datepicker.mjs')
    ]).then(([DatePicker1, DatePicker2]) => {
      const datepickerEl1 = this.$refs.datepicker1;
      const datepickerEl2 = this.$refs.datepicker2;
      new DatePicker1.default(datepickerEl1, {
        autohide: true,
        orientation: "bottom right"
      });
      new DatePicker2.default(datepickerEl2, {
        autohide: true,
        orientation: "bottom right"
      });
    });
  },
  beforeDestroy() {
    (void 0).removeEventListener("click", this.handleClickOutside);
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-caecd611><div class="inset-x-0 lg:flex lg:flex-col xl:flex-row flex-col lg:justify-center lg:mx-0 mx-4" data-v-caecd611><div class="xl:flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center lg:space-x-0 border rounded-l-none rounded-r-none lg:rounded-l-lg lg:rounded-r-none shadow-lg border-white bg-black-200 bg-opacity-65" data-v-caecd611><div class="relative lg:max-w-xs lg:mx-auto" data-v-caecd611><input type="datetime-local" class="w-full bg-transparent border-none rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Check In Date"${ssrRenderAttr("value", $data.check_in)} data-v-caecd611></div><div class="w-0.5 bg-white h-8 my-auto xl:flex hidden" data-v-caecd611></div><div class="relative lg:max-w-xs lg:mx-auto" data-v-caecd611><input type="datetime-local" class="w-full border-none bg-transparent rounded-lg text-white placeholder-gray-500 text-sm p-4 focus:ring-0 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Check Out Date"${ssrRenderAttr("value", $data.check_out)} data-v-caecd611></div><div class="w-0.5 bg-white h-8 my-auto xl:flex hidden" data-v-caecd611></div><div class="lg:max-w-sm lg:mx-auto" data-v-caecd611><div class="relative" data-v-caecd611><div class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer flex justify-between items-center" data-v-caecd611><div class="overflow-hidden text-ellipsis whitespace-nowrap w-24" data-v-caecd611>`);
  if ($data.selectedCategories.length === 0) {
    _push(`<span data-v-caecd611>Choose Rooms</span>`);
  } else {
    _push(`<span data-v-caecd611>${ssrInterpolate($data.selectedCategories.join(", "))}</span>`);
  }
  _push(`</div><div class="ml-1" data-v-caecd611>`);
  if ($data.dropdownOpen) {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-caecd611><path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l7 7a1 1 0 11-1.414 1.414L10 5.414l-6.293 6.293a1 1 0 01-1.414-1.414l7-7A1 1 0 0110 3z" clip-rule="evenodd" data-v-caecd611></path></svg>`);
  } else {
    _push(`<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" data-v-caecd611><path fill-rule="evenodd" d="M10 17a1 1 0 01-.707-.293l-7-7a1 1 0 011.414-1.414L10 14.586l6.293-6.293a1 1 0 111.414 1.414l-7 7A1 1 0 0110 17z" clip-rule="evenodd" data-v-caecd611></path></svg>`);
  }
  _push(`</div></div>`);
  if ($data.dropdownOpen) {
    _push(`<div class="absolute mt-2 w-full max-w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg z-10" data-v-caecd611><!--[-->`);
    ssrRenderList($data.room_types, (room) => {
      _push(`<div class="p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 flex items-center" data-v-caecd611><input type="checkbox"${ssrRenderAttr("value", room.category)}${ssrIncludeBooleanAttr($data.selectedCategories.includes(room.category)) ? " checked" : ""} class="mr-2" data-v-caecd611><span class="text-gray-900 dark:text-white" data-v-caecd611>${ssrInterpolate(room.category)}</span></div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="w-0.5 bg-white h-8 my-auto xl:flex hidden" data-v-caecd611></div><form class="lg:max-w-sm lg:mx-auto" data-v-caecd611><select id="view" class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-caecd611><option${ssrRenderAttr("value", null)} disabled selected class="text-gray-900" data-v-caecd611> Choose Room View </option><option value="LAKE" class="text-gray-900" data-v-caecd611${ssrIncludeBooleanAttr(Array.isArray($data.roomView) ? ssrLooseContain($data.roomView, "LAKE") : ssrLooseEqual($data.roomView, "LAKE")) ? " selected" : ""}>LAKE</option><option value="MOUNTAIN" class="text-gray-900" data-v-caecd611${ssrIncludeBooleanAttr(Array.isArray($data.roomView) ? ssrLooseContain($data.roomView, "MOUNTAIN") : ssrLooseEqual($data.roomView, "MOUNTAIN")) ? " selected" : ""}>MOUNTAIN</option></select></form><div class="w-0.5 bg-white h-8 my-auto xl:flex hidden" data-v-caecd611></div><form class="lg:max-w-sm lg:mx-auto" data-v-caecd611><input${ssrRenderAttr("value", $data.discount_code)} type="text" placeholder="Discount Code" class="text-white text-sm p-4 bg-transparent border-none rounded-0 focus:ring-0 focus:border-white block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" data-v-caecd611></form></div><button class="bg-red-100 hover:bg-red-500 text-sm text-center text-white p-2 md:p-4 rounded xl:rounded-r-lg xl:rounded-l-none hidden justify-center lg:flex" data-v-caecd611>`);
  if ($data.loading) {
    _push(`<span class="flex" data-v-caecd611><svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-caecd611><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-caecd611></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 01-8 8z" data-v-caecd611></path></svg> Loading... </span>`);
  } else {
    _push(`<span data-v-caecd611>Check Availability</span>`);
  }
  _push(`</button><div class="lg:hidden" data-v-caecd611><button class="bg-red-100 hover:bg-red-500 buttontext text-sm text-white p-4 rounded-none border border-white w-full" data-v-caecd611>`);
  if ($data.loading) {
    _push(`<span class="flex items-center justify-center" data-v-caecd611><svg class="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-v-caecd611><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" data-v-caecd611></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l4-4-4-4v4a8 8 0 01-8 8z" data-v-caecd611></path></svg> Loading... </span>`);
  } else {
    _push(`<span data-v-caecd611> Check Availability </span>`);
  }
  _push(`</button></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CheckoutAvailability.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CheckoutAvailability = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-caecd611"]]);

export { CheckoutAvailability as C };
//# sourceMappingURL=CheckoutAvailability-BMKP4iSF.mjs.map
