const Services = require("./Services");
const dataBase = require("../models");
const bcrypt = require("bcrypt");

module.exports = class UsuariosServices extends Services {
  constructor() {
    super("Usuarios");
  }
  async registroValidado(where) {
    return dataBase[this.modeloRegistro].count({ where: { ...where } });
  }
  async registrarUsuarioValido(dados) {
    const custoHash = 12;
    const novoUsuario = dados;
    novoUsuario.senha = await bcrypt.hash(dados.senha, custoHash);
    console.log(novoUsuario)
    return super.criaRegistro(novoUsuario);
  }
  async autenticarUsuario(senha, dados) {
    return bcrypt.compare(senha, dados.senha);
  }
}
