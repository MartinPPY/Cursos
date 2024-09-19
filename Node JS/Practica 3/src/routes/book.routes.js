//en este archivo van las rutas (GET,POST,PUT,PATCH,DELETE)

//importar express y su router
const express = require('express')
const router = express.Router()
//importar el modelo de book
const Book = require('../models/book.model')


//creacion del middleware
const getBook = async (req, res, next) => {
    let book;
    const { id } = req.params
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {//expresion regular para identificar un id de mongo
        return res.status(400).json({ message: "id no valido" })
    }

    try {
        book = await Book.findById(id)
        if (!book) {
            return res.status(404).json({ message: "libro no encontrado" })
        }
    } catch (error) {
        res.status(500).json({ message: error })

    }

    res.book = book
    next()
}


//obtener todos los libros(GET ALL)
router.get('/', async (req, res) => { //creacion de una funcion asicrona

    //try-catch para manejar lo errores
    try {
        const books = await Book.find() //este metodo trae todos los libros
        if (books.length == 0) {

            return res.status(204).json([]) //si estan vacios arrojamos este codigo
        }
        res(books)//aqui generamos como response los libros
    } catch (error) {
        res.status(500).json({ message: error.message }) //en caso de error arrojamos un codigo 500

    }
})

//Crear nuevo libro (POST) se requerira un body
router.post('/', async (req, res) => {
    const { title, author, genre } = req?.body //el body vendra de la request
    if (!title || !author || !genre) {
        return res.status(400).json({ message: "todos los campos deben de estar llenos" })
    }

    //creamos un nuevo libro con los datos de la request
    const book = new Book(
        {
            title,
            author,
            genre
        }
    )

    try {
        //creamos un nuevo libro y lo guardamos
        const newBook = await book.save()
        res.status(200).json(newBook) //mensaje para el usuario
    } catch (error) {
        res.status(400).json({ message: error.message })

    }
})



module.exports = router
