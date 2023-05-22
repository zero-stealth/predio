import { ref, onMounted, watch } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const authCookies = ref(localStorage.getItem('auth-cookies') || '');
  const isAuthenticated = ref(false);
  const resetPage = ref(false);
  const timeOut = ref(3000);

  // Ensures that the splash screen is not displayed after login
  onMounted(() => {
    if (!isAuthenticated.value) {
      timeOut.value = 3000;
    } else {
      timeOut.value = 0;
    }
  });

  // Watch for changes in the authCookies value
  watch(authCookies, (newCookies) => {
    isAuthenticated.value = newCookies !== '';
  });

  // Change the isAuthenticated state
  const toggleIsAuthenticated = () => {
    isAuthenticated.value = !isAuthenticated.value;
  };

  // Change the resetPage state
  const resetPageState = () => {
    resetPage.value = !resetPage.value;
  };

  return {
    timeOut,
    isAuthenticated,
    toggleIsAuthenticated,
    resetPage,
    resetPageState
  };
});
