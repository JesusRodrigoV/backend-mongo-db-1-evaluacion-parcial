import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: String, required: true },
});

const Producto = mongoose.model("Producto", ProductSchema);

export default Producto;
