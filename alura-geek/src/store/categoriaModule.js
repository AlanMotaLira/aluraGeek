import CategoriaDomain from "../domain/CategoriaDomain.js";

const categoriaDomain = new CategoriaDomain();

const categoriaModule = {
  state: {
    categorias: [],
    selecionados: [],
    categoriaCadastradas:[],
    produtos: "",
  },
  mutations: {
    CATEGORIAS_CADASTRADAS(state, { categorias }) {
      state.categorias = categorias;
    },
    CATEGORIAS_CADASTRO(state,{categoria}){
      state.categoriaCadastradas = categoria
    },
    PRODUTO_SELECIONADOS(state, categorias) {
      state.selecionados = categorias.dados;
      state.produtos = categorias.produtos;
    },
  },
  actions: {
    categorias({ commit }) {
      categoriaDomain.consultarDados().then((res) => {
        commit("CATEGORIAS_CADASTRADAS", { categorias: res });
      });
    },
    categoriaCadastradas({commit}){
      categoriaDomain.cadastroPorGrupo().then(res=>{
        commit('CATEGORIAS_CADASTRO',{categoria:res})
      })
    },
    produtoSelecionado({ commit, state }, dados) {
      let produtos = "";
      state.categorias.forEach((item) => {
        if (item._id === dados.idCategoria) {
          produtos = item.produtos;
          return;
        }
      });
      commit("PRODUTO_SELECIONADOS", { produtos, dados });
    },
  },
  getters: {
    Categorias(state) {
      return state.categorias;
    },
    CategoriaCadastradas(state){
      return state.categoriaCadastradas
    },
    Selecionados(state) {
      return state.selecionados;
    },
    Produtos(state) {
      return state.produtos;
    },
  },
};

export default categoriaModule;
