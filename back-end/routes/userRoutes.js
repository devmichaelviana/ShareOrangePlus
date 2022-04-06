const router = require('express').Router()

const User = require('../models/User')

// rota inicial / endpoints 

router.post('/auth/register', async (req, res) => {
    // req.body
    const {name, email, senha, avatar, telefone, areaAtuacao, mentor, mentorado, data} = req.body
    const user = {
        name,
        email,
        senha,
        avatar,
        telefone,
        areaAtuacao,
        mentor,
        mentorado,
        data: new Date() 
    }

    if(!name){
       res.status(422).json({error: 'o name é obrigatorio!'}) 
       return
    }

    const usuarioExiste = await User.findOne({ email: email})

    if(usuarioExiste){
        return res.status(422).json({ message: 'usuario ja existe!'})
    }

    try{
        await User.create(user)
        res.status(201).json({message: 'usuario criado com sucesso!'})
    } catch (error){
        res.status(500).json({message: 'error'})
    }
}) 

router.post('/auth/login', async (req, res) =>{
    const {email, senha} = req.body

    const emailExiste = await User.findOne({ email: email})

    if(!emailExiste){
        return res.status(404).json({ message: 'email invalid' })
    }
    const senhaExiste = await User.findOne({ senha: senha})

    if(!senhaExiste){
        return res.status(422).json({ message: 'senha invalid'})
    }

    try{
        res.status(200).json({message: 'usuario autenticado!'})
    } catch (error){
        res.status(500).json({message: 'error'})
    }
} )



module.exports = router