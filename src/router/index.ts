import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/HomeView.vue";
import Catalogue from "@/views/CatalogueView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/catalogue',
      component: Catalogue
    }
  ],
})

export default router
