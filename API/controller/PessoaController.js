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

    static async criaPessoa(req,res){
        const novaPessoa = req.body;
        try {
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            res.status(500).json(error.message)
        }
    }

    static async atualizaRegistro(req,res) {
        const {id} = req.params;
        const atualizador = req.body;
        try {
            await database.Pessoas.update(atualizador,{where:{id: Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne({ where: {id: Number(id)}})

            return res.status(200).json(pessoaAtualizada)
        } catch (error){
            res.status(500).json(error.message);
        }
    }

    static async apagaPessoa(req,res) {
        const {id} = req.params;
        try {
            await database.Pessoas.destroy({where: {id: Number(id)}})
            return res.status(200).json(`A pessoa com o ID ${id} foi deletada`)
        } catch(error){
           return res.status(500).json(error.message)
        }

    }

    static async restauraPessoa(req,res){
        const { id } = req.params
        try {
            await database.Pessoas.restore({where:{id:Number(id)}})
            return res.status(200).json( {mesagem: `${id} foi restaurado`})
        } catch(error){
            res.status(500).json(error.message)
        }
    }
}


module.exports = PessoaController;