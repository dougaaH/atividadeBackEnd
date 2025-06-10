const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const validarUsuario = require('../middlewares/validarUsuario');
const validarId = require('../middlewares/validarId');
const validarQueryUsuario = require('../middlewares/validarQueryUsuario');

router.get('/', validarQueryUsuario, usuariosController.listarUsuarios);
router.get('/:id', validarId, usuariosController.buscarUsuarioPorId);
router.post('/', validarUsuario, usuariosController.criarUsuario);
router.put('/:id', validarId, validarUsuario, usuariosController.atualizarUsuario);
router.delete('/:id', validarId, usuariosController.removerUsuario);

module.exports = router;