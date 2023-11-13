<template>
  <div>
    <button @click="filmeStore.carregarFilmes">Buscar Filmes</button>
    <button @click="filmeStore.carregarProximaPagina">Próxima Pagina</button>
    <button @click="filmeStore.carregarPaginaAnterior">Página Anterior</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFilmesStore } from '../store/api'

export default defineComponent({
  setup() {
    const filmeStore = useFilmesStore();
    return {
      filmeStore
    };
  },
  monted(){
    this.filmeStore.carregarFilmes()
  }
});
</script>