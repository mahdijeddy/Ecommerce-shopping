<template> 

    <Main/>
    
    <button @click="GoTo" v-show="store.state" class="btn btn-outline-secondary  GoUpBtn fs-5"> 
        <img src="@/asserts/icons/upIcon.png">
    </button>
    
</template>
<script setup>

import Main from '../components/Main.vue';
import {useStore} from '../stores/counter';

const store = useStore()

function GoTo(){
    scrollTo( 0 , 0)
}

window.addEventListener('scroll' , ()=>{
    if (scrollY > 200 ) {
        store.state = true
    }else{
        store.state = false
    }
})

</script>

<style lang="scss">

@font-face {
    font-family: "yekan";
    src: url("./asserts/font/Yekan.eot");
    src: url("./asserts/font/Yekan.woff") format("woff"),
    url("./asserts/font/Yekan.ttf") format("ttf"),
    
    }

body{
    font-family: "yekan" !important;
}

.GoUpBtn{
    position: fixed;
    top: 80%;
    left: 5%;
    
    
}
</style>