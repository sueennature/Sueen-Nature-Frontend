<template>
  <div class="container my-28">
    <div class="grid lg:grid-cols-2 grid-cols-1 gap-x-4 gap-y-16">
      <div>
        <h2 class="text-black-100 md:text-4xl text-3xl text-left">Deluxe Room</h2>
        <div class="flex md:text-xl text-lg font-light mt-4">
          <span class="mr-2">28 m²</span>
          <span class="mr-2">/</span>
          <span class="mr-2">Partial Lake View</span>
          <span class="mr-2">/</span>
          <span>2 Guests</span>
        </div>
        <!-- 1st section -->
        <div class="md:flex grid grid-cols-2 justify-items-start md:space-x-8 gap-4 mt-8">
          <div
            class="flex flex-row justify-center items-center md:text-2xl text-lg space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" fill="url(#pattern32)" />
              <defs>
                <pattern
                  id="pattern32"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_323"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_323"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAqhSURBVHic7Z17sFVVGcB/91KCoSAEWgjOxfF11QJCmVSI0nDMR5aovV/GWGqPSZzI7KFNmqI1ZRM12VjKaE7Sw+hFqUVwUzIQEq20kCuG0UVMJBAul9sf397dvdfZ5+zXWnufc/b3m1lzz9qPtb979nfWWnvt7wG1jANuAjYA/cBgzrIFmBtxna8BOy20r6Vx6ffu5Y3AyyPuQ4gjgaccCPG0cZ2pTfDFVLH0AkcEb0Rn4PMwYAkwCfv0GfXngL0OrqM05jDgbuReA9AR2Hk2sDRQHwD+CPw350WfBa4B/mJsPx94PzA8Z/tKY0YCMwjcdOAs4BfmgdcR7i4uKkI6pRDmEb631/o7gkPAQcZJD7iXSymIHqM+xv/QiVJpVAEqThoFOATpSgYo/3FGS3QZAFYCB9e5hzWkUYDLgJNTnqMUSydwCnKvEp+QlHGpxVHKYnzSA1+S4yIPUH+N4Chk0cFnFfBCjmsFmQQcHaj/Gfh3gvOOB14RqK8AdhvHjAVek1Gu54GHjG0TgWMC9UeQpfG0xMk+EjgpQ7shFhEeT7pT7g/yFePYaXmFC/Axo+3zEp53h3HehIhj5hjH3Aq8sUF5MXDsgxHtXWq0d2FCWU0WG+1MNPZ3G/sXJd2fpweoAv8A7m2wf1/M+YOW5OiIPyQbOqFzy/NGvStjO4cb9ecytlODKoBb/mrU3wnsl7KN44HpgfpT5H8/83+KGgJuAP5jqa0jLbVTBA8DTwKTvfoU5G3cZdS+IjfpAGYh85Cg0vzIpoBFKcCcgq7TbAwCnwduD2x7s1c2I5PIeoyl9v3MDmChTQF1EuiexcAbgA8Y26OeQhoxALwPeMaGUD46ByiGecjr9v6M528BzsFy9w/F9QCvRxZsbHAxcL2ltopiH3AVcBtiZzGL8MJOFP3ARsRw41ak+7dOUQqwHXuPLrsstVMGjwOfKluIIDoEhDF/ZQc2OHY4YXM2J79Q16gChOk16mcQtqULcibh7+9JJxI5RhUgzGZgXaA+BfhMxHGvRPwagvzKlVAuUQWo5atG/WrgZ8C5yLv2y4H1hM3n/07Yorpl0HWAWhYD7wFODWw7yytRDACXAHscy+UE7QFqGQAuIJlV9B7kGb/RG8OmRhUgmm3I6t011J/d/wGYCXyvIJmcoENAfXYj4/9C5F1GN2J5sxlYDjxWmmQWUQWIZydwj1faDh0CKo72AM3BGIasfjZg0eInDu0ByuUU5AmiD/iTV/qA+5AJpnNUAcrjCuD3wGmEl5uHIWsQy4EFroVQBSiHdyMhWxp9/53Ia+/3uhREFaB4DkT8JoJsAW4Bvg38y9j3ZWBUymtchKxl+CXKZwFQBSiDtxB23VoHHIsYunwIOA5YG9g/DnhrymsMRyaWfqmrQKoAxWO6cC1AfqU+24BPxpxjDX0MLJ4xRt30HYDaeEpjU16jD/Ef8BmB9Cw1qAIUj+nIeiK1higzjHpah9IliF+iTzd1lq51CCie5Ub9RsLOLkcggTobnWONonqAQ6n1k8tKbLTLOuccYGybhPwai45X+HPE2rfLq3chFtMrEUeSWUiX7dOLGKQ4wZUCbDfqLq1l4hRrPvJGz+ztHkTs+GYib/iKYjcy4/8lQwtAIxB3c5MB5MmgkQdRLlwNAc66LIMdwOqYYxZQ//+cDLzDqkTJ+A3iKLqzwTG7kAWjZS4FcaUAvwW+5ahtn37EyTLO6fTRmP3r7YiTmh8gM/NbgK2B7c8C3/H23eVaCJdzgEuAHyPr2uajT142Ie/nH0lw7IXAR6j1xNmLvHRx+guLYSMyHFzM0KPetrpHO8D1JPDXXimTPsRDt9kp9Mb76GNgxVEFqDiqABVHFaDiqAJUHFWAitMuCjAaCaWWNgRb5WkHBZgMPIFY1K5AlSAV7aAAcxkysZpB9mDPlSTPSuAyske9som5zPyyUqRITgfwJSTq10+BK8sUJo8CuMgvWAVOZcje/1jkzeD9ZQmjJmFh9idsjOGCo436YZFHFUQeBdiOGCyUzQjkxuXlC8CnqR8Uqi3JowCvpdZ6tQzmE7ahyxJJexQSyLEdJsWpaId/eAlD3jQ9wJoMbYyiPb4Ln3chyS78UtfmoR3mAL2IVe1kpEeyYeTZi+RNdkEXYgruklEkdCdrBwUAsQ1MYh2UlBVIpDAXzEV6LR9bybQykUcB5pEsW5cL+hFT6t/RemnolyH+gFMQH0AXASa3E7YzfCl1HtvzKMDlOc61xUNI/L6+sgVJwQ7gBOSGbMKNAt9BRTyDTqTWi6YV2Iv4JJTee7W6AoAEbVYykmcI+ATwz0D91YQDK9+FgwwXHp9DsmmB+M93Ep/DT4kg78ug4EKQ6aCxHsmQ5YIPO2q3crTDEKDkQBWg4qgCVBxVgIqjClBx2uVdQLszmsaRUSZmbVgVoHnpRKKDfJxaKyJrqAI0J8OA7yOpa5yic4DmZD4F3HzQHqAZGYZEEg+yxiv1lrsPQiKhpCaPAtxNOHqVaYFyKelj3CblqMDnvUh4tXbhGMKxhO9HIog1+h+7KUEBIkOPBpjgFdc8RnspgDnb78Hh/9cOc4Avli2AZTqMutO3nK3qF7APCbJ8E/CTkmRoC9rBL0DJQTsMAUoOVAEqjipAxVEFqDit6hhim9FG/Tiic/btBJ5G7Pkfpjm8o3PR6o4hrpjmlUb0IRE+vkl8yPqmJc0QsMuZFK3JeOCDiHfSnbRoxJQ0CnAn4takhOlAkk6sRtK9tBRphoDVSIbrV5F+8ngBEhPf57M0yGaZgzcRHpquR3IC2GI0kv9oFnAG4TxE45FE0G9H8iS0BGnnAH1kC2g01aivRb4s23QZ9UcdXedmJAXsFV7xI5PtByxG8hCtjT61udDHwOy8gCSiOJlw3r+RiEucjbhFzgkqgDnJO7RIQVqYdcBswo/Ek4GPliNOOoJDgBlh47teyRJ0yeR1Rn0u8fYEWTBDr5yNXUXeCayiNnxML5IFLDjcXAksooUmzqOQMX5QS2xZQXR8v3uM486P/dZrmW20cXWCc7qNcxYl3R8cArYjeeebIfxrszMTyY1oWu983aifW4w42TEngUuB02iRGWzJdCFxCoIsJ5zJ1EwC3XREPQauQJZBD0e6ObUcHmIqsrbgRxN9G+K44dOPhK4/wasXYROZi0Y3d4NXlCHuBeYAp3v1Q5D1gGCot2cCnw+I2B+HaQPo9Aeo6wDpMW+mmaBiT8z+OLYY9TNxGAJfu/fm4wnC6eWnIRHFNjU4J3OEc1WA5mMQWWG8LbDtYK9YR4eA5uR24LoiLqQK0LxchbiELaV2XmANHQKam/tI9jq7bijYOLQHqDiqABVHFaDiqAJUHFWAiqMKUHH0MdA9P8S9jcXIrCeqArhndtkCNEKHAPtsjT/EOYlzKKkC2GchEtKtjMBV+4CVwDeSnqBDgH02ANPLFiIp2gNUHFWA/Jhh3VoKVYD0mMmxTipFinTMNOrb/A86B0hPDxIXwGcJ4in0YvThsWxFLIAeR6x+rqXWyTUPI6k1T++x2H7l2B+x2bPpabTKa3ux5XajyhoCPb8OAenZBZyH3XzF47y/jbKC2KAXidWgSTYtMAFxBdvIUMTyLGUzcI7X5nTgbznaiiq+s8oNwFjzn/gf672+E2TTzRwAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
            <span>28 m²</span>
          </div>
          <div
            class="flex flex-row justify-center items-center md:text-2xl text-lg space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" fill="url(#pattern48)" />
              <defs>
                <pattern
                  id="pattern48"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_331"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_331"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <span>2 Guests</span>
          </div>
          <div
            class="flex flex-row justify-center items-center md:text-2xl text-lg space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" fill="url(#pattern45)" />
              <defs>
                <pattern
                  id="pattern45"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_337"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_337"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <span>2 Beds</span>
          </div>
          <div
            class="flex flex-row justify-center items-center md:text-2xl text-lg space-x-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect width="24" height="24" fill="url(#pattern44)" />
              <defs>
                <pattern
                  id="pattern44"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_340"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_340"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <span>1 Bathroom</span>
          </div>
        </div>

        <p class="text-black-200 md:text-xl text-lg mt-10 font-light">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus
        </p>
        <p class="text-black-200 md:text-xl text-lg mt-16 font-light">
          Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
          Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
          aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
          imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
          mollis pretium. Integer tincidunt.
        </p>
        <h2 class="text-black-100 md:text-4xl text-3xl text-left mt-16">Room Amenities</h2>
        <!-- 2nd section (Room Amenities) section -->
        <div class="grid grid-cols-2 mt-6 gap-6">
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_352"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_352"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Air conditioner</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern2)" />
              <defs>
                <pattern
                  id="pattern2"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_354"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_354"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Wifi & Internet</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern3)" />
              <defs>
                <pattern
                  id="pattern3"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_359"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_359"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Safe Box</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern4)" />
              <defs>
                <pattern
                  id="pattern4"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_360"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_360"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAA06SURBVHic7Z17sFVVGcB/90JceQoooJKCIogiQqD4GrMGiEqocUaTzCTJHmP9YS9txjTHQXNqakI0dShDLQwc8znoSNqQGiFY8ghFVMAHknAVBC6ve+/pj+9sz1rr7L3P3vvs1z1r/2bW3LPO2met7+797W+t9a0XFAD0BG4GtgAlJbQBK4CLshOtIGm6AUvRH7xbuDorAQuS5VJqP/wScAAYmJGMidE9awFywGQjvgLYXf58PDCi/LkHMA14ICW5UqFQgOp7cBnwevnz54EnlbSTUpEoRZqzFiAHvGvEhymft/ikNQSFBYDNRtxUgBLQVI4PT0EekyOAIUgV1ApsBTriyrxQgOq3fLjyuQ3YDgwux9OwAGOALwFfAM5EHrzKAWA58Gg5bEpBpoZmNHprf4GR/qKSdhDpNibBOGAx0EmwXokTHgdGJiSTFfREv+nLjPTF6Df8uJjL7wHMJfyDV8NB4FYiKGdRBcA+4H2knoVqM+/WEHwrprKHAo8Ap3ukbwBeAd5DntXRiMU60bjuE8C1wHhgJrAzJvms4V9U3qZD6C/G99DftstiKnMQsJ7qt3kHcAP+Dc5TgDmIv8L8/RqgX0wyWsMi9JuoWoHpRtrPYijvMOAlqh/eH4C+IfIZAix0yecJkmurNCS/RL+B5ytpY420+TGUd6uRZwcwu478rinnoeZ5Y30i2sVV6DfvciWtn5G2tM6yJiDVjJrnN+vME+A6I8824JMx5GsFF6DfvOuN9FYl7bU6y3rIKOveOvNzaAL+auR9T0x5NzxjqK6LVf6tpO0nugv9OPS3/0Ogf8S83BiGyKc2aH1HMIuxAKGWz19NbwGOiljOZeg9jDuJt8u2Bb2N0h2xbp4UCiDsQcy8w3AjfbMRj+oSPseIL4iYjx+LjfiXEyijIVmFPvlDfTmuRq8iZkbIvwkZV3DyeLseYX3oht5m8S2nyS+xARgM/BmYGODaPohHzWEncgNB3LW9lbQ2REnC0IRe37dTmXgShHeQruKqANeupOJdLCHu7rDyNgQ3E92/nsfwTMD/+zHjd4O8Lmz0NkDPrAWImV4BrzO9gJ1eFzb6YNDrRvxtZODHjb7AKCW+DX220GlUqoiDwNo4BKxBb2Twx8H8f7w4RvncAXwUm0RdjKnopvAWn2vHGdfebaSvUdL2kk77aYYh0w0BftOCPkjkqzSNXgWY/7zfxInNRtzPF9ALn3o1Rkx5Nwb4zWSkQevwnN/Fja4Ab6G3fv0UYBe6U2a4kb7ZiJvpSWCO+wepAszh6sdikqXLoo6578HfdL+sXNtmXPtjdHN8cRLCGpgrlmq5jcejjwrupUbDsdEtAOhmszd6A8lENfM9qcwSgvi8gWFQLdZ2/N3GLYhrWX2m8xBF9sQ2BYDo7QC/2cNJcBhwrBKvVf/fDpylxFuReQe+2KgAZr2q4jcolPYikRHoz8dLAVqQMYUrje+vJcBAk40KEMYCDFc+b0c3p0krQJAG4JlIK3+W8f0dVA9pu2KDAoTpCvq95SUjfXgdMgXBqwvYC9mv4GFkgcgZxnVLKJayazQjb67TMvbz4B2J3up+wkhfYqQnuVz8bqOs1cCbiBfSa6zgNhrfuxuJtejdOz/Lp3rR1hlpd6Lf8E/FLmmFZ/F+0GbYhj6PMTA2VAGgtwN64j9ZUjXzft5ASLYaCLLcaxdwE9JeuC9KIbaYC7MhOAt41eNadeVtH+TN2leODzWuvQD/e/gGMp/Q5Dik7vZ6Abu5lAUy3+814J/IiqK/I1VCQQ2uJJvx+06q5/uPQTx0YfK5n+pVwrFgSxUQdBg1bpqAC43vPkfwcX2H9ST0ptuiAEFG0ZJiiRF/hvDTsxKTv9HnBDo0Ia17Z17fDmQlTdKsB553+X4kcB7e7YfZiJPHYTzSDSyog9VU6tT95Hvx5D/Q2xG9/S+Pji1VAOhmtAV9oCVvqF3ArUijMRFsVQDI77YqfdCHoRNtvxQKkD9GorfNCgWIiTDDwlkSZR5gZGxWgLxaAFMxCwWIiW3oS7HyqgCpWgDbUNf5HyCfYyHPo3cBE13dZJMFAP1t6kH8e/7FgWoB3qEyEJUINisA5K8a6EdlW1pIwfwXCpAvUq//CwXIF4UCJEyhAAa2KcB2ZGcuB+sVwEZWUulmHSKhmTYRWU5Ftg5kdVCi2GYBQH+rupOvY2BUC/AWMmydKLYrAOSnGhiAHA/jkIr5LxQgPwqQSf1fKEChANZhbvZcKIBlfAh8oMStVgBbUY+I6UDmCGaNejpZOyl1T220AKC/Xc3IGcFZo04E2UxKS74KBRCyrgaORLqBDqmZ/0IBhKwVILP6v1AAoVAAyygUoIytCrALGRl0sFYBbOYF9K5gllvLq4dIHkQ/uCJRbLUAUN0VPCErQZA9AR02IcPUqVAoQIWsqoEhwOFKPFXzXyhAhawUINP6v1CACoUCWMZGpNHlUCiAZewB/qfErVQA20ltKxYf1EMqUt+6xmYLAPrb1oTeHUuDJvTu55voG1UmTqEAOmlXA0cjx9U5pG7+87Y8uhvwLWRbtCBb2HUiu3/9HplEoTID2ZTRb2LFKCP+w/Jv0sI8eWwk1cfVJcUW4K6UygrMHKJtyfpzI58pEfOxLTyTtypgfMTfnVYjXuDOuLwpwOIIv9kL/M74bhGysqbAnwfztlVsMzJhUz0G5W/ATz2uLyEbQbudjdsDOXc3tZG1nHMp0sZx2El1GygXnI007tS6alamEnV9xlK9RX2uzxW6C13YPeibJxcE52jESqr380Vybhlb0OfJlxCTNSlLobogg5Fzj9T72Eo+psHXZBiyrbsq/AdIF6+gNiOBV9DvXwcwLUuhwnIuMn9P/SfagZ9gz1kHUZiOLIEzH/53shQqKhOptgQlYBly/k5BhQHAXPQTxJ2X5ooM5aqbCci++aYSHAB+jf8xcDbQF+nibaf6Hu0DvpqdaPExmOqTO1VFuBeYSv7GN5JkIvArqs29E9bTYF7RJkTT9+Ht324FHkDaCVOQId6BdO02w+FIo/gc4CpgPrKA1OsedJavCXQ62VeQnbSzHpgoQjzhBeAsQvB+DoQuQn2hE6kepxLS0nWneky6oOuxDxlIWxr2h02IBjnsATbEJJRaxgQlvpvqfXrcaAFOVeKtSL2XZ4YCR7l8v5rqCSsg92Ys/m7Z/chMoXeRjSNHAcd4XHs10g0MhWpKloX9cQC6GWU8G/B3xxu/W5CAbElwIeK2VmWf7nLdZ4EVeJv1ZUj3zW37mtHAb6ke4NmHt3J4UihA/FyBLvsflbQJwFN4P/hVBJ+WdhL6KSglQjp88jYhpFF4EGmYOZyA+Ob/gjxgN3/8RuASZC7E0wHL2YBMo1MJ1aazyWmSJnuRutvph08C/ot7Xb8VuAm4h/Crgi8G5hnfbQqZR1EFJMCnqd11+wCZ6RT2KHkQ1/ejLnnuIMLilkIB4mUI8rZ7Pfi9wK3ou4IFpRnxBJojpCXE4rg1Nn2xtQoYiDS0+sWc7zHIA3Krh9sRM38T0qULy8mIe/dcl7R1yJHzKyPka50F6Iu/Hz0JL90iok/A7AHcgLzhbm/99dS5q6htCnAu8T5gv/A0MmIXlbOpntLlhOcQf0Dd2KYAfZE1A0m+8U8Cn6lTxnlUT+woIU6m7xLT6KaNbYDdiDNmGvEuB+9A1tu9ipz4GZXpyEKXY13SHgG+T7Q2hCe2WYC8MgS4D3er8h5weRKF5sECnIho9dvAbaS4RVqOmAYsRHonKiVk5fM1iOmPnTwowFNUNmboAfwiQ1my4i6qH/5rwLdJxip/TNZjAQPQd+U4w+vCBueA8vkQcAswjoQfPmRvAcyWbFeet1cPX0e8gx8hex2sSavgrBXAJnoB1wEXId3EH1HZD2glMDkLobqSAgxCDlZszVqQCExBtn5xNoQahThyHspMojJZK8CucnD2yvXb1OGLyGjXZmRM/aVyWIV+IHSeGAj8BunC5bZ6y9oPMAP4D/AwsvjDwfQD+IU3EH/7NYgp7Z/A/xGWmchGlG7yzif7l+9jslYAL8IogFvYCjwO3Igo2RGkw8l4r2DaRA5X53YVBdiI7Oy5m2gK0YlMoVqIrC46H32PvnqZhEzNbncpux2pCrLYibQmXUUBFij5nYJ0neYCzyPT2aMoRQeyhv5PwA+A84A+If6vCUjLfo1PGS+TY/9GbuqhEHQgix7XA/eXv+uGDI2ejgy/TkS2nKs13aq5/LvRwNfK33UiW6psKP/dScVR0xeZ9DGinL/fhJLtyOSPu8m5ezttCxA1LAhZbndk0cU3gNuB5UBbTLL4hT3Ig4+zekmURlUAN7ojLtbZwB3Iwgy/lcZhwguI7149/iX3dKUqYF0MebQjy7RWI/PzQKZqn0ql6piILLjwM+8lZLBmRTkspYvu82+uDdyJOFbiLkN1c36IOHCCUkJu8hz0QZOkGYJMyuiPmPM2ZCr3DmRF9d4UZUmUpOtEMwTtBRSkQDP6CZpp8H7K5RXU4BLS2yRiLdKHL8gJ/wcawt6lOQl4bwAAAABJRU5ErkJggg=="
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Welcome Drinks</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern14)" />
              <defs>
                <pattern
                  id="pattern14"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_362"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_362"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">In-room Refrigerator</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern5)" />
              <defs>
                <pattern
                  id="pattern5"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_353"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_353"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Cable TV</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern6)" />
              <defs>
                <pattern
                  id="pattern6"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_361"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_361"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Pet Friendly</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern7)" />
              <defs>
                <pattern
                  id="pattern7"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_358"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_358"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Espresso Machine</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern8)" />
              <defs>
                <pattern
                  id="pattern8"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_357"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_357"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Shampoo</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern9)" />
              <defs>
                <pattern
                  id="pattern9"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_356"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_356"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Slippers</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern10)" />
              <defs>
                <pattern
                  id="pattern10"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_355"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_355"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Towels</h5>
          </div>
          <div class="flex flex-row items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
            >
              <rect width="50" height="50" fill="url(#pattern11)" />
              <defs>
                <pattern
                  id="pattern11"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_470_383"
                    transform="scale(0.0078125)"
                  />
                </pattern>
                <image
                  id="image0_470_383"
                  width="128"
                  height="128"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
            <h5 class="md:text-xl text-lg text-black-200">Hair Dryer</h5>
          </div>
        </div>
        <h2 class="text-black-100 md:text-4xl text-3xl text-left mt-20">
          What’s included in this suite?
        </h2>
        <!-- 3rd section -->
        <ul
          class="max-w-lg space-y-4 text-black-200 md:text-xl text-lg list-disc list-inside dark:text-gray-400 mt-8"
        >
          <li>Private balcony</li>
          <li>140x200 cm Elite bed</li>
          <li>Upholstered seat beside the panoramic window</li>
          <li>TV-UHD screen for watching mountaineering films</li>
          <li>Writing desk with USB ports for documenting your adventures</li>
          <li>Room safe for your top mountain photos</li>
          <li>Service station with Lavazza coffee machine, kettle and tea</li>
          <li>Bathroom with rain shower</li>
          <li>Comfortable terry towels and bathrobes</li>
        </ul>
      </div>

      <!-- Room Reserve card -->
      <div class="inline-block">
        <div
        class="w-full p-4 bg-white border-none rounded-none shadow-xl shadow-black-100 sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
      >
        <form class="space-y-8" action="#">
          <h2 class="text-black-100 md:text-4xl text-base text-left">RESERVE</h2>

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
          <h2 class="text-black-100 md:text-4xl text-base text-left">Extra Services</h2>
          <div class="flex flex-row justify-between">
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
            >
            </div>
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
            >
            </div>
            </div> 
            </div>
            
          </div>
          <hr class="h-px w-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent border-none border-opacity-20 mt-8"/>
          <div class="flex flex-row justify-between items-baseline">
            <div class="relative max-w-sm">
            <div class="absolute inset-y-0 end-0 flex items-center pe-3.5 pointer-events-none">
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
            <div class="flex flex-row total-cost md:text-3xl text-base text-black-200">
              <span>$</span>
              <span>
                199
              </span>
            </div>
            

          </div>
          <button type="button" class="mt-8 uppercase w-full buttontext text-white bg-red-100 hover:bg-red-100 focus:ring-none font-medium rounded-md md:text-xl text-base px-8 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Book Your Stay Now</button>
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
        orientation: 'bottom right' // Set orientation for the first datepicker
      });
      new DatePicker2.default(datepickerEl2, {
        autohide: true, // This will enable autohide feature for the second datepicker
        orientation: 'bottom right' // Set orientation for the second datepicker
      });
    });
  },
};
</script>

<style  scoped>
h2,.costSelector,.total-cost {
  font-family: "Philosopher", sans-serif;
}
h3,
.buttontext,
h5 {
  font-family: "Work Sans", sans-serif;
}
p ,label,select,input {
  font-family: "Open Sans", sans-serif;
}
::marker {
  color: #c64816; /* Change this color to the desired color */
}
#room {
  /* Your existing styles here */
  background-image: none;
 
}

</style>