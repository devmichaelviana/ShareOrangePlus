const router = require('express').Router()

const Users = require('../models/Users')

// rota inicial / endpoints 

router.post('/auth/register', async (req, res) => {
    // req.body
    const {name, email, senha, avatar, telefone, areaAtuacao, mentor, mentorado, habilidades} = req.body
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
        habilidades
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

    const usuario = await Users.findOne({ email: email })

    if(!usuario || usuario.senha !== senha){
        return res.status(404).json({ message: 'email invalid' })
    }
    res.status(200).json({message: 'usuario autenticado!'})

} )

// mostra todos os monitores
router.get('/mentores', async (req, res) => {
    try{
        const people = await Users.find({mentor: true})

        res.status(200).json(people)
    } catch (error){
        res.status(500).json({ error: error})
    }
})
// mostra o perfil do usuario 
router.get('/:email', async (req, res) => {
    const email = req.params.email
    try{
        const people = await Users.findOne({email: email} )

        res.status(200).json(people)
    } catch (error){
        res.status(500).json({ error: error})
    }
})

// editar perfil do usuario

router.patch('/atualizar/:id', async (req, res) => {
    const id = req.params.id
    const {name, email, senha, avatar, telefone, areaAtuacao, mentor, mentorado, habilidades} = req.body
    const users = {
        name,
        email,
        senha,
        avatar,
        telefone,
        areaAtuacao,
        mentor,
        mentorado,
        habilidades
    }
    try{
        await Users.updateOne({_id: id},users)
        res.status(200).json(users)
    } catch(error){
        res.status(500).json({ error: error })
    }
})


router.get('/buscar/:habilidades', async (req, res) => {
    const habilidades = req.params.habilidades
    try{
        const people = await Users.find({ habilidades: { $all: [habilidades] } })

        res.status(200).json(people)
    } catch (error){
        res.status(500).json({ error: error})
    }
})
 
module.exports = router