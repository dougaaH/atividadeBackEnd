const express = require('express');
const app = express();
const usersRoutes = require('./users');

app.use(express.json()); // JSON no body das requisições
app.use('/users', usersRoutes); //rotas de usuários

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
