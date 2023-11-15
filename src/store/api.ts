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
      id: [] as number [],
      //Pesquisa na API
      resultadosPesquisa: []
    }),
    actions: {
      // CARREGA OS FILMES
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
        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        }
      },
      // TROCA DE PÁGINA
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
      // RESULTADO DE PESQUISA
      async pesquisarFilmes(pesquisa: string) {
        console.log('a Função Pesquisar Filmes foi ativada')
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${pesquisa}&api_key=${this.api_key}`
          );
          this.resultadosPesquisa = response.data.results;
          console.log(this.resultadosPesquisa)
          this.imagem = []
          for(let i = 0; i < this.resultadosPesquisa.length; i++){
            this.titulo[i] = this.resultadosPesquisa[i].title
            this.ano[i] = this.resultadosPesquisa[i].release_date.substring(0, 4)
            this.sinopse[i] = this.resultadosPesquisa[i].overview
            this.imagem[i] = `https://image.tmdb.org/t/p/original/${this.resultadosPesquisa[i].poster_path}` 
            this.id[i] = this.resultadosPesquisa[i].id
          }
        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        }
      },
    },
  });
