import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/public/Home.vue'
import Contact from '@/views/public/Contact.vue'
import Cocktail from '@/views/public/Cocktail.vue'
 // page de redirection en cas d'erreur 404
import Error404 from '@/views/public/404.vue'
import PublicLayout from '@/views/public/Layout.vue'

const routes = [
  {
    path: '/',
    name:'public',
    component: PublicLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/Contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: '/Cocktails',
        name: 'Cocktail',
        component: Cocktail
      }
    ]
  },  
  // page de redirection en cas d'erreur 404
  {
    path: '/:pathMatch(.*)*', component: Error404
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
