<template>
        <router-link  to="/" @click=" store.ProfileTab = !store.ProfileTab" class="btn btn-primary"> GO HOME</router-link>

        <LoginAccount/>
        <createAccount/>
        <profileAccount/>
    
</template>
<script setup>
import {useStore} from '../stores/counter';
import LoginAccount from '../components/Acc/LoginAccount.vue';
import createAccount from '../components/Acc/createAccount.vue';
import profileAccount from '../components/Acc/profileAccount.vue';
const store = useStore()

</script>