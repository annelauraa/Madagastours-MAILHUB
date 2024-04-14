import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/tailwind.css';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Ajouter les icônes solides à la bibliothèque
library.add(fas);

// Définir le composant FontAwesomeIcon globalement
createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
