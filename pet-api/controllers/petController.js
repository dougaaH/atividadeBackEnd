const Pet = require('../models/Pet');

const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.findAll();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pets.' });
  }
};

const createPet = async (req, res) => {
  const { name, type, age, adopted } = req.body;

  try {
    const newPet = await Pet.create({ name, type, age, adopted });
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar pet. Verifique os campos.' });
  }
};

const deletePet = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Pet.destroy({ where: { id } });

    if (deleted) {
      res.json({ message: 'Pet removido com sucesso.' });
    } else {
      res.status(404).json({ error: 'Pet não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover pet.' });
  }
};

module.exports = { getAllPets, createPet, deletePet };
