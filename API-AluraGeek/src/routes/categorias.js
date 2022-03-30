import { Router } from "express";
import CategoriasControllers from "../controllers/CategoriasControllers.js";

const router = Router();
router
  .get("/categoria", CategoriasControllers.categoriasCadastrados)
  .get("/categoria/id", CategoriasControllers.categoriasGrupo)
  .post("/categoria", CategoriasControllers.inserirCategoria)
  .put("/categoria/:id",CategoriasControllers.atualizarCadastro)
  .delete("/categoria/:id",CategoriasControllers.removerCategoria )

export default router;
