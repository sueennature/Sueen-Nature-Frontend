<template>
  <div class="relative bg-cover bg-center min-h-screen">
    <div class="absolute inset-0 bg-black-200 bg-opacity-50"></div>
    <!-- Overlay -->
    <div class="relative z-10">
      <!-- Text and Countdown -->
      <h1 class="text-white font-bold md:text-6xl text-4xl text-center pt-32 text-shadow">
        We are <span class="highlight text-red-600">Coming Soon</span>
      </h1>
      <div class="flex md:flex-row flex-col justify-center items-center mt-20 md:space-y-0 space-y-4">
        <div class="text-white md:text-base text-sm max-w-[50ch]">
            Get ready we have something coming that is going to blow you away. Below is a sneak peek of what we offer. Check back often for our launch.
        </div>
        <div>
            <img src="/img/bg.png" class="w-32 h-20 border-white border-4" alt="insideImg">
        </div>
      </div>
      <p class="md:text-2xl text-base text-white font-semibold text-center mt-20">
        powered by CDAZZDEV
      </p>
      <div class="flex flex-row items-center justify-center text-white mt-6">
        <div class="countdown flex items-center justify-center space-x-4">
          <div class="flex flex-col countdown-item items-center justify-center">
            <div class="countdown-value">{{ countdown.days }}</div>
            <div class="countdown-label">Days</div>
          </div>
          <div class="flex flex-col countdown-item items-center justify-center">
            <div class="countdown-value">{{ countdown.hours }}</div>
            <div class="countdown-label">Hours</div>
          </div>
          <div class="flex flex-col countdown-item items-center justify-center">
            <div class="countdown-value">{{ countdown.minutes }}</div>
            <div class="countdown-label">Minutes</div>
          </div>
          <div class="flex flex-col countdown-item items-center justify-center">
            <div class="countdown-value">{{ countdown.seconds }}</div>
            <div class="countdown-label">Seconds</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      targetDate: new Date("2024-03-18T23:00:00").getTime(), // Example target date
    };
  },
  mounted() {
    this.calculateCountdown();
    setInterval(this.calculateCountdown, 1000);
  },
  methods: {
    calculateCountdown() {
      const now = new Date().getTime();
      const distance = this.targetDate - now;

      this.countdown.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      this.countdown.minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
      );
      this.countdown.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    },
  },
};
</script>
  
  <style scoped>
/* Background image */
.bg-cover {
  background-image: url("/img/bg.png");
}

/* Circular countdown items */
.countdown-item {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
}

/* Countdown value */
.countdown-value {
  font-size: 24px;
}

/* Countdown label */
.countdown-label {
  font-size: 12px;
}
.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
  
