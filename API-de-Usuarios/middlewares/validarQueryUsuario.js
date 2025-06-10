const { query, validationResult } = require('express-validator');

const validarQueryUsuario = [
    query('nome')
        .optional()
        .isLength({ min: 2 }).withMessage('Se fornecido, o nome deve ter pelo menos 2 caracteres.'),

    query('email')
        .optional()
        .isEmail().withMessage('Se fornecido, o email deve estar em formato válido.'),

    (req, res, next) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }
        next();
    }
];

module.exports = validarQueryUsuario;