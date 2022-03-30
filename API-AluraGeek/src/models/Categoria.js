import mongoose from "mongoose";
import produto from "./Produto.js";

const categoriaSchema = new mongoose.Schema({
  categoria: { type: String, required: true },
  grupo:{ type: String, required: true, unique: true},
  produtos: [produto.schema],
  homePage: { type: Boolean, default: 1 },
});

const categorias = mongoose.model("categorias", categoriaSchema);

export default categorias;
