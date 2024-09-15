/*
Tipos de variables:
var, let, const
*/
var nombre2; //declaracion
let edad2;
//const sexo2; //error la constante debe ser inicializada


var nombre = "Martin"; //declaracion y asignacion
let edad = 16;
const sexo = "Hombre";

var nombre;//var puede ser redeclarado, por eso no se usa var

//mejores practicas
//no declarar y asignar variables con variables

//let x = 5; //esto esta mal
//let y = x;//esto esta mal

//------------tipos de datos ---------------------------------

//strings
var direccion = "Los prados IV";
var inicial = "M";

//nummber
let num1 = 10; //entero
let decimall = 10.50//flotante

//booleanos
let mayorEdad = true;
let menorEdad = false;

//undefined
let noDefinido; //valor no definido

//objeto(diccionario)
const persona ={
    "nombre" : "Martin" //clave-valor
}

//arreglos
let arreglo = [1,2,3,4,5,6,7];

//dates

const fecha = new Date();