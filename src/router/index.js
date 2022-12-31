import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Account from '../views/Account.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path:"/" , component:Home
    },
    {
      path:"/Products" , component:Products
    },
    {
      path:"/SingleProduct" , component:SingleProduct
    },
    {
      path:"/Account" , component:Account
    }
  ]
})

export default router
