const express = require("express");
const router = express.Router();

// Controller
const { register } = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/handleValidation");
const { userCreateValidation } = require("../middlewares/userValidations");

// Routes
router.post("/register", userCreateValidation(), validate, register);
//router.get("/", expends);
//router.put("/update/:id", expendUpdateValidation(), validate, update);
//router.post("/remove/:id", remove);
//router.post("/updateStatus/:id", updateStatus);

module.exports = router;
