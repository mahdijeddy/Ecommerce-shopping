<template>
    <div class="col-6" style="cursor: pointer;" >
        <div class=" cardA my-3" @click="jf(item)" v-for="item in store.data" :key="item.id" >
           
                <div class="card-image">
                    <img :src="item.img" style="width: 80px;" >
                </div>
                <div class="card-body BD">
                           <div class="ms-5 ps-3 fs-4">
                            <p>
                                
                                {{ item.title }}
                            </p>
                           </div>
                            <div class="ms-5 ps-3 my-3" >
                                
                                <img src="../../asserts/icons/Rating.png" alt="" srcset="">
                            </div>
                    
                            <div>
                                <p> {{item.color}}</p>
                                <p>رنگ</p>
                            </div>
                            <div>
                                <p>{{item.material}}</p>
                                <p>جنس</p>
                            </div>
                            <div>
                                <p class="btn" v-for="i in 3" >{{ item.sizes[i] }}</p>
                                <p>اندازه های موجود</p>
                            </div>
                   
                </div>
               
        </div>
    </div>
    <div class="col-3">
        <div class="card cardB">
            <div>
                
                <p>45000 T</p>
            </div>
            <div>
                <p class="text-success">
                    ارسال رایگان
                </p>
            </div>
            <div>
                <button class="btn btn-primary ">جزیات</button>
            </div>
            <div class="card-Wish" >
                <a href="#"><p>افزودن به خواسته ها</p>
                    <img src="../../asserts/icons/wish.png" alt="" srcset="">
                </a>
              
            </div>
        </div>
    </div>
    
</template>
<script setup>
import {useStore} from '@/stores/counter';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()


const store = useStore()
onMounted(() => {
    if (store.data =='') {
        
        store.getData()
    }else{
        return
    }
})

 function jf(x){
    console.log(x);
    store.singleProduct = {
        title: x.title,
        cat: x.cat,
        id: x.id,
        material: x.material,
        color: x.color,
        sizes: x.sizes,
        price: x.price,
        img: x.img
    }
   
   router.push('SingleProduct')
 }
 let image = store.data.img
</script>

<style scoped lang="scss">
.BD{
    

    :nth-child(3){
        display: flex;
        color: rgb(148, 148, 148);
        justify-content: space-around;
    }
    :nth-child(4){
        display: flex;
        color: rgb(148, 148, 148);
        justify-content: space-around;
    }
    :nth-child(5){
        display: flex;
        color: rgb(148, 148, 148);
        justify-content: space-around;
    }
}
.cardA{
    width: 100%;
    cursor: pointer;
    height:  250px;
    border-top-right-radius: 0px;  
    border-bottom-right-radius:0px; 
    display: flex;
    flex-direction: row;z-index: -5;
     
}
.card-Wish{
    background-color: rgb(255, 255, 255);
   
    margin-top: 5px;
    width: 80%;
    border: 1px solid rgb(197, 197, 197);
    border-radius: 5px;
    display: flex;
    a{
        display: flex;
        text-decoration: none;
        color: rgb(165, 165, 165);
        align-items: center;
        justify-content: space-around;
        width: 100%;
        P{
            margin-top: 15px;
        }
        
    }
}

.cardB{
    width: 100%;
    height: 240px;
    border-top-left-radius: 0px;  
    border-bottom-left-radius:0px; 
    display: flex;
    justify-content: center;
    align-items: center;
    :nth-child(3){
        width: 80%;
        button{
            width: 100%;
            padding: 10px;
        }
    }
    
   
}
</style>