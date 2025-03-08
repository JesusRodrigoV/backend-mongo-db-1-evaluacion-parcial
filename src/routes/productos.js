import express from "express";
import Producto from "../models/Producto";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const producto = new Producto(req.body);
    const savedProducto = await producto.save();
    res.status(201).json(savedProducto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedProducto = await Producto.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedProducto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(updatedProducto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/:id", async (res, req) => {
  try {
    const deletedProducto = await Producto.findByIdAndDelete(req.params.id);
    if (!deletedProducto) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
