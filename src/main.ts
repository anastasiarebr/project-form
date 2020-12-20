import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const VueInputMask = require('vue-inputmask').default

createApp(App).use(store).use(router).use(VueInputMask).mount('#app')
