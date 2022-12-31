<template>
  <div class="Container" >
    <button @click="asdasd" class="btn btn-danger">getData</button>
    <div v-for="item in store.data" :key="item.id">
        {{ item.id }}
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
import {useStore} from './stores/counter';
const store = useStore()
  function asdasd(){
  store.getData()
  console.log('asasdasd');
  store.data.forEach(e=>{
    console.log(e.id);
  })

}




</script>
