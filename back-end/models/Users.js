const mongoose = require('mongoose');

const esquema = mongoose.Schema({
    name: {
       type: String,
       
    },
    telefone: {
       type: String,
       
    },
    email: {
        type: String,
        
    },
    senha: {
        type: String,
        
    },
    avatar: {
        type: String,
        
    },
    areaAtuacao: {
        type: String,
        
    },
    mentor: {
        type: Boolean,
        
    },
    mentorado: {
        type: Boolean,
        
    },
    data: {
       type: Date
    },
    mentorias: {
        type: mongoose.ObjectId,
        ref: 'Mentorias',
    }
 })

 module.exports = mongoose.model('Users', esquema, 'users')