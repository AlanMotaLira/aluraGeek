import express from "express";
import categorias from "./categorias.js"
import produdos from "./produtos.js";
import usuarios from "./usuarios.js";
import seed from "../seeders/index.js"

const router = express.Router();

const routes = (app) => {
  app.use(express.json(), categorias,produdos, usuarios,seed);
};

export default routes