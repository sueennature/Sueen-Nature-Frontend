import { useNuxtApp } from '#app';

export default defineNuxtRouteMiddleware((to, from) => {
  const nuxtApp = useNuxtApp();
  const isAuthenticated = nuxtApp.$auth.isAuthenticated();

  if (!isAuthenticated) {
    if (to.path !== '/login') {
      return navigateTo('/');
    }
  }
});