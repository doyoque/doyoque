import { createRouter, createWebHistory } from 'vue-router'
import Index from '@pages/Index'
import Posts from '@pages/Posts'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

