<script>
  import axios from 'axios'
  
  export default {
    data() {
      return {
        pokemonInfo: {
          id: null,
          name: null,
          image: null,
          type1: null,
          type2: null,
        },
        pokemonList: [],
      }
    },
    mounted() {
      this.pokemonInfo.id = 1
      this.pokemonInfo.name = 'bulbassaur',
      this.pokemonInfo.image = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/1.png'
      this.pokemonInfo.type1 = 'grass'
      this.pokemonInfo.type2 = 'poison'

      axios.get('http://localhost:8000/api/pokemon?limit=150&offset=0')
        .then((response) => {
          this.pokemonList = response.data
        })
    },
    computed: {
    },
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
            <div class="col-md-6 col-sm-12 col-lg-6 mt-3">
              <img class="img" v-bind:src="pokemonInfo.image">

              <p> {{ pokemonInfo.name }} </p>

              <button class="btn btn-success m-3">{{ pokemonInfo.type1 }}</button>
              <button class="btn btn-success"> {{ pokemonInfo.type2 }}</button>
            </div>
            
            <div class="col-md-6 col-sm-12 col-lg-6 mt-3">
              <ul class='list-group'>
                <li class="list-group-item" v-for="pokemons in pokemonList">{{ pokemons.name }}</li>
              </ul>
            </div>
        </div>
      </div>

      <div class="card-footer text-center">
        Harve TM - Todos os direitos são do pokemon
      </div>
    </div>
  </div>
</template>
