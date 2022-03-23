import Domain from "./Domain.js";
import http from "./index.js";

class ProdutoDomain extends Domain {
  constructor() {
    super("/produto");
  }
  editarProduto(idCategoria, idProduto, dados) {
    return new Promise((resolve) => {
      http
        .put(this.rota + `/${idCategoria}/${idProduto}`, dados)
        .then((res) => resolve(res.data))
        .catch((erro) => {
          console.log(erro);
        });
    });
  }
  removerProduto(idCategoria, idProduto) {
    return new Promise((resolve) => {
      http
        .delete(this.rota + `/${idCategoria}/${idProduto}`)
        .then((res) => resolve(res.data))
        .catch((erro) => {
          console.log(erro);
        });
    });
  }
}

export default ProdutoDomain;
