const bodyParser = require('body-parser');
const pessoas = require('./pessoasRouter');
const niveis = require('./niveisRouter');
const turmas = require('./turmaRouter');

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(niveis)
    app.use(turmas)
}