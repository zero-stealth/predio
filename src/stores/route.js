import { ref, watchEffect } from 'vue';
import { useRoute } from 'vue-router';
import { defineStore } from 'pinia';

export const useRouteStore = defineStore('route', () => {
  const openDrawer = ref(false);
  const routeName = ref(null);
  const route = useRoute();

  watchEffect(() => {
    routeName.value = route.name;    
  })

  const toggleDrawer = () => {
    openDrawer.value =!openDrawer.value;
  }

  return { routeName, toggleDrawer, openDrawer }
})
