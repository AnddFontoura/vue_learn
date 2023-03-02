<script>
import axios from 'axios'

  export default {
    data() {
      return {
        pokemon: null,
        info: null
      }
    },
    mounted() {
        axios.get('https://pokeapi.co/api/v2/pokemon/1')
        .then( response => (this.info = response))
    },
    methods: {
      getPokemon() {
        axios.get('https://pokeapi.co/api/v2/pokemon/2')
        .then( response => (this.info = response))
      }
    }
  }
</script>

<template>
    <div class="api-reflex">
      <h1> Teste </h1>
      <button @click="getPokemon()"> Get new pokemon </button>
      {{ info }}
    </div>
  </template>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      align-items: center;
    }
  }

  .api-reflex {
    border: 1px solid black;
    padding: 10px;
  }
  </style>
  