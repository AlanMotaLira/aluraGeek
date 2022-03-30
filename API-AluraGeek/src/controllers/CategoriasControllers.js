import Categoria from "../models/Categoria.js";

export default class GruposControllers {
  static categoriasCadastrados = async (__, res) => {
    Categoria.find((err, grupos) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(200).json(grupos);
      }
    });
  };
  static categoriasGrupo = async (__, res) => {
    const categoria = await Categoria.find().select({
      categoria: 1,
      grupo: 1,
      homePage: 1,
    });

    res.status(200).json(categoria);
  };
  static inserirCategoria = async (req, res) => {
    let categoria = new Categoria(req.body);

    await categoria.save((err) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(201).json(categoria.toJSON());
      }
    });
  };
  static atualizarCadastro = (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    Categoria.findByIdAndUpdate(id, { $set: dados }, (err) => {
      if (err) {
        res.status(500).send(err.message);
      } else {
        res.status(200).send({ message: "Categoria Atualizado com Sucesso" });
      }
    });
  };
  static removerCategoria = (req, res) => {
    const { id } = req.params;
    Categoria.findByIdAndDelete(id, (err) => {
      if (err) {
        res.status(500).json(err.message);
      } else {
        res.status(200).send({ message: "removido com sucesso" });
      }
    });
  };
}
