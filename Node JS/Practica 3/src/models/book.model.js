//en este archivo se modelara para reflejar en la base de datos mongo db

//importar mongoose
const mongoose= require('mongoose')

//crear el modelo de datos
const bookSchema = new mongoose.Schema(
    //aqui modelaremos el objeto
    {
        title: String, //en vez de los valores solo van el tipo de dato
        author: String,
        genre: String,
    }
)

//exportar el modelo
module.exports = mongoose.model('Book',bookSchema)