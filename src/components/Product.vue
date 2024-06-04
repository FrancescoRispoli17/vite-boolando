<script>
    export default{
        name:'Product',
        props:{
            prodotto: String,
        },
        data(){
            return{
               
            }

        },
    }
</script>

<template>
    <div class="product">
        <img :src="prodotto.frontImage" :alt="prodotto.frontImage"/>
    </div>
</template>

<style lang="scss">

.product{
    width: calc(100% / 3 - 20px);
    margin-top: 30px;
    height: 500px;
    background-color: red;
}
</style>