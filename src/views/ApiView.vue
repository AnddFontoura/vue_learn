<script>
import axios from 'axios'
import { isVNode } from 'vue';

  export default {
    data() {
      return {
        pokemonName: null,
        pokemonImage: null,
        pokemonTagType: [],
        info: null
      }
    },
    mounted() {
        this.pokemonName = "Aguardando"
        this.pokemonImage = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
    },
    methods: {
      getPokemon() {
        let searchPokemonId = pokemonId.value;
        let pokemonData = [];

        this.pokemonImage = "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
        axios.get('https://pokeapi.co/api/v2/pokemon/' + searchPokemonId)
        .then( responses => (
          this.pokemonName = responses.data.name, 
          this.pokemonImage = responses.data.sprites.front_default 
          )
        )
      
        console.log(this.pokemonImage)
      }
    }
  }
</script>

<template>
    <div class="api-reflex">
      <h1> Informações de Pokemons </h1>
      <input type="number" id="pokemonId">
      <button @click="getPokemon()"> Get new pokemon </button>
      
      <div class="pokeInfo">
        {{ pokemonName }}
        <img v-bind:src="pokemonImage"> 
      </div>
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
  