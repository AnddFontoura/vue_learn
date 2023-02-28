<script>
    export default {
        data() {
            return {
                arrayTimes: [
                    'Corinthians',
                    'Palmeiras',
                    'Santos'
                ],
            }
        },
        methods: {
            addNewTeam() {
                this.arrayTimes.push(novoTime.value)
            },
            removeTeam(position) {
                console.log(position)
                this.arrayTimes.splice(position, 1)
            }
        }
    }
</script>

<template>
    <div class="about">
        <h1>This is an learn Page about For in Vue</h1>

        <br>

        <ul>
            <li v-for="times, key in arrayTimes"> <span class="btn-deletar" @click="removeTeam(key)"> D </span> {{ times }} </li>
        </ul>

        <br>
        
        <input type="text" id="novoTime" @blur="addNewTeam()"> 
    </div>
  </template>
  
  <style>
    .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }

  .btn-deletar {
        background-color: red;
        color: white;
        padding: 3px;
        margin: 5px;
    }

    li {
        margin: 10px;
    }
  </style>
  