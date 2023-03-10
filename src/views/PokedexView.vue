<script>
  import { isSet } from '@vue/shared'
import axios from 'axios'
  
  export default {
    data() {
      return {
        apiUrl: 'http://localhost:8000/api/',
        pokemonInfo: {
          id: null,
          name: null,
          image: null,
          type1: null,
          type2: null,
        },
        pokemonList: [],
        pokemonSearchName: null,
        pokemonTypes: null,
      }
    },
    mounted() {
      this.pokemonInfo.id = 1
      this.pokemonInfo.name = 'bulbassaur',
      this.pokemonInfo.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png'
      this.pokemonInfo.type1 = 'grass'
      this.pokemonInfo.type2 = 'poison'

      axios.get(this.apiUrl + 'pokemon?limit=150&offset=0')
        .then((response) => {
          this.pokemonList = response.data
        })

      axios.get(this.apiUrl + 'type/search')
        .then((response) => {
          this.pokemonTypes = response.data
        })
    },
    methods: {
      populatePokemonInformation(pokemonId)
      {
        axios.get(this.apiUrl + 'pokemon?limit=150&offset=0&id=' + pokemonId)
        .then((response) => {
          this.pokemonInfo.name = response.data[0].name,
          this.pokemonInfo.image = response.data[0].image
        })
        
        axios.get(this.apiUrl + 'pokemon/types?id=' + pokemonId)
        .then((response2) => {
          let type = ''

          if (typeof response2.data[1] !== 'undefined') {
            type = response2.data[1].name;
          }

          this.pokemonInfo.type1 = response2.data[0].name
          this.pokemonInfo.type2 = type   
        })
      },
      searchPokemon() {
        this.pokemonSearchName = PokemonSearch.value
        axios.get(this.apiUrl + 'pokemon?limit=150&offset=0&partial_name=' + this.pokemonSearchName)
        .then((response) => {
          console.log(response.data)
          this.pokemonList = response.data
        })
      },
      getPokemonsByType(typeId) {
        axios.get(this.apiUrl + 'pokemon/hastype?id=' + typeId)
        .then((response) => {
          console.log(response.data)
          this.pokemonList = response.data
        })
      }
    }
  }  
</script>

<template>
  <div class="container">
    <div class="card bg-danger text-white text-center">
      <div class="card-header">
        Pokemon
      </div> 
      
      <div class="card-body">
        <div class="row">
            <div class="col-12">
              <div 
                v-for="type in pokemonTypes" 
                class="btn btn-success m-1"
                style="width: 100px;" 
                @click="getPokemonsByType(type.id)"
              > 
                {{  type.name }} 
              </div>
            </div>

            <div class="col-md-6 col-sm-12 col-lg-6 mt-3">
              <img class="img" style="width: 50%" v-bind:src="pokemonInfo.image">

              <p> {{ pokemonInfo.name }} </p>

              <button class="btn btn-success m-3">{{ pokemonInfo.type1 }}</button>
              <button v-if="pokemonInfo.type2 !== ''" class="btn btn-success"> {{ pokemonInfo.type2 }}</button>
            </div>
            
            <div class="col-md-6 col-sm-12 col-lg-6 mt-3">
              <div class="mb-3 form-group">
                <input type="text" class="form-control" id="PokemonSearch">
                <button class="btn btn-success mt-2" @click="searchPokemon()">Pesquisar pokemon</button>
              </div>
              
              <div class=" pokedex-menu">
                  <ul class='list-group'>
                    <li class="list-group-item" 
                      v-for="pokemons in pokemonList" 
                      @click="populatePokemonInformation(pokemons.api_id)"
                    >
                      {{ pokemons.name }}
                    </li>
                  </ul>
                </div>
            </div>
        </div>
      </div>

      <div class="card-footer text-center">
        Harve TM - Todos os direitos são do pokemon
      </div>
    </div>
  </div>
</template>
