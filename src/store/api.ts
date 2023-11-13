import { defineStore } from 'pinia'
import axios from 'axios';

export const useFilmesStore = defineStore({
    id: 'movie',
    state: () => ({
      filmes: [],
      baseURL: 'https://api.themoviedb.org/3/discover/movie',
      api_key: 'ea50df2fafdaa8c0f5c42dfbb1bd82f9',
      paginaAtual: 1,
    }),
    actions: {
      async carregarFilmes() {
        try {
          const response = await axios.get(`${this.baseURL}?api_key=${this.api_key}&sort_by=popularity.desc&page=${this.paginaAtual}`);
          this.filmes = response.data;
          console.log(this.filmes)
        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        }
      },
      async carregarProximaPagina() {
        this.paginaAtual += 1;
        await this.carregarFilmes();
      },
      async carregarPaginaAnterior() {
        this.paginaAtual -= 1;
        await this.carregarFilmes();
      },
    },
  });
