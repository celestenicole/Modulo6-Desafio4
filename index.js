
const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/posts", async (req, res) => {
  try {
    const consulta = "SELECT * FROM posts ORDER BY id DESC";
    const resultado = await pool.query(consulta);
    res.status(200).json(resultado.rows);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los posts" });
  }
});

app.post("/posts", async (req, res) => {
  const { titulo, img, descripcion } = req.body;

  try {
    const consulta = `
      INSERT INTO posts (titulo, img, descripcion, likes)
      VALUES ($1, $2, $3, 0)
      RETURNING *
    `;
    const valores = [titulo, img, descripcion];
    const resultado = await pool.query(consulta, valores);

    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el post" });
  }
});

app.put("/posts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const consulta = `
      UPDATE posts
      SET likes = likes + 1
      WHERE id = $1
      RETURNING *
    `;
    const resultado = await pool.query(consulta, [id]);

    if (resultado.rowCount === 0) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.status(200).json(resultado.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar likes" });
  }
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const consulta = "DELETE FROM posts WHERE id = $1";
    const resultado = await pool.query(consulta, [id]);

    if (resultado.rowCount === 0) {
      return res.status(404).json({ error: "Post no encontrado" });
    }

    res.status(200).json({ message: "Post eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el post" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
