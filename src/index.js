import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/database.js";

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
