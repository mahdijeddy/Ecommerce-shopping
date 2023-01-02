<template>
    <div class="cart">
        <div class="col-10 card">
            <div class="top">
            <div class="cnt1">
                <div class="left d-flex justify-content-between " v-for="(item, index) in store.addedToCart" :key="index">
                    <div>
                        
                        <div class="d-flex mt-2">
                            <img style="width: 60px;height: 60px;" :src="item.img" alt="">
                            <div class="mx-2">
                                <p>{{ item.title }}</p>
                            <p class="text-muted">{{ item.title }}
                            </p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <p class="text-muted">مقدار</p>
                        <div class="text-center">
                            <p>1</p>
                        </div>
                    </div>
                    <div>
                        <p class="text-muted">قیمت </p>
                        <div class="">
                            <p>{{ item.price }} </p>
                            <p class="pri">{{ item.price }}</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between align-items-center">
                    <img src="../asserts/icons/wish.png" style="width: 40px; cursor: pointer;">
                        <button @click="deletFromCart(item.id)" class="btn btn-light">حذف از سبد</button>
                    </div>
                </div>
                
            </div>
            <div class="cnt2">
                <div class="right p-3 ">
                <div class="d-flex justify-content-around p-4">
                    <p class="text-muted">مجموع پرداختی :</p>
                    <p>  {{store.totalCartPrice}}  تومان</p>
                </div>
                <div class="d-flex justify-content-around p-4">
                    <p class="text-muted">تخفیف</p>
                    <p class="text-danger">  -0  تومان</p>
                </div>
                <hr>
                <div class="d-flex justify-content-around p-4">
                    <p >پرداختی نهایی</p>
                    <p class="text-success"> {{store.totalCartPrice}} تومان </p>
                </div>
                <div class="d-flex justify-content-around my-4">
                    <button class="btn btn-outline-primary w-75"> پرداخت </button>
                </div>
                </div>
            </div>
           
            </div>
            <div class="btm"></div>
        </div>
    </div>
</template>
<script setup>
import { map } from '@firebase/util';
import { useStore } from '../stores/counter';

const store = useStore()

// ---------------delet items from cart ------------------
function deletFromCart(id){
    store.addedToCart.splice(store.addedToCart.findIndex(v => v.id === id), 1);
    totalPriceProcess()
}

// ------------------process the costs ---------------------
function totalPriceProcess(){
    store.totalCartPrice=0
    store.addedToCart.map((i)=>{
        let pr = i.price;
       let p = pr.slice(0 ,-1)
     
       store.totalCartPrice+=Number(p)
       
       
       
    })
}
totalPriceProcess()



</script>
<style lang="scss" scoped>
.cart{
    position: absolute;
    width: 1100px;
}
.top{
    width: 100%;
    display: flex;
}
.left{
    padding: 1rem;
    width: 100%;
    height: 100px;
    margin: 29px 5px 10px 5px;
    background-color: rgb(243, 243, 243);
    border-radius: 5px;
    img{
        border-radius: 8px;
        margin-right: 5px;
    }
}
.right{
    width: 100%;
    
    
}
.pri{
    font-size: 10px;
    margin-top: -15px;
   
    color: rgb(190, 190, 190);
}
.cnt1{
    width: 70%;
    
}
.cnt2{
    width: 30%;
        

}

</style>