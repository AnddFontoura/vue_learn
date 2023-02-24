<script>
    export default {
        data() {
            return {
                variable: 'teste',
                varArray: [
                    'andre',
                    'leticia',
                    'joao'
                ], 
                cont: 0,
                name: 'pedro'
            }
        },
        methods: {
                soma1: function soma1() {
                    this.cont = this.cont + 1    
                },
                soma5: function() {
                    this.cont = this.cont + 5    
                },
                /*subtrai3: () =>  {          -> fraco
                    valor = this.cont;
                    console.log(valor);
                    return valor - 3
                },*/
                subtrai3 () {     
                    this.cont = this.cont - 3;
                },
                subtrai7 () {     
                    this.cont = this.cont - 7;
                },
        }
    }
</script>

<template>
    <p>{{ name }}</p>
    <p>{{ cont }}</p>
    <button @click="soma1">Soma 1</button>
    <button @click="soma5">Soma 5</button>
    <button @click="subtrai3">Subtrai 3</button>
    <button @click="subtrai7">Subtrai 7</button> 



    <ul>
        <li v-for="information in varArray">{{ information }}</li>
    </ul>
</template>
