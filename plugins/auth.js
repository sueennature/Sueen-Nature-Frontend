// plugins/auth.js
import { useCookie } from '#app';
import { useRouter } from 'vue-router'; 
import * as jwt_decode from 'jwt-decode';



export default defineNuxtPlugin((nuxtApp) => {
  const authCookie = useCookie('auth_token');
  console.log(authCookie)
  const cookievalue = authCookie._rawValue
  console.log(cookievalue)
  const router = useRouter();

  const setAuthToken = (token) => {
    authCookie.value = token;
  };

  const getAuthToken = () => {
    return authCookie.value;
  };

  
 
  const checkAuthentication = () => {
    console.log("hi")
    if (!!authCookie) {
      router.push('/')
    }
  };

  const logout = () => {
    authCookie.value = null;
    router.push('/login');
  };

  nuxtApp.provide('auth', {
    setAuthToken,
    getAuthToken,
    checkAuthentication,
    logout,
  });
});