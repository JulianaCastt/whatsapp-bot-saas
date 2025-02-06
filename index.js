require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes"); // Importa o arquivo central de rotas

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public")); // Para servir o dashboard

// Usar as rotas organizadas
app.use("/", routes);

// Rota de teste (página inicial)
app.get("/", (req, res) => {
    res.send("Servidor do WhatsApp Bot está rodando!");
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`?? Servidor rodando em http://localhost:${PORT}`);
});
