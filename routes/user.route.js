const express = require("express");
const { create } = require("../controllers/user.controller");
const { registerValidation } = require("../dto/user");
const router = express.Router();

router.post('/register', registerValidation, create);

module.exports = router;