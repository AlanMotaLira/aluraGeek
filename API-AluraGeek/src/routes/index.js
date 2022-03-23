import express from "express";
import categorias from "./categorias.js"
import produdos from "./produtos.js";
import usuarios from "./usuarios.js";
import seed from "../seeders/index.js"

const router = express.Router();

const routes = (app) => {
  router.get("/",(__, res) => {
    res.status(200).send({ titulo: "Produtos AluraGeek" });
  });
  app.use(express.json(), categorias,produdos, usuarios,seed);
};

export default routes