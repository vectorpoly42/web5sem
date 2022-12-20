import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/add-user',
      name: 'addUser',
      component: () => import('../views/AddUserView.vue')
    }
  ]
})

export default router
