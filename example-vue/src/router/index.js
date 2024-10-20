import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Clients from '@/components/Clients.vue';
import Cosmetologists from '@/components/Cosmetologists.vue';
import Sessions from '@/components/Sessions.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/clients',
      component: Clients,
    },
    {
      path: '/cosmetologists',
      component: Cosmetologists,
    },
    {
      path: '/sessions',
      component: Sessions,
    },
  ],
});

export default router
