export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
      const config = useRuntimeConfig();
      const measurementId = config.public.GA_MEASUREMENT_ID;
  
      if (!measurementId) {
        console.warn('Google Analytics ID is not provided');
        return;
      }
  
      const script = document.createElement('script');
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);
  
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', measurementId);
  
      nuxtApp.$router.afterEach((to) => {
        gtag('config', measurementId, {
          page_path: to.fullPath,
        });
      });
    }
  });
  