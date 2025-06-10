const { body, validationResult } = require('express-validator');

const validarUsuario = [
    body('nome')
        .notEmpty().withMessage('O nome é obrigatório.')
        .isLength({ min: 2 }).withMessage('O nome deve ter pelo menos 2 caracteres.'),

    body('email')
        .notEmpty().withMessage('O email é obrigatório.')
        .isEmail().withMessage('Formato de email inválido.'),

    (req, res, next) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }
        next();
    }
];

module.exports = validarUsuario;