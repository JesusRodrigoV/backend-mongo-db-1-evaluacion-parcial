import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/database";
import contadorOperaciones from "./middlewares/contador";
import usuariosRouter from "./routes/usuarios";
import productosRouter from "./routes/productos";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.use(contadorOperaciones);
app.use("/usuarios", usuariosRouter);
app.use("/productos", productosRouter);
app.get("/op", (req, res) => {
  res.json({ totalOperaciones: req.app.locals.total || 0 });
});
app.get("/contar", async (req, res) => {
  try {
    const Usuario = require("./models/Usuario");
    const Producto = requier("./models/Producto");
    const usuariosCount = await Usuario.countDocuments();
    const productosCount = await Producto.countDocuments();
    res.json({ usuariosCount, productosCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
