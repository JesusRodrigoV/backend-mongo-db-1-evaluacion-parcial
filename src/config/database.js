import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/ExamenTecnoWeb2",
    );
    console.log("Estoy conectado a MongoDB");
  } catch (error) {
    console.log("Error en la conexion a MongoDB", error.message);
  }
};

export default connectDB;
