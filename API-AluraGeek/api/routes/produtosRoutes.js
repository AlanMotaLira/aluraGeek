const { Router } = require("express");
const ProdutosControllers = require("../controllers/ProdutosControllers");

const router = Router();
router.get("/", ProdutosControllers.produtosCadastrados);

module.exports = router
