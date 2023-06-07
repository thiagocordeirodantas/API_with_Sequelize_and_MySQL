const database = require('../models');

class NiveisController {
    
   static async PegaNiveis(req,res) {
       try {
        const todoOsNiveis  = await database.Niveis.findAll(database)
        return res.status(200).json(todoOsNiveis)
       } catch (error){
        res.status(500).json(error.message)
       }
    }
    static async PegaUmNivel(req,res){
        const { id } = req.params;
        try {
            const pegaNivel = await database.Niveis.findOne({where:{id:Number(id)}})
            return res.status(200).json(pegaNivel)
            
        } catch(error){
            res.status(500).json(error.message)
        }
    }
    
    static async CriaNivel(req,res){
        const criaNivel = req.body;
        try {
            const nivelCriado = await database.Nivel.create(criaNivel)
            res.status(200).json(nivelCriado)
        } catch (error){
            res.status(500).json(error.message)
        }
    }

    static async AtualizaNivel(req,res){
        const { id } = req.params
        const atualizaNivel = req.body
        try {
            const nivelAtualizado = await database.Niveis.update(atualizaNivel, {where:{id:Number(id)}})
           return res.status(200).json(nivelAtualizado)
        } catch(error){
           return res.status(500).json(error.message)
        }
    }
}   


module.exports = NiveisController;