import AdmToken from "../token/index.js";
import Err from "../err/index.js";
import Usuario from "../models/Usuario.js";
import UsuarioVerif from "../class/UsuarioVerif.js";
import ArgumentoInvalido from "../err/ArgumentoInvalido.js";

export default class ProdutosControllers {
  static usuariosCadastrados = async (__, res) => {
    Usuario.find((err, produtos) => {
      res.status(200).json(produtos);
    });
  };
  static registrarUsuario = async (req, res) => {
    try {
      const dados = await UsuarioVerif.validar(req.body);
      const consulta = await UsuarioVerif.verifCadastro(dados.email);
      if (!consulta) {
        const usuario = await new Usuario(dados);
        usuario.save((err) => {
          if (err) {
            throw new Error(err);
          } else {
            res.status(201).json({ message: "Usuario cadastrado com Sucesso" });
          }
        });
      } else {
        throw new Err.ArgumentoInvalido("Email já cadastrado");
      }
    } catch (err) {
      if (err instanceof ArgumentoInvalido) {
        res.status(406).json(err.message);
      } else {
        res.status(500).json(err.message);
      }
    }
  };
  static autenticarUsuario = async (req, res) => {
    try {
      const dados = req.body;
      const usuario = await UsuarioVerif.verifCadastro(dados.email);
      if (usuario) {
        const autenticado = await UsuarioVerif.autenticar(dados.senha, usuario);
        if (autenticado) {
          const token = AdmToken.gerarToken({
            email: dados.email,
            senha: dados.senha,
          });
          res
            .status(200)
            .set("Authorization", token)
            .json({ nome: usuario.nome, email: usuario.email });
        } else {
          throw new Err.ArgumentoInvalido("senha invalida");
        }
      } else {
        throw new Err.ArgumentoInvalido("Usuario não cadastrado");
      }
    } catch (err) {
      if (err instanceof ArgumentoInvalido) {
        res.status(401).json(err.message);
      } else {
        res.status(500).json(err.message);
      }
    }
  };
}
