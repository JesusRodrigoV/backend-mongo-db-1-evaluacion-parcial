import mongoose from "mongoose";

const UsuarioModel = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true, min: [1, "Edad minima 1"] },
  ocupacion: { type: String, required: true },
});

const Usuario = mongoose.model("Usuario", UsuarioModel);

export default Usuario;
