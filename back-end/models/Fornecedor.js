const mongoose = require('mongoose')

const esquema = mongoose.Schema({
   razao_social: {
      type: String,
      required: true
   },
   nome_fantasia: {
      type: String
   },
   cnpj: {
      type: String,
      required: true,
   },
   mentoria: {
    type: mongoose.ObjectId,
    ref: 'Mentorias',
}
})
module.exports = mongoose.model('Fornecedor', esquema, 'fornecedores')