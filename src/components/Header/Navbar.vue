<template>
<div >
     <div class="HeaderNav">
        <div @click="CatState = !CatState"><a href="#">دسته بندی کالاها</a>
        </div>
        <div><a href="#"  @click="GoTo(800) , store.Products.mostSale.state =  !store.Products.mostSale.state ">پرفروشترین ها </a></div>
        <div><a href="#" @click="GoTo(1200) , store.Products.new.state =  !store.Products.new.state">تخفیفها و پیشنهادها </a></div>
        <div><a href="#" >شگفت انگیز ها  </a></div>
        <div><a href="#" > سایر  </a></div>

    </div>
        <!-- -------------------------category----options------ -->
    <div dir="rtl">
        <div id="categ" class="categoriesMenu" v-if="CatState" >
            <div class="mainCategory">
                <div tabindex="1" @click="subMenu = !subMenu , subMenu2=false">پوشاک مردانه</div>
                <div tabindex="1" @click="subMenu2 = !subMenu2 ,subMenu=false">پوشاک زنانه</div>
            
            </div>
         
            <div class="subMenues">
                <div v-if="subMenu">
                    <div><router-link to="/products" href="#">لباس مردانه</router-link></div>
                    <div><router-link to="/products" href="#">کفش مردانه</router-link></div>
                    <div><router-link to="/products" href="#">ساعت مردانه</router-link></div>
                    <div><router-link to="/products" href="#">کیف مردانه</router-link></div>
                    <div><router-link to="/products" href="#">کمربند مردانه</router-link></div>
                    <div><router-link to="/products" href="#">عینک مردانه</router-link></div>
                </div>
                <div v-if="subMenu2">
                    <div><a href="#">لباس زنانه</a></div>
                    <div><a href="#">کفش زنانه</a></div>
                    <div><a href="#">ساعت زنانه</a></div>
                    <div><a href="#">کیف زنانه</a></div>
                    <div><a href="#">کمربند زنانه</a></div>
                    <div><a href="#">عینک زنانه</a></div>
                </div>
            </div>
    
        </div>

    </div>
 
    
   
</div>  




</template>
<script setup>
import {ref} from 'vue'
import { useStore } from '../../stores/counter';
const store = useStore()
let CatState = ref(false)
let subMenu = ref(false)
let subMenu2 = ref(false)
window.addEventListener('mouseup', function(e) {
    let categ = document.getElementById('categ');
    if (!categ.contains(e.target)) {
        CatState.value=false
    }
});

function GoTo(x){
    scrollTo( 0 , x)

}



</script>
<style lang="scss" scoped>

.categoriesMenu{
    display: flex;
    position: absolute;
    background-color: rgb(0, 119, 237);
    flex-direction: row-reverse;
    text-align: right;
    width: 26rem;
    z-index: 3;
    border-radius: 3px;
    flex-direction: column;
    box-shadow: 0px 0px 6px 1px rgb(89, 89, 89);
    .subMenues{
        display: flex;
        
        div{
            display: flex;
            flex-direction: column;
            width: 100%;
            :hover{
                    background-color: rgb(56, 138, 252);
                    
                }
            div{
                padding: 1rem;
               padding-right: 3rem;
                a{
                text-decoration: none;
                color: rgb(255, 255, 255);
            }}
        }
    }
    .mainCategory{
        font-size: 1.1rem;
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        padding: 1rem;
        position: relative;
        top: 0%;
        
        div{
            padding-right: 2rem;
            margin-top: 1rem;
            width: 100%;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
                line-height: 3rem;
                color: rgb(255, 255, 255);
            &:hover{
                background-color: rgb(18, 135, 252);
            }
            
            &:focus {
                    background-color: rgb(0, 61, 107);
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

