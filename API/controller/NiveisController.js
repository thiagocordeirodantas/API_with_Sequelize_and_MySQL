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
}


module.exports = NiveisController;