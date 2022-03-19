const { Router } = require("express");
const UsuariosControllers = require("../controllers/UsuariosControllers");

const router = Router();
router.post("/usuario",UsuariosControllers.verificaUsuario);
router.post("/usuario/novo", UsuariosControllers.registraUsuario);

module.exports = router;