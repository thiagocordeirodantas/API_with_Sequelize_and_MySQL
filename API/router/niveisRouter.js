const { Router } = require('express');
const NiveisController = require('../controller/NiveisController');

const router = Router();

router.get('/niveis', NiveisController.PegaNiveis)



module.exports = router;