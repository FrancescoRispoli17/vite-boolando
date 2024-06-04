<script>
import products from '../data/db.json';
import Product from './Product.vue';
    export default{
        name:'Main',
        components:{
            Product,
        },
        data(){
            return{
                products,
            }
        },
    }
</script>

<template>
    <div class="container">
        <div class="row">
            <Product v-for="prodotto in products"
                :prodotto="prodotto"
            />
        </div>
    </div>
</template>

<style lang="scss">
    .row{
        gap: 10px;
    }
</style>