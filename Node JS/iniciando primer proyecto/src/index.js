//este es el archivo que se ejecutara en el package.json es el MAIN
console.log("Ejecutandose en el index");

//importar de manera antigua
//const {getAuthor,getTitle} = require("./import")//se importan las funciones de import.js
//const {curso} = require("./objects")

//console.log(getAuthor("NodeJS"));

//realizar las importaciones de manera actual
import { getTitle,getAuthor } from "./import.js"; //debe ir el .js
import { curso } from "./objects.js"; //debe ir el .js

console.log(getAuthor("Martin"));

