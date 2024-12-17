import { Produto} from "../models/produto.js";

const produto = {} 

produto.getProduto = async(req, res) =>{
    try {
         
        const produto = await Produto.findAll()
        res.send(produto)

    } catch (e) {
        console.log("Erro ao buscar produto", e)
    }
}

produto.createProduto = async (req, res) => {
    try {
         const {nome_pro, estoque_pro, categoria_pro, descricao_pro} =req.body
         const novo_produto = await Produto.create({
            nome_pro:nome_pro,
            estoque_pro: estoque_pro, 
            categoria_pro: categoria_pro, 
            descricao_pro: descricao_pro
         })

         res.send(novo_produto)

    } catch (e) {
        console.log("Erro ao criar um novo produto", e)
    }
}

produto.updateProduto = async (req, res) => {
    try {
        
        const { id_produto} = req.params
        const {nome_pro, estoque_pro, categoria_pro, descricao_pro } = req.body
        await Produto.update({
            nome_pro:nome_pro,
            estoque_pro: estoque_pro, 
            categoria_pro: categoria_pro, 
            descricao_pro: descricao_pro
        },
        {Where:{id_produto:id_produto}})

        const produto_atualizado = await Produto.findByPk(id_produto)
        res.send(produto_atualizado)

    } catch (e) {
        console.log(error)
    }
}

produto.deleteProduto = async(req, res) => {
    try {
        
        const {id_produto} = req.params
        await Produto.destroy({
            Where: {id_produto:id_produto}})
            res.send({message:'Produto deletado com sucesso'})

    } catch (error) {
        console.log("Erro ao apagar  produto", e) 
    }
}

export {produto}