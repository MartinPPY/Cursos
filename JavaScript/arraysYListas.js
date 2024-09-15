//los arreglos son estructuras para guardar mas cosas como objetos, variables
//arreglos etc.

//declaracion y asignacion
const cursos = ["HTML5", "CSS3", "JavaScript", "Angular"];

//acceder al elemento del arreglo por indice
console.log(cursos[0]); //HTML5

//cambiar elementos
cursos[0] = "Python";

//agregar elementos por indice
cursos[4] = "C++";
console.log(cursos);

//declarar un array por una clase
const arreglo = new Array(5); //se instancia un array con 5 posiciones de manera undefined

//arreglo con distintos elementos
const arreglo2 = [
    "Martin",
    21,
    {
        mayorEdad: true,
        trabaja: false
    },
    [1, 2, 3, 4, 5],
]

//propiedad length del arreglo
console.log(cursos.length); //especifica el largo o la cantidad de elementos del arreglo

//acceder al ultimo elemento del arreglo
console.log(cursos[cursos.length - 1]);

//recorrer un arreglo
for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
}

//ALGUNOS METODOS DE UN ARREGLO
console.log("---------------------- Metodos ------------------------------");
let arregloNumeros = [1, 1, 2, 3, 1, 2, 3, 4, 1, 4, 5, 1];
const arregloObjetos = [
    { nombre: "Martin", apellido: "Romero" },
    { nombre: "benja", apellido: "Romero" },
    { nombre: "Camila", apellido: "Vanesa " },
    { nombre: "Yasna", apellido: "Vanesa" },
]

//filter
let resultado = arregloNumeros.filter(x => x == 2); //funcion callback
console.log(resultado); //extrae todos los elementos del parametro

resultado = arregloObjetos.filter(x => x.apellido == "Romero");
console.log(resultado); //extrae todos los elementos del parametro

//Map
arregloNumeros = [1,1,1,1,1,1,1,1]
resultado = arregloNumeros.map(x => {
    if (x == 1) {
        return 2;
    }
})
console.log(resultado); //cambia todos los numeros por el 2

//fill
arregloNumeros  = [1, 1, 2, 3, 1, 2, 3, 4, 1, 4, 5, 1];
resultado = arreglo.fill("manzana",1); //cambia todos los elementos desde el indice pasado en el parametro
console.log(resultado);


//find
resultado = arregloNumeros.find(x=> x==5);
console.log(resultado); //encuentra en la primera ocurrencia el elemento especificado en el index

//findindexof
resultado = arregloNumeros.findIndex(x => x == 2);
console.log(resultado); //te retorna la cantidad de elementos que le pasaste en el index

//some
resultado = arregloNumeros.some(x=> x== 2);
console.log(resultado); //te retorna true si el parametro esta en el arreglo y false si no esta

//some
resultado = arregloNumeros.every(x=> x== 2);
console.log(resultado); //te retorna true si todos los elementos estan en el arreglo y si no false

//pop
resultado = arregloNumeros.pop();
console.log(resultado); //elemento sacado, el elemento que se saca esta al final del arreglo
console.log(arregloNumeros); //arreglo final

//shift
resultado = arregloNumeros.shift();
console.log(resultado); //elemento sacado, el elemento que se saca esta al principio del arreglo
console.log(arregloNumeros); //arreglo final

//push
arregloNumeros.push("manzana");
console.log(arregloNumeros);
//unshift
arregloNumeros.unshift("manzana");
console.log(arregloNumeros);

/*existen otros metodos como concat,slice,splice,join,sort entre otros, revisar documentacion*/





