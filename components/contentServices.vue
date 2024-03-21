<template>
  <div class="container py-20">
    <!-- services card section -->
    <div class="grid xl:grid-cols-3 grid-cols-1 justify-items-center gap-8">
      <div class="max-w-xl mt-16">
        
          <img src="/img/image_dining.png" alt="resturantImg" class="" />
          <div
            class="flex flex-col justify-center items-center p-8 bg-gray-500 borde-none rounded-none shadow space-y-4 dark:bg-gray-800 dark:border-gray-700"
          >
            <h6
              class="md:text-4xl text-xl font-bold text-gray-900 dark:text-white tracking-widest uppercase text-center md:text-left"
            >
              Dining
            </h6>
            <h3 class="md:text-5xl text-3xl text-black-200">Resturant</h3>
            <p
              class="font-extralight text-base text-center text-black-200 dark:text-gray-400 mt-4"
            >
              Embark on a culinary adventure through a diverse array of dishes,
              from traditional Sri Lankan cuisine to international favorites,
              all within the inviting ambiance of our onsite restaurant and bar
              lounge.
            </p>
            <button
              type="button"
              data-modal-target="default-modal"
              data-modal-toggle="default-modal"
              class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              view more
            </button>
            <div
              id="default-modal"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div
                  class="relative bg-gray-500 rounded-lg shadow dark:bg-gray-700"
                >
                  <!-- Modal header -->
                  <div
                    class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                  >
                    <h3
                      class="text-2xl uppercase tracking-widest font-semibold text-red-100 dark:text-white"
                    >
                      Dining
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-4 md:p-5 space-y-4">
                    <ul
                      class="max-w-md space-y-1 text-black-200 font-semibold text-base list-disc list-outside dark:text-gray-400"
                    >
                      <li>
                        Delight your taste buds at our onsite restaurant and
                        bar.
                      </li>
                      <li>
                        Indulge in a diverse array of culinary delights, from
                        traditional Sri Lankan cuisine to international
                        favorites.
                      </li>
                      <li>
                        Enjoy exquisite dining experiences in a warm and
                        inviting atmosphere.
                      </li>
                    </ul>

                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">Culinary Delights:</span> Savor
                      the flavors of Sri Lanka and beyond at our onsite
                      restaurant, offering a tantalizing array of culinary
                      delights prepared with fresh, locally sourced ingredients.
                    </p>
                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">All-Day Dining:</span> Enjoy
                      all-day dining options, including hearty breakfast
                      buffets, à la carte lunch menus, and themed dinner buffets
                      showcasing international cuisines and seasonal
                      specialties.
                    </p>
                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">Cozy Ambiance: </span>Immerse
                      yourself in the warm and inviting ambiance of our
                      restaurant, featuring elegant décor, comfortable seating,
                      and panoramic views of the surrounding natural landscape.
                    </p>
                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">Bar Lounge: </span> Unwind with a
                      refreshing cocktail or a glass of fine wine at our bar
                      lounge, where expert mixologists craft signature cocktails
                      and beverages to complement your dining experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      <div class="max-w-xl mt-16">   
          <img src="/img/image_banquet.png" alt="banquetImg" class="" />
          <div
            class="flex flex-col justify-center items-center p-8 bg-gray-500 borde-none rounded-none shadow space-y-4 dark:bg-gray-800 dark:border-gray-700"
          >
            <h6
              class="md:text-4xl text-xl font-bold whitespace-nowrap text-gray-900 dark:text-white tracking-widest uppercase text-center md:text-left"
            >
              banquet Hall
            </h6>
            <h3 class="md:text-5xl text-3xl text-black-200">Celebrate</h3>
            <p
              class="font-extralight text-base text-center text-black-200 dark:text-gray-400 mt-4"
            >
              Explore our elegant event spaces, complemented by professional
              event planning and exquisite catering services, to host
              unforgettable weddings, corporate functions, and special
              occasions.
            </p>
            <button
              type="button"
              data-modal-target="default-modal-2"
              data-modal-toggle="default-modal-2"
              class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              view more
            </button>
            <div
              id="default-modal-2"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div
                  class="relative bg-gray-500 rounded-lg shadow dark:bg-gray-700"
                >
                  <!-- Modal header -->
                  <div
                    class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                  >
                    <h3
                      class="text-2xl uppercase tracking-widest font-semibold text-red-100 dark:text-white"
                    >
                      banquet Hall
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal-2"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-4 md:p-5 space-y-4">
                    <ul
                      class="max-w-md space-y-1 text-black-200 font-semibold text-base list-disc list-outside dark:text-gray-400"
                    >
                      <li>
                        Host unforgettable events and celebrations in our grand
                        banquet hall.
                      </li>
                      <li>
                        Perfect for weddings, corporate functions, and special
                        occasions of all kinds.
                      </li>
                      <li>
                        Explore our customizable event packages and exceptional
                        catering services.
                      </li>
                    </ul>

                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">Elegant Event Spaces: </span> Our
                      grand banquet hall offers a sophisticated setting for
                      weddings, receptions, conferences, and gala dinners, with
                      customizable seating arrangements and modern audiovisual
                      equipment.
                    </p>
                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold"
                        >Professional Event Planning:
                      </span>
                      Our dedicated event planning team will assist you in every
                      step of the planning process, from conceptualization to
                      execution, ensuring a flawless and memorable event.
                    </p>
                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">Catering Services: </span>Enjoy
                      exquisite culinary offerings prepared by our talented
                      chefs, featuring a diverse selection of cuisines and
                      customizable menu options to suit your preferences and
                      dietary requirements.
                    </p>
                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">Specialized Themes: </span>
                      Elevate your event with specialized themes and décor
                      arrangements, including floral arrangements, lighting
                      designs, and entertainment options tailored to your
                      vision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
      <div class="max-w-xl mt-16">
        
          <img src="/img/image_playground.png" alt="resturantImg" class="" />
          <div
            class="flex flex-col justify-center items-center p-8 space-y-4 bg-gray-500 borde-none rounded-none shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <h6
              class="md:text-4xl text-xl font-bold text-gray-900 dark:text-white tracking-widest uppercase text-center md:text-left"
            >
              Playtime
            </h6>
            <h3 class="md:text-5xl text-3xl text-black-200 whitespace-nowrap">Sports & Games</h3>
            <p
              class="font-extralight text-base text-center text-black-200 dark:text-gray-400 mt-4"
            >
              Experience a diverse range of recreational activities and sports
              facilities amidst stunning natural surroundings, including
              adventure excursions and team building programs.
            </p>
            <button
              type="button"
              data-modal-target="default-modal-3"
              data-modal-toggle="default-modal-3"
              class="mt-8 buttontext uppercase text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              view more
            </button>
            <div
              id="default-modal-3"
              tabindex="-1"
              aria-hidden="true"
              class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div class="relative p-4 w-full max-w-2xl max-h-full">
                <!-- Modal content -->
                <div
                  class="relative bg-gray-500 rounded-lg shadow dark:bg-gray-700"
                >
                  <!-- Modal header -->
                  <div
                    class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"
                  >
                    <h3
                      class="text-2xl uppercase tracking-widest font-semibold text-red-100 dark:text-white"
                    >
                      Sports & Games
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="default-modal-3"
                    >
                      <svg
                        class="w-3 h-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span class="sr-only">Close modal</span>
                    </button>
                  </div>
                  <!-- Modal body -->
                  <div class="p-4 md:p-5 space-y-4">
                    <ul
                      class="max-w-md space-y-1 text-black-200 font-semibold text-base list-disc list-outside dark:text-gray-400"
                    >
                      <li>
                        Experience a wide range of recreational activities and
                        sports facilities at Sueen Nature Resort.
                      </li>
                      <li>
                        Engage in outdoor adventures and team sports amidst the
                        breathtaking natural surroundings.
                      </li>
                      <li>
                        Discover our offerings for both leisurely pastimes and
                        competitive sports enthusiasts.
                      </li>
                    </ul>

                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">Recreational Activities: </span>
                      Engage in a variety of recreational activities suitable
                      for all ages and interests, including nature walks, bird
                      watching, and cycling tours.
                    </p>
                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">Sports Facilities: </span> Take
                      advantage of our state-of-the-art sports facilities,
                      including tennis courts, volleyball courts, and cricket
                      pitches, for friendly matches and competitive games.
                    </p>
                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">Adventure Excursions: </span
                      >Embark on thrilling adventure excursions such as jungle
                      treks, river rafting, and zip-lining tours, led by
                      experienced guides.
                    </p>
                    <p
                      class="font-extralight md:text-xl text-base text-black-200 dark:text-gray-400 mt-4"
                    >
                      <span class="font-bold">Team Building Programs: </span>
                      Strengthen bonds and foster teamwork among colleagues with
                      our team building programs, featuring trust exercises,
                      problem-solving challenges, and outdoor group activities.
                    </p>

                    <div class="grid md:grid-cols-4 grid-cols-2 gap-8">
                      <div class="flex flex-row items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#d06f1d"
                            d="m66.65 45.55l5.25-6.89s1.05-1.62 2.04-1.51c.98.11 2.58 3.23 6.52 2.92c4.16-.33 8.08-1.41 8.08-1.41l3.28 4.6l-.56 3.02s-1.24 3.72-.54 6.19c.61 2.17 2.74 3.53 2.77 4.52c.05 1.31-63.05 63.62-63.71 64.06s-7.22-.44-7.88-.77s-11.38-12.58-11.38-12.58s-.45-5.4.1-6.38c.07-.12.47-.52.79-.77c4.56-3.55 21.78-10.45 35-23.48c5.69-5.62 20.24-31.52 20.24-31.52"
                          />
                          <path
                            fill="#af570c"
                            d="M111.76 16.54v-4.66s2.07-4.34 2.57-4.98s4.57-1.43 7.43 1.64c2.86 3.07 2.34 6.06 2.07 6.5c-.31.5-5.47 3.67-5.47 3.67z"
                          />
                          <path
                            fill="#eb8b34"
                            d="M71.91 38.65c.41-.2 2.89 3.58 5.88 3.73c2.99.15 7.98-.15 7.98-.15l2.53 3.91l-.15 2.68s-.61 2.91 0 4.75s1.69 2.76 1.84 3.45c.15.69-59.59 60.88-60.12 61.04c-.54.15-6.82.08-7.28-.3s-9.17-10.17-9.55-10.86c-.38-.69-1.8-5.47-1.64-6.32c.13-.83 59.99-61.67 60.51-61.93"
                          />
                          <path
                            fill="#474c4f"
                            d="M84.17 39.46c0-.23 27.13-27.06 27.13-27.06l6.6 6.9l-26.96 27.45s-8.4 1.39-8.32 1.01c.08-.39 1.55-8.3 1.55-8.3"
                          />
                          <path
                            fill="#e0e0e0"
                            d="m98.9 24.69l3.13-3.12l6.9 6.87l-3.21 3.27zm6.07-6.02l6.81 6.85l6.98-7.03s-6.72-7.01-6.91-6.81c-.16.16-6.88 6.99-6.88 6.99"
                          />
                          <path
                            fill="#af570c"
                            d="M56.39 73.69c.59.64 2.28-.77 3.46-1.69c.49-.38 8.97-7.14 16.61-13.61s14.72-11.43 14.77-12.02s-6.41-6.87-7.06-6.91c-.66-.04-6.28 6.34-12.24 13.62c-6.63 8.1-13.49 16.57-13.72 16.86c-1.18 1.56-2.28 3.25-1.82 3.75"
                          />
                          <path
                            fill="#a52415"
                            d="M8.77 32.14c-5.74 5.11-7.2 15.21-.6 21.98c5.59 5.74 14.73 6.42 21.38.08c6.07-5.8 4.53-16.16.91-20.39c-5.31-6.2-15.5-7.19-21.69-1.67"
                          />
                          <path
                            fill="#d26051"
                            d="M16.73 30.68c-1.77-.21-6.56.86-8.77 6.12c-2.01 4.79-.71 8.27.27 8.54c1.61.45 2.9-6.08 6.46-8.43s5.75-.82 6.24-2.14c.35-.92-.53-3.65-4.2-4.09"
                          />
                          <path
                            fill="#8b200b"
                            d="M6.46 52.03c.38-.13 8.91-3.75 13.68-7.42c7.26-5.59 9.44-11.7 9.44-11.7s1.36 1.06 2.35 3.05c.71 1.44 1.31 3.73 1.27 3.97c-.08.51-5.27 6.14-10.52 10.19S11.04 56.5 11.04 56.5s-1.96-1.43-2.89-2.38c-.99-1.03-1.69-2.09-1.69-2.09"
                          />
                          <path
                            fill="#fde7c4"
                            d="M5.45 50.37s7.23-1.67 13.86-7.05c6.45-5.24 9.49-11.15 9.49-11.15s.71.52 1.21 1.02s.86 1.07.86 1.07s-1.73 5.47-10.19 11.98c-7.47 5.76-13.74 6.5-13.74 6.5s-.53-.58-.93-1.29c-.28-.53-.56-1.08-.56-1.08m3.88 4.83s6.81-1.54 13.36-6.93c8.22-6.76 9.88-10.81 9.88-10.81s.41 1.1.56 1.76c.19.82.31 1.8.31 1.8s-2.32 4.75-8.83 9.75c-6.46 4.97-11.88 6.58-11.88 6.58s-1.11-.5-1.85-.95c-.61-.36-1.55-1.2-1.55-1.2"
                          />
                        </svg>
                        <p class="text-gray-600 text-sm">Cricket</p>
                      </div>
                      <div class="flex flex-row items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#cf6f24"
                            d="M91.48 48.66c-.93 1.87-76.29 67.45-76.29 67.45s5.41 9.12 27.59 8.18c20.14-.85 41.23-10.12 59.9-31.77s21.44-43.69 20.55-56.78c-1.14-16.76-7.58-21.11-9.26-22.79c-1.67-1.67-22.49 35.71-22.49 35.71"
                          />
                          <path
                            fill="#e07f14"
                            d="M31.01 31.49C12.38 49.64-7.44 90.56 12.9 114.08c7.93 9.17 28.75 6.28 48.16-3.55c13.22-6.69 25.35-17.54 33.78-26.5C115.56 62 127.43 19.36 109.96 9.55C88.68-2.39 56.77 6.38 31.01 31.49"
                          />
                          <path
                            fill="#af5912"
                            d="M11.45 112.28c-1.7-9.19-.49-15.3 3.62-24.97c6.3-14.83 22.99-35.94 34.84-47c12.25-11.42 23.89-20.59 40.9-28.19c12.69-5.67 16.7-4.21 16.99-4.16c.45.07 2.79.98 3.15 1.95c.19.51.58 1.26-.58 1.18c-.04-.01-6.26-.31-17.84 4.86c-16.48 7.36-27.81 16.29-39.74 27.43c-11.54 10.77-27.76 31.26-33.85 45.58c-3.78 8.91-4.97 18.04-3.41 26.42c.21 1.14-.81.86-1.79.33c-.89-.49-2.1-2.41-2.29-3.43"
                          />
                          <path
                            fill="#af5912"
                            d="M32.67 76.02c-2.81 0-5.45-.81-7.7-2.43c-3.07-2.22-3.79-4.93-4.05-8.49c-.69-9.55 8.71-21.2 17.17-29.39C55.68 18.7 68.38 13.2 76.66 19.97c3.91 3.2 5.29 7.95 3.7 12.72c-1.5 4.5-6.5 9.4-13.41 16.18c-2.01 1.97-4.09 4.01-6.29 6.24c-1.62 1.65-3.26 3.47-4.98 5.39c-4.34 4.83-8.82 9.83-13.84 12.8c-3.05 1.82-6.2 2.72-9.17 2.72m35.62-55.46c-6.81 0-16.24 5.8-28.18 17.35c-11.2 10.84-17.12 20.33-16.66 26.73c.18 2.51 1.35 4.51 3.57 6.12c3.46 2.5 8.33 2.33 13.04-.46c4.56-2.7 8.86-7.49 13.02-12.13c1.75-1.96 3.41-3.81 5.1-5.51c2.22-2.25 4.31-4.3 6.33-6.28c6.32-6.19 11.31-11.09 12.54-14.79c1.15-3.44.22-6.6-2.6-8.91c-1.73-1.41-3.78-2.12-6.16-2.12m-8.87 33.33"
                          />
                          <path
                            fill="#713604"
                            d="M39.55 42.92c-1.34 1.46-1.4 3.47.86 5.17c2.54 1.92 4.57 3.71 5.9 4.91c1.36 1.22 3.71 2.52 5.63.93c1.48-1.23 1.39-3.84-.07-5.24c-1.24-1.18-6.2-5.13-7.23-5.9c-1.31-.99-3.56-1.52-5.09.13m7.54-7.86c-1.79 1.72-.78 3.88.68 4.94c1.46 1.06 4.71 3.78 5.77 4.71c1.06.93 3.91 4.18 6.63 1.39c2.05-2.1-.36-4.27-1.46-5.37c-1.36-1.38-5.08-4.5-6.39-5.43c-1.12-.78-3.5-1.9-5.23-.24m8.46-6.71c-1.62 1.74-.47 3.67.98 4.7c1.45 1.03 4.19 3.62 5.37 4.6c1.19.98 4.05 3.69 6.05 1.45c1.85-2.08-.04-4.13-1.4-5.48c-1.49-1.48-4.57-4.17-6.3-5.32c-.96-.64-3.16-1.61-4.7.05m8.34-6.08c-.95.98-1.37 2.64.36 4.15c2.14 1.87 5.38 4.59 6.15 5.32c1.29 1.24 3.58 1.76 4.7.26c1.29-1.73.15-3.45-1.45-5.44c-1.08-1.34-4.24-3.73-5.22-4.35c-.98-.61-3.32-1.21-4.54.06m-31.64 28.9c-1.48 1.86-.72 3.67 1.34 5.27c2.07 1.6 5.27 4.13 6.51 4.86s3.02 1.8 4.75-.21c1.96-2.27-.41-4.44-2.17-5.99c-1.29-1.14-4.33-3.39-5.79-4.34c-1.34-.88-3.46-1.09-4.64.41m-6.74 7.92c-.88 1.12-1.43 3.09 1 5.21c2.43 2.12 4.91 3.88 5.89 4.65c.98.78 4.19 2.02 5.79-.05c1.6-2.07-.05-3.82-1.76-5.01s-5.94-4.34-6.77-5.06s-2.81-1.45-4.15.26"
                          />
                        </svg>
                        <p class="text-gray-600 text-sm">Football</p>
                      </div>
                      <div class="flex flex-row items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 128 128"
                        >
                          <path
                            fill="#168dfc"
                            d="M114.28 8.73c-21.16-12.76-45 8.14-51.29 24.34c-6.29 16.19 3.81 26.96 3.81 26.96s-31.52 32.95-33.71 33.8l.81 3.71L68.48 63.3s5.81 5.56 15.62 5.24c17.43-.57 25.62-9.79 29.43-14c3.92-4.33 9.05-11.53 10.19-22.67c.85-8.32-.53-17.77-9.44-23.14m-7.23 47.01c-12.48 11.05-25.24 9.43-29.81 7.05s-5.62-4-7.33-5.91c-1.03-1.15-6.19-7-4.38-18.62c1.28-8.2 5.58-13.74 11.24-19.38c6.4-6.38 24.58-16.26 37.35-4.47c10.96 10.14 5.4 30.28-7.07 41.33"
                          />
                          <path
                            fill="#05bef2"
                            d="M112.09 48.4c-10.42 14.16-29.81 20.19-40.48 10.19l-1.71-1.71s-.67.57-2.29.1c-1.62-.48-4.76-4.91-5.14-10.67c-.82-12.45 3.32-20.49 12.19-28.67C88.09 5.25 106.5 3.5 115.62 14.21c3.81 4.47 7.9 18.67-3.53 34.19m10.58-27.57c-.32-2.98-2.13-6.97-4.95-9.67C103.24-2.7 82.65 6.54 73.04 15.4c-10.48 9.67-12.76 17.95-13.41 26.79c-.81 11.09 4.91 16.95 4.91 16.95l-33.42 33.4l.57 4.62l36.67-36.48s4.93 5.25 15.81 5.71c8.86.38 17.81-4.06 24.19-9.72c7.92-6.98 16.02-19.6 14.31-35.84"
                          />
                          <path
                            fill="#62666a"
                            d="M58.62 62.51c-.1.65 5.75 6.33 6.57 6.33c.82 0 4.41-3.77 4.41-4.18s-5.73-6.66-6.63-6.58c-.9.07-4.18 3.36-4.35 4.43M27.93 92.64s-.2-1.04.86-2.07c1.26-1.23 2.52-.63 5.56 2.64c3.1 3.33 4.02 4.38 2.85 5.85c-1.14 1.43-2.47 1.09-2.47 1.09l-20.48 20.3s.29 1.92-1.07 2.85c-1 .69-2.57.43-2.57.43l-6.63-6.84s-.43-1.57.64-2.71s2.64-.71 2.64-.71z"
                          />
                          <path
                            fill="#858485"
                            d="M30.87 94.55c-.62-.35-1.83-.05-2.54.86s-.36 2.19-1.07 2.74c-.71.56-2.24.46-3.76 1.98s-1.32 3.86-2.44 4.88c-1.12 1.02-3.23 1.09-4.37 2.24c-1.68 1.68-1.83 4.07-2.74 4.83c-.91.76-2.69.46-3.61 1.32s-1.52 3.25.25 3.86s1.73-1.22 2.95-1.58c1.22-.36 2.39-.61 3.41-2.03s.91-2.8 2.03-3.86c1.12-1.07 2.95-1.02 4.27-2.19c1.32-1.17 1.17-3.71 2.69-5.03c1.52-1.32 2.29-.56 3.46-1.98s.86-2.8 1.83-3.25c.96-.45.91-2.08-.36-2.79"
                          />
                          <path
                            fill="#b9ced4"
                            d="M104.41 56.25L71.54 23.48c-.41-.41-.41-1.07 0-1.48c.41-.41 1.07-.41 1.48 0l33.11 32.87s-.35.3-.93.77c-.38.29-.79.61-.79.61m6.7-6.59l-33.5-33.11c-.41-.41-.41-1.07-.01-1.48c.41-.41 1.07-.41 1.48-.01l33.32 32.89s-.18.33-.62.88c-.19.24-.67.83-.67.83M95.9 61.21L66.73 31.09c-.4-.41-.39-1.08.02-1.48c.41-.4 1.07-.39 1.48.02l29.73 30.65s-.5.24-1.01.49c-.48.23-1.05.44-1.05.44m-10.91 2.32l-20.7-21.9c-.4-.42-.39-1.08.03-1.48c.42-.4 1.08-.39 1.48.03c0 0 21.67 22.66 21.61 22.74c-.04.05-.27.5-1.12.52c-.4.01-1.3.09-1.3.09m31.19-21.84L86.29 12.45c-.41-.4-.42-1.07-.02-1.48c.41-.41 1.07-.42 1.48-.02l29.32 28.7s-.18.43-.38.89c-.19.46-.51 1.15-.51 1.15m3.04-9.69L96.96 9.49c-.41-.41-.4-1.07.01-1.48c.41-.41 1.07-.4 1.48.01l21.09 21.12s-.13 1.69-.32 2.86"
                          />
                          <path
                            fill="#b9ced4"
                            d="M64.98 37.84c-.26 0-.53-.1-.73-.3c-.41-.4-.42-1.06-.02-1.48L91.86 8.73c.4-.41 1.06-.42 1.48-.02c.41.4.42 1.06.02 1.48L65.73 37.52c-.2.22-.47.32-.75.32m.3 11.26c-.27 0-.53-.1-.74-.31c-.41-.41-.41-1.07 0-1.48l39.11-39.05c.41-.41 1.07-.41 1.48 0c.41.41.41 1.07 0 1.48L66.01 48.79c-.2.2-.47.31-.73.31m4.22 8.42a1.044 1.044 0 0 1-.74-1.78l42.67-43.38c.4-.41 1.06-.42 1.48-.01c.41.41.42 1.07.01 1.48L70.25 57.21c-.21.21-.48.31-.75.31m5.73 3.7l42.38-42.53s.16.02.47.59c.28.51.49 1.44.49 1.44L77.23 62.17s-.48-.15-1.02-.42c-.6-.3-.98-.53-.98-.53m9.73 2.32l34.62-36.04c.03.96-.17 3.29-.17 3.29L88.32 63.3s-1.45.24-3.36.24"
                          />
                          <path
                            fill="#e1f7fe"
                            d="M35.42 14.36c-.74-.22-25.75-.52-25.75-.52s-2.3.15-3.34 2.45s-.52 4.23-.52 4.23s-2.37 1.26-2.23 5.34c.09 2.53 1.93 4.38 1.93 4.38s-1.19 2.08.3 5.34c1.16 2.55 4.15 2.82 4.15 2.82s-.16 2.5 1.26 4.08c1.93 2.15 4.6 1.41 4.6 1.41s.74 2.3 3.56 3.04C22.2 47.67 24.5 45 24.5 45l15.81-17.14l-3.34-6.82z"
                          />
                          <path
                            fill="#e1e1e1"
                            d="M36.76 13.48s2.9-1.29 5.85-1.01c2.87.27 4.31 1.74 5.43 4.23c1.25 2.77 1.53 4.92.07 7.32c-1.72 2.83-5.57 3.48-5.57 3.48s-3.19-.61-4-1.67c-.9-1.18-2.99-6.59-3.1-8.14c-.2-2.96 1.32-4.21 1.32-4.21"
                          />
                          <path
                            fill="#fff"
                            d="M44.75 14.84c-1.32-1.54-4.66-.22-5.43 2.85s1.26 4.94 2.8 4.66c1.54-.27 1.21-3.13 1.97-4.11c.77-.99 1.76-2.12.66-3.4"
                          />
                          <path
                            fill="#aae2f9"
                            d="M6.35 21.12h-.3c-.58-.01-1.04-.48-1.03-1.06c.01-.58.51-1.02 1.06-1.03c.06 0 5.63-.4 11.58-.93c7.55-.67 16.92-2.09 17.01-2.11c.56-.09 1.1.31 1.19.88c.08.57-.31 1.1-.88 1.19c-.09.01-9.58 1.26-17.14 2.06c-5.86.63-10.22 1-11.49 1m-.83 9.63s-.93.25-1.24-.72c-.3-.94.6-1.27.6-1.27s10.69-3.4 15.08-4.82c4.33-1.41 14.7-4.9 14.8-4.93c.55-.19 1.14.11 1.32.66c.18.55-.11 1.14-.66 1.32c-.1.04-10.48 3.53-14.82 4.94c-4.38 1.42-15.08 4.82-15.08 4.82m4.33 8.18a1.044 1.044 0 0 1-.54-1.94c.07-.04 6.69-4.12 13.87-8.15c6.99-3.92 12.6-6.74 12.66-6.77a1.043 1.043 0 0 1 .94 1.86c-.06.03-5.63 2.83-12.57 6.72c-7.14 4-13.73 8.06-13.8 8.11a.99.99 0 0 1-.56.17m6.68 6.03a1.05 1.05 0 0 1-.7-1.83c.08-.07 6.67-5.77 10.74-9.2c4.11-3.45 10.63-9.04 10.63-9.04l1.36 1.59s-6.53 5.6-10.65 9.06c-4.05 3.41-10.62 9.09-10.7 9.16c-.18.18-.43.26-.68.26"
                          />
                          <path
                            fill="#fd1b0d"
                            d="m37.04 13.35l-2.92.84s-1.17 2.36.92 7.84c1.76 4.61 4.55 6.8 4.55 6.8l2.96-1.31s-2.8-2.85-4.33-6.69c-1.57-3.95-1.18-7.48-1.18-7.48"
                          />
                        </svg>
                        <p class="text-cyan-600 text-sm">Badminton</p>
                      </div>
                      <div class="flex flex-row items-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2em"
                          height="2em"
                          viewBox="0 0 128 128"
                        >
                          <defs>
                            <ellipse
                              id="notoV1Tennis0"
                              cx="86.38"
                              cy="105.21"
                              rx="13.49"
                              ry="13.48"
                            />
                          </defs>
                          <use fill="#fcc21b" href="#notoV1Tennis0" />
                          <clipPath id="notoV1Tennis1">
                            <use href="#notoV1Tennis0" />
                          </clipPath>
                          <path
                            fill="#fff"
                            d="M73.74 97.03c3.54 1.84 7.84 2.16 11.68 1.15c3.04-.79 5.77-2.53 7.78-4.94c.24-.28.44-.68.78-.85c.45-.22 1.04.6 1.34.92c1.19 1.2-.72 2.98-1.63 3.8c-.99.89-2.19 1.6-3.34 2.24c-4.34 2.41-10.42 3.23-15.13 1.46c-.78-.29-2.87-1.11-3.22-1.94c-.16-.37-.08-1.1.18-1.41c.2-.24.75-.49 1.06-.54c.2-.01.35.04.5.11m7.34 21.62c2.19-3.35 5.78-5.73 9.61-6.73c3.04-.8 6.27-.63 9.21.49c.35.13.72.38 1.1.35c.5-.03.61-1.03.72-1.46c.45-1.63-2.09-2.25-3.28-2.51c-1.3-.29-2.69-.32-4.02-.31c-4.96.03-10.66 2.3-13.91 6.14c-.54.64-1.95 2.37-1.86 3.27c.05.41.48 1 .85 1.14c.29.12.9.06 1.2-.06a.75.75 0 0 0 .38-.32"
                            clip-path="url(#notoV1Tennis1)"
                          />
                          <defs>
                            <path
                              id="notoV1Tennis2"
                              d="M118.29 40.56c-.04-4.69-.38-9.64-2.48-13.5c-.42-.77-.88-1.53-1.36-2.27c-4.7-7.19-11.99-12.76-20.07-15.63c-8.7-3.09-17.75-2.32-26.42.38c-6.48 2.01-10.58 6.26-14.81 11.29c-1.2 1.43-1.94 3.49-2.73 5.19c-1.01 2.17-1.3 4.35-1.91 6.64c-.42 1.55-.35 3.05-.35 4.64c0 1.94-.16 3.82-.31 5.75c-.16 2.07-.24 4.31.12 6.36c.34 1.92-.29 4.14-.57 6.06c4.26 7.03 10.46 12.59 18.27 15.7c1.03.41 2.09.75 3.15 1.07c.83.26 2.15.39 2.78 1.03c.55.56.48 1 1.41 1.16c.68.12 1.38.03 2.07.03c1.57 0 3.12.17 4.68.18c8.34.05 16.2-4.26 23.27-8.15c1.85-1.02 3.71-2.1 5.18-3.64c2.48-2.63 4.81-6.7 6.6-9.86c2.11-3.66 3.51-8.56 3.48-12.43"
                            />
                          </defs>
                          <clipPath id="notoV1Tennis3">
                            <use href="#notoV1Tennis2" />
                          </clipPath>
                          <g fill="#78a3ad" clip-path="url(#notoV1Tennis3)">
                            <path
                              d="M135.8 57.89c-.41 0-.81-.12-1.17-.38L55.05.3c-.9-.65-1.11-1.9-.45-2.8c.65-.9 1.9-1.11 2.8-.46l79.58 57.2c.9.65 1.11 1.9.46 2.8c-.39.55-1.01.85-1.64.85m-8.2 10.86c-.42 0-.83-.13-1.19-.39L46.54 9.92c-.9-.66-1.09-1.91-.43-2.81c.66-.89 1.91-1.09 2.81-.44l79.86 58.45c.9.66 1.09 1.91.43 2.81c-.39.54-1 .82-1.61.82m-8.4 11.1c-.42 0-.84-.13-1.21-.4L37.87 19.73a2.01 2.01 0 0 1-.41-2.81a2.01 2.01 0 0 1 2.81-.41l80.13 59.72c.89.66 1.07 1.92.41 2.81c-.39.53-.99.81-1.61.81m-8.58 11.34c-.42 0-.84-.13-1.21-.41L29.03 29.73a1.998 1.998 0 0 1-.38-2.81a2.02 2.02 0 0 1 2.82-.39l80.38 61.05c.88.67 1.05 1.93.38 2.82c-.4.52-1 .79-1.61.79"
                            />
                            <path
                              d="M22.6 71.75a2.008 2.008 0 0 1-1.47-3.38l83.01-88.62c.76-.81 2.02-.85 2.84-.09c.8.76.84 2.03.08 2.84L24.07 71.11c-.39.42-.93.64-1.47.64m9.54 6.52c-.48 0-.97-.17-1.36-.53c-.81-.75-.87-2.02-.12-2.84l82.74-89.73a2.009 2.009 0 1 1 2.96 2.72L33.62 77.62c-.4.43-.94.65-1.48.65M51.61 91.6c-.48 0-.95-.17-1.33-.51c-.83-.74-.9-2.01-.16-2.83l82.14-92.05c.74-.83 2.01-.9 2.84-.16c.82.74.89 2.01.15 2.84L53.1 90.93c-.39.44-.94.67-1.49.67m-9.81-6.71c-.48 0-.96-.17-1.34-.52a2.01 2.01 0 0 1-.14-2.84l82.44-90.87c.75-.82 2.02-.88 2.84-.13c.82.75.88 2.01.13 2.84L43.29 84.23c-.4.43-.95.66-1.49.66m19.75 13.52a2.009 2.009 0 0 1-1.52-3.33l81.82-93.23c.73-.84 2.01-.92 2.84-.19c.83.73.91 2 .18 2.84L63.05 97.73c-.39.45-.95.68-1.5.68"
                            />
                          </g>
                          <defs>
                            <path
                              id="notoV1Tennis4"
                              d="M122.76 30.59c-4.09-10.67-9.62-17.02-19.84-23.4c-4-2.5-12.54-5.46-17.2-6.28c-10.13-1.78-20.99.12-29.6 6.05a32.78 32.78 0 0 0-4.26 3.5C38.1 23.91 39.52 43.34 39.42 61.02c-.02 4.08-.37 8.16-1.21 12.15c-.42 2.05-1.21 4.01-1.64 6.04c-.35 1.62-.92 2.51-1.89 3.89c-.52.75-1.27 1.42-1.59 2.27c-.23.61 3.48 1.1 3.88 1.29c1.35.66 2.52 1.7 3.65 2.67c1.08.93 1.59 1.92 2.26 3.13c.19.33.37 1.03.83 1.02c.47-.01 1.74-1.69 2.02-1.98c1.11-1.11 2.13-2.18 3.46-3.02c5.8-3.62 10.84-5.88 17.77-6.49c14.76-1.3 28.78-1.76 41.54-10.42c13.33-9.03 20.17-25.57 14.26-40.98M48.58 78.05c-.64.22-1.38.58-2.06.44c-.14-1.11.16-2.2.44-3.27c.75-2.85 1.23-5.73 1.55-8.65c.56.78 1.16 1.53 1.84 2.22c2.31 2.32 5.47 4.47 8.93 6.03c-3.54.88-7.05 1.98-10.7 3.23m62.24-21.96c-4.94 7.05-13.44 12-21.43 14.56c-4.82 1.55-9.69 1.85-14.66 2.12c-2.17-.88-4.4-1.56-6.54-2.51C60.5 66.82 54 61.22 49.14 54.37c.01-2.27-.01-4.54-.02-6.8c-.09-12.34.54-27.47 12.81-34.15c2.44-1.33 5.05-2.34 7.74-3.06c15.52-4.14 34.14 3.28 41.63 17.71c2.21 4.23 3.46 8.96 3.74 13.72c.3 5.43-1.36 10.22-4.22 14.3"
                            />
                          </defs>
                          <use fill="#40c0e7" href="#notoV1Tennis4" />
                          <path
                            fill="#fff"
                            d="M21.4 96.47c-3.15 3.36-6.25 6.76-9.45 10.06c-2.27 2.34-4.9 4.57-6.18 7.65c-2.77 6.68 4.85 13.73 11.42 10.77c2.91-1.31 5.05-4.12 7.09-6.46c2.61-2.98 5.4-5.79 7.94-8.82c2.46-2.93 4.73-6.03 7.38-8.8c3.63-3.79 5.39-9.87.58-13.48c-5.73-4.3-10.42.42-14.34 4.42c-1.49 1.54-2.98 3.09-4.44 4.66"
                          />
                          <path
                            fill="#78a3ad"
                            d="M13.98 127.73c-3.57 0-7.06-1.93-9.12-5.02c-1.91-2.87-2.29-6.27-1.02-9.32c1.21-2.91 3.34-5.02 5.39-7.07c.41-.41.82-.82 1.22-1.23c2.17-2.24 4.3-4.53 6.42-6.81l3.01-3.23c1.47-1.58 2.96-3.15 4.48-4.69c2.95-3 6.62-6.75 11.23-6.75c2.01 0 3.97.72 5.85 2.12c2.23 1.68 3.53 3.95 3.74 6.58c.27 3.33-1.25 7.07-4.07 10.01c-1.72 1.79-3.25 3.7-4.87 5.72c-.81 1-1.6 1.99-2.43 2.98c-1.49 1.78-3.07 3.49-4.6 5.15c-1.13 1.23-2.27 2.45-3.37 3.7l-.82.95c-1.89 2.21-4.05 4.72-6.99 6.04c-1.28.57-2.65.87-4.05.87m21.61-39.96c-2.87 0-5.72 2.92-8.25 5.5c-1.49 1.52-2.96 3.07-4.42 4.62l-2.99 3.22c-2.15 2.3-4.29 4.61-6.48 6.87c-.42.43-.85.86-1.28 1.29c-1.85 1.84-3.59 3.57-4.47 5.71c-1 2.4-.04 4.42.63 5.41c1.29 1.93 3.5 3.17 5.65 3.17h.01c.81 0 1.6-.17 2.35-.51c2.09-.94 3.84-2.98 5.54-4.96l.84-.97c1.12-1.28 2.28-2.54 3.44-3.79c1.5-1.62 3.04-3.3 4.47-5c.8-.96 1.58-1.93 2.37-2.91c1.6-2 3.26-4.07 5.11-6c1.97-2.06 3.1-4.66 2.92-6.78c-.11-1.44-.8-2.62-2.09-3.58c-1.15-.86-2.25-1.29-3.35-1.29"
                          />
                          <path
                            fill="#78a3ad"
                            d="M6.14 114.19c.33-.44.74-.83 1.25-1.17c1.6-1.04 3.57-1.03 5.32-.38c2.71 1 5.23 3.41 6.01 6.23c.51 1.83 0 4.01-1.29 5.42c-1.7 1.85-4.67 1.45-6.9.92c-2.17-.5-3.9-2.81-4.74-4.76c-.84-1.97-1-4.46.35-6.26m16.88 7.39c-.45 0-.9-.14-1.28-.44c-.9-.7-1.08-2.01-.37-2.92c1.88-2.43 2.05-7.61.36-11.1c-1.03-2.13-2.5-3.22-4.36-3.23a2.087 2.087 0 0 1-2.07-2.1a2.09 2.09 0 0 1 2.08-2.07h.01c3.49.03 6.35 2.01 8.09 5.58c2.37 4.9 2 11.84-.82 15.47c-.4.53-1.01.81-1.64.81m9.51-10.25c-.45 0-.9-.14-1.28-.44a2.086 2.086 0 0 1-.37-2.93c1.88-2.42 2.04-7.61.35-11.1c-1.03-2.12-2.5-3.21-4.36-3.23a2.08 2.08 0 0 1 .01-4.16h.01c3.48.03 6.36 2.01 8.08 5.58c2.38 4.9 2.01 11.84-.81 15.47c-.39.53-1.01.81-1.63.81"
                          />
                        </svg>
                        <p class="text-cyan-600 text-sm whitespace-nowrap">
                          Table tennis
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>

    <!-- image gallery -->
    <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 mt-36">
      <img src="/img/service-1.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/service-2.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/service-3.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/service-4.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/service-5.png" alt="servicesImg" class="max-w-full" />
      <img src="/img/service-6.png" alt="servicesImg" class="max-w-full" />
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
h3,
h5 {
  font-family: "Philosopher", sans-serif;
}
h2,
.buttontext,
h6,
a {
  font-family: "Work Sans", sans-serif;
}
p,
ul,
li {
  font-family: "Open Sans", sans-serif;
}
.relaxationCard {
  letter-spacing: 0.6rem;
}
</style>