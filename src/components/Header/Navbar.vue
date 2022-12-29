<template>
   <!-- @click="store.Header.CatState = !store.Header.CatState"  -->
<div class="HeaderNav">
    <div class="sksks" @mouseenter="store.Header.CatState = !store.Header.CatState"><a href="#">دسته بندی کالاها</a></div>
    <div><a href="#" @click="GoTo(800)">پرفروشترین ها </a></div>
    <div><a href="#">تخفیفها و پیشنهادها </a></div>
    <div><a href="#">شگفت انگیز ها  </a></div>
    <div><a href="#"> سایر  </a></div>
    
</div>  

<!-- -------------------------category----options------ -->
<div class="op" v-if="store.Header.CatState" @mouseenter="store.Header.CatState = true" @mouseleave="store.Header.CatState = false">
  <div>
    <div><a href="#">هدفون</a></div>
    <div><a href="#">هارد و فلش و اس اس دی</a></div>
    <div><a href="#">لبتاپ</a></div>
    <div><a href="#">کامپیوتر</a></div>
    <div><a href="#">کنسول بازی</a></div>
    <div><a href="#">تبلت</a></div>
    <div><a href="#">دوربین</a></div>
    <div><a href="#">لوازم جانبی</a></div>
  </div>
  <div>
    <div><a href="#">سویشرت</a></div>
    <div><a href="#">شلوار</a></div>
    <div><a href="#">لباس زیر</a></div>
    <div><a href="#">کفش روزمره</a></div>
    <div><a href="#">کفش رسمی</a></div>
    <div><a href="#">ساعت</a></div>
    <div><a href="#">کیف</a></div>
    <div><a href="#">پالتو</a></div>
    <div><a href="#">بارانی</a></div>
    <div><a href="#">ژاکت</a></div>
    <div><a href="#">دستبند</a></div>
    <div><a href="#">گردنبند</a></div>
    <div><a href="#">کوله پشتی</a></div>
    

  </div>
</div>



</template>
<script setup>
import {useStore} from '../../stores/counter';
import { storeToRefs } from 'pinia';

const store = useStore()

const { header} = storeToRefs(store)
function GoTo(x){
    scrollTo( 0 , x)
}


</script>
<style lang="scss" scoped>

.op{
    display: flex;
    position: absolute;
    right: 17%;
    top: 30%;
    margin-top: 1rem;
    padding: 2rem;
    text-align: right;
    background-color: rgba(211, 211, 211, 0.713);
    flex-direction: row-reverse;
    width: 60rem;
    z-index: 3;
    border-radius: 3px;
    
    div{
        margin: 5px;
        width:8rem;
        display: flex;

        flex-direction: column;
        a{
            text-decoration: none;
            color: rgb(54, 54, 54);
            padding: 0.2rem;
            margin-right: 2rem;
            border-radius: 6px;
            &:hover{
                background-color: rgb(242, 242, 242);
            }
        }

    }
}
.HeaderNav{
    height: 54px;
    display: flex;
    padding: 0px 2rem;
    align-items: center;
    flex-direction: row-reverse;
    border-bottom: 1px solid rgb(206, 206, 206);
    border-top: 1px solid rgb(206, 206, 206);
    font-size: 1.1rem;
    div{
        margin: 0px 1.5rem;
        a{
            text-decoration: none;
            color: rgb(43, 43, 43);
           
        }
    }
}


</style>

<script setup>


</script>