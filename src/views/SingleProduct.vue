<template>
    <div class="row mt-5">
        <div class="col-6 d-flex align-items-start p-2 justify-content-center">
            <img class="w-75 " :src="store.singleProduct.img"  alt="" srcset="">
        </div>
        <div class="col-6 p-5">
            <div class="title fs-3">
                <p>{{store.singleProduct.title}}</p>
                
            </div>
            <div class="d-flex align-items-center  p-2 justify-content-center">
                
                <vue3-star-ratings style="z-index: -1;" v-model="rating" />
                <p class="m-2">132reviews</p>
                <p class="m-2">150 سفارش</p>
                
            </div>
            <div class="fs-3">
                <p> {{store.singleProduct.price}}</p>
                
            </div>
            <div class="text-muted">
                <p>
                    لورم ایپ
                    سوم متن ساختگی با تولید سادگی نامفهوم از
                     صنعت چاپ، و با استفاده از طراحان گرافیک
                     است، چاپگرها و متون بلکه روزنامه و مجله
                     در ستون و سطرآنچنان که لازم است، و برای
                     شرایط فعلی تکنولوژی مورد نیاز، و ک
                    اربردهای متنوع با هدف بهبود ابزارها
                    ی کاربردی می باشد، کتابهای زیادی در
                     شصت و سه درصد گذشته حال و آینده، ش
                    ناخت فراوان جامعه و متخصصان را می ط
                    لبد، تا با نرم افزارها شناخت بیشتری 
                    را برای طراحان رایانه ای علی الخصوص
                     طراحان خلاقی، و فرهنگ پیشرو در زبان
                     فارسی ایجاد کرد، در این صورت می تو
                    ان امید داشت که تمام و دشواری موجود 
                    در ارائه راهکارها، و شرایط سخت تایپ
                     به پایان رسد و زمان مورد نیاز شامل 
                    حروفچینی دستاوردهای اصلی، و جوابگوی
                     سوالات پیوسته اهل دنیای موجود طراحی 
                    اساسا مورد استفاده قرار گیرد.
                </p>
                
            </div>
            <div class="d-flex align-items-center flex-column p-2 justify-content-center">
                <div class="d-flex align-items-center p-2 justify-content-between w-100">
                    <p>{{store.singleProduct.title}}</p>
                    <p class="text-muted fs-4">نام مدل</p>
                </div>
                <div class="d-flex align-items-center p-2 justify-content-between w-100">
                    <p>{{store.singleProduct.color}}</p>
                    <p class="text-muted fs-4">رنگ</p>
                </div>
                <div class="d-flex align-items-center p-2 justify-content-between w-100">
                    <p>پست و تیپباکس</p>
                    <p class="text-muted fs-4">ارسال از طریق</p>
                </div>
            </div>
            <div class="d-flex  ">
                <p>مقدار</p>
                 <div class="mx-4 Qnt">
                     <button @click="increase('-')" class="btn btn-light">-</button>
                     <input :placeholder="numberOfProduct" type="text">
                     <button @click="increase('+')" class="btn btn-light">+</button>
                 </div>
            </div>
            <div class="d-flex align-items-center p-2 ">
                <p class="mt-4">انتخاب سایز</p>
                
                <div v-for="i in 3" >
                    <label class="mx-3" for="radio">{{store.singleProduct.sizes[i]}}</label>
                    <input type="radio" name="radio" >
                </div>

            
            </div>
            <div>
                <button class="btn btn-primary ">خرید</button>
                <button @click="addToCartBtn" class="btn btn-outline-primary m-2">اضافه کردن به  سبد خرید</button>
            </div>
            
        </div>
    </div>
     
    
</template>
<script setup>
 import {ref} from 'vue';
 import {useStore} from '@/stores/counter';
 const store = useStore()


    
let numberOfProduct = ref(1)

 function increase(x){
    if (x=='+') {
        numberOfProduct.value++
    }else if(x=='-'){
        if (numberOfProduct.value==1) {
            return
        }
        numberOfProduct.value--
    }
 }
 function addToCartBtn(){
    console.log('aa');
    store.addedToCart.push(store.singleProduct)
    console.log(store.addedToCart);

     
}
</script>
<style lang="scss" scoped>
.Qnt{
    input{
        width: 30px;
        text-align: center;
        border: none;
        
    }
}
</style>