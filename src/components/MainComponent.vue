<template>
    <main class="container-principal">
        <h2>Populares no CinePlus</h2>
        <div class="box-filmes">
        <div v-for="(filme, index) in filmeStore.filmes" :key="index" class="container-filmes">
            <img :src="filmeStore.imagem[index]" :alt="filmeStore.titulo[index]" loading="lazy" class="imagem-filme"/>
            <h3>{{ filmeStore.titulo[index] }}</h3>
            <h5>{{ filmeStore.ano[index] }}</h5>
            <p>{{ filmeStore.sinopse[index] }}</p>
        </div>
    </div>
        <nav class="navegacao">
            <button @click="filmeStore.carregarPaginaAnterior" :disabled="filmeStore.paginaAtual === 1" class="anterior"></button>
            <span class="pagina-atual">{{ filmeStore.paginaAtual }}</span>
            <button @click="filmeStore.carregarProximaPagina" class="proximo"></button>
        </nav>
    </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFilmesStore } from '../store/api'

export default defineComponent({
    name: 'Main-Component-Vue',
    setup() {
        const filmeStore = useFilmesStore();
        return {
            filmeStore
        };
    },
    beforeMount() {
        this.filmeStore.carregarFilmes()
        this.filmeStore.carregarGeneros()
    },
})
</script>

<style>
.container-principal h2{
    font-size: 2em;
    color: white;
    margin: 70px 50px 30px;
    
}
.box-filmes{
    margin: 0px 50px;
    display: grid;
  grid-template-columns: repeat(5, 1fr); /* Define 3 colunas com largura igual */
  grid-gap: 50px; /* Espaçamento entre os itens */
}
.container-filmes {
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;

}
.container-filmes:hover p {
  color: white;
}
.container-filmes:hover .imagem-filme {
    width: 210px;
    height: 310px;
}
.imagem-filme {
    width: 200px;
    height: 300px;
    background-color: red;
    background-size: contain;
    transition: 0.5s;
}
.container-filmes h3{
    color: white;
    font-size: 2em;
    font-weight: bold;
    padding: 20px 0 5px;
    text-align: center;
}
.container-filmes h5{
    color: white;
    font-size: 1.5em;
    font-weight: bold;
}
.container-filmes p{
    margin-top: 10px;
    color: transparent;
    font-size: 1.2em;
    text-align: justify;
    font-weight: bold;
    transition: 1s;
}
.navegacao{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}
.navegacao button{
    color:  white;
    border: none;
    box-shadow: none;
    border-radius: 5px;
    background-position: center;
    background-size: contain;
    width: 40px;
    height: 40px;
    background-color: transparent;
    margin: 10px;
    cursor: pointer;
    transition: 0.3s;
}
.navegacao button:hover{
    scale: 1.05;
}
.navegacao .anterior{
    background-image: url(../assets/anterior.png);
}
.navegacao .proximo{
    background-image: url(../assets/proximo.png);
}
.navegacao .pagina-atual{
    color: white;
    font-size: 2em;
   
}
</style>

