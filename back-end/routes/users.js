const router = require('express').Router()

const Users = require('../models/Users')

// rota inicial / endpoints 

router.post('/auth/register', async (req, res) => {
    // req.body
    const {name, email, senha, avatar, telefone, areaAtuacao, mentor, mentorado, data, mentorias} = req.body
    const users = {
        name,
        email,
        senha,
        avatar,
        telefone,
        areaAtuacao,
        mentor,
        mentorado,
        data: new Date(),
        mentorias
    }

    if(!name){
       res.status(422).json({error: 'o name é obrigatorio!'}) 
       return
    }

    const usuarioExiste = await Users.findOne({ email: email})

    if(usuarioExiste){
        return res.status(422).json({ message: 'usuario ja existe!'})
    }

    try{
        await Users.create(users)
        res.status(201).json({message: 'usuario criado com sucesso!'})
    } catch (error){
        res.status(500).json({message: 'error'})
    }
}) 

router.post('/auth/login', async (req, res) =>{
    const {email, senha} = req.body

    const emailExiste = await Users.findOne({ email: email})

    if(!emailExiste){
        return res.status(404).json({ message: 'email invalid' })
    }
    const senhaExiste = await Users.findOne({ senha: senha})

    if(!senhaExiste){
        return res.status(422).json({ message: 'senha invalid'})
    }

    try{
        res.status(200).json({message: 'usuario autenticado!'})
    } catch (error){
        res.status(500).json({message: 'error'})
    }
} )

// mostra todos os monitores
router.get('/mentores', async (req, res) => {
    try{
        const people = await Users.find({mentor: false})

        res.status(200).json(people)
    } catch (error){
        res.status(500).json({ error: error})
    }
})
// mostra o perfil do usuario 
router.get('/:name', async (req, res) => {
    const name = req.params.name
    try{
        const people = await Users.findOne({name: name})

        res.status(200).json(people)
    } catch (error){
        res.status(500).json({ error: error})
    }
})

router.get('/usuarios', async (req, res) => {
   
    // Se houver query string, desvia para busca personalizada
    if(Object.keys(req.query).length > 0) {
       busca(req, res)
    }
    else {
    
       try {
          // find() sem parâmetros: retorna todos
          const lista = await Users.find().populate('mentorias')
          res.send(lista) // O status HTTP 200 (OK) é implícito
       }
       catch(erro) {
          console.log(erro)
          res.status(500).send(erro)
       }
    }
 } )
 async function busca (req, res) {
    
    let criterio = {}
    let atrib = Object.keys(req.query)[0]
    let valor = Object.values(req.query)[0]
    
    // /i no final da expressão regular significa que a
    // busca será case insensitive
    criterio[atrib] = { $regex: valor, $options: 'i' }
    console.log(criterio)
    
    try{
       let lista = await Users.find(criterio)
       res.send(lista)
    }
    catch(erro) {
       console.log(erro)
       res.status(500).send(erro)
    }
 
 }
 


module.exports = router