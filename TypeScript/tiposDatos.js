"use strict";
//tipos de datos
//primitivos, compuestos, definidos por el usuario
//esta es la forma de declarar la variable en typeScript
//esto sirve para agregar el tipo de dato
//strings
const string1 = "string con comillas dobles";
const string2 = 'string con comillas simples';
const string3 = `string con comillas para agregar variables`;
//number
const numInt = 10;
const numFloat = 3.14;
//booleanos
const boolTrue = true;
const boolFlase = false;
//undefined
let variableNoDefinida;
//null
let variableNull;
//arrays
//array de numeros
const arregloNumeros = [1, 2, 3, 4, 5, 6];
//array de strings
const arregloTexto = ["pera", "manzana", "limon"];
//array de booleanos
const arregloBooleanos = [true, false, true];
//enum
//enum para los dias de semana
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["lunes"] = 0] = "lunes";
    DiaSemana[DiaSemana["martes"] = 1] = "martes";
    DiaSemana[DiaSemana["miercoles"] = 2] = "miercoles";
    DiaSemana[DiaSemana["jueves"] = 3] = "jueves";
    DiaSemana[DiaSemana["viernes"] = 4] = "viernes";
    DiaSemana[DiaSemana["sabado"] = 5] = "sabado";
    DiaSemana[DiaSemana["domingo"] = 6] = "domingo";
})(DiaSemana || (DiaSemana = {}));
//enum con valores de cadena
var colores;
(function (colores) {
    colores["Rojo"] = "rojo";
    colores["Verde"] = "verde";
})(colores || (colores = {}));
//funciones con tipo de dato explicito
function sumar(a, b) {
    return a + b;
}
//funcion con flecha de retorno implicito
const dividir = (a, b) => a / b;
//funciones con parametros opcionales
function saludar(nombre, edad) {
    return nombre;
}
//funciones con parametros por defecto
function saludar2(nombre = "ricardo") {
    return nombre;
}
//clases
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log("hola mundo");
    }
}
