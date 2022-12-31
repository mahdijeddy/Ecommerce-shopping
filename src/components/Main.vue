<template>

        <Baner/>
        <Bottom/>
    <div class="mt-5">
        <div class="mt-5 d-flex justify-content-end me-4 fs-5">
            <p>            پرفروش ترینها
        </p>
    </div>
    <hr>
        <div class="row">
            <div class="col-3 mt-3" v-for="P in store.Products.mostPopuler" :key="P">
                <a class="text-decoration-none text-dark" href="#">
                    <div class="card"  style="width: 17rem;">
                    <img style="height: 13rem;" :src="P.imgSrc" class="card-img-top p-4">
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
    <div class="mt-5">
        <div class="mt-5 d-flex justify-content-end me-4 fs-5">
            <p>      محصولات جدید  </p>
        </div>
        <hr>
        <div class="row">
            <div class="col-3 mt-3" v-for="P in store.Products.newArrived" :key="P">
                <a class="text-decoration-none text-dark" href="#">
                    <div class="card"  style="width: 17rem;">
                    <img style="height: 13rem;" :src="P.imgSrc" class="card-img-top p-4">
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