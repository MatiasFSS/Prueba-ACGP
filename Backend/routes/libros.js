const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const LIBROS = path.join(__dirname, "../libros.json");

router.get("/", (req, res) => {
  fs.readFile(LIBROS, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al leer libros." });
    const libros = JSON.parse(data || "[]");
    res.json(libros);
  });
});


router.post("/", (req, res) => {
  const { titulo, autor, descripcion } = req.body;
  if (!titulo || !autor || !descripcion) {
    return res.status(400).json({ error: "Faltan datos del libro." });
  }

  fs.readFile(LIBROS, "utf-8", (err, data) => {
    if (err) return res.status(500).json({ error: "Error al leer libros." });
    const libros = data ? JSON.parse(data) : [];
    const nuevoLibro = { id: Date.now(), titulo, autor, descripcion };
    libros.push(nuevoLibro);

    fs.writeFile(LIBROS, JSON.stringify(libros, null, 2), (err) => {
      if (err) return res.status(500).json({ error: "Error al guardar libro." });
      res.status(201).json(nuevoLibro);
    });
  });
});

module.exports = router;