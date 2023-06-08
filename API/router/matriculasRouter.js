const { Router } = require('express');
const MatriculasController = require('../controller/MatriculasController')

const router = Router();


router.get('/matriculas',MatriculasController.pegaMatriculas)
router.get('/matriculas/:id',MatriculasController)
router.put('/matriculas/:id', MatriculasController.atualizaMatricula)


module.exports = router;