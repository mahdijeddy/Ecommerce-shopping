<template>
<div class="CatProduct">
    کتگوری
</div>
<div class="row mt-5">
    <SlideProduct/>
    <ProductsView/>
    
</div>

</template>
<script setup>
import ProductsView from '../components/Products/ProductsView.vue';
import SlideProduct from '../components/Products/SlideProduct.vue';


</script>
<style lang="scss" scoped>
.CatProduct{
    width: 100%;
    height: 128px;
    background-color: #F6F6F6;
    display: flex;
    padding: 0 5rem;
    flex-direction: row-reverse;
    align-items: center;
    font-weight: 700;
    font-size: 1.6rem;
    margin-bottom: 1rem;
}
</style>
