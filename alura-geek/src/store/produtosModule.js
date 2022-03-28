import ProdutoDomain from "../domain/ProdutoDomain.js";

const produtoDomain = new ProdutoDomain();

const produtosModule = {
  state: {
    todosProdutos:[],
  },
  mutations: {
    PRODUTOS_CADASTRADOS(state, { produtos }) {
        state.todosProdutos = produtos;
      },
  },
  actions: {
    todosProdutos({ commit }) {
      produtoDomain
        .consultarDados()
        .then((res) => {
        commit("PRODUTOS_CADASTRADOS", { produtos: res });
      });
    },

  },
  getters: {
    ProdutosListados(state) {
      return state.todosProdutos;
      },

  },
  
};

export default produtosModule;