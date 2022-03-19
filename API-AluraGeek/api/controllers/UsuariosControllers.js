const { UsuariosServices } = require("../services");
const admToken = require("../token");
const usuarioServices = new UsuariosServices();

module.exports = class UsuarioControllers {
  static async registraUsuario(req, res) {
    const dados = req.body;
    if (dados.senha === "")
      return res
        .status(401)
        .json({ message: "por gentileza, informe uma senha" });
    if (dados.senha.length > 20 || dados.senha.length <= 4)
      return res
        .status(401)
        .json({ message: "Informe uma senha entre quatro e vinte caracteres" });
    else {
      try {
        const verif = await usuarioServices.registroValidado({
          email: dados.email
        });
        if (verif === 0) {
          const validado = await usuarioServices.registrarUsuarioValido(dados);
          return res.status(200).json(validado);
        } else {
          return res.status(401).json({ message: "Usuario já cadastrado" });
        }
      } catch (err) {
        return res.status(500).json(err.message);
      }
    }
  }

  static async  verificaUsuario(req, res) {
    const dados = req.body;
    try {
      const usuario = await usuarioServices.consultaUnicoRegistro({
        email: dados.email,
      });
      if (usuario) {
        try {
          const autenticado = await usuarioServices.autenticarUsuario(
            dados.senha,
            usuario
          );
          if (autenticado) {
            const token = admToken.gerarToken({
              email: dados.email,
              senha: dados.senha,
            });
            return res
              .status(200)
              .set("Authorization", token)
              .json({ usuario });
          } else {
            return res.status(401).json({ message: "senha invalida" });
          }
        } catch (err) {
          return res.status(500).json(err.message);
        }
      }
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }
};
