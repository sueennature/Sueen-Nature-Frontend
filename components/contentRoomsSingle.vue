<template>
  <div class="container pt-20">
    <h2 class="uppercase text-black-100 md:text-4xl text-3xl text-center">
      IN YOUR ROOM
    </h2>
    <hr class="h-px w-full bg-gray-600 mt-8" />
    <!-- images of faciclities -->
    <div
      class="md:flex md:flex-row grid grid-cols-2 justify-center items-center justify-items-center gap-16 mt-20"
    >
      <div class="flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="70"
          viewBox="0 0 68 72"
          fill="none"
        >
          <path
            d="M63.9156 40.3145C63.9412 40.3151 63.966 40.318 63.9916 40.318C66.17 40.318 67.9425 38.4864 67.9425 36.2349C67.9425 33.9841 66.17 32.1528 63.9916 32.1528C61.8131 32.1528 60.0406 33.9843 60.0406 36.2349H62.8423C62.8423 35.5805 63.3583 35.0482 63.9916 35.0482C64.6248 35.0482 65.1408 35.5808 65.1408 36.2349C65.1408 36.8899 64.6248 37.4226 63.9916 37.4226V37.4772H62.705H62.6139H60.2296H7.71342H5.32909H5.23742H3.95091V37.4226C3.31736 37.4226 2.80191 36.8899 2.80191 36.2349C2.80191 35.5805 3.31736 35.0482 3.95091 35.0482C4.58446 35.0482 5.09991 35.5808 5.09991 36.2349H7.90182C7.90182 33.9841 6.1294 32.1528 3.95091 32.1528C1.77243 32.1528 0 33.9843 0 36.2349C0 38.4864 1.77243 40.318 3.95091 40.318C3.97622 40.318 4.00125 40.3151 4.02656 40.3145C3.86683 41.3565 3.58113 42.8722 3.09633 44.4743C2.12956 47.6707 0.99996 52.2312 0.99996 54.5678C0.99996 56.4261 1.6023 57.8326 2.2994 59.4619C2.43157 59.7714 2.56992 60.0945 2.71108 60.4368C3.11939 61.4289 3.58591 62.7856 3.8823 63.6748V71.722H64.0602V63.6751C64.3563 62.7856 64.8231 61.4291 65.2311 60.4368C65.3725 60.0942 65.5112 59.7714 65.6431 59.4619C66.3402 57.8328 66.9419 56.4261 66.9419 54.5678C66.9419 52.2312 65.8129 47.6707 64.8461 44.4743C64.3613 42.8722 64.0756 41.3565 63.9156 40.3145ZM54.7875 45.4117C55.5417 47.9046 56.2478 53.2224 56.2478 54.5786C56.2478 55.7607 55.7393 58.0319 55.1601 59.4389C54.7821 60.3563 54.3842 61.9842 54.1486 63.0271H49.8006C49.9603 61.951 50.1364 60.9814 50.2455 60.7059C50.789 59.3875 51.1568 55.5628 51.1568 54.5884C51.1568 53.5949 50.6827 46.622 50.077 44.6204C49.849 43.8675 49.6915 41.9647 49.6105 40.3735H53.9388C54.0544 41.6959 54.3013 43.8042 54.7875 45.4117ZM13.7933 63.0271C13.5577 61.9842 13.1598 60.3566 12.7818 59.4389C12.2026 58.0319 11.6944 55.761 11.6944 54.5786C11.6944 53.2224 12.4005 47.9046 13.1544 45.4117C13.6406 43.8042 13.8875 41.6959 14.0031 40.3732H18.3314C18.2504 41.9647 18.0926 43.8672 17.8649 44.6201C17.2594 46.6217 16.785 53.5946 16.785 54.5881C16.785 55.5625 17.1531 59.3872 17.6964 60.7056C17.8055 60.9811 17.9816 61.9508 18.1416 63.0268H13.7933V63.0271ZM20.9761 63.0271C20.8091 61.836 20.5487 60.2377 20.2753 59.5729C19.9697 58.8304 19.5875 55.4997 19.5875 54.5884C19.5875 53.5804 20.0757 47.0192 20.5391 45.4852C20.8968 44.3025 21.0647 41.8866 21.1372 40.3735H25.456C25.4152 42.3358 25.3339 44.2839 25.2417 44.7213C24.8708 46.0556 24.6776 54.5193 24.6776 54.5989C24.6776 54.6463 24.7946 59.4953 25.1444 60.7088C25.2018 60.9729 25.2855 61.9403 25.3603 63.0271H20.9761ZM28.1715 63.0271C28.0149 60.6152 27.887 60.0381 27.8029 59.7978C27.6598 59.0751 27.4798 55.2443 27.4798 54.5989C27.4798 53.8358 27.723 46.5049 27.932 45.5302C28.1302 44.823 28.2199 42.5488 28.2601 40.3735H32.5701V63.0271H28.1715ZM35.3718 40.3735H39.6823C39.7223 42.5488 39.812 44.823 40.0102 45.5302C40.2192 46.5049 40.4624 53.8358 40.4624 54.5989C40.4624 55.2443 40.2821 59.0748 40.1396 59.7978C40.0552 60.0381 39.9273 60.6152 39.7706 63.0271H35.3715V40.3735H35.3718ZM42.7005 44.721C42.608 44.2836 42.5267 42.3355 42.4859 40.3732H46.8049C46.8778 41.8863 47.0451 44.3022 47.4028 45.4849C47.8665 47.0189 48.3549 53.5801 48.3549 54.5881C48.3549 55.4997 47.9731 58.8304 47.6674 59.5726C47.3941 60.2375 47.1337 61.8357 46.9664 63.0268H42.5821C42.6569 61.9403 42.7404 60.9729 42.7981 60.7085C43.1473 59.4947 43.264 54.646 43.264 54.5986C43.264 54.519 43.0714 46.0553 42.7005 44.721ZM5.77058 45.3382C6.37067 43.3537 6.69237 41.5175 6.8535 40.3732H11.1888C11.0775 41.5655 10.8629 43.284 10.4805 44.5478C9.61154 47.4196 8.89222 52.962 8.89222 54.5786C8.89222 56.1538 9.46841 58.7868 10.2038 60.5716C10.4265 61.113 10.6939 62.1231 10.9104 63.0268H6.62938C6.33383 62.1295 5.78408 60.5057 5.28916 59.3035C5.14265 58.9481 4.99896 58.6122 4.86145 58.2914C4.22368 56.8001 3.80187 55.8147 3.80187 54.5684C3.80187 52.9649 4.61118 49.1696 5.77058 45.3382ZM61.2585 68.8272H6.68421V65.9225H61.2585V68.8272ZM63.0807 58.2914C62.9429 58.6122 62.7998 58.9484 62.6527 59.3035C62.1587 60.506 61.6086 62.1298 61.3131 63.0268H57.0315C57.248 62.1231 57.5157 61.113 57.7387 60.5716C58.4741 58.7868 59.0497 56.1538 59.0497 54.5786C59.0497 52.9623 58.3306 47.4196 57.462 44.5478C57.0793 43.2837 56.865 41.5652 56.7534 40.3732H61.0887C61.2495 41.5175 61.5715 43.3537 62.1713 45.3382C63.331 49.1696 64.1403 52.9646 64.1403 54.5681C64.1406 55.8144 63.7188 56.8001 63.0807 58.2914Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M19.0273 19.1961H32.5706V34.9221H35.3725V19.1961H48.9155V34.9221H51.718V0.78186H16.2253V34.9221H19.0273V19.1961ZM35.3725 3.67727H48.9155V16.3004H35.3725V3.67727ZM19.0273 3.67727H32.5706V16.3004H19.0273V3.67727Z"
            fill="#636363"
            fill-opacity="0.89"
          />
        </svg>

        <h6 class="mt-4 text-gray-300 text-xs">Balcony</h6>
      </div>
      <div class="flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="70"
          viewBox="0 0 97 83"
          fill="none"
        >
          <path
            d="M83.9326 82.6348H90.0342C90.8432 82.6348 91.4992 81.9881 91.4992 81.1905V41.7133H95.2224C96.0314 41.7133 96.6873 41.0666 96.6873 40.269V35.3339C96.6873 34.5363 96.0314 33.8896 95.2224 33.8896H67.2837L66.1171 30.4566H80.997C81.806 30.4566 82.4619 29.8099 82.4619 29.0123V23.5356V2.22614C82.4619 1.42854 81.806 0.78186 80.997 0.78186H37.6168C36.8078 0.78186 36.1519 1.42854 36.1519 2.22614V23.5356V29.0123C36.1519 29.8099 36.8078 30.4566 37.6168 30.4566H52.4971L51.3302 33.8896H25.9025C26.4689 32.978 26.8128 31.9176 26.8128 30.7726V22.2754C26.8128 21.4778 26.1568 20.8311 25.3478 20.8311H14.9186C14.1095 20.8311 13.4536 21.4778 13.4536 22.2754V23.3763H10.6946C9.88562 23.3763 9.22968 24.0229 9.22968 24.8205V28.4672C9.22968 30.6971 11.0695 32.5109 13.3313 32.5109H13.7446C13.8958 32.9994 14.0984 33.4624 14.3638 33.8896H1.46496C0.655941 33.8896 0 34.5363 0 35.3339V40.269C0 41.0666 0.655941 41.7133 1.46496 41.7133H5.18816V81.1905C5.18816 81.9881 5.8441 82.6348 6.65312 82.6348H12.7547C13.5638 82.6348 14.2197 81.9881 14.2197 81.1905V41.7133H43.3329V55.2802V70.2921C43.3329 71.0897 43.9888 71.7364 44.7979 71.7364H82.4676V81.1905C82.4676 81.9881 83.1236 82.6348 83.9326 82.6348ZM12.9844 29.5709C12.5072 29.4242 12.1596 28.9848 12.1596 28.4672V26.2648H12.9844V29.5709ZM88.5693 79.7462H85.3976V70.2921V55.2802V41.7133H88.5693V79.7462ZM79.532 3.67042V22.0914H39.0818V3.67042H79.532ZM39.0818 24.9799H79.532V27.5681H64.0813H54.5333H39.0818V24.9799ZM55.5876 30.4566H63.0269L64.1936 33.8896H54.4202L55.5876 30.4566ZM16.3835 30.7726V23.7197H23.8829V30.7726C23.8829 32.4912 22.4644 33.8896 20.7212 33.8896H19.5445C17.8013 33.8896 16.3835 32.4912 16.3835 30.7726ZM2.92992 36.7782H19.5445H20.7212H52.3845H66.2293H93.7574V38.8247H90.0342H83.9326H44.7979H12.7547H6.65312H2.92992V36.7782ZM11.2898 79.7462H8.11808V41.7133H11.2898V79.7462ZM82.4676 41.7133V53.8359H46.2628V41.7133H82.4676ZM46.2628 68.8478V56.7245H82.4676V68.8478H46.2628Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M59.2654 46.578H69.3704C70.1785 46.578 70.8338 45.9285 70.8338 45.1274C70.8338 44.3264 70.1785 43.6769 69.3704 43.6769H59.2654C58.4572 43.6769 57.802 44.3264 57.802 45.1274C57.802 45.9285 58.4572 46.578 59.2654 46.578Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M69.3704 58.8042H59.2654C58.4572 58.8042 57.802 59.4537 57.802 60.2548C57.802 61.0558 58.4572 61.7053 59.2654 61.7053H69.3704C70.1785 61.7053 70.8338 61.0558 70.8338 60.2548C70.8338 59.4537 70.1785 58.8042 69.3704 58.8042Z"
            fill="#636363"
            fill-opacity="0.89"
          />
        </svg>

        <h6 class="mt-4 text-gray-300 text-xs">Desk & Chair</h6>
      </div>
      <div class="flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="70"
          viewBox="0 0 95 70"
          fill="none"
        >
          <path
            d="M2.28882e-05 0.78186H94.1221V4.78332H2.28882e-05V0.78186Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M40.5516 58.5809H53.7842V64.3608H40.5516V58.5809Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M30.0937 64.583H64.0288V69.4737H30.0937V64.583Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M2.28882e-05 54.5792H94.1221V58.5807H2.28882e-05V54.5792Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M90.2804 0.78186H94.1221V58.5808H90.2804V0.78186Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M8.10623e-05 0.781921H3.8418V58.5808H8.10623e-05V0.781921Z"
            fill="#636363"
            fill-opacity="0.89"
          />
        </svg>

        <h6 class="mt-4 text-gray-300 text-xs">TV</h6>
      </div>
      <div class="flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="70"
          viewBox="0 0 88 71"
          fill="none"
        >
          <path
            d="M25.6591 46.3643C24.8548 47.2223 24.8548 48.5094 25.6591 49.3674C26.4635 50.2254 27.6699 50.2254 28.4742 49.3674C36.819 40.4654 50.4923 40.4654 58.8371 49.3674C59.2392 49.7964 59.7419 50.0109 60.2446 50.0109C60.7473 50.0109 61.25 49.7964 61.6522 49.3674C62.4565 48.5094 62.4565 47.2223 61.6522 46.3643C51.6988 35.7462 35.6125 35.7462 25.6591 46.3643Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M13.1921 33.065C12.3878 33.923 12.3878 35.21 13.1921 36.0681C13.9964 36.9261 15.2029 36.9261 16.0072 36.0681C31.2891 19.7656 56.0218 19.7656 71.3037 36.0681C71.7059 36.4971 72.2086 36.7116 72.7113 36.7116C73.214 36.7116 73.7167 36.4971 74.1188 36.0681C74.9231 35.21 74.9231 33.923 74.1188 33.065C57.3288 15.1537 29.9821 15.1537 13.1921 33.065Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M0.725305 19.7657C-0.0790079 20.6237 -0.0790079 21.9107 0.725305 22.7687C1.52962 23.6268 2.73609 23.6268 3.5404 22.7687C25.659 -0.826936 61.652 -0.826936 83.6701 22.7687C84.0722 23.1978 84.5749 23.4123 85.0776 23.4123C85.5803 23.4123 86.083 23.1978 86.4852 22.7687C87.2895 21.9107 87.2895 20.6237 86.4852 19.7657C62.959 -5.54607 24.352 -5.54607 0.725305 19.7657Z"
            fill="#636363"
            fill-opacity="0.89"
          />
          <path
            d="M43.1524 70.6035C47.3724 70.6035 50.7934 66.9541 50.7934 62.4523C50.7934 57.9505 47.3724 54.301 43.1524 54.301C38.9325 54.301 35.5115 57.9505 35.5115 62.4523C35.5115 66.9541 38.9325 70.6035 43.1524 70.6035Z"
            fill="#636363"
            fill-opacity="0.89"
          />
        </svg>

        <h6 class="mt-4 text-gray-300 text-xs">Wi-Fi</h6>
      </div>
      <div class="flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="70"
          viewBox="0 0 72 84"
          fill="none"
        >
          <path
            d="M63.9066 1.78186H8.2702C6.63068 1.78186 5.05831 2.43021 3.89899 3.58428C2.73968 4.73835 2.08838 6.30361 2.08838 7.93571V75.628C2.08838 77.2601 2.73968 78.8254 3.89899 79.9794C5.05831 81.1335 6.63068 81.7819 8.2702 81.7819H63.9066C65.5461 81.7819 67.1184 81.1335 68.2778 79.9794C69.4371 78.8254 70.0884 77.2601 70.0884 75.628V7.93571C70.0884 6.30361 69.4371 4.73835 68.2778 3.58428C67.1184 2.43021 65.5461 1.78186 63.9066 1.78186Z"
            stroke="#747474"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M54.3804 54.0896H49.1815C44.6378 54.0896 40.156 53.0373 36.0884 51.0126C32.0231 48.9892 27.5404 47.9357 22.9953 47.9357H17.8026M2.08838 20.2434H70.0884M54.6338 51.0126C54.6338 53.437 54.1541 55.8377 53.2221 58.0776C52.2901 60.3174 50.9241 62.3526 49.202 64.0669C47.4799 65.7812 45.4355 67.1411 43.1854 68.0689C40.9354 68.9967 38.5238 69.4742 36.0884 69.4742C33.653 69.4742 31.2414 68.9967 28.9913 68.0689C26.7413 67.1411 24.6969 65.7812 22.9748 64.0669C21.2527 62.3526 19.8866 60.3174 18.9546 58.0776C18.0226 55.8377 17.5429 53.437 17.5429 51.0126C17.5429 46.1163 19.4968 41.4206 22.9748 37.9584C26.4527 34.4962 31.1698 32.5511 36.0884 32.5511C41.0069 32.5511 45.724 34.4962 49.202 37.9584C52.6799 41.4206 54.6338 46.1163 54.6338 51.0126Z"
            stroke="#747474"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <h6 class="mt-4 text-gray-300 text-xs">Laundry</h6>
      </div>
      <div class="flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="68"
          height="70"
          viewBox="0 0 81 81"
          fill="none"
        >
          <g clip-path="url(#clip0_390_20)">
            <path
              d="M41.3169 71.9453C36.8969 71.4183 32.5081 70.2651 28.1504 68.4858C23.7927 66.7036 19.8445 64.1068 16.3057 60.6955C12.764 57.287 9.823 52.9633 7.48267 47.7245C5.1395 42.4885 3.77667 36.1772 3.39417 28.7907L3.23267 25.3568L6.50092 25.5182C9.45892 25.6826 17.0409 27.758 17.0409 27.758C21.1124 29.0897 24.5691 30.7854 27.4109 32.8452C27.7679 27.5157 29.084 21.9043 31.3592 16.011C33.6343 10.1177 36.4634 5.114 39.8464 1C43.2294 5.114 46.0585 10.1446 48.3337 16.0918C50.6088 22.0417 51.9263 27.6801 52.2862 33.0068C54.9608 31.1084 58.2787 29.4268 62.2397 27.962C66.2007 26.4972 69.7976 25.6826 73.0304 25.5182L76.4602 25.3568L76.2987 28.9522C76.0805 34.8172 75.1682 40.0816 73.5617 44.7453C71.9523 49.4089 69.6786 53.5003 66.7404 57.0193C63.7994 60.5383 60.2195 63.5274 56.0007 65.9867C51.779 68.4489 46.8844 70.4351 41.3169 71.9453ZM41.2702 67.6443C40.491 55.8859 37.0017 46.9963 30.8024 40.9755C24.6031 34.9547 16.9007 31.2359 7.69517 29.8193C8.47433 41.9317 12.0684 50.963 18.4774 56.913C24.8864 62.863 32.484 66.4401 41.2702 67.6443ZM39.8464 46.2158C40.8013 44.4393 42.0252 42.5834 43.5184 40.6482C45.0116 38.7131 46.5501 37.0868 48.1339 35.7692C48.0999 31.4059 47.3576 26.8513 45.9069 22.1055C44.4534 17.3597 42.4333 12.815 39.8464 8.4715C37.2596 12.815 35.2394 17.3597 33.7859 22.1055C32.3353 26.8513 31.5929 31.4059 31.5589 35.7692C33.1399 37.0811 34.6685 38.706 36.1447 40.644C37.6208 42.582 38.8548 44.4378 39.8464 46.2115M45.5202 66.2205C48.8493 65.0985 52.0397 63.6138 55.0912 61.7665C58.1427 59.9192 60.8768 57.5562 63.2937 54.6775C65.7077 51.7988 67.6867 48.3237 69.2309 44.2523C70.7779 40.1836 71.7002 35.3726 71.9977 29.8193C65.1212 30.8109 59.0054 33.2292 53.6504 37.074C48.2954 40.916 44.435 45.6307 42.0692 51.218C42.9192 53.4847 43.6176 55.7726 44.1644 58.0818C44.7141 60.3909 45.166 63.1038 45.5202 66.2205Z"
              fill="#747474"
            />
          </g>
          <defs>
            <clipPath id="clip0_390_20">
              <rect
                width="80"
                height="80"
                fill="white"
                transform="translate(0.0883789 0.78186)"
              />
            </clipPath>
          </defs>
        </svg>
        <h6 class="mt-4 text-gray-300 text-xs">Spa</h6>
      </div>
    </div>
    <p
      class="md:text-xl text-base text-gray-300 text-center mt-20 max-w-[80ch] mx-auto"
    >
      The Master Suite provides an ambience of comfort, elegance and luxury to
      welcome business and leisure travelers. The interior exudes a light
      atmosphere with tasteful tones reflecting the distinctive, individual
      style of Andrew Martin, the renowned British interior designer.
    </p>
    <p
      class="md:text-xl text-base text-gray-300 text-center mt-8 max-w-[80ch] mx-auto"
    >
      The luxuriously elegant suites at the award-winning Grand Palace Hotel are
      designed to satisfy the most discerning tastes. The welcoming atmosphere,
      together with the impeccable service of our staff, ensures that our guests
      will enjoy their experience in Riga, and take with them many fond memories
      of this historic city.
    </p>
    <!-- single room slider -->
    <div class="wrapper max-w-lg h-auto mx-auto mt-10 md:mt-20">
      <div id="main-slider" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li
              v-for="(slide, index) in slides"
              :key="index"
              class="splide__slide"
            >
              <img :src="slide.src" :alt="slide.alt" />
            </li>
          </ul>
        </div>
      </div>

      <div id="thumbnail-slider" class="splide">
        <div class="splide__track">
          <ul class="splide__list">
            <li
              v-for="(slide, index) in slides"
              :key="index"
              class="splide__slide"
            >
              <img :src="slide.src" :alt="slide.alt" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Bottom line details about the room -->
    <div class="flex flex-row gap-4 justify-center mt-4">
      <h5 class="md:text-sm text-xs text-black-200 pl-4">
        Size: <span class="italic">49 m<sup>2</sup></span>
      </h5>
      <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
        Beds: 01 King
      </h5>
      <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
        Occupancy: 03 Adults / 02 Adults & 02 Kids
      </h5>
      <h5 class="md:text-sm text-xs text-black-200 border-l pl-4">
        View: Direct Pool
      </h5>
    </div>
    <!-- room detils section -->
    <h3 class="text-black-200 md:text-4xl text-3xl text-center mt-10">
      Details
    </h3>
    <ul
      class="max-w-md text-base space-y-4 text-black-200 list-disc dark:text-gray-400 mx-auto mt-10 list-outside"
    >
      <li><strong>Beds:</strong> King Bed or Two Double Queens.</li>
      <li><strong>Size:</strong> 455 Square Feet</li>
      <li><strong>Views:</strong> West and East city views.</li>
      <li>
        <strong>Occupancy:</strong> 2 adults, or 2 adults + 1 child. Two double
        beds: 4 guests, including up to 3 children.
      </li>
      <li><strong>Bathroom:</strong> One full granite bathroom.</li>
      <li>
        <strong>Features: </strong> Soothing, modern design, and
        floor-to-ceiling windows.
      </li>
    </ul>
    <div class="flex items-baseline justify-center mt-20">
      <span class="border-t border-black w-1/4 mx-4"></span>
      <button
        type="button"
        class="mt-8 buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-sm md:text-base text-sm whitespace-pre px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 uppercase"
      >
        check availability
      </button>
      <span class="border-t border-black w-1/4 mx-4"></span>
    </div>
    <h2 class="uppercase text-black-100 md:text-4xl text-3xl text-center mt-16">
      EXPLORE OTHER ROOMS
    </h2>
    <!-- images of other rooms  -->
    <div
      class="lg:flex lg:flex-row grid grid-cols-1 justify-center items-center justify-items-center gap-4 my-20"
    >
      <div class="flex flex-col gap-4">
        <img
          src="../public/img/junior.png"
          alt="roomImg"
          class="h-auto max-w-xs"
        />
        <h3 class="text-xl text-black-200 font-medium lg:text-center">
          Junior Suite
        </h3>
        <h6
          class="text-sm text-black-200 font-light max-w-[30ch] lg:mx-auto lg:text-center"
        >
          With a panoramic view overlooking our grounds and direct access to the
          south facing porch, the Master Suite provides warmth and brightness
          for a peaceful getaway.
        </h6>
        <h6 class="text-red-100 font-bold text-sm lg:text-center">
          VIEW DETAILS
        </h6>
      </div>
      <div class="flex flex-col gap-4">
        <img
          src="../public/img/master.png"
          alt="roomImg"
          class="h-auto max-w-xs"
        />
        <h3 class="text-xl text-black-200 font-medium lg:text-center">
          Master Suite
        </h3>
        <h6
          class="text-sm text-black-200 font-light max-w-[30ch] lg:mx-auto lg:text-center"
        >
          With a panoramic view overlooking our grounds and direct access to the
          south facing porch, the Master Suite provides warmth and brightness
          for a peaceful getaway.
        </h6>
        <h6 class="text-red-100 font-bold text-sm lg:text-center">
          VIEW DETAILS
        </h6>
      </div>
      <div class="flex flex-col gap-4">
        <img
          src="../public/img/executive.png"
          alt="roomImg"
          class="h-auto max-w-xs"
        />
        <h3 class="text-xl text-black-200 font-medium lg:text-center">
          Executive Suite
        </h3>
        <h6
          class="text-sm text-black-200 font-light max-w-[30ch] lg:mx-auto lg:text-center"
        >
          With a panoramic view overlooking our grounds and direct access to the
          south facing porch, the Master Suite provides warmth and brightness
          for a peaceful getaway.
        </h6>
        <h6 class="text-red-100 font-bold text-sm lg:text-center">
          VIEW DETAILS
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from "vue";
import Splide from "@splidejs/splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css"; // Import Splide CSS theme

