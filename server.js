import express from "express";
// 👇 Descomenta esta linea para importar el modulo cors
// import cors from "cors"

const app = express();

const port = 3000;

// Configura el CORS policy para aceptar peticiones de diferentes origines
// app.use(cors());

app.get('/posts', (req, res) => {
  res.json([{id: 1, body: "I'm a post", title: "I'm a title", userId: "1"}]);
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});