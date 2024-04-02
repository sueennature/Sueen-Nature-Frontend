<template>
  <div class="sm:container px-4 py-20">
    <h2 class="uppercase text-black-100 md:text-4xl text-3xl text-left mt-8">
      Sueen dashboard
    </h2>
    <div class="grid xl:grid-cols-3 grid-cols-1 gap-8">
      <!-- Card with user profile -->
      <div
        class="w-full bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 p-4 mt-8 shadow-lg shadow-gray-300"
      >
        <div class="flex flex-col items-center pb-10">
          <img
            class="w-44 h-44 mb-3 rounded-full shadow-lg"
            src="../public/img/team1.png"
            alt="user image"
          />
          <h4
            class="mt-4 text-2xl whitespace-nowrap font-light text-blue-100 dark:text-white"
          >
            User ID #0123456789012
          </h4>
          <h3
            class="mt-4 text-3xl whitespace-nowrap font-bold text-black-200 dark:text-white"
          >
            Kenu Beam
          </h3>
          <div class="flex flex-col mt-10 space-y-4">
            <div class="flex items-center space-x-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M8.656 3c-.523 0-1.039.188-1.469.531l-.062.031l-.031.032l-3.125 3.219l.031.03a3.134 3.134 0 0 0-.844 3.376c.004.008-.004.023 0 .031c.848 2.426 3.016 7.11 7.25 11.344c4.25 4.25 8.996 6.332 11.344 7.25h.031a3.59 3.59 0 0 0 3.469-.688L28.406 25c.828-.828.828-2.266 0-3.094l-4.062-4.062l-.032-.063c-.828-.828-2.296-.828-3.125 0l-2 2a16.176 16.176 0 0 1-4.093-2.812c-1.637-1.563-2.473-3.36-2.781-4.063l2-2c.84-.84.855-2.238-.032-3.062l.031-.032l-.093-.093l-4-4.125l-.031-.031l-.063-.032A2.356 2.356 0 0 0 8.656 3m0 2a.35.35 0 0 1 .219.094l4 4.093l.094.094c-.008-.008.058.098-.063.219l-2.5 2.5l-.469.438l.22.624s1.148 3.075 3.562 5.376l.219.187C16.261 20.746 19 21.906 19 21.906l.625.282l2.969-2.97c.172-.171.14-.171.312 0L27 23.314c.172.171.172.109 0 .28l-3.063 3.063c-.46.395-.949.477-1.53.282c-2.266-.891-6.669-2.825-10.595-6.75c-3.957-3.958-6.023-8.446-6.78-10.625c-.153-.407-.044-1.008.312-1.313l.062-.063l3.032-3.093A.35.35 0 0 1 8.655 5z"
                />
              </svg>
              <h4 class="text-xl font-bold text-black-200">+ 94 782 23 59</h4>
            </div>
            <div class="flex items-center space-x-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M15 2.5H1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1m-1.3 1.25L8.42 8.56a.62.62 0 0 1-.84 0L2.3 3.75zm-12.45 8.5V4.48l5.49 5a1.86 1.86 0 0 0 2.52 0l5.49-5v7.77z"
                />
              </svg>
              <h4 class="text-xl font-bold text-black-200">you@gmail.com</h4>
            </div>
          </div>
        </div>
      </div>
      <!--Personal Info Card -->
      <div
        class="mt-8 w-full xl:col-span-2 col-span-1 p-4 bg-white border border-gray-200 rounded-lg sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 shadow-lg shadow-gray-300"
      >
        <form class="space-y-6" action="#">
          <h2
            class="text-3xl uppercase font-medium text-gray-900 dark:text-white"
          >
            Personal Info
          </h2>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <div class="flex items-baseline space-x-2">
                <label
                  for="first_name"
                  class="block mb-2 text-2xl font-bold text-black-200 dark:text-white"
                  >First name</label
                >
                <button
                  class="text-blue-200 text-sm hover:text-blue-500"
                  @click="toggleEditFirstName" @click.prevent
                >
                  Edit
                </button>
              </div>
              <input
                type="text"
                id="first_name"
                class="bg-white border border-black-200 text-black-200 focus:ring-blue-500 focus:border-blue-500 placeholder:text-black-300 text-sm rounded-lg focus:ring-0 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required v-model="firstName"
    :readonly="!editModeFirstName"
              />
            </div>
            <div>
              <div class="flex items-baseline space-x-2">
                <label
                  for="last_name"
                  class="block mb-2 text-2xl font-bold text-black-200 dark:text-white" 
                  >Last name</label
                >
                <button
                  class="text-blue-200 text-sm hover:text-blue-500" @click="toggleEditLastName" @click.prevent
                >
                  Edit
                </button>   
                
              </div>
              <input
                type="text"
                id="last_name"
                class="bg-white border border-black-200 text-black-200 placeholder:text-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required v-model="lastName" :readonly="!editModeLastName" 
              />
              
            </div>
          </div>
          <div class="mb-6">
            <div class="flex items-baseline space-x-2">
              <label
                for="phone"
                class="block mb-2 text-2xl font-bold text-black-200 dark:text-white"
                >Phone Number</label
              >
              <button
                  class="text-blue-200 text-sm hover:text-blue-500" @click="toggleEditPhoneNumber" @click.prevent
                >
                  Edit
                </button>
                
            </div>

            <input
              type="tel"
              id="phone"
              class="bg-white border border-black-200 text-black-200 placeholder:text-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required v-model="phoneNumber"
    :readonly="!editModePhoneNumber"
            />
            
          </div>
          <div class="mb-6">
            <div class="flex items-baseline space-x-2">
              <label
                for="email"
                class="block mb-2 text-2xl font-bold text-black-200 dark:text-white"
                >Email</label
              >
              <button
                  class="text-blue-200 text-sm hover:text-blue-500" @click="toggleEditEmail"  @click.prevent
                >
                  Edit
                </button>
                <!-- @click="toggleEditEmail" -->
            </div>

            <input
              type="email"
              id="email"
              class="bg-white border border-black-200 text-black-200 placeholder:text-black-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="email" required :readonly="!editModeEmail"
            />
            <!-- v-model="email" required :readonly="!editModeEmail" -->
          </div>
          <div class="flex items-baseline space-x-2">
            <label
              for="address"
              class="block mb-2 text-2xl font-bold text-black-200 dark:text-white"
              >Address</label
            >

            <button
                  class="text-blue-200 text-sm hover:text-blue-500" @click="toggleEditAddress" @click.prevent
                >
                  Edit
                </button>
               
          </div>
          <textarea
            id="address"
            rows="4"
            class="block p-2.5 w-full text-sm bg-white border border-black-200 text-black-200 placeholder:text-black-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required  v-model="address"
    :readonly="!editModeAddress"
          ></textarea>
        </form>
      </div>
    </div>
    <!--Current booking Card -->
    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-8 shadow-lg shadow-gray-300"
    >
      <div class="grid xl:grid-cols-4 grid-cols-1 xl:gap-80 gap-4">
        <div class="flex flex-col items-start">
          <h2
            class="text-3xl uppercase font-medium text-gray-900 dark:text-white whitespace-nowrap"
          >
            Current booking
          </h2>
          <div class="flex flex-row items-center space-x-3 mt-8">
            <div
              class="flex bg-orange-100 rounded-full w-12 h-12 items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                transform="rotate(-45)"
              >
                <path
                  fill="#ffffff"
                  d="M8.95 8.6a6.554 6.554 0 0 1 6.55-6.55c3.596 0 6.55 2.819 6.55 6.45a6.554 6.554 0 0 1-6.55 6.55a6.243 6.243 0 0 1-1.552-.204A1.25 1.25 0 0 1 12.7 16.05h-1.75v1.75c0 .69-.56 1.25-1.25 1.25H7.95v1.25a1.75 1.75 0 0 1-1.75 1.75H3.7a1.75 1.75 0 0 1-1.75-1.75v-2.172c0-.73.29-1.429.806-1.944L8.99 9.948a.275.275 0 0 0 .07-.244A6.386 6.386 0 0 1 8.95 8.6m9.3-1.6a1.25 1.25 0 1 0-2.5 0a1.25 1.25 0 0 0 2.5 0"
                />
              </svg>
            </div>
            <div class="flex flex-col justify-start items-start">
              <h5 class="text-sm text-blue-100 font-light whitespace-nowrap">
                Booking ID #0123456789012
              </h5>
              <h5 class="text-sm text-black-200 font-bold whitespace-nowrap">
                Queen Deulax A09244
              </h5>
            </div>
          </div>
        </div>
        <div class="xl:col-span-3 col-span-1 mt-6 xl:mt-0">
          <div class="grid xl:grid-cols-3 grid-cols-1 gap-10 xl:gap-2">
            <div class="flex flex-col items-start">
              <div class="flex flex-row items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40"
                  height="40"
                  viewBox="0 0 63 58"
                  fill="none"
                >
                  <g filter="url(#filter0_d_999_258)">
                    <rect
                      x="4"
                      width="55"
                      height="50"
                      fill="url(#pattern6)"
                      shape-rendering="crispEdges"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_999_258"
                      x="0"
                      y="0"
                      width="63"
                      height="58"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_999_258"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_999_258"
                        result="shape"
                      />
                    </filter>
                    <pattern
                      id="pattern6"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_999_258"
                        transform="matrix(0.0208333 0 0 0.0229167 0 -0.05)"
                      />
                    </pattern>
                    <image
                      id="image0_999_258"
                      width="48"
                      height="48"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyUlEQVR4nO2ZS2xNQRjHf9JKpK1HvEOkEiUW9boogliVJYnYCvFKY2NHCLEjSKkNEUSIjTYsrDwW4pWIepUiHiUV0g1KUFFUvuR/k9n03nOOe+9Mub9kkpN7vv/M/5w7Z+abGSjy75ECDgAPgU8qdr0fmEHADAGOA7+Bnl6K3TsGDCYwRgH3ZPIbUA/UAINUavQPdCnmLjCSQOgP3JCxVmBChtgq4LFirwOlBMAOGWoDhkeIt5hX0mzFM9aXO2VmQQzdQmk+qIt5Y4OMXEigvSTtOjxyTiZWJdCukbYJj7yUCfs44zJJ2hd45ItMlCXQlktrdXh/ADMTlwppP+ORPt+FzsrE6gTatdI24pH1MnExgfaytPYg3rBJ6KOM2OQUlUXSvAcG4pltMmPpwYgI8RbzWpotBECpErMeJWoTs3y4TxR7DSghECw1viNjXVrQzFGuZGUu0AB8V0xzxH+r4N/D0SwLml/AkRD6fSama/HS4iwpW7TImZZRWeQ/pgSYCWxSemxr3nbgq0q7fmtSTCqUEWgMsBl4k+HD7a10ALuBSh/GRwMngZ+OoWcahVbqDY9Tml2m65TuWcxzR9cNnCjULkU/YKOTPti4fgqYl6Cu+cBpZ26w9XGd2sgLA9Rg+s2dB8bnoN6xwBmn3saEC6Ssfb3ZeVNLc90AsEx1Wxu31E1zNsM+cBYfk8kfVcBTtfVI25V/veuWztttNh1K/hkm8+ntGvOQmHpV9FYjSaGoBN6p7b1JK5mlYfKHrgvNbA2x3Um25Uuc9HgX/tgjD7fjztwrnA3bnA9pMSh3NoKXxxFelcj2Pn1TJy9XogqmStCpzSffVDg74FOiCPYp+CDh0CBP5i0rNxVcSzjUypOdBEV+gMWEwxLnWCorOxVsh3bV+KcauC9P26PmPumDuJBKa5zjKMtHDmvV5Nt4B3CoQHlYkSL0Nf4AU7gii/wb2wwAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
                <h5 class="text-black-200">Room capacity</h5>
              </div>
              <h5
                class="font-bold text-base text-black-200 xl:mt-10 mt-4 xl:ml-0 ml-2"
              >
                3-5 Persons
              </h5>
            </div>
            <div class="flex flex-col items-start">
              <div class="flex flex-row items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40"
                  height="40"
                  viewBox="0 0 58 44"
                  fill="none"
                >
                  <rect width="58" height="44" fill="url(#pattern3)" />
                  <defs>
                    <pattern
                      id="pattern3"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_996_255"
                        transform="matrix(0.02 0 0 0.0263636 0 -0.159091)"
                      />
                    </pattern>
                    <image
                      id="image0_996_255"
                      width="50"
                      height="50"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACYElEQVR4nO2YO2hUQRiFP9hVEAO6QcGURrQwVooIaiFJoZ1roa2QJq0IFgqaQvGBEoLEQvs02gg+Oi1MlUZQU0WjoomVkUASGyEjE86VyebuJpvZvXtnnQ+GZV7/PWdn7j+zC5FIJBKJRNqTzcAd4Adgcl5mgFvSvIrbORBo6iw304zMqPMo+eeYszKrSFyGgqmmNxppEea/XZEC0AtcBkaBt8AU8BOY15x51afUP6rxdl5RxSdGwdfIIWDSM0V+UvGJMSktGzbyVW3TwBDQDxwBuoEdQIfGdajerf5+jZ924vrG+OJjJGmzW2MjFBscw9uID82KYXyMbAIOAGXgEvAAeAK8Bt4Dn4FfKgspe33B6bdj32nuY2BEMW3sHj2r4UYGgVfAYob3qEU9c9DHiE13AynBl5RBXgAPgavAeaBPWWWvXtZdQMl5kS1b1dalMfs0p08xrgGPgJfARz2r8vkDTipe08hxYMKpfwOGgZPANrJjO3AKuA98d/RMSOOaRv7o0+7501UOo6wpAGeADxUaaxqxS3rdI102kyJwo2LbrWCn03mB/HPR+dI73Y5hdTwlHJ5J872kYQswJ3f7CYceGZmTB06oYZzwGJd262H5LFixRAExJO1XbOW5KmcJj3PSbt+X5fuOrRwkPA5Lu/0h9u++v5vw2OPcPvitSpbXj0ZRknbrIbPbbLMLbWckVEw0EtqKlIExYDYH+39WWsr1GilX+anZ6rKUYqamkTG13VWubjUl3QWtpjf1GEm2Ux5MJHRKk/1/eN1G8pqSTS2tbWfEpJ2WOcOs52QP2shfOH9tW4/TaUYAAAAASUVORK5CYII="
                    />
                  </defs>
                </svg>
                <h5 class="text-black-200">Room capacity</h5>
              </div>
              <h5
                class="font-bold text-base text-black-200 xl:mt-10 mt-4 xl:ml-0 ml-2"
              >
                Double
              </h5>
            </div>
            <div class="flex flex-col items-start">
              <div class="flex flex-row items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="40"
                  height="40"
                  viewBox="0 0 54 55"
                  fill="none"
                >
                  <rect width="54" height="55" fill="url(#pattern1)" />
                  <defs>
                    <pattern
                      id="pattern1"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlink:href="#image0_999_257"
                        transform="matrix(0.0203704 0 0 0.02 -0.00925926 0)"
                      />
                    </pattern>
                    <image
                      id="image0_999_257"
                      width="50"
                      height="50"
                      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADE0lEQVR4nO2Zz29NQRTHP0kpFhKJtqIhFmqDhGoiaGJh1YX+sLKzsrARJEIt6AIJ7UaQNNbix0JsLRC0dIU/QJTkVcXCRoSi3hs5yZlmTOfe96O9r/Pa900m9809c2bme8+vue9C6egCJgCjLaf35gtZzz+DnLOIu1itzD8DO3lSP/b5a4/IIeBzwLx+8xea72ZRbJzstY8ASiERExEDTIaIFDNlbK5lkuRLhkgusvRrKiXS5S2WRUHMlTF/xURig6kTqTWLmBprs7DoiNQKTJ1IZDBL3iImlmCeq0UWHZEYZII6EVO3CHXXMkSctQrAE+A40A6sTVivEHP6fQRspTR0AE+zJFKJ7I93byPQD4zq31C/9ToKnAM2pOxjwYjIJrv190pgCJgqYrkpYBBojInIMb22AGM6Lg/cAQ4C64Hleu0G7qrc6PimWIhYS1gS74GdpKMdGNfxL1U/CiKDDolmSkOzQ+bSQmatESewxef/BiyxG7jlte2OfJe6mei3LhSRk6rXr32JCR8DwC/gtdP2eWPuqf7p+SZSrmxUZRLYPh6oPA09qu/XlGvAt3I3U0yeJrOfKyQr+XgHvAXeAF+A60CDN6ZV9T8F9JuqXUdMoCasAr5qVjoM3NZxR71xK5z5p5WQuFtnJRudC5HJFIv4xKaBhwkWCbUbwLJqERlRma3uFvs1uI9of5MeFCVzuehV/We66c3AeeCH3r9Z7awlFdvFav2u/l0z2kfd3DZv3H3VP+vd3+OQ6cySyAuvjuS1YrsQdxsGnqvf7wicgEXvJ7AusKcLodRejMhccFXnHi+jsrcAH1TvcsKYtlBGy5KIZJ5XDhmp2GnocEiM6aEyaV6jRbUqRFBLWDJ5daUezUqNeu3VmLCnX0nNa1LmtBaZqCYR+wSvqM+XEmdDReYbCMWIzfdZNHlDPOGsJW+AZzTIJ9U15OOnpNhTWiCNFtMDCST26gMp6O8Z9GVMRtrjQGZKwrDzEC4CW/S9pE0tYa0qx5qo0eCQCTWxhJCYVdljhRzrJQYk24kLSmBL/z93+gdBclQRc72kPwAAAABJRU5ErkJggg=="
                    />
                  </defs>
                </svg>
                <h5 class="text-black-200">Booking Date</h5>
              </div>
              <h5
                class="font-bold text-base text-black-200 xl:mt-10 mt-4 xl:ml-0 ml-2"
              >
                Oct 25th - 28th March 2024
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Booking History Card -->
    <div
      class="w-full p-4 text-center bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700 mt-8 shadow-lg shadow-gray-300"
    >
      <div
        class="xl:flex xl:justify-between grid grid-cols-1 gap-6 xl:gap-0 justify-items-start"
      >
        <h2
          class="text-3xl uppercase font-medium text-gray-900 dark:text-white whitespace-nowrap"
        >
          Booking History
        </h2>
        <div class="flex space-x-2">
          <!-- Hidden Date Input -->
          <input
            type="date"
            ref="datePicker"
            class="text-orange-200 bg-orange-50 hover:bg-orange-50 font-medium rounded-lg text-sm border-none focus:ring-0"
            @change="dateChanged"
          />
          <button
            type="button"
            class="buttontext whitespace-nowrap text-orange-200 bg-orange-50 hover:bg-orange-50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 49 61"
              fill="none"
            >
              <rect width="49" height="61" fill="url(#pattern12)" />
              <defs>
                <pattern
                  id="pattern12"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_1032_340"
                    transform="matrix(0.0155612 0 0 0.0125 -0.122449 0)"
                  />
                </pattern>
                <image
                  id="image0_1032_340"
                  width="80"
                  height="80"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAACXBIWXMAAAsTAAALEwEAmpwYAAABnUlEQVR4nO2aQUoDQRREezmtbhW8tMzfeCCDFzAwBeJdFMFsRCXMt7t+aT0IElePR7pmJtqaMcYYY4wxZi6I/lrlta0d293FbVMCBcJJR8SHeBUPuYgoF3A5nn6+3F/eNNWA29oft+iH2R7v0aQi4ruA0Q9Y+wPDQyoiih3h0/vnuLre1uWp/CaiaECZiCi2gZ9/X/44o+AGSkVE4SMscZwhErBsRBTfwPLHGQIbWDoiih3hfa/lSBdvZLLf4tDFG3kD91I3YMzdwD8XUAW6P9gC6v7wBg4KGN7AVEAV6P5gC6j7wxs4fwMx8e/Ee/2ngR0CDpgMWAm6P7yBgwKG7wNTAVWg+6PYRWSGP30D4YBnBAxvYOoTqALdH2wBdX/4PnBQwPCzcCrgT/hZ+IsYTRS6P7yBgwKG7wNTAVWg+6PYRWSG/68CPwsPChjewFRAFej+YAuo+8P3gYMChjcwFVAFuj/YAur+8AYOChjewFRAFej+YAuo+8MbOChgeANTAVWg+4MtoO6Pif+uW+mLWAeMIgGNMcYYY4xp/5Q3MAr4klREn0IAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
            Generate Report
          </button>
        </div>
      </div>
      <div class="grid xl:grid-cols-4 grid-cols-1 mt-4 xl:gap-40">
        <div class="flex flex-col">
          <div class="flex items-center mt-4">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-white border-black-200 rounded-none focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="ms-4 text-xl font-medium text-black-200 dark:text-gray-300 whitespace-nowrap"
              >Booking name</label
            >
          </div>
          <div class="flex items-center mt-4 space-x-2">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              class="mr-2 w-4 h-4 text-blue-600 bg-white border-black-200 rounded-none focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <img
              src="/img/deluxe_1.jpg"
              alt="roomImg"
              class="bg-cover w-40 h-20"
            />
            <div class="flex flex-col justify-start items-start">
              <h5 class="text-sm text-blue-100 font-light whitespace-nowrap">
                Booking ID #0123456789012
              </h5>
              <h5 class="text-sm text-black-200 font-bold whitespace-nowrap">
                Queen Deulax A09244
              </h5>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col xl:space-y-12 space-y-4 items-start xl:mt-0 mt-4"
        >
          <h3 class="font-medium text-xl text-black-200 mt-4 whitespace-nowrap">
            Bed type
          </h3>
          <h5
            class="text-sm text-black-200 font-bold whitespace-nowrap xl:ml-0 ml-2"
          >
            floor-5 eved
          </h5>
        </div>
        <div class="flex flex-col xl:space-y-12 space-y-4 items-start">
          <h3 class="font-medium text-xl text-black-200 mt-4 whitespace-nowrap">
            Book date
          </h3>
          <h5
            class="text-sm text-black-200 font-bold whitespace-nowrap xl:ml-0 ml-2"
          >
            Access one
          </h5>
        </div>
        <div class="flex flex-col xl:space-y-12 space-y-4 items-start">
          <h3 class="font-medium text-xl text-black-200 mt-4 whitespace-nowrap">
            Room floor
          </h3>
          <h5
            class="text-sm text-black-200 font-bold whitespace-nowrap xl:ml-0 ml-2"
          >
            Queen Deulax A09244
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { initFlowbite } from "flowbite";

