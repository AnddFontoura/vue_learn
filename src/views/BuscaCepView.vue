<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                cep: null,
                prefix: 'https://viacep.com.br/ws/',
                suffix: '/json/',
                address: '',
            }
        },
        mounted() {

        },
        methods: {
            buscarCep() {
                this.cep = cepToSearch.value
                let url = this.prefix + this.cep + this.suffix;
                console.log(url)

                axios.get(url)
                .then( responses => (
                    this.address = responses.data.logradouro 
                ))
            }
        }
        
    }
</script>

<template>
    <main>
        <div class="alert">
            <input type="text" id="cepToSearch">
            <button @click="buscarCep()">Buscar CEP</button>
        </div>

        {{ address }}
    </main>
</template>
