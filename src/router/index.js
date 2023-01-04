import { createRouter, createWebHistory, useRouter } from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import SingleProduct from '../views/SingleProduct.vue'
import Account from '../views/Account.vue'
import { useStore } from '../stores/counter'





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
      path:"/Account" , component:Account ,
        beforeEnter: (()=>{
        const store = useStore()
        store.ProfileTab=true
      }) ,
      children:[
        {path:'Login',component:()=>import('../components/Acc/LoginAccount.vue')},
        {path:'createAccount',component:()=>import('../components/Acc/createAccount.vue')},
        {path:'Profile',component:()=>import('../components/Acc/profileAccount.vue')},
      ]
     
      
    }
  ]
})


export default router
