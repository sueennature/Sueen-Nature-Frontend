// plugins/auth.js
import { useCookie, useRouter } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const authCookie = useCookie('auth_token');
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
    if (!isAuthenticated()) {
      router.push('/login');
    }
  };

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