const firstName = ref('Kenu');
const editModeFirstName = ref(false);

const toggleEditFirstName = () => {
  editModeFirstName.value = !editModeFirstName.value;
}

const lastName = ref('Bean');
const editModeLastName = ref(false);

const toggleEditLastName = () => {
  editModeLastName.value = !editModeLastName.value;
}

const phoneNumber = ref('0712345698');
const editModePhoneNumber = ref(false);

const toggleEditPhoneNumber = () => {
  console.log("test");
  editModePhoneNumber.value = !editModePhoneNumber.value;
}

const address = ref('NO:8,  Gall read,  Colombo,  Srilanka.');
const editModeAddress = ref(false);

const toggleEditAddress = () => {
  console.log("testAddress");
  editModeAddress.value = !editModeAddress.value;
}


const email =ref('youremail@gmail.com');
const editModeEmail =ref(false);

const toggleEditEmail =()=>{
  editModeEmail.value = !editModeEmail.value;
}




// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<style scoped>
h2,
h6 {
  font-family: "Philosopher", sans-serif;
}
h3,
h5,
h4,
label,
select,
.buttontext,
p,
input,
span {
  font-family: "Barlow", sans-serif;
}

input[type="date"] {
  color: #d79109;
  outline: none;
  border: none;
  color-scheme: #d79109;
}

::-webkit-calendar-picker-indicator {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23D79109" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
}
</style>