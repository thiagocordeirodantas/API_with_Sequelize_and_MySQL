const bodyParser = require('body-parser');
const pessoas = require('./pessoasRouter');
const niveis = require('./niveisRouter');
const turmas = require('./turmaRouter');
const matriculas = require('./matriculasRouter')
module.exports = app => {
    app.use(bodyParser.json(),pessoas,niveis,turmas,matriculas)}