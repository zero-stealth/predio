<script setup>
import { ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import guestIcon from '../icons/profileIcon.vue'
import googleIcon from '../icons/googleIcon.vue'
import twitterIcon from '../icons/twitterIcon.vue'
import facebookIcon from '../icons/facebookIcon.vue'

const authStore = useAuthStore()
const router = useRouter()
const username = ref(null)
const password = ref(null)
const errMsg = ref(null)
const email = ref(null)

const reset = () => {
  password.value = ''
  username.value = ''
  // errMsg.value = '';
  email.value = ''
}

const Login = async () => {
  if (username.value !== null && password.value !== null) {
    try {
      const response = await axios.post('https://predictions-server.onrender.com/predict', {
        username: username.value,
        password: password.value
      });
      console.log(response.data); // Handle the response data as needed
      router.push({ name: 'Home' });
    } catch (error) {
      console.error(error);
    }
  } else {
    errMsg.value = 'Write something';
    reset();
  }
};


const ResetAuth = async () => {
  if (email.value !== null && password.value !== null) {
    try {
      const response = await axios.post('https://predictions-server.onrender.com/reset', {
        email: email.value,
        password: password.value
      });
      console.log(response.data); // Handle the response data as needed
      authStore.resetPageState();
    } catch (error) {
      console.error(error);
    }
  } else {
    errMsg.value = 'Write something';
    reset();
  }
};


const useFacebook = () => {}

const useTwitter = () => {}

const useGoogle = () => {}

const useGuest = () => {
  router.push({ name: 'Home' })
}
</script>
<template>
  <div class="l-main">
    <div class="form-l-wrapper" v-if="authStore.resetPage == false">
      <form @submit.prevent="Login()" class="l-form">
        <div class="input-wrapper">
          <input type="text" class="input-l" placeholder="penguin" v-bind="username" />
        </div>
        <div class="input-wrapper">
          <input type="password" class="input-l" placeholder="***********" v-bind="password" />
        </div>
        <p>{{ errMsg }}</p>
        <button class="btn-l" type="submit">Login</button>
        <span @click="authStore.resetPageState">Forgot password</span>
      </form>
    </div>
    <div class="form-l-wrapper" v-else>
      <form @submit.prevent="ResetAuth()" class="l-form">
        <div class="input-wrapper">
          <input type="email" class="input-l" placeholder="penguin@gmail.com" v-bind="email" />
        </div>
        <div class="input-wrapper">
          <input type="password" class="input-l" placeholder="***********" v-bind="password" />
        </div>
        <p>{{ errMsg }}</p>
        <button class="btn-l" type="submit">reset</button>
        <span @click="authStore.resetPageState">login</span>
      </form>
    </div>
    <span>or</span>
    <div class="l-alternatives">
      <div class="alternative" @click="useGoogle">
        <googleIcon class="alternative-icon" />
        <span>Login with google</span>
      </div>
      <!-- <div class="alternative" @click="useFacebook">
        <facebookIcon class="alternative-icon" />
      </div>
      <div class="alternative" @click="useTwitter">
        <twitterIcon class="alternative-icon" />
      </div> -->
      <div class="alternative" @click="useGuest">
        <guestIcon class="alternative-icon" />
        <span>Login as a guest</span>
      </div>
    </div>
  </div>
</template>
<style>
@import '../style/authpage.css';
</style>
