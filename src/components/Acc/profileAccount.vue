<template>
    <div class="profileForm">
        <div class="fs-3 text-center p-2 pt-4">
            پروفایل
        </div>
        <div class="profilePic p-4">
            <img src="../../asserts/images/p8.png" alt="">
            <label for="input">
                <p class="btn btn-outline-secondary mt-3">آپلود عکس</p>
                <input accept="image/*" id="input" type="file" >
            </label>
            <button class="btn btn-outline-secondary mx-2">
                حذف
            </button>
        </div>
        <div class="d-flex my-4 justify-content-around">
            <div >
                <label for="name">نام</label>
            <input :placeholder="store.profileInfo.name" v-model="profileInfo.name" class="form-control" type="text" >
            </div>
            <div>
                <label for="name">نام خانوادگی</label>
            <input :placeholder="store.profileInfo.lastName" v-model="profileInfo.lastName" class="form-control" type="text">
            </div>
        </div>
        <div class="d-flex my-4 justify-content-around">
            <div >
                <label for="name">استان</label>
            <input :placeholder="store.profileInfo.State" v-model="profileInfo.State" class="form-control" type="text">
            </div>
            <div>
                <label for="name">شهر </label>
            <input :placeholder="store.profileInfo.city" v-model="profileInfo.city" class="form-control" type="text">
            </div>
        </div>
        <div class="d-flex my-4 justify-content-around">
            <div >
                <label for="name">کد پستی</label>
            <input :placeholder="store.profileInfo.postCode" v-model="profileInfo.postCode" class="form-control" type="text">
            </div>
            <div>
                <label for="name">شماره تلفن </label>
            <input :placeholder="store.profileInfo.phone" v-model="profileInfo.phone" class="form-control" type="number">
            </div>
        </div>
        <div>
            <button class="btn btn-primary mx-3" @click="UpdateProfileInfo">بروز رسانی</button>
            <button class="btn btn-danger mx-3" @click="LogOutAccount"> خروج از حساب کاربری</button>
        </div>

    </div>
    
</template>
<script setup>
import {  useRouter } from 'vue-router';
import { useStore } from '../../stores/counter';
import { storeToRefs } from 'pinia';
import {watch , reactive} from 'vue'
const store= useStore()
const router= useRouter()
const{ isSignedUp } = storeToRefs(store)
let profileInfo = reactive({
    name:'',
    lastName:'',
    State:'',
    city:'',
    postCode:'',
    phone: '',
})

function LogOutAccount(){
    store.signOut()
   

}
watch(isSignedUp, () => {
  

  if (store.isSignedUp !== true){
    router.push('/Account/Login')
    

  }

})

function UpdateProfileInfo(){
    store.profileInfo = profileInfo
}


</script>

<style scoped lang="scss">
.profileForm{
    width: 32rem;
    margin: 3rem auto;
    border-radius: 6px;
    background-color: rgb(255, 255, 255);
    height: 37rem;

    .profilePic{
        
        img{
            border-radius: 50%;
            width: 70px;
            margin-right: 19px;
            height: 70px;
        }
        #input{
            display: none;
        }
    }
}

</style>