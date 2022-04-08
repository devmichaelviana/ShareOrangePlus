const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const users = require('./routes/users')
const Mentorias = require('./routes/mentorias')



// forma de ler json
app.use(
    express.urlencoded({
        extended: true,
    }),

)

// rotas da API 
app.use(express.json({limit: '50mb'}))
app.use(cors())


app.use('/users', users)
app.use('/montoria', Mentorias)

const login = process.env.LOGIN_DB;
const senha = process.env.SENHA_DB

mongoose.connect(`mongodb+srv://${login}:${senha}@hackathon-fcamar.y71xw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(() => {
    console.log('connectamos ao mongoDB')
    app.listen(8080)
})
.catch((err) => console.log(err))
