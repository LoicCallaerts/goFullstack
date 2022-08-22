// Importation du module express
const express = require('express');
const router = express.Router();

// userCtrl faisant le lien entre le controler et les chemins
const userCtrl = require('../controllers/userCtrl');


// Chemin POST pour créer un compte 
router.post('/signup', userCtrl.signup);
// Chemin POST pour se connecter à un compte existant
router.post('/login', userCtrl.login);

module.exports = router;