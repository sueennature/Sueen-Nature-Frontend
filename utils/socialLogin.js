// utils/socialLogin.js
import { useNuxtApp } from '#app';

export async function socialLogin(provider) {
  const nuxtApp = useNuxtApp();
  const authUrl = `http://127.0.0.1:8000/api/auth/${provider}/redirect`;

  try {
    const response = await window.open(authUrl, '_blank');

    if (response) {
      const accessToken = response.access_token;
      nuxtApp.$auth.setAuthToken(accessToken);
      nuxtApp.$router.push('/dashboard');
    }
  } catch (error) {
    console.error('Social login error:', error);
  }
}