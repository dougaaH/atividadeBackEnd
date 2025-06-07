const express = require('express');
const router = express.Router();

let livros = [];

router.get('/exibirLivros', (req, res) => {
    res.json(livros);
});

router.post('/criarLivros', (req, res) => {
    const { titulo, autor, ano } = req.body;

    if (!titulo || !autor || !ano) {
        return res.status(400).json({ erro: "Todos os campos (titulo, autor, ano) são obrigatórios." });
    }

    const novoLivro = {
        id: livros.length + 1,
        titulo,
        autor,
        ano
    };

    livros.push(novoLivro);
    res.status(201).json(novoLivro);

});

module.exports = router;