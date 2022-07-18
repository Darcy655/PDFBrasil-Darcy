const {body} = require("express-validator")

const expendCreateValidation = () => {
    return [
        body("description")
            .isString()
            .withMessage("A descrição é obrigatória.")
            .isLength({ min: 3})
            .withMessage("A descrição precisa ter no mínimo 3 caracteres"),
        body("value")
            .isString()
            .withMessage("O valor é obrigatório."),
        body("date")
            .isString()
            .withMessage("A data é obrigatória."),
    ]
}

const expendUpdateValidation = () => {
    return [
        body("description")
            .optional()
            .isLength({ min: 3})
            .withMessage("A descrição precisa ter no mínimo 3 caracteres"),
        body("value")
            .optional()
            .isLength({ min: 4 })
            .withMessage("Coloque um valor válido!"),
        body("date")
            .optional()
            .isLength( { min: 8 })
            .withMessage("A data não é válida!."),
    ]
}

module.exports = {
    expendCreateValidation,
    expendUpdateValidation,
}