const { Router } = require('express');
const NiveisController = require('../controller/NiveisController');

const router = Router();

router.get('/niveis', NiveisController.PegaNiveis)
router.get('/niveis/:id', NiveisController.PegaUmNivel)
router.post('/nivel', NiveisController.CriaNivel)
router.put('/niveis/:id', NiveisController.AtualizaNivel)
module.exports = router;