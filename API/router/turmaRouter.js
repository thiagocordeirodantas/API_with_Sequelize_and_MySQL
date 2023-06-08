const { Router } = require('express');
const TurmaController = require('../controller/TurmaController')

const router = Router()

    router.get('/turmas', TurmaController.todasAsTurmas)
    router.get('/turmas/:id',TurmaController.pegaTurmaPorID)
    router.post('turmas', TurmaController.criaTurma )
    router.put('turmas/:id', TurmaController.atualizaTurma)
    router.delete('turmas/:id',TurmaController.deletaTurma)




module.exports = router;