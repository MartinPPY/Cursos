"use strict";
//generico es la forma en que la clase puede hacer como un pivot
//va entre mayor y menor y declara desde afuera el tipo de dato de un atributo
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    //getters y setters
    getNumero() {
        return this.numero;
    }
    setNumero(numero) {
        this.numero = numero;
    }
    //metodos
    sortear() {
        return `para ${this.nombre} el ticket es ${this.numero}`;
    }
}
let sorteo = new Sorteo("Martin"); //el T sera number y el numero sera number
sorteo.setNumero(7);
console.log(sorteo.sortear());
