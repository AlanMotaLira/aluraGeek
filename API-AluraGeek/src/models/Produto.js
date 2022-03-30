import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
  grupo: { type: String, required: true },
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  imagem: { type: String },
  descricao: { type: String },
});

const produto = mongoose.model("produto", produtoSchema);

export default produto;
