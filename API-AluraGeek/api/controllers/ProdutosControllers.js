const { ProdutosServices } = require("../services");
const produtosServices = new ProdutosServices();

const colunas = ['codigo','nome','preco','imagem','descricao']

module.exports = class ProdutosControllers {
  static async produtosCadastrados(req, res) {
    try {
      const produdos = await produtosServices.consultaRegistros({},colunas)
      return res.status(200).json(produdos);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
};
