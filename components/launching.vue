<template>
    <div class="launching-page h-screen relative overflow-hidden" @keydown.enter="startCurtainOpen" tabindex="0">
      <!-- Red curtain -->
      <div :class="['curtain curtain-left', { open: isCurtainOpen }]"></div>
      <div :class="['curtain curtain-right', { open: isCurtainOpen }]"></div>

  
      <!-- Hidden content that fades in when the curtain opens -->
      <div :class="['content absolute inset-0 flex flex-col items-center justify-center text-center', { 'opacity-0': !isCurtainOpen }]">
          

        <!-- Logo that pops up -->
        <img v-if="isCurtainOpen" src="/img/logoImg.png" alt="Hotel Logo" class="logo-popup mb-4"/>
  
        <!-- Logo that pops up -->
        <img v-if="isCurtainOpen" src="/img/bg.png" alt="Hotel Image" class="bg-popup mb-4"/>

  
        <h1 class="welcome-text text-4xl mb-4 text-white">Welcome to Sueen Nature Hotel Official Website</h1>
        <button @click="enterSite" class=" text-white px-4 py-2 rounded-lg enter-btn hover:text-red-600">
          Click Here
        </button>
         <!-- Gradient effect at the bottom -->
    <div class="gradient-bottom"></div>



    

    
      </div>
      <!-- Fireworks container -->
    <!-- Fireworks container -->
    <div ref="fireworksContainer" class="fireworks-container"></div>
    </div>
  </template>
  
  <script>
  import { Fireworks } from 'fireworks-js';

  export default {
    data() {
      return {
        isCurtainOpen: false, // Controls whether the curtain is open
        fireworksInstance: null,
      };
    },
    mounted() {
      // Focus the div to allow capturing Enter key events
      this.$el.focus();
      // Create audio elements
    
    this.welcomeSound = new Audio('/crowd-cheer-applause-victory-fanfare-clapping-236698.mp3');
    },
    methods: {
      startCurtainOpen() {
         // Play welcome sound
       this.welcomeSound.play();
        // Trigger curtain open state
        this.isCurtainOpen = true;
        console.log('Curtain opened, starting fireworks...');

        // Start fireworks once the curtain is open
        this.launchFireworks();
      },
      launchFireworks() {
        
        const container = this.$refs.fireworksContainer;

      if (container) {
        console.log('Fireworks container found:', container);

        const fireworks = new Fireworks(container, {
          maxRockets: 5, // Number of rockets launched per interval
          rocketSpawnInterval: 150, // Time between each rocket launch
          numParticles: 100, // Number of particles per explosion
          explosionMinHeight: 0.2, // Min height for the explosion
          explosionMaxHeight: 0.8, // Max height for the explosion
          explosionChance: 0.08, // Chance for an explosion per frame
        });

        console.log('Fireworks initialized:', fireworks);
        fireworks.start();
        console.log('Fireworks started');
    } else {
        console.error('Fireworks container not found');
      }
     
    },
      enterSite() {
        // Set local storage to indicate the user has bypassed the launching page
        localStorage.setItem('hasVisited', 'true');
        // Redirect to the home page
        
        this.$router.push('/home');
      },
    },
    beforeDestroy() {
    // Stop fireworks on component destruction
    if (this.fireworksInstance) {
      this.fireworksInstance.stop();
    }
  },

  };
  </script>
  
  <style scoped>

.fireworks-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

  /* Curtain styling */
  .launching-page {
    background-color: #000;
    position: relative;
    overflow: hidden;
    
  }
 /* Gradient effect at the bottom of the page */
.gradient-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px; /* Initial height of the gradient */
  background: linear-gradient(to top, rgba(255, 215, 0, 1) 0%, rgba(0, 0, 0, 1) 100%);
  opacity: 0; /* Start with hidden gradient */
  transform: scaleY(0); /* Start with the gradient compressed */
  transform-origin: bottom; /* Scale from the bottom */
  animation: fadeInGradient 2.5s forwards, expandGradient 2.5s forwards; /* Adjust duration as needed */
}
  
  .curtain {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 50%;
    background-color: #e50914; /* Base red curtain color */
    z-index: 10;
    transition: width 2.5s ease-in-out;
    background-image: linear-gradient(90deg, rgba(229, 9, 20, 0.9) 0%, rgba(200, 0, 0, 0.7) 50%, rgba(229, 9, 20, 0.9) 100%);
    box-shadow: inset -10px 0 15px rgba(0, 0, 0, 0.5), inset 10px 0 15px rgba(0, 0, 0, 0.5);
    background-size: 15px; /* Create repeating stripes */
  }
  
  .curtain-left {
    left: 0;
  }
  
  .curtain-right {
    right: 0;
  }
  
  .open.curtain-left,
  .open.curtain-right {
    width: 0; /* When the curtain is open, they slide away */
  }
  
  /* Content fade in after curtain opens */
  .content {
    z-index: 5;
    transition: opacity 3s ease-in-out;
  }
  
  .opacity-0 {
    opacity: 0;
  }
  
  .opacity-1 {
    opacity: 1;
  }
  
  /* Logo popup animation */
  .logo-popup {
    width: auto;
    height: 160px;
    opacity: 0;
    transform: scale(0);
    animation: popInLogo 2.5s forwards, blinkText 1s infinite;
    animation-delay: 2s;
  }
  /* background popup animation */
  .bg-popup {
    width: auto;
    height: 200px;
    opacity: 0;
    transform: scale(0);
    animation: popInLogo 2.5s forwards, blink 1s infinite;
    animation-delay: 2s;
  }
  
  /* Welcome text pop-in effect */
  .welcome-text {
    opacity: 0;
    animation: popInText 2s forwards, blinkText 1s infinite;
    animation-delay: 3s;
  }
  
  /* Button appearance with pop-in effect */
  .enter-btn {
    opacity: 0;
    animation: popInButton 2.5s forwards, blinkText 1s infinite;
    animation-delay: 3.5s;
  }

  @keyframes fadeInGradient {
  0% {
    opacity: 0;
    transform: scaleY(0); /* Start compressed */
  }
  100% {
    opacity: 1;
    transform: scaleY(1); /* End at full scale */
  }
}

@keyframes expandGradient {
  0% {
    height: 0px; /* Initial height */
  }
  100% {
    height: 80px; /* Expanded height */
  }
}
  
  /* Blinking effect for text */
@keyframes blinkText {
  0%, 100% {
    text-shadow: 0 0 15px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.6); /* Golden glow */
  }
  50% {
    text-shadow: 0 0 30px rgba(255, 215, 0, 1), 0 0 50px rgba(255, 215, 0, 0.8); /* Stronger golden glow */
  }
}
  
  /* Blinking effect for images */
@keyframes blinkImage {
  0%, 100% {
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 1);
  }
}

  @keyframes popInLogo {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes popInText {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  @keyframes popInButton {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>