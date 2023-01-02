<template>
        <router-link  to="/" @click=" store.ProfileTab = !store.ProfileTab" class="btn btn-primary"> صفحه اصلی</router-link>
        <router-view></router-view>
    
</template>
<script setup>
import {useStore} from '../stores/counter';
import { onBeforeRouteLeave } from 'vue-router';
const store = useStore()
onBeforeRouteLeave((to, from) => {
     
        store.ProfileTab=false
    })

</script>