<template >
    <div class="box-tela-oculta" :class="{hide: !filmeStore.caixaDeFiltros}">
    <div class="container-filtros" >
        <div class="header-filtros">
            <h1>Escolha um Gênero</h1>
            <button @click="fecharCaixaDeFiltro()">X</button>
        </div>
        <ul  class="lista-generos">
            <li v-for="(genero, index) in filmeStore.generos" :key="index" @click='this.filmeStore.carregarFilmesPorGenero(filmeStore.idGenero[index], index)' >{{ filmeStore.nomeGenero[index]}}</li>
        </ul>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFilmesStore } from '../store/api'

export default defineComponent({
       name:'filter-component',
       setup() {
        const filmeStore = useFilmesStore();
        return {
            filmeStore
        };
    },
    methods:{
        fecharCaixaDeFiltro(){
            this.filmeStore.caixaDeFiltros = false
            document.documentElement.style.overflow = 'auto';
        }
    }
})

</script>

<style>
.hide{
    display: none !important;
}
.box-tela-oculta{
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.6);
}
.container-filtros{
    position: absolute;
    width: 60%; 
    height: 70vh; 
    background-color: #2e2d2d; 
    text-align: center; 
    z-index: 2;
    border-radius: 25px;
    box-shadow: 13px 12px 39px -5px rgba(0,0,0,0.29);
}
.header-filtros{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.header-filtros button{
    margin: 50px 50px 0 0;
    justify-content: flex-end;
    background-color: transparent;
    border: none;
    font-weight: 900;
    color: white;
    font-size: 2em;
    cursor: pointer;
    transition: 0.2s;
}
.header-filtros button:hover{
    color: red;
}
.header-filtros h1{
    margin: 50px  0 0 100px;
    color: white;
    font-size: 2em;
}
.lista-generos{
    display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 50px; 
  margin-top: 100px;

}
.lista-generos li{
    text-decoration: none;
    font-size: 1.5em;
    color: white;
    transition: 0.2s;
    cursor: pointer;
}
.lista-generos li:hover{
    color: rgb(204, 193, 193);
}
</style>