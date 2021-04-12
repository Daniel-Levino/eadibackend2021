const express = require('express')
//const bodyParser = require('body-parser')

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const padraoRoute = require('./src/routes/padraoRoute.js')
const usuarioRoute = require('./src/routes/usuarioRoute.js')
const cursoRoute = require('./src/routes/cursoRoute.js')
const aulaRoute = require('./src/routes/aulaRoute.js')

padraoRoute(app)
usuarioRoute(app)
cursoRoute(app)
aulaRoute(app)

const port = process.env.PORT || 3000

app.listen(port)

console.log('servidor funcionando na porta ', port)