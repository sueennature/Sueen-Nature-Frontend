// plugins/axios.js
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()
  nuxtApp.$axios = axios.create({
    baseURL: config.public.apiBaseUrl
  })
})