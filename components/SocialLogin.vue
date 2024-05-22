<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
    <!-- <button
      @click="loginWithGoogle"
      class="w-full bg-white border border-gray-400 rounded-md py-1 text-center"
    >
      <div class="flex items-center justify-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 48 48"
        >
          <path
            fill="#ffc107"
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
          />
          <path
            fill="#ff3d00"
            d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
          />
          <path
            fill="#4caf50"
            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
          />
          <path
            fill="#1976d2"
            d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
          />
        </svg>
        <span>Google</span>
      </div>
    </button> -->
    <div class="flex items-center justify-center space-x-4">
      <GoogleSignInButton
        @success="handleLoginSuccess"
        @error="handleLoginError"
         scope="https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile"
      ></GoogleSignInButton>
    </div>
    <button
      class="bg-[#3b5998] boder-2 rounded-md py-1 text-center text-white mx-8"
      @click="logInWithFacebook"
    >
      <div class="flex items-center justify-center space-x-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 256 256"
        >
          <path
            fill="#fff"
            d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
          />
          <path
            fill="#3b5998"
            d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165z"
          />
        </svg>
        <span>Facebook</span>
      </div>
    </button>
    
  </div>
</template>

<script setup lang="ts">
import { GoogleSignInButton, type CredentialResponse} from "vue3-google-signin";
// @ts-ignore
import VueJwtDecode from 'vue-jwt-decode';
import { defineEmits, ref } from 'vue';
import { useRouter } from 'vue-router'; 
import {toast} from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const emit = defineEmits(['loginSuccess']);
const router = useRouter(); 
const error = ref(null); 

const fbSignInParams = {
        scope: 'email,user_likes',
        return_scopes: true
      }

const handleLoginSuccess = (response: CredentialResponse) => {
  const { credential } = response;
  console.log("Access Token", credential);
  console.log("Response", response);

  if(response){
    const decoded = VueJwtDecode.decode(credential);
    console.log('Decoded', decoded);

    const email = decoded.email;
    const password = decoded.sub;
    const name = decoded.given_name;
    const lname = decoded.family_name;

    emit('loginSuccess', { name, lname, email, password });
    toast.success("Successfully Logged In")
    // setTimeout(() => {
    //   router.push({ path: '/dashboard', query: { email:email } });
    //         }, 3000); 
  }

};
const handleLoginError = () => {
  toast.error("Something Went Wrong")
};

const logInWithFacebook = async () => {
      // await loadFacebookSDK(document, "script", "facebook-jssdk");
      // await initFacebook();
      window.FB.login(function(response) {
        if (response.authResponse) {
          console.log("LOGGED IN USER RESPONSE ", response)
          // Now you can redirect the user or do an AJAX request to
          // a PHP script that grabs the signed request from the cookie.
        } else {
          alert("User cancelled login or did not fully authorize.");
        }
      }, {scope: 'public_profile,email'});
      return false;
    }
</script>