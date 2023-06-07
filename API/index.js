const express = require('express');
const routes = require('./router/index');

const app = express();
const port = 3000;

routes(app)

app.listen(port, () => console.log(`Servidor esta rodando na porta ${port}`))


module.exports = app;