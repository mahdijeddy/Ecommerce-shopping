<template>
    
    <Header/>
    <Main/>
    <Footer/>  
    <button @click="GoTo" v-show="state" class="btn btn-danger GoUpBtn">UP</button>
    
</template>
<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Main from '../components/Main.vue';
import Footer from '../components/Footer.vue';
let state = ref(false)
function GoTo(){
    scrollTo( 0 , 0)
}

window.addEventListener('scroll' , ()=>{
    if (scrollY > 200 ) {
        state.value = true
    }else{
        state.value = false
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