<template>
  <div class="sm:container px-4 my-28">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-20 gap-y-16">
      <!-- shipping details submiting form -->
      <div>
        <h2 class="text-black-100 md:text-7xl text-3xl text-left">Guest Info</h2>
        <form class="mt-12 space-y-8">
          <div>
            <div class="flex gap-2 items-baseline">
              <label
                for="first_name"
                class="block mb-2 text-base font-bold text-black-200 dark:text-white"
                >First Name</label
              >
              <span class="text-base text-black-200 font-normal">required</span>
            </div>

            <input
              type="text"
              id="first_name"
              class="bg-white p-4 border border-black-200 text-black-200 text-opacity-40 placeholder:text-black-200 placeholder:text-opacity-40 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter The first Name"
              required
            />
          </div>
          <div>
            <div class="flex gap-2 items-baseline">
              <label
                for="last_name"
                class="block mb-2 text-base font-bold text-black-200 dark:text-white"
                >Last Name</label
              >
              <span class="text-base text-black-200 font-normal">required</span>
            </div>

            <input
              type="text"
              id="last_name"
              class="bg-white p-4 border border-black-200 text-black-200 text-opacity-40 placeholder:text-black-200 placeholder:text-opacity-40 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter The second Name"
              required
            />
          </div>
          <div>
            <div class="flex gap-2 items-baseline">
              <label
                for="phone"
                class="block mb-2 text-base font-bold text-black-200 dark:text-white"
                >Phone Number</label
              >
              <span class="text-base text-black-200 font-normal">required</span>
            </div>
            <input
              type="tel"
              id="phone"
              class="bg-white p-4 border border-black-200 text-black-200 text-opacity-40 placeholder:text-black-200 placeholder:text-opacity-40 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter The Phone Number"
              required
            />
          </div>
          <div>
            <div class="flex gap-2 items-baseline">
              <label
                for="email"
                class="block mb-2 text-base font-bold text-black-200 dark:text-white"
                >Email</label
              >
              <span class="text-base text-black-200 font-normal">required</span>
            </div>
            <input
              type="email"
              id="email"
              class="bg-white p-4 border border-black-200 text-black-200 text-opacity-40 placeholder:text-black-200 placeholder:text-opacity-40 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter The Email"
              required
            />
          </div>
          <div>
            <div class="flex gap-2 items-baseline">
              <label
                for="address"
                class="block mb-2 text-base font-bold text-black-200 dark:text-white"
                >Addrress</label
              >
              <span class="text-base text-black-200 font-normal">required</span>
            </div>
            <input
              type="text"
              id="address"
              class="bg-white p-4 border border-black-200 text-black-200 text-opacity-40 placeholder:text-black-200 placeholder:text-opacity-40 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter The Street Address"
              required
            />
          </div>
          <div>
            <div class="flex gap-2 items-baseline">
              <label
                for="nationality"
                class="block mb-2 text-base font-bold text-black-200 dark:text-white">Nationality</label
              >
              <span class="text-base text-black-200 font-normal">required</span>
            </div>

            <select
              id="nationality"
              class="bg-white p-4 border border-black-200 text-black-200 text-opacity-40 placeholder:text-black-200 placeholder:text-opacity-40 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Please Select Your Country</option>
              <option value="AF">Afghanistan</option>
              <option value="AX">Åland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia, Plurinational State of</option>
              <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="BN">Brunei Darussalam</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos (Keeling) Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CG">Congo</option>
              <option value="CD">Congo, the Democratic Republic of the</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="CI">Côte d'Ivoire</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">Curaçao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands (Malvinas)</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and McDonald Islands</option>
              <option value="VA">Holy See (Vatican City State)</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran, Islamic Republic of</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="KP">Korea, Democratic People's Republic of</option>
              <option value="KR">Korea, Republic of</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Lao People's Democratic Republic</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">
                Macedonia, the former Yugoslav Republic of
              </option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia, Federated States of</option>
              <option value="MD">Moldova, Republic of</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory, Occupied</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="RE">Réunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russian Federation</option>
              <option value="RW">Rwanda</option>
              <option value="BL">Saint Barthélemy</option>
              <option value="SH">
                Saint Helena, Ascension and Tristan da Cunha
              </option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin (French part)</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SX">Sint Maarten (Dutch part)</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">
                South Georgia and the South Sandwich Islands
              </option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syrian Arab Republic</option>
              <option value="TW">Taiwan, Province of China</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania, United Republic of</option>
              <option value="TH">Thailand</option>
              <option value="TL">Timor-Leste</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VE">Venezuela, Bolivarian Republic of</option>
              <option value="VN">Viet Nam</option>
              <option value="VG">Virgin Islands, British</option>
              <option value="VI">Virgin Islands, U.S.</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
          </div>
          <button
            type="button"
            class="uppercase w-full buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-md md:text-xl text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Continue To Billing
          </button>
        </form>
      </div>

      <!-- Room Reserve form -->
      <div class="inline-block">
        <div
          class="w-full p-4 bg-white border-none rounded-none shadow-xl shadow-black-100 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <form class="space-y-8" action="#">
            <h2 class="text-black-100 md:text-5xl text-base text-left">
              RESERVE
            </h2>

            <div class="relative w-full">
              <div
                class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
                  />
                </svg>
              </div>
              <input
                ref="datepicker1"
                type="text"
                class="bg-white w-full border rounded-none border-black-200 text-black-200 placeholder:text-black-200 text-sm placeholder:text-sm focus:ring-blue-500 focus:border-blue-500 block p-4 pe-8 text-right md:padding-left dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Check In"
              />
              <div
                class="absolute inset-y-0 left-0 flex items-center ps-3.5 pointer-events-none"
              >
                <span class="text-black-200 text-sm">Check In</span>
              </div>
            </div>
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
                  />
                </svg>
              </div>
              <input
                ref="datepicker2"
                type="text"
                class="bg-white w-full border rounded-none border-black-200 text-black-200 placeholder:text-black-200 placeholder:text-sm text-sm focus:ring-blue-500 focus:border-blue-500 block p-4 pe-8 text-right dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Check Out"
              />
              <div
                class="absolute inset-y-0 left-0 flex items-center ps-3.5 pointer-events-none"
              >
                <span class="text-black-200 text-sm">Check Out</span>
              </div>
            </div>
            <div class="relative w-full">
              <div
                class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
                  />
                </svg>
              </div>
              <select
                id="room"
                class="bg-white border border-black-200 text-black-200 placeholder:text-black-200 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-4 pe-8 text-right dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>1 Room</option>
                <option value="2">2 Room</option>
                <option value="3">3 Room</option>
              </select>
              <div
                class="absolute inset-y-0 left-0 flex items-center ps-3.5 pointer-events-none"
              >
                <span class="text-black-200">Rooms</span>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-x-2">
              <div class="relative w-full">
                <div
                  class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
                    />
                  </svg>
                </div>
                <select
                  id="room"
                  class="bg-white border border-black-200 text-black-200 placeholder:text-black-200 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-4 pr-10 text-right dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>3</option>
                  <option value="2">2</option>
                  <option value="3">1</option>
                </select>
                <div
                  class="absolute inset-y-0 left-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <span class="text-black-200">Adults</span>
                </div>
              </div>
              <div class="relative w-full">
                <div
                  class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
                    />
                  </svg>
                </div>
                <select
                  id="room"
                  class="bg-white border border-black-200 text-black-200 placeholder:text-black-200 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-4 pr-10 text-right dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <div
                  class="absolute inset-y-0 left-0 flex items-center ps-3.5 pointer-events-none"
                >
                  <span class="text-black-200">Children</span>
                </div>
              </div>
            </div>
            <!-- <h2 class="text-black-100 md:text-4xl text-base text-left">
              Extra Services
            </h2> -->
            <!-- <div class="flex flex-row justify-between">
              <div class="flex items-center mb-4">
                <input
                  id="room-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-white border-black-200 rounded-none focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-6 md:text-base text-sm font-medium text-black-200 dark:text-gray-300"
                  >Room Clean</label
                >
              </div>
              <p class="md:text-base text-sm text-black-200">$12 / Night</p>
            </div>
            <div class="flex flex-row justify-between items-baseline">
              <div class="flex items-center mb-4">
                <input
                  id="room-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-white border-black-200 rounded-none focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-6 md:text-base text-sm font-medium text-black-200 dark:text-gray-300"
                  >Massage</label
                >
              </div>
              <div class="flex flex-row items-center space-x-4">
                <p class="text-black-200 md:text-base text-sm">$30 / Person</p>
                <div class="relative max-w-sm">
                  <div
                    class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
                      />
                    </svg>
                  </div>
                  <select
                    id="room"
                    class="bg-white ps-5 border border-black-200 text-black-200 placeholder:text-black-200 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <div
                    class="absolute inset-y-0 left-0 flex items-center ps-3.5 pointer-events-none"
                  ></div>
                </div>
              </div>
            </div>
            <div class="flex flex-row justify-between items-baseline">
              <div class="flex items-center mb-4">
                <input
                  id="room-checkbox"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 text-blue-600 bg-white border-black-200 rounded-none focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-checkbox"
                  class="ms-6 md:text-base text-sm font-medium text-black-200 dark:text-gray-300"
                  >Day Spa</label
                >
              </div>
              <div class="flex flex-row items-center space-x-4">
                <p class="text-black-200 md:text-base text-sm">$45 / Person</p>
                <div class="relative max-w-sm">
                  <div
                    class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
                      />
                    </svg>
                  </div>
                  <select
                    id="room"
                    class="bg-white ps-5 border border-black-200 text-black-200 placeholder:text-black-200 text-sm rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <div
                    class="absolute inset-y-0 left-0 flex items-center ps-3.5 pointer-events-none"
                  ></div>
                </div>
              </div>
            </div> -->
            <hr
              class="h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mt-8"
            />
            <div class="flex flex-row justify-between items-baseline">
              <div class="relative max-w-sm">
                <div
                  class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
                    />
                  </svg>
                </div>
                <select
                  id="room"
                  class="bg-white costSelector ps-5 border-none text-black-200 uppercase placeholder:text-black-200 md:text-3xl text-base rounded-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Total cost</option>
                  <option value="2">Total cost</option>
                  <option value="3">Total cost</option>
                </select>
              </div>
              <div
                class="flex flex-row total-cost md:text-3xl text-base text-black-200"
              >
                <span>$</span>
                <span> 199 </span>
              </div>
            </div>
            <button
              type="button"
              class="mt-8 uppercase w-full buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-md md:text-xl text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Book Your Stay Now
            </button>
            <p class="md:text-xl text-sm text-green-100">
              The room reservation has been successfully added to your cart.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    Promise.all([
      import("flowbite-datepicker/Datepicker"),
      import("flowbite-datepicker/Datepicker"),
    ]).then(([DatePicker1, DatePicker2]) => {
      const datepickerEl1 = this.$refs.datepicker1;
      const datepickerEl2 = this.$refs.datepicker2;
      new DatePicker1.default(datepickerEl1, {
        autohide: true, // This will enable autohide feature for the first datepicker
        orientation: "bottom right", // Set orientation for the first datepicker
      });
      new DatePicker2.default(datepickerEl2, {
        autohide: true, // This will enable autohide feature for the second datepicker
        orientation: "bottom right", // Set orientation for the second datepicker
      });
    });
  },
};
</script>

<style  scoped>
h2,
.costSelector,
.total-cost,
.buttontext {
  font-family: "Philosopher", sans-serif;
}
h3,
h5,p,
label,
select,
input {
  font-family: "Barlow", sans-serif;
}
::marker {
  color: #c64816; /* Change this color to the desired color */
}
#room {
  /* Your existing styles here */
  background-image: none;
}
#nationality {
  /* Your existing styles here */
  background-image: url("data:image/svg+xml,%3csvg aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='%23000000' viewBox='0 0 10 6'%3e %3cpath stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 4 4 4-4'/%3e %3c/svg%3e");
}
</style>