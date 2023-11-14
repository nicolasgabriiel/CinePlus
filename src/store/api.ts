import { defineStore } from 'pinia'
import axios from 'axios';

export const useFilmesStore = defineStore({
    id: 'movie',
    state: () => ({
      filmes: [],
      baseURL: 'https://api.themoviedb.org/3/discover/movie',
      api_key: 'ea50df2fafdaa8c0f5c42dfbb1bd82f9',
      paginaAtual: 1,
      // Dados da API
      titulo: [ ] as string[],
      ano: [ ] as string[],
      sinopse: [ ] as string[],
      imagem: [ ] as string[],
      id: [] as number []
    }),
    actions: {
      async carregarFilmes() {
        try {
          const response = await axios.get(`${this.baseURL}?api_key=${this.api_key}&sort_by=popularity.desc&page=${this.paginaAtual}`);
          this.filmes = response.data.results 
          for(let i = 0; i < this.filmes.length; i++){
            this.titulo[i] = this.filmes[i].title
            this.ano[i] = this.filmes[i].release_date.substring(0, 4)
            this.sinopse[i] = this.filmes[i].overview
            this.imagem[i] = `https://image.tmdb.org/t/p/original/${this.filmes[i].poster_path}` 
            this.id[i] = this.filmes[i].id
          }
          console.log(this.imagem[0])
        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        }
      },
      async carregarProximaPagina() {
        this.paginaAtual += 1;
        this.imagem = []
        await this.carregarFilmes();
      },
      async carregarPaginaAnterior() {
        this.paginaAtual -= 1;
        this.imagem = []
        await this.carregarFilmes();
      },
    },
  });
