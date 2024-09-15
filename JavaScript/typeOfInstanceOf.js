//para describir que tipo de dato estamos trabajando
let cadena = '';

console.log(typeof cadena); //retornara string

//esto es lo mismo con los tipos de datos primitivos en js

//los objetos serian= arrays,objects,sets,maps,dates, undefined,null

//para identificar a cada uno de los objetos pordemos usar instance of

let array = [1, 2, 3, 4, 5]
if(array instanceof Array){
 console.log("Esto es un array");
}else{
    console.log("No es un array");
}