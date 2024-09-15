//un objeto es una estructura formada por clave:valor que representa
//un objeto del mundo real

const auto = {//a pesar de ser const se pueden cambiar los atributos
    marca: "FIAT", //clave :valor
    modelo: "uno",
    peso: 550,
    color: "Rojo"
}

let auto2 = {
    marca: "BMW", //clave :valor
    modelo: "12",
    peso: 11000,
    color: "Negro"
}

//obtener solo la marca
console.log(auto.marca);
console.log(auto2.marca);//es asi con los demas valores

//asignando un atributo a una variable
let color = auto.color;
console.log(color);

//cambiar los valores
auto.marca = "Nissan";
auto2.color = "Rojo"

//acceder al valor con corchetes []
console.log(auto["marca"]);

//objetos con arreglos y funciones
const vendedor = {
    nombre: "Martin",
    empresas: "Auto.S.A",
    habilidades: ["Empatico", "Sociable"],
    vender: () => console.log(vendedor.nombre + " a vendido un auto")

}

console.log(vendedor.vender());

