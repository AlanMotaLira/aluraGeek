import http from "./index.js";

class Services {
  constructor(rota) {
    this.rota = rota;
  }
  consultarDados() {
    return new Promise((resolve) => {
      http
        .get(this.rota)
        .then((res) => resolve(res.data))
        .catch((err) => {
          console.log(err);
        });
    });
  }
  criarRegistro(dados) {
    return new Promise((resolve, reject) => {
      http
        .post(this.rota, dados)
        .then((res) => resolve(res.data))
        .catch((erro) => {
          console.log(erro);
          reject(erro);
        });
    });
  }
  atualizarRegistro(id, dados) {
    return new Promise((resolve) => {
      http
        .put(this.rota + `/${id}`, dados)
        .then((res) => resolve(res.data))
        .catch((erro) => {
          console.log(erro);
        });
    });
  }
  removerRegistro(id) {
    return new Promise((resolve) => {
      http
        .delete(this.rota + `/${id}`)
        .then((res) => resolve(res.data))
        .catch((erro) => {
          console.log(erro);
        });
    });
  }
}

export default Services;
