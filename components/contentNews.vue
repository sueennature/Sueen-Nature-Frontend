<template>
  <div class="sm:container px-4 py-20">
    <h2 class="uppercase text-black-200 text-2xl text-left tracking-widest">
      Our Blog
    </h2>
    <h3 class="text-black-200 md:text-7xl text-5xl pt-1 text-left">News & Articles</h3>
    <!--News cards -->
    <div class="grid lg:grid-cols-2 grid-cols-1 mt-16 gap-8">
      <div class="relative">
        <img src="/img/massage.png" alt="massageImg" class="w-full md:w-auto" />
        <div class="relaxationCard bg-black-700 uppercase text-white font-bold p-2  md:text-2xl text-base md:hidden flex justify-center">Relaxation</div>
        <div class="md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-32 ">
            <div class="md:max-w-xs w-full md:px-8 md:py-8 p-4 flex flex-col justify-center  bg-gray-500 borde-none rounded-none shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="relaxationCard absolute -left-32 top-1/2 transform -translate-y-1/2 -rotate-90 bg-black-700 uppercase text-white font-bold p-2  md:text-2xl text-xl md:flex hidden">Relaxation</div>
          <h5 class="mb-2 md:text-4xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-pre text-center md:text-left">
            Massage Therapy
          </h5>

          <p class="mb-3 font-thin md:text-xl text-sm text-black-200 dark:text-gray-400 ml-7 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse varius enim in eros elementum tristique.
          </p>
          <a class="md:text-2xl text-sm text-red-100 uppercase tracking-widest text-center mt-10">Read More</a>
        </div>
        </div>
        
        
      </div>
      <div class="relative">
        <img src="/img/topView.png" alt="topViewImg" class="w-full md:w-auto" />
        <div class="relaxationCard bg-black-700 uppercase text-white font-bold p-2  md:text-2xl text-base md:hidden flex justify-center">Relaxation</div>
        <div class="md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-32">
            <div class="md:max-w-xs w-full md:px-8 md:py-8 p-4 flex flex-col justify-center  bg-gray-500 borde-none rounded-none shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="relaxationCard absolute -left-32 top-1/2 transform -translate-y-1/2 -rotate-90 bg-black-700 uppercase text-white font-bold p-2  md:text-2xl text-xl md:flex hidden">Relaxation</div>
          <h5 class="mb-2 md:text-4xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-pre text-center md:text-left">
            Top Views
          </h5>

          <p class="mb-3 font-thin md:text-xl text-sm text-black-200 dark:text-gray-400 ml-7 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse varius enim in eros elementum tristique.
          </p>
          <a class="md:text-2xl text-sm text-red-100 uppercase tracking-widest text-center mt-10">Read More</a>
        </div>
        </div>
        
        
      </div>
      <div class="relative">
        <img src="/img/ZenGarden.png" alt="ZenGardenImg" class="w-full md:w-auto" />
        <div class="relaxationCard bg-black-700 uppercase text-white font-bold p-2  md:text-2xl text-base md:hidden flex justify-center">Relaxation</div>
        <div class="md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-32 ">
            <div class="md:max-w-xs w-full md:px-8 md:py-8 p-4 flex flex-col justify-center  bg-gray-500 borde-none rounded-none shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="relaxationCard absolute -left-32 top-1/2 transform -translate-y-1/2 -rotate-90 bg-black-700 uppercase text-white font-bold p-2  md:text-2xl text-xl md:flex hidden">Relaxation</div>
          <h5 class="mb-2 md:text-4xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-pre text-center md:text-left">
            Zen Gardens
          </h5>

          <p class="mb-3 font-thin md:text-xl text-sm text-black-200 dark:text-gray-400 ml-7 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse varius enim in eros elementum tristique.
          </p>
          <a class="md:text-2xl text-sm text-red-100 uppercase tracking-widest text-center mt-10">Read More</a>
        </div>
        </div>    
      </div>
      <div class="relative">
        <img src="/img/Wellness.png" alt="WellnessImg" class="w-full md:w-auto" />
        <div class="relaxationCard bg-black-700 uppercase text-white font-bold p-2  md:text-2xl text-base md:hidden flex justify-center">Relaxation</div>
        <div class="md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:right-32 ">
            <div class="md:max-w-xs w-full md:px-8 md:py-8 p-4 flex flex-col justify-center  bg-gray-500 borde-none rounded-none shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="relaxationCard absolute -left-32 top-1/2 transform -translate-y-1/2 -rotate-90 bg-black-700 uppercase text-white font-bold p-2  md:text-2xl text-xl md:flex hidden">Relaxation</div>
          <h5 class="mb-2 md:text-4xl text-2xl font-bold tracking-tight text-gray-900 dark:text-white whitespace-pre text-center md:text-left">
            Wellness
          </h5>

          <p class="mb-3 font-thin md:text-xl text-sm text-black-200 dark:text-gray-400 ml-7 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing. Suspendisse varius enim in eros elementum tristique.
          </p>
          <a class="md:text-2xl text-sm text-red-100 uppercase tracking-widest text-center mt-10">Read More</a>
        </div>
        </div>
        
        
      </div>
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
a,p{
  font-family: "Barlow", sans-serif;
}

.relaxationCard{
    letter-spacing: 0.6rem;
}
</style>