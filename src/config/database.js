import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/ExamenTecnoWeb2");
    console.log("Estoy conectado a MongoDB");
  } catch (error) {
    console.log("Error en la conexion a MongoDB", error.message);
  }
};

export default connectDB;
