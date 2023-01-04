<template>
  <div class="Container" >
  
    <div v-if="store.loading">
      <Loading/>
    </div>
    <div v-if="!store.ProfileTab">
      <Header/>
      <router-view ></router-view>
      <Footer/> 

    </div>
    <div v-if="store.ProfileTab">
      <router-view></router-view>
    </div>
    
  </div>
 
</template>
<script setup>
import Header from './components/Header.vue'
import Footer from '@/components/Footer.vue';
import Loading from '@/components/Loading.vue';
import {useStore} from './stores/counter';

const store = useStore()
function jj(){

  console.log(store.signUpEmail);
}
</script>
