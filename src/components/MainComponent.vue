<template>
    <main>
        <h2>Lista de Filmes</h2>
        <div v-for="(filme, index) in filmeStore.filmes" :key="index" class="container-filmes">
            <img :src="filmeStore.imagem[index]" :alt="filmeStore.titulo[index]" loading="lazy" class="imagem-filme"/>

            <h3>{{ filmeStore.titulo[index] }}</h3>
            <h5>{{ filmeStore.ano[index] }}</h5>
            <p>{{ filmeStore.sinopse[index] }}</p>
        </div>
        <nav>
            <button @click="filmeStore.carregarPaginaAnterior" :disabled="filmeStore.paginaAtual === 1">Página Anterior</button>
            <span>{{ filmeStore.paginaAtual }}</span>
            <button @click="filmeStore.carregarProximaPagina">Próxima Pagina</button>
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
.imagem-filme {
    width: 100px;
    height: 100px;
    background-color: red;
    background-size: contain;
}

.container-filmes {
    background-color: #cccccc;
}
</style>

