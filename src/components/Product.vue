<script>
    export default{
        name:'Product',
        props:{
            prodotto: Object,
        },
        data(){
            return{
               
            }

        },
        methods:{
            getimage(img){
            return new URL(img,import.meta.url).href
            },
            discount(product){
                let ris;
                if(product.badges[0].type=='discount')
                    ris=product.badges[0].value;
                 else if(product.badges[1] && product.badges[1].type=='discount')
                     ris=product.badges[1].value;

                    return ris;
            }

        }
        
    }
</script>

<template>
    <div class="product">
        <img :src="getimage(prodotto.frontImage)" :alt="prodotto.brand"/>
        <div class="labels">
            <p class="bgcolor-red" v-show="discount(prodotto)">{{ discount(prodotto) }}</p>
            <p class="bgcolor-green" v-show="prodotto.badges[0].type=='tag'">{{ prodotto.badges[0].value }}</p>
        </div>
        <div class="heart" :class="{'red':prodotto.isInFavorites}"><font-awesome-icon icon="fa-solid fa-heart" /></div>
        <P class="marca">{{prodotto.brand}}</P>
        <p class="dress-name">{{prodotto.name}}</p>
        <p class="prezzo-scontato">14,99€ <s class="prezzo">{{prodotto.price}}€</s></p>
        </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.bgcolor-red{
    background-color: $discount-bgcolor;
}
.bgcolor-green{
    background-color: $Sostenibility;
}
.product{
    width: calc(100% / 3 - 20px);
    margin-top: 30px;
    position: relative;
    img{
        width: 100%;
    }
    .heart{
        position: absolute;
        top: 5px;
        right: 5px;
        font-size: 30px;
    }
    .labels{
        display: flex;
        position: absolute;
        bottom: 90px;
        left: 0px;
        z-index: 2;
    }
    .marca{
        font-size: 15px;
        color: gray;
        font-weight: 600;
    }
    .dress-name{
        font-weight: 600;
    }
    .prezzo-scontato{
        color: red;
        font-size: 15px;
    }
    .prezzo{
        color: black;
    }
    .red{
        color: red;
    }
}

</style>