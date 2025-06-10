const express = require('express');
const app = express();
const usuariosRoutes = require('./routes/usuariosRoutes');

app.use(express.json());
app.use('/api/usuarios', usuariosRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});