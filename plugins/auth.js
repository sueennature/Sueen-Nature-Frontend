// plugins/auth.js
import { useCookie } from '#app';
import { useRouter } from 'vue-router'; 

export default defineNuxtPlugin((nuxtApp) => {
  const authCookie = useCookie('auth_token');
  console.log(authCookie)
  const router = useRouter();

  const setAuthToken = (token) => {
    authCookie.value = token;
  };

  const getAuthToken = () => {
    return authCookie.value;
  };

  const isAuthenticated = () => {
    return !!authCookie.value;
  };

  const checkAuthentication = () => {
    console.log("hi")
    if (!isAuthenticated()) {
      router.push('/home');
    }
  };
  checkAuthentication();

  const logout = () => {
    authCookie.value = null;
    router.push('/login');
  };

  nuxtApp.provide('auth', {
    setAuthToken,
    getAuthToken,
    isAuthenticated,
    checkAuthentication,
    logout,
  });
});