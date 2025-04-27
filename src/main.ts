import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import MainPage from './components/MainPage.vue';
import PostDetailPage from './components/PostDetailPage.vue';
import { createRouter, createWebHistory, RouterView } from 'vue-router';


const routes = [
    { path: '/', component: MainPage },
    { path: '/post/:id', component: PostDetailPage },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

const app = createApp(App);
app.use(router);
app.mount('#app');
