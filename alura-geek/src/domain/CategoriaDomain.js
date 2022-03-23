import Domain from "./Domain.js";
import http from "./index.js";

class CategoriaDomain extends Domain {
  constructor() {
    super("/categoria");
    this.id = "/id";
  }
  cadastroPorId() {
    return new Promise((resolve) => {
      http
        .get(this.rota + this.id)
        .then((res) => resolve(res.data))
        .catch((erro) => {
          console.log(erro);
        });
    });
  }
}

export default CategoriaDomain;
