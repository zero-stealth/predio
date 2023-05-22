import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vueCountryRegionSelect from 'vue-country-region-select'


import App from './App.vue'
import router from './router'

import './style/global.css'

const app = createApp(App)

app.use(createPinia())
app.use(vueCountryRegionSelect)
app.use(router)

app.mount('#app')
