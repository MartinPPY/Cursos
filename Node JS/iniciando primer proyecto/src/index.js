//este es el archivo que se ejecutara en el package.json es el MAIN
console.log("Ejecutandose en el index");

//importar de manera antigua
//const {getAuthor,getTitle} = require("./import")//se importan las funciones de import.js
//const {curso} = require("./objects")

//console.log(getAuthor("NodeJS"));

//realizar las importaciones de manera actual
import { getTitle, getAuthor } from "./import.js"; //debe ir el .js
import { curso } from "./objects.js"; //debe ir el .js

//console.log(getAuthor("Martin"));

//console.log(process); //el objeto process indica todos los procesos que esta llevando la aplicacion node
//vienen en formato JSON

//console.log(process.env)//esto muestra todas las variables de entorno que se esta ejecutando


//console.log(process.env.PORT) //esto muestra el puerto de la ejecucion
//sino encontramos podemos colocar uno nostros con ?? "numero del puerto"

//podemos tener variables de entorno en el ambito de desarrollo

//importar configuraciones de un .env
import { config } from "dotenv";
config() //ejecuta el .env

//importar envar para dar mas restricciones
import env from 'env-var';

//hacer que el puerto sea un numero
const PORT = env.get('PORT').required().asPortNumber //esto indica que el puerto debe ser un numero


console.log(PORT)
console.log(process.env.PORT) //muestra el numero del puerto del .env
console.log(process.env.MARTIN)


