import mongoose from "mongoose";
import produto from "./Produto.js"


const categoriaSchema = new mongoose.Schema({
  id: { type: String },
  categoria: { type: String, required: true },
  produtos:[produto.schema],
  homePage:{type:Boolean, default: 1}

});

const categorias = mongoose.model("categorias", categoriaSchema);

export default categorias;