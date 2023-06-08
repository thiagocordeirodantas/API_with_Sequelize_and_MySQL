const database = require('../models');

class MatriculasController {
    static async pegaMatriculas(req,res){
        try {
            const pessoasMatriculadas = await database.Matriculas.findAll(database)  
            res.status(200).json(pessoasMatriculadas)
        } catch (error){
            res.status(500).json(error.message)
        }
         
     }

     static async pegaUmaMatricula(req,res){
        const { id } = req.params;
        try{
            const matriculaPorID = await database.Matriculas.findOne({where:{id: Number()}})
            return res.status(200).json(matriculaPorID)
        } catch(error){
           return  res.status(500).json(error.message)
        }
     }

     static async atualizaMatricula(req,res){
        const { id } = req.params
        const atualiza = req.body
        try{
         const matriculaAtualizada =  await database.Matriculas.update(atualiza,{where:{id: Number(id)}})
            res.status(200).json(matriculaAtualizada)
        } catch(error){
            res.status(500).json(error.message)    
         }
     }
     
     static async removeMatricula(req,res){
        const { id } = req.params
        try {
            const matriculaRemovida = await database.Matriculas.destroy({where:{id: Number(id)}})
                return res.status(200).json(matriculaRemovida)
        } catch(error){
            res.status(500).json(error.message)
        }
     }
}

module.exports = MatriculasController