export default defineNuxtPlugin((nuxtApp) => {
    window.fbAsyncInit = function() {
        window.FB.init({
            appId: "1910091009440372", //You will need to change this
            cookie: true, // This is important, it's not enabled by default
            version: "v19.0"
          });
      };
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
})