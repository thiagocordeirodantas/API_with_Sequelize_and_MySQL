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
    static async pegaTurmaPorID(req,res){
        const { id } = req.params
        try {
            const pegaTurma = await database.Turmas.findOne({where:{id:Number(id)}})
            return res.status(200).json(pegaTurma)
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async criaTurma(req,res){
        const adiciona = req.body
        try {
            const adicionaTurma = await database.Turmas.create(adiciona)
            return res.status(200).json(adicionaTurma)
        } catch(error){
            res.status(500).json(error.message)
        }
    }
    
    static async atualizaTurma(req,res){
        const {id } = req.params
        const atualiza = req.body
        try {
            const turmaAtualizada = await database.Turmas.update(atualiza,{where:{id:Number(id)}})
            return res.status(200).json(turmaAtualizada)
        } catch(error){
            res.status(500).json(error.message)
        }
    }

    static async deletaTurma(req,res){
        const {id } = req.params
        try {
            const turmaDeletada = await database.Turmas.destroy({where:{id: Number(id)}})
            return res.status(200).json(turmaDeletada)
        } catch(error){
            res.status(500).json(error.message)
        }
    }
}


module.exports = TurmaController;