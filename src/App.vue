<script>
import Header from './components/Header.vue';
import List from './components/ProductList.vue';

export default{
    name:'MyApp',
    components:{
        Header,
        List,
    },
    data(){
        return{
            title:'aaaaaa',
        }
    },
}
</script>

<template>
<Header/>
<List/>

</template>

<style scoped>

</style>
