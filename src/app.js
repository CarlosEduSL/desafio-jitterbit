const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Conectar ao Banco de Dados 
connectDB();

app.use(express.json());

// Importando rotas de pedidos
const orderRoutes = require('../routes/orderRoutes');

// Usando as rotas de pedidos [cite: 15]
app.use('/order', orderRoutes);

app.get('/', (req, res) => {
  res.send('API Desafio Jitterbit Rodando! 🚀');
});

const PORT = process.env.PORT || 3000; // Porta 3000 como padrão

app.listen(PORT, () => {
  console.log(`Server rodando na porta ${PORT}`);
});