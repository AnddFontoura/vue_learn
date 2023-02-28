<script>
    export default {
        data () {
            return {
                saldo: 100.00,
            }
        },
        methods: {
            checkIfSaldoIsHigherThen (topValue) {
                let result

                result = this.saldo > topValue
                
                return result
            },

            setSaldo() {
                this.saldo = changeSaldo.value 
            }
        }
    }

</script>

<template>
    <div class="about">
      <h1>This is an example page about If using Vue</h1>
    </div>

    <div class="saldo" v-if="saldo > 0">
        <h1> R$ {{ saldo }}</h1>
    </div>

    <div class="saldo" v-if="checkIfSaldoIsHigherThen(50)">
        <h1> R$ {{ saldo }}</h1>
    </div>

    <h5> Saldo: {{ saldo }}</h5>
    <input type="number" id='changeSaldo' v-bind:value="saldo" @blur="setSaldo()">
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
