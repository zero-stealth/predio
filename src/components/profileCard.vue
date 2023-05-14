<script setup>
import football from '@/assets/football.png'
import { ref, computed, onMounted } from 'vue'

const password = ref(null)
const username = ref(null)
const userID = ref(null)
const email = ref(null)
const errorMsg = ref()

const reset = () => {
  email.value = ''
  username.value = ''
  password.value = ''
}

//
const submit = () => {
  if (username.value != '' && userID.value != '' && password.value != '' && email.value != '') {
    reset()
  } else {
    errorMsg.value = 'Write something'
  }
}
</script>
<template>
  <div class="profile-card-i">
    <div class="profile-img-i" :style="{ backgroundImage: `url(${football})` }">
      <!-- image  -->
    </div>
    <form @click.prevent="submit()" class="form-ad">
    <div class="form-ia">
      <label for="" class="ia-acc">Username</label>
      <input type="text" v-model="username" placeholder="penguin" class="ia-input" />
    </div>
    <div class="form-ia">
      <label for="" class="ia-acc">Email</label>
      <input type="text" v-model="email" placeholder="penguin@gmail.com" class="ia-input" />
    </div>
    <div class="form-ia">
      <label for="" class="ia-acc">Password</label>
      <input type="password" v-model="password" placeholder="********" class="ia-input" />
    </div>
    <div class="error-msg">
      <span>{{ errorMsg }}</span>
    </div>
    <button class="btn-acc-d">update</button>
  </form>
  </div>
</template>
<style>
@import '@/style/profileCard.css';
</style>
