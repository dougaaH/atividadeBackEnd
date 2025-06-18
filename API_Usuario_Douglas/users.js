const express = require('express');
const router = express.Router();

// Banco de dados 
let users = [];


function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// GET /users?name=xxx
router.get('/', (req, res) => {
  const nameFilter = req.query.name;
  if (nameFilter) {
    const filtered = users.filter(u => u.name.toLowerCase().includes(nameFilter.toLowerCase()));
    return res.json(filtered);
  }
  res.json(users);
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find(u => u.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'Usuário não encontrado' });
  }
  res.json(user);
});

// POST /users
router.post('/', (req, res) => {
  const { id, name, email } = req.body;

  // Validações
  if (id === undefined || typeof id !== 'number') {
    return res.status(400).json({ error: 'ID é obrigatório e deve ser numérico' });
  }

  if (!name || name.length < 3) {
    return res.status(400).json({ error: 'Nome é obrigatório e deve ter no mínimo 3 letras' });
  }

  if (!email || !isValidEmail(email)) {
    return res.status(400).json({ error: 'E-mail é obrigatório e deve ser válido' });
  }

  users.push({ id, name, email });
  res.status(201).json({ message: 'Usuário criado com sucesso' });
});

module.exports = router;
