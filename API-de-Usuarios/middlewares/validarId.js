const { param, validationResult } = require('express-validator');

const validarId = [
    param('id')
        .isInt({ min: 1 }).withMessage('ID deve ser um número inteiro maior que 0.'),

    (req, res, next) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }
        next();
    }
];

module.exports = validarId;