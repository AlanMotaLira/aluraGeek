const dataBase = require("../models");

module.exports = class Services {
  constructor(modeloRegistro) {
    this.modeloRegistro = modeloRegistro;
  }
  async consultaRegistros(where = {}, attributes = "") {
    return dataBase[this.modeloRegistro].findAll({
      where: { ...where },
      attributes: attributes,
    });
  }
  async consultaUnicoRegistro(where = {}) {
    return dataBase[this.modeloRegistro].findOne({ where: { ...where } });
  }
  async criaRegistro(dados) {
    return dataBase[this.modeloRegistro].create(dados);
  }
  async atualizaRegistro(dadosAtualizados, id, transacao = {}) {
    return dataBase[this.modeloRegistro].update(
      dadosAtualizados,
      { where: { id: Number(id) } },
      transacao
    );
  }
  async removerRegistro(id) {
    return dataBase[this.modeloRegistro].destroy({ where: { id: Number(id) } });
  }
}
