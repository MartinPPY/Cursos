//tipos de datos
//primitivos, compuestos, definidos por el usuario


//esta es la forma de declarar la variable en typeScript
//esto sirve para agregar el tipo de dato

//strings
const string1: string = "string con comillas dobles"
const string2: string = 'string con comillas simples'
const string3: string = `string con comillas para agregar variables`

//number
const numInt: number = 10
const numFloat: number = 3.14

//booleanos
const boolTrue: boolean = true
const boolFlase: boolean = false

//undefined
let variableNoDefinida: undefined

//null
let variableNull: null

//arrays

//array de numeros
const arregloNumeros: number[] = [1, 2, 3, 4, 5, 6]

//array de strings
const arregloTexto: string[] = ["pera", "manzana", "limon"]

//array de booleanos
const arregloBooleanos: boolean[] = [true, false, true]

//enum
//enum para los dias de semana
enum DiaSemana {
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
}
//enum con valores de cadena
enum colores {
    Rojo = "rojo",
    Verde = "verde"
}

//funciones con tipo de dato explicito
function sumar(a: number, b: number): number {
    return a + b
}

//funcion con flecha de retorno implicito
const dividir = (a: number, b: number) => a / b

//funciones con parametros opcionales
function saludar(nombre: string, edad?: number): string {//el operador ? es para decir que es opcional
    return nombre
}

//funciones con parametros por defecto
function saludar2(nombre: string = "ricardo"): string {
    return nombre
}

//clases
class Persona {
    nombre: string

    constructor(nombre: string) {
        this.nombre = nombre
    }

    saludar() {
        console.log("hola mundo")
    }
}