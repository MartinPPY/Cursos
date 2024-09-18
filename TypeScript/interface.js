"use strict";
//las interfaces son muy similares a un type pero se usan para cosas distintas
let programador2 = {
    nombre: "Martin Romero",
    tecnologias: ["Cobol"],
    mayorEdad: true
};
function enviarCurriculum(programador) {
    console.log(`${programador.nombre} envio su curriculum`);
}
//las interfaces permiten que otros objetos tengan mas atributos que hereden de la interfaz
//pero se deben de respetar los atributos de las interfaces
