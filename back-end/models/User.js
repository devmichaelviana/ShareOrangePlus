const mongoose = require('mongoose');

const User = mongoose.model('User',{
    name: String,
    telefone: String,
    senha: String,
    avatar: String || null,
    areaAtuacao: String,
    mentor: Boolean,
    mentorado: Boolean,
    data: Date,
})

module.exports = User;