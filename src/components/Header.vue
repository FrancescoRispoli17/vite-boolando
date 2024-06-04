<script>
    export default{
        name:'Header',
        data(){
            return{
                MenuFilter:[
                    {
                        name:'Uomo',
                    },
                    {
                        name:'Donna',
                    },
                    {
                        name:'Bambino',
                    },
                ],
                MenuIcons:[
                ]
            }
        },
    };
</script>

<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col" >
                    <ul>
                        <li v-for="filter in MenuFilter">{{ filter.name }}</li>
                    </ul>
                </div>
                <div class="col">
                    <img src="../assets/img/boolean-logo.png" alt="logo">
                    <font-awesome-icon icon="fa-solid fa-user-secret" />

                    
                </div>
                <div class="col">
                    
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

header{
    background-color: $header-color;
    padding: 1.5rem 0;
    color: white;
    font-size: 20px;

    img{
        width: 150px;
        margin: 0 10rem;
    }
}
</style>