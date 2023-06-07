const { Router } = require('express');
const TurmaController = require('../controller/TurmaController')

const router = Router()

    router.get('/turmas', TurmaController.todasAsTurmas)












module.exports = router;