import Categoria from "../models/Categoria.js";

export default class ProdutosControllers {
  static produtosCadastrados = (__, res) => {
    Categoria.find().distinct("produtos", (err, produtos) => {
      res.status(200).json(produtos);
    });
  };
  static inserirProduto = (req, res) => {
    const produto = req.body;
    const { id } = req.params;

    Categoria.update(
      { _id: id },
      { $push: { produtos: produto } },
      (err, categoria) => {
        if (err) {
          res.status(500).json(err.message);
        } else {
          res.status(200).json(categoria);
        }
      }
    );
  };

  static editarProduto = (req, res) => {
    const { idCategoria, idProduto } = req.params;
    const dados = req.body;

    Categoria.findOneAndUpdate(
      { _id: idCategoria, "produtos._id": idProduto },
      {
        $set: {
          "produtos.$": dados,
        },
      },
      (err, produto) => {
        if (err) {
          res.status(500).json(err.message);
        } else {
          res.status(201).json(produto);
        }
      }
    );
  };
  static removerProduto = (req, res) => {
    const { idCategoria, idProduto } = req.params;

    Categoria.findById(idCategoria, (err, grupo) => {
      if (!err) {
        if (!grupo) {
          res.status(404).send("Categoria não encontrada");
        } else {
          grupo.produtos.id(idProduto).remove((removeErr) => {
            if (removeErr) {
              res.status(400).json(removeErr.message);
            }
          });
          grupo.markModified("produtos");
          grupo.save((grupoErro, grupoResp) => {
            if (!grupoErro) {
              res.status(200).json(grupoResp);
            } else {
              res.status(400).json(grupoErro.message);
            }
          });
        }
      } else {
        res.status(400).json(err.message);
      }
    });
  };
}
