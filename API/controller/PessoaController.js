const database =  require('../models')

class PessoaController {

   static async pegaTodasAsPessoas(req,res) {
        try {
            const todasAsPessos = await database.Pessoas.findAll(database)
           return res.status(200).json(todasAsPessos)
        } catch (error) {
            return res.status(200).json(error.message)
        }
      
    }
}


module.exports = PessoaController;