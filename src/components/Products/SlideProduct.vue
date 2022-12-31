<template>
   
    <div class="col-3">
        <div class="card" style="width: 18rem;z-index: -5" >
        <div class="card-body Side " >
            
   
            <div>
                <p class="text-muted fs-4" @click="store.Products.Drops.Price1=!store.Products.Drops.Price1">
                    قیمت <img class="mx-3" style="width: 20px;" src="@/asserts/icons/dowmIcon.png">
                    </p>
                <p class="mx-5 fs-5 text-secondary" v-if="store.Products.Drops.Price1">2400000</p>
            </div>
            <hr>
            <div >
                <p class="text-muted fs-4" @click="store.Products.Drops.Size1=!store.Products.Drops.Size1">
                    اندازه <img class="mx-3" style="width: 20px;" src="@/asserts/icons/dowmIcon.png">
                    </p>
                <div class="mx-5 fs-5 text-secondary" v-if="store.Products.Drops.Size1">
                    <p>41</p>
                    <p>40</p>
                    <p>39</p>
                    </div>
            </div>
            <hr>
            <div >
                <p class="text-muted fs-4" >
                    دسته بندی 
                    </p>
                <p class="mx-5 fs-5 text-secondary">پوشاک</p>
            </div>
            <hr>
            <div >
                <p class="text-muted fs-4" >
                    امتیاز کالا                        </p>
                <p class="mx-5 fs-5 text-secondary">4</p>
            </div>
           

        </div>
        </div>
    </div>
 


</template>
<script setup>
import { useStore } from '../../stores/counter';
const store = useStore()
</script>
<style lang="scss" scoped>
.Side{
div{
    p{
        cursor: pointer;
        display: flex;
        flex-direction: row-reverse;
        padding: 0.4rem;
        align-items: center;
        font-size: 1.2rem;
        margin: 0 1rem;
    }
}
}
</style>