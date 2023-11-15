<template>
    <div>
        <li v-for="(genero, index) in filmeStore.generos" :key="index">
            <ul  @click='this.filmeStore.carregarFilmesPorGenero(filmeStore.generos[index].id)' >{{ filmeStore.generos[index].name }}</ul>
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