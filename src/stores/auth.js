import { ref, onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {

  const isAuthenticated = ref(false);
  const resetPage = ref(false);
  const timeOut = ref(3000);


  //ensures that the splash screen is not displayed after login
  onMounted(() => {
    switch (isAuthenticated.value) {
      case false:
        timeOut.value = 3000;
        break;
      case true:
        timeOut.value = 0;
        break;
      default:
        break;
    }

  })

  //change state
  const toggleisAuthenticated = () => {
    isAuthenticated.value = !isAuthenticated.value;
  }

  const resetPageState = () => {
    resetPage.value = !resetPage.value
  }


  return {
    timeOut, isAuthenticated, toggleisAuthenticated, resetPage, resetPageState
  }
})
