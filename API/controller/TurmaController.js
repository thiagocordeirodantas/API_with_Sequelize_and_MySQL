const database = require('../models/')


class TurmaController {
   static async todasAsTurmas(req,res) {
        try {
             const Turmas = await database.Turmas.findAll(database)
             res.status(200).json(Turmas)
        } catch(error){
            res.status(500).json(error.message)
        }
    }
}


module.exports = TurmaController;