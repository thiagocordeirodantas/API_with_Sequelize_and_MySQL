const { Router } = require('express');
const PessoaController  = require('../controller/PessoaController');

const router = Router();

router.get('/pessoas', PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa);
router.post('/pessoas', PessoaController.criaPessoa);
router.put('/pessoas/:id', PessoaController.atualizaRegistro);
router.delete('/pessoas/:id',PessoaController.apagaPessoa);
router.post('/pessoas/:idr/restaura', PessoaController.restauraPessoa)
module.exports = router;