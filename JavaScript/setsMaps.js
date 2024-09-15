//esta no es una caracteristica tan usada

//set es un cojunto no repetible de elementos

//declaracion
let conjunto = new Set(["HTML","CSS","JS","HTML"]); //SOLO MOSTRARA 3 ELEMENTOS
console.log(conjunto);

//agregar al set
conjunto.add("Python");
console.log(conjunto);

//pregunta si tiene tal elemento
let encontro = conjunto.has("Python"); //devuelve true si encontro sino false
console.log(encontro);

//Maps es un conjunto de clave valor pero no es un objeto

let map = new Map([
    ["Computadores",10],
    ["Tablets",5],
    ["celulares",15],
])//son pare clave valor pero no son un objetos
console.log(map);

//metodos maps

//agregar
map.set("teclados",20)
console.log(map);

//obtener largo
console.log(map.size);

//borrar
map.delete("Computadores");
console.log(map);

//preguntar
encontro = map.has("Tablets");
console.log(encontro);

//eliminar duplicados en array y volver a convertirlo en array
let arreglo = [1,1,1,1,2,2,2,3,3,3,4,4,4]
arreglo = new Set(arreglo);

arreglo = [...arreglo]; //con esto se vuelve a convertir en arreglo
console.log(arreglo);
