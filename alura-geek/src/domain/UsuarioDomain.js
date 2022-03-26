import Domain from "./Domain.js";
import http from "./index.js";

class UsuarioDomain extends Domain {
  constructor() {
    super("/usuario");
    this.registro = "/registrar";
  }
  cadastroUsuario(usuario) {
    return new Promise((resolve,reject) => {
      http
        .post(this.rota + this.registro, usuario)
        .then((res) => resolve(res.data))
        .catch((erro) => {
          console.log(erro);
          reject(erro);
        });
    });
  }
}

export default UsuarioDomain;