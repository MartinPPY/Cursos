//manejo del server
import express from "express";
import path from 'path';

//funcion que recibe un objeto
//el objeto contendria el numero del puerto y la public path
export function startServer(options) {
    const { port, public_path } = options

    const app = express()

    //esto es un middleware
    //para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_path)) //este es el contenido estatico que tenemos dispo

    //si el usuario agregara cualquier cosa en la url siempre lo dirigira al indexpath
    app.get('*', (req, resp) => {
        const indexpath = path.join(__dirname + `../../../${public_path}/index.html`)
        req.sendFile(indexpath)
    })


    app.listen(port,()=>{
        console.log(`escuchando en el puerto ${port}`)
    })
}

//de esta manera creamos un servidor en nuestra computadora de manera local
//para ingresar la aplicacion angular deberiamos buildear la aplicacion
//y el archivo dist colocarlo en el public