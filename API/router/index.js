const { Router } = require('express');
const bodyParser = require('body-parser');

const router = Router();


module.exports = app => {
    app.use(bodyParser.json())
    app.get('/', (req,res) => {
        res.send('oi')
    })
}