export default defineComponent({
  name: "ImageSlider",

  setup() {
    const slides = ref([
      { src: "/img/slider.png", alt: "Image 1" },
      { src: "/img/room.png", alt: "Image 2" },
      { src: "/img/room.png", alt: "Image 3" },
      { src: "/img/room.png", alt: "Image 3" },
      { src: "/img/room.png", alt: "Image 3" },
      { src: "/img/room.png", alt: "Image 3" },
      // Add more images as needed
    ]);

    onMounted(() => {
      const main = new Splide("#main-slider", {
        type: "fade",
        heightRatio: 0.5,
        pagination: false,
        arrows: false,
        cover: true,
      });

      const thumbnails = new Splide("#thumbnail-slider", {
        rewind: true,
        fixedWidth: 104,
        fixedHeight: 58,
        isNavigation: true,
        gap: 10,
        focus: "center",
        pagination: false,
        cover: true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints: {
          640: {
            fixedWidth: 66,
            fixedHeight: 38,
          },
        },
      });

      main.sync(thumbnails);
      main.mount();
      thumbnails.mount();
    });

    return {
      slides,
    };
  },
});
</script>

<style scoped>
h2 {
  font-family: "Philosopher", sans-serif;
}
p,
h3,
.buttontext {
  font-family: "Work Sans", sans-serif;
}
h6,
ul li {
  font-family: "Open Sans", sans-serif;
}
</style>

