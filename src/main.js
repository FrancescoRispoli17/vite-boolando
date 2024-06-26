import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
library.add(faUser,faHeart, faLock)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
