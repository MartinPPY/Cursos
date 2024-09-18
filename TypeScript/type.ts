//para tipar los objetos literales podemos usar type

type Programador = {//siempre los types van con mayusculas
    nombre: string,
    tecnologias: string[],
    mayorEdad: boolean | null // la barra invertida es para indicar otro posible tipo de dato
}

let programador: Programador = {//asi usamos type para tipar un objeto
    nombre: "Martin",
    tecnologias: ["HTML", "CSS", "JS", "Cobol"],
    mayorEdad: true
}

//para instanciar un type en un objeto deben ser la misma cantidad de atributos que el del
//type