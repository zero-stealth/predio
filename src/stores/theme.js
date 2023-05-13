import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
 
  const theme = ref('dark');

  const toggleTheme = () => {
    switch (theme.value) {
      case 'light':
        theme.value = 'dark'
        break
      case 'dark':
        theme.value = 'light'
        break
      default:
        break
    }
  }
  return { theme, toggleTheme }
})
