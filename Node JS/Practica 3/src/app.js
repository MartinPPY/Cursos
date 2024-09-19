//importar express y dotenv
const express = require('express')
const { config } = require('dotenv')

//traer mongoose
const mongoose = require('mongoose')

//importar las rutas
const bookRouteS = require('./routes/book.routes')

//importar body-parser
const bodyParser = require('body-parser')

//metodo para configurar variables de entorno
config()

//traer express como constante
const app = express()

//usar un middleware de express
app.use(bodyParser.json()) //para parsear el body a formato json

//conexion a la base de datos:
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })//se requiere la url

const db = mongoose.connection //traemos la base de datos

//pasar las rutas al middleware de express
app.use('/books',bookRouteS)

//traemos el puerto del .env 
const port = process.env.PORT || 3000 //las || permiten agregar el 3000 en caso de que no haya puerto

//iniciar servidor
app.listen(port, () => {
    console.log(`servidor iniciado en el puerto ${port}`)
})

