import { createRouter, createWebHistory } from 'vue-router'
// import des composants de la partie utilisateur
import * as Public from '@/views/public/index.js'
import * as Admin from '@/views/admin/index.js'
 // page de redirection en cas d'erreur 404
import Error404 from '@/views/public/404.vue'
// import de la page de connexion
import Login from '@/views/Auth/Login.vue'

// import authGuard from '@/_helpers/auth-guard'
import { authGuard } from '@/_helpers/auth-guard.js'



const routes = [
  // partie public du site par le biais du layout public 
  {
    path: '/',
    name:'public',
    component: Public.PublicLayout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Public.Home
      },
      {
        path: '/Contact',
        name: 'Contact',
        component: Public.Contact
      },
      {
        path: '/Cocktails',
        name: 'Cocktail',
        component: Public.Cocktail
      }
    ]
  },
  // partie admin du site 
  {
    path: '/admin',
    name: 'admin',
    component: Admin.AdminLayout,
    // on ajoute une redirection vers les pages enfants de la partie admin du site //
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Admin.Dashboard
      },
      {
        path: 'users',
        name: 'UserIndex',
        component: Admin.UserIndex
      },
      {
        path: 'users/add',
        name: 'UserAdd',
        component: Admin.UserAdd
      },
      {
        path: 'users/:id(\\d+)',
        name: 'UserEddit',
        component: Admin.UserEddit,
        props: true
      },
      {
        path: 'cocktails',
        name: 'CocktailIndex',
        component: Admin.CocktailIndex
      },
      {
        path: 'cocktails/:id',
        name: 'CocktailEdit',
        component: Admin.CocktailEdit
      },
    ]
  },
  // partie authentification du site
  {
    path: '/Login',
    name: 'Login',
    component: Login,
    // // avant d'entrer dans la page de connexion on vérifie si l'utilisateur est connecté 
    // beforeEnter: authGuard
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

// avant d'entrer dans la page de connexion on vérifie si l'utilisateur est connecté en admin avec la fonction authGuard et beforeEnter 
router.beforeEach((to, from, next) => { 
  if (to.matched[0].name === 'admin') {
    authGuard()
  }
  next()
 
  // il y a aussi la solution du requireAuth si on veut bloquer l'accès à une page en particulier
  // if (to.meta.requireAuth)) {
  //   authGuard()
  // }
   

})

export default router
