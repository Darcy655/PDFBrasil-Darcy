const { body } = require("express-validator");

const userCreateValidation = () => {
  return [
    body("usuario")
      .isString()
      .withMessage("O nome de usuário é obrigatório.")
      .isLength({ min: 3 })
      .withMessage("O nome de usuário precisa ter no mínimo 3 caracteres"),
    body("email")
      .isString()
      .withMessage("O e-mail é obrigatório.")
      .isEmail()
      .withMessage("Insira um e-mail válido."),
    body("confirmEmail")
      .isString()
      .withMessage("A confirmação de e-mail é obrigatória.")
      .custom((value, { req }) => {
        if (value !== req.body.email) {
          throw new Error("Os e-mails não são iguais.");
        }
        return true;
      }),
    body("password")
      .isString()
      .withMessage("A senha é obrigatória.")
      .isLength({ min: 5 })
      .withMessage("A senha precisa ter no mínimo 5 caracteres"),
    body("confirmPassword")
      .isString()
      .withMessage("A confirmação de senha é obrigatória.")
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("As senhas não são iguais.");
        }
        return true;
      }),
  ];
};

module.exports = {
  userCreateValidation,
};
