const router = require('express').Router()

const Fornecedor = require('../models/Fornecedor')

router.post('/', async (req, res) =>{
    const {razao_social, nome_fantasia, cnpj} = req.body
    const aula = {
        razao_social,
        nome_fantasia,
        cnpj
    }
    try{
        await Fornecedor.create(aula)
        res.status(200).json({message: 'usuario autenticado!'})
    } catch (error){
        res.status(500).json({message: 'error'})
    }
} )

router.get('/', async function (req, res) {
   
   if(Object.keys(req.query).length > 0) { // Se houver query string
      busca(req, res)
   }
   else { // sem query string
      try {
         // find(), sem parâmetros, retorna todos
         // O parâmetro de populate() é o *ATRIBUTO* relacionado
         const lista = await Fornecedor.find()
         res.send(lista) // HTTP 200 implícito
      }
      catch (erro) {
         console.log(erro)
         res.status(500).send(erro)
      }
   }

})

async function busca (req, res) {
   
    let criterio = {}
    let atrib = Object.keys(req.query)[0]
    let valor = Object.values(req.query)[0]
    
    // /i no final da expressão regular significa que a
    // busca será case insensitive
    criterio[atrib] = { $regex: valor, $options: 'i' }
    console.log(criterio)
    
    try{
       let lista = await Fornecedor.find(criterio)
       res.send(lista)
    }
    catch(erro) {
       console.log(erro)
       res.status(500).send(erro)
    }
 
 }

 module.exports = router