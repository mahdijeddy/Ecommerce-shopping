<template>

        <Baner/>
        <Bottom/>
    <div class="mt-5" style="cursor: pointer;">
        <div class="mt-5 d-flex justify-content-end me-4 fs-5" @click=" store.Products.mostSale.state =  !store.Products.mostSale.state ">
            <p>            پرفروش ترینها
        </p>
    </div>
    <hr>
        <div class="row">
            <div class="col-3 mt-3" v-for="P in  store.Products.mostSale.products" :key="P" v-if=" store.Products.mostSale.state">
                <a class="text-decoration-none text-dark" href="#">
                    <div class="card"  style="width: 17rem;">
                    <img style="height: 13rem;" :src="P.img" class="card-img-top p-4">
                    <div class="card-body text-center">
                        <p class="card-text">
                            {{P.title}}
                        </p>
                        <div class="card-footer text-muted">
                            {{P.price}}
                        </div>
                    </div>
                </div>
                </a>
            </div>

        </div>
    </div>
    <div class="mt-5" style="cursor: pointer;">
        <div class="mt-5 d-flex justify-content-end me-4 fs-5" @click=" store.Products.new.state =  !store.Products.new.state">
            <p>      محصولات جدید  </p>
        </div>
        <hr>
        <div class="row">
            <div class="col-3 mt-3" v-for="P in store.Products.new.products" :key="P" v-if="store.Products.new.state">
                <a class="text-decoration-none text-dark" href="#">
                    <div class="card"  style="width: 17rem;">
                    <img style="height: 13rem;" :src="P.img" class="card-img-top p-4">
                    <div class="card-body text-center">
                        <p class="card-text">
                            {{P.title}}
                        </p>
                        <div class="card-footer text-muted">
                            {{P.price}}
                        </div>
                    </div>
                </div>
                </a>
            </div>

        </div>
    </div>

</template>
<script setup>
import Baner from './Main/Baner.vue'
import Bottom from './Main/Bottom.vue'
import {useStore} from '../stores/counter';
import { storeToRefs } from 'pinia';

const store = useStore()

const { Products} = storeToRefs(store)

</script>