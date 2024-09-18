//las interfaces son muy similares a un type pero se usan para cosas distintas

interface ProgramadorPro{
    nombre:string,
    tecnologias: string[],
    mayorEdad: boolean
}

let programador2: ProgramadorPro = {
    nombre: "Martin Romero",
    tecnologias: ["Cobol"],
    mayorEdad: true
}

function enviarCurriculum(programador:ProgramadorPro):void{
    console.log(`${programador.nombre} envio su curriculum`)
}

//las interfaces permiten que otros objetos tengan mas atributos que hereden de la interfaz
//pero se deben de respetar los atributos de las interfaces