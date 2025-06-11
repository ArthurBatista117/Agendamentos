const { body } = require('express-validator');

const userCreateValidation = [
  body('nome')
    .notEmpty().withMessage('Nome é obrigatório.')
    .isLength({ min: 2 }).withMessage('Nome deve ter ao menos 2 caracteres.'),

  body('email')
    .notEmpty().withMessage('Email é obrigatório.')
    .isEmail().withMessage('Email inválido.'),

  body('senha')
    .notEmpty().withMessage('Senha é obrigatória.')
    .isLength({ min: 6 }).withMessage('Senha deve ter ao menos 6 caracteres.')
];

const userUpdateValidation = [
  body('UserNome')
    .optional()
    .isLength({ min: 2 }).withMessage('Nome deve ter ao menos 2 caracteres.'),

  body('UserEmail')
    .optional()
    .isEmail().withMessage('Email inválido.'),

  body('UserSenha')
    .optional()
    .isLength({ min: 6 }).withMessage('Senha deve ter ao menos 6 caracteres.')
];

module.exports = {
  userCreateValidation,
  userUpdateValidation
};
