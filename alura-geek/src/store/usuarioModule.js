import UsuarioDomain from "../domain/UsuarioDomain.js";

const usuarioDomain = new UsuarioDomain();

const usuarioModule = {
  state: {
    usuario: {},
  },
  mutations: {
    USUARIO_LOGADO(state, { usuario }) {
      state.usuario = usuario;
    },
    USUARIO_DESLOGADO(state) {
      state.usuario = {};
    },
  },
  actions: {
    validacaoAcesso({ commit }, usuario) {
      return new Promise((resolve, reject) => {
        usuarioDomain
          .criarRegistro(usuario)
          .then((res) => {
            commit("USUARIO_LOGADO", { usuario: res.nome });
            localStorage.setItem("usuario", res.nome);
            resolve(res);
          })
          .catch((err) => {
            reject(err.response.data);
          });
      });
    },

    registroUsuario({}, usuario) {
      return new Promise((resolve, reject) => {
        usuarioDomain
          .cadastroUsuario(usuario)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            console.log(err), reject(err.response.data);
          });
      });
    },
  },
  getters: {
    perfilAtivo(state) {
      return state.usuario.nome;
    },
  },
};

export default usuarioModule;
