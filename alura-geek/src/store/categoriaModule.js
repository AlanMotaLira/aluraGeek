import CategoriaDomain from "../domain/CategoriaDomain.js";

const categoriaDomain = new CategoriaDomain();

const categoriaModule = {
  state: {
    categorias: [],
  },
  mutations: {
    CATEGORIAS_CADASTRADAS(state, { categorias }) {
      state.categorias = categorias;
    },
  },
  actions: {
    categorias({ commit }) {
      categoriaDomain.consultarDados().then((res) => {
        commit("CATEGORIAS_CADASTRADAS", { categorias: res });
      });
    },
  },
  getters: {
    Categorias(state) {
      return state.categorias;
    },
  },
};

export default categoriaModule