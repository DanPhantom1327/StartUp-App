const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController.js');

// Definir la ruta POST para registrar

router.post('/register', authController.registerUser);

// Definir la ruta POST para lo
router.post('/login', authController.loginUser);

module.exports = router;