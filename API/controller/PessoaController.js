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

    static async pegaUmaPessoa(req,res) {
            const {id} = req.params;
        try {
            const UnicaPessoa = await database.Pessoas.findOne({ where: {id: Number(id)}})
            res.status(200).json(UnicaPessoa)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
}


module.exports = PessoaController;