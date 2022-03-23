import { Router } from "express";
import UsuariosControllers from "../controllers/UsuariosControllers.js";

const router = Router();
router
  .get("/usuarios", UsuariosControllers.usuariosCadastrados)
  .post("/usuario", UsuariosControllers.autenticarUsuario)
  .post("/usuario/registrar", UsuariosControllers.registrarUsuario);

export default router;
