<template>




<div class="loginForm " >
  <div class="fs-4 text-center">
      ورود   
</div>
  <div dir="rtl">
    <label class="form-label  ">آدرس ایمیل</label>
    <input type="email" class="form-control " v-model="store.signUpEmail" >
  </div>
  <div class="mb-3" dir="rtl">
    <label class="form-label ">پسورد</label>
    <input type="password" class="form-control" v-model="store.signUpPassword" >
  </div>
  <div>
    <button class="btn btn-primary w-100 fs-5 my-4" @click="LoginIn"> ورود </button>
  </div>
  <hr>
  <div class="w-100 d-flex flex-column justify-content-center align-items-end px-1 my-1">
    <a class="text-decoration-none " href="#"> فراموشی رمز عبور</a>
    <router-link to="/Account/createAccount" class="text-decoration-none ">ایجاد حساب</router-link>
  </div>
  
</div>

</template>
<script setup>
import { storeToRefs } from 'pinia';
import { onBeforeMount } from 'vue';
import { useStore } from '../../stores/counter';
import { useRouter } from 'vue-router';
import { watch } from 'vue';

const store = useStore()
const router = useRouter()
const{ isSignedUp } = storeToRefs(store)
watch(isSignedUp, () => {
  

  if (store.isSignedUp == true){
    router.push('/Account/Profile')
    

  }

})



onBeforeMount(() => {
  if (store.isSignedUp) {
    router.push('/Account/Profile')
  }
})
function LoginIn(){
  store.signIn()
  
}

</script>

<style scoped lang="scss">
.loginForm{
  animation: login 1.2s;

  width: 30rem;
  height: 40rem;
  margin: 3rem auto;
  background-color: rgb(255, 255, 255);
  padding: 3rem;
  border-radius: 5px;
  box-shadow: 0 0 5px 1px rgb(116, 116, 116);
 

  div{
    margin-top: 2rem;
  }
}
@keyframes login {
  0%{opacity: 1;
    transform: rotateY(-90deg)
  
  };
  100%{opacity: 1;
    transform: rotateY(0deg) };
}
</style>