<template>
    <header>
      <div>
        <RouterLink to="/" @click='zerarInput()'>
            <h1>CinePlus</h1>
        </RouterLink>
        <nav>
            <input  v-model="inputPesquisa" />
            <button type="button" @click="pesquisar">Q</button>
        </nav>
      </div>
      <div>
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