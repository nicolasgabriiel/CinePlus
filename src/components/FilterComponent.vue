<template>
    <div class="container-filtros" :class="{hide: !filmeStore.caixaDeFiltros}">
        <li v-for="(genero, index) in filmeStore.generos" :key="index">
            <ul  @click='this.filmeStore.carregarFilmesPorGenero(filmeStore.idGenero[index])' >{{ filmeStore.nomeGenero[index]}}</ul>
        </li>
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
})

</script>

<style>
.hide{
    display: none !important;
}
</style>