import { createStore } from 'vuex';
import categoriaModule from './categoriaModule.js'
import produtosModule from './produtosModule.js'
import usuarioModule from './usuarioModule.js'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categoriaModule,
    produtosModule,
    usuarioModule
  },
});
