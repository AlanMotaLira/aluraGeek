import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true, },
  senha: { type: String, required: true },
});

const usuarios = mongoose.model("usuarios", usuarioSchema);

export default usuarios;
