const express = require('express');
const app = express();
const petRoutes = require('./routes/petRoutes');
const sequelize = require('./config/database');
const Pet = require('./models/Pet');

app.use(express.json());
app.use(petRoutes);

sequelize.sync()
  .then(() => {
    console.log('Banco conectado e sincronizado.');
    app.listen(3000, () => {
      console.log('Servidor rodando em http://localhost:3000');
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco:', err);
  });
