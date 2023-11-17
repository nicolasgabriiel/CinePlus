<template>
    <header>
      <div  class="container-header">
        <RouterLink to="/" @click='zerarInput()'>
            <h1>CinePlus</h1>
        </RouterLink>
          <form id="pesquisa" class="pesquisa">
            <input  v-model="inputPesquisa" placeholder="Pesquisar por Título" minlength="1" id="meuInput"/>
            <button type="button" @click="pesquisar" form="pesquisa"></button>
          </form>
        </div>
      <div class="box-filtros">
        <button>Filtros</button>
        <button @click="filmeStore.DesligarAvisoDeFiltro()">X</button>
      </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFilmesStore } from '../store/api'

export default defineComponent({
    name: 'Header-Component-Vue',
    setup() {
        const filmeStore = useFilmesStore();
        return {
            filmeStore
        };
    },
    data() {
    return {
      inputPesquisa: '',
      dadosPesquisa: ''
    };
  },
  methods: {
    pesquisar() {
      this.dadosPesquisa = this.inputPesquisa.replace(/ /g, '+')  
      console.log(this.dadosPesquisa)
      this.filmeStore.pesquisarFilmes(this.dadosPesquisa);

    },
    zerarInput(){
        this.inputPesquisa = ''
        this.filmeStore.carregarFilmes()
    }
  },
})
</script>

<style>
.container-header{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.container-header h1{
  font-family:'agbalumo';
  margin: 30px 100px;
  font-size: 4em;
  color: #E50914;
}
.pesquisa{
display: flex;
flex-direction: row;
align-items: center;
margin-right: 50px;
}
.pesquisa > input{
  border: 1px solid white;
  padding: 5px 40px;
  font-size: 1.5em;
  font-weight: 400;
  background-color: #363535;
  color: white;
}
.pesquisa > button{
  background-color: #141414;
  background-image: url(../assets/lupa-de-pesquisa.png);
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 10px;
  width: 28px;
  height: 28px;
  border: none;
  cursor: pointer;
  transition: 0.2s;
}
.pesquisa > button:hover{
scale: 1.1;
}
</style>