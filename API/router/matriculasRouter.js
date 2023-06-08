const { Router } = require('express');
const MatriculasController = require('../controller/MatriculasController')

const router = Router();


router.get('/matriculas',MatriculasController.pegaMatriculas)
router.get('/matriculas/:id',MatriculasController)
router.post('/matriculas/', MatriculasController.criaMatricula)
router.put('/matriculas/:id', MatriculasController.atualizaMatricula)
router.delete('matriculas//:id', MatriculasController.removeMatricula)


module.exports = router;