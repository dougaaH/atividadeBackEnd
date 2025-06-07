const express = require('express');
const app = express();

const livrosRoutes = require('./routes/livrosRoutes');

app.use(express.json());

app.use('/api', livrosRoutes);

app.listen(3000, () => {
    console.log("O servidor está funcionando.")
});