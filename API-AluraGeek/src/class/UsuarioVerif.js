import bcrypt from "bcrypt";
import Usuario from "../models/Usuario.js";
import Err from "../err/index.js";

class UsuarioVerif {
  static async validar(dados) {
    const custoHash = 12;
    const novoUsuario = dados;
    const valores = Object.values(novoUsuario);

    if (Object.keys(novoUsuario).length === 0) {
      throw new Err.ArgumentoInvalido(`Informe os dados necessarios!`);
    }
    valores.forEach((valor) => {
      if (typeof valor !== "string" || valor.length === 0 || valor.length < 3) {
        throw new Err.ArgumentoInvalido(`dados de cadastro invalido`);
      }
    });
    novoUsuario.senha = await bcrypt.hash(dados.senha, custoHash);
    return novoUsuario;
  }

  static async autenticar(senha, dados) {
    return bcrypt.compare(senha, dados.senha);
  }

  static async verifCadastro(email) {
    const usuario = await Usuario.findOne({ email: email });
    return usuario
  }
}

export default UsuarioVerif;
