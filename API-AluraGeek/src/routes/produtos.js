import { Router } from "express";
import ProdutosControllers from "../controllers/ProdutosControllers.js";

const router = Router();
router
  .get("/produto", ProdutosControllers.produtosCadastrados)
  .post("/produto/:id", ProdutosControllers.inserirProduto)
  .put("/produto/:idCategoria/:idProduto", ProdutosControllers.editarProduto)
  .delete("/produto/:idCategoria/:idProduto",ProdutosControllers.removerProduto)
export default router;
