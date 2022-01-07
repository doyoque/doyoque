require('./bootstrap');

import { createApp } from 'vue';
import App from '@/App';

const app = createApp({});
app.component('app', App).mount('#app');
