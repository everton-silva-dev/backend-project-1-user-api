const express = require("express");
const app = express();

app.use(express.json());

// Importa rotas
const transactionsRoutes = require("./routes/transactions.routes");
app.use("/api", transactionsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
