const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')



// forma de ler json
app.use(
    express.urlencoded({
        extended: true,
    }),

)

// rotas da API 
app.use(express.json({limit: '50mb'}))
app.use(cors())

const users = require('./routes/users')
app.use('/users', users)
const Mentorias = require('./routes/Mentorias')
app.use('/montoria', Mentorias)

mongoose.connect('mongodb+srv://HackathonFCamara:v6oqXPB7xz8s3qgo@hackathon-fcamar.y71xw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => {
    console.log('connectamos ao mongoDB')
    app.listen(8080)
})
.catch((err) => console.log(err))
