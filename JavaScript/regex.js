//expresiones regulares
// /pattern/modificadores

/*Modificadores

i: ignorar case sentitive
g: buscar en todo el texto
m: busqueda multilinea
*/

let texto = "Este curso es de JavaScript y es de SergieCode";
let busqueda = texto.search(/sergie/i); //busca el string en la cadena texto

console.log(busqueda);//busca donde esta el el elemento a encontrar

let pattern = /segie/;
