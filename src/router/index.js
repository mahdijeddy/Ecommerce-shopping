import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import SingleProduct from '../views/SingleProduct.vue'

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
    }
  ]
})

export default router
