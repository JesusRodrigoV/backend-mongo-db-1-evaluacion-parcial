import express from "express";
import Usuario from "../models/Usuario";

const router = express.Router();

// CREATE - Crear un nuevo usuario
router.post("/", async (req, res) => {
  try {
    const usuario = new Usuario(req.body);
    const savedUsuario = await usuario.save();
    res.status(201).json(savedUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// READ - Obtener todos los usuarios
router.get("/", async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE - Actualizar un usuario por ID
router.put("/:id", async (req, res) => {
  try {
    const updatedUsuario = await Usuario.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    );
    if (!updatedUsuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE - Eliminar un usuario por ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedUsuario = await Usuario.findByIdAndDelete(req.params.id);
    if (!deletedUsuario) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json({ message: "Usuario eliminado" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
