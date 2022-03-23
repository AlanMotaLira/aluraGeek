import { Router } from "express";
import categorias from "./categorias.js";
import Categoria from "../models/Categoria.js";
import usuarios from "./usuarios.js";
import Usuario from "../models/Usuario.js";

const router = Router();

router.get("/seed", (__, res) => {
  try {
    const seeders = [
      { model: Categoria, dados: categorias, nome: "categorias" },
      { model: Usuario, dados: usuarios, nome: "usuarios" },
    ];
    seeders.forEach(async (seed) => {
      const model = seed.model;
      const dados = seed.dados;
      await model
        .insertMany(dados)
        .then(() => {
          console.log(`${seed.nome} inseridos com sucesso`);
        })
        .catch((err) => {
          console.log(err);
        });
    });
    res.status(201).json({ messagem: "Dados inseridos com sucesso" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

export default router;
