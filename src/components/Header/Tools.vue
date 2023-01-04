<template>
    
        <div class="HeaderTools">
            <div class="me-3">
                <router-link to="/">  <img style="width: 200px;" src="@/asserts/logo/mahdi-logo.png" ></router-link>
            </div>
            <div >
                <form class="d-flex" role="search" dir="rtl">
                <input class="form-control ms-2 px-5" type="search" placeholder="جستجو ... " aria-label="Search">
                </form>
            </div>
            <div class="d-flex p-2 ms-4">
                 <div><button @click=" store.CartShow = !store.CartShow" class="btn"><img class="mx-1" src="@/asserts/icons/Large.png" alt="" srcset=""></button></div>
                 <div><button class="btn"><img class="mx-1" src="@/asserts/icons/wish.png" alt="" srcset=""></button></div>
                 <div><button class="btn"><router-link  to="/Account/Login" >  <img class="mx-1" src="@/asserts/icons/Icon.png" alt="" srcset=""></router-link></button></div>
            </div>
        </div>
        <div v-if="store.CartShow">
            <Cart/>
        </div>
    
</template>
<script setup>
import Cart from '../Cart.vue'
import {useStore} from '@/stores/counter'
const store = useStore()

</script>
<style lang="scss" scoped>
.HeaderTools{
    height:150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row-reverse;
}

</style>