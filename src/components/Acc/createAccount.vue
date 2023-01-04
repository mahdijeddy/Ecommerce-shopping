<template>
  <div class="createForm" >
  <div class="fs-4 text-center">
    ایجاد حساب     
</div>
  <div dir="rtl">
    <label class="form-label  ">آدرس ایمیل</label>
    <input type="email" class="form-control " v-model="store.signUpEmail">
  </div>
  <div class="mb-3" dir="rtl">
    <label  class="form-label ">پسورد</label>
    <input type="password" class="form-control" v-model=" store.signUpPassword">
  </div>
  <div>
    <button class="btn btn-primary w-100 fs-5 my-4"  @click="checkCreateForm"> ایجاد حساب </button>
  </div>
  <hr>
  <div class="w-100 d-flex flex-column justify-content-center align-items-end px-1 my-1">
    <a class="text-decoration-none " href="#"> قوانین و مقررات</a>
    <router-link to="/Account/Login" class="text-decoration-none " > ورود</router-link>
  </div>
  
</div>


</template>
<script setup>
import { storeToRefs } from 'pinia';
import { watch  } from 'vue';
import {  useRouter } from 'vue-router';
import { useStore } from '../../stores/counter';

const store= useStore()
const router= useRouter()
const{ isSignedUp } = storeToRefs(store)

function checkCreateForm(){
 console.log('checkCreateForm');

  if (store.signUpEmail == '' ||  store.signUpPassword == '' ) {
    store.alert('فیلد ها خالی میباشد' , 'alert-warning')
  }else if ( store.signUpPassword.length < 8){
    store.alert( 'پسورد حداقل باید 8 کاراکتر باشد','alert-warning' )

  }else if(!store.signUpEmail.includes('@')){
    store.alert( "ایمیل معتبر نیست",'alert-warning')
  }else{
    
    store.signUp()
    console.log('signUp');
    

  }

}

watch(isSignedUp, () => {
   if (store.isSignedUp == true){
    router.push('/Account/Profile') }

})




</script>
<style scoped lang="scss">
.createForm{
  animation: create 1.2s;

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
@keyframes create {
  0%{opacity: 0.1;
    transform: rotateY(90deg)
  
  };
  100%{opacity: 1;
    transform: rotateY(0deg) };
}
</style>