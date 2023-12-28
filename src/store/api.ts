import { defineStore } from 'pinia'
import axios from 'axios';

export const useFilmesStore = defineStore({
    id: 'movie',
    state: () => ({
      //Filmes da Página Principal
      filmes: [],
      //Dados de Requisição da API
      baseURL: 'https://api.themoviedb.org/3/discover/movie',
      api_key: 'ea50df2fafdaa8c0f5c42dfbb1bd82f9',
      paginaAtual: 1,
      // Dados da API
      titulo: [ ] as string[],
      ano: [ ] as string[],
      sinopse: [ ] as string[],
      imagem: [ ] as string[],
      id: [] as number [],
      //Pesquisa no Input
      resultadosPesquisa: [],
      //Filtro de Genero
      resultadoGenero: [],
      filtroAtivo: false,
      generos: [],
      nomeGenero: [],
      idGenero: [],
      generoAtual: '',
      caixaDeFiltros: false,
      nomeDoFiltro: 'Gêneros'
    }),
    actions: {

      // CARREGA OS FILMES
      async carregarFilmes() {
        try {
          const response = await axios.get(`${this.baseURL}?api_key=${this.api_key}&sort_by=popularity.desc&page=${this.paginaAtual}`);
          this.filmes = response.data.results 
          this.preencherDados(this.filmes)
        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        }
      },


      // TROCA DE PÁGINA
      async carregarProximaPagina() {
        this.paginaAtual += 1;
        this.imagem = []
        if(this.filtroAtivo === false){
          await this.carregarFilmes();
        }else{
          await this.carregarFilmesPorGenero(this.generoAtual)
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },
      async carregarPaginaAnterior() {
        this.paginaAtual -= 1;
        this.imagem = []
        await this.carregarFilmes();
        if(this.filtroAtivo === false){
          await this.carregarFilmes();
        }else{
          await this.carregarFilmesPorGenero(this.generoAtual)
        }
        window.scrollTo({ top: 0, behavior: 'smooth' })
      },


      // RESULTADO DE PESQUISA
      async pesquisarFilmes(pesquisa: string) {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?query=${pesquisa}&api_key=${this.api_key}`
          );
          this.resultadosPesquisa = response.data.results;
          this.imagem = []
          this.preencherDados(this.resultadosPesquisa)

        } catch (error) {
          console.error('Erro ao buscar filmes:', error);
        }
      },


      //CARREGAR FILME POR GENERO
      async carregarFilmesPorGenero(generoId: number, index: number) {
        this.generoAtual = generoId
        console.log(index)
        this.nomeDoFiltro = this.nomeGenero[index]
        this.LigarAvisoDeFiltro()
        try {
          const response = await axios.get(
            `${this.baseURL}?api_key=${this.api_key}&sort_by=popularity.desc&page=${this.paginaAtual}&with_genres=${generoId}`
          );
          this.resultadoGenero = response.data.results;
          this.imagem = []
          this.preencherDados(this.resultadoGenero)
          this.caixaDeFiltros = false
          window.scrollTo({ top: 0, behavior: 'smooth' })
          document.documentElement.style.overflow = 'auto';
  
        } catch (error) {
          console.error('Erro ao buscar filmes por gênero:', error);
        }
      },

      //PREENCHER OS DADOS EXIBIDOS
      preencherDados(valor: any){
        for(let i = 0; i < valor.length; i++){
          this.titulo[i] = valor[i].title
          this.ano[i] = valor[i].release_date.substring(0, 4)
          this.sinopse[i] = valor[i].overview
          this.imagem[i] = `https://image.tmdb.org/t/p/original/${valor[i].poster_path}` 
          this.id[i] = valor[i].id
        }
      },
      async carregarGeneros() {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${this.api_key}`);
          this.generos = response.data.genres;
          console.log(this.generos)
          for(let i = 0; i < this.generos.length; i++){
            this.nomeGenero[i] = this.generos[i].name
            this.idGenero[i] = this.generos[i].id
          }
          console.log(this.generos)
        } catch (error) {
          console.error('Erro ao carregar lista de gêneros:', error);
        }
      },
      LigarAvisoDeFiltro(){
        if(this.filtroAtivo === false){
          this.paginaAtual = 1
          this.filtroAtivo = true
        }else{
          this.filtroAtivo = true
        }
      },
      DesligarAvisoDeFiltro(){
        this.filtroAtivo = false
        this.paginaAtual = 1
        this.carregarFilmes()
        this.nomeDoFiltro = 'Gêneros'
      }

    },
   
  });
