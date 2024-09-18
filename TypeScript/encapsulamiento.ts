//generico es la forma en que la clase puede hacer como un pivot
//va entre mayor y menor y declara desde afuera el tipo de dato de un atributo
class Sorteo<T> {//el generico seria T
    private numero?: T

    constructor(private nombre: string) {

    }

    //getters y setters
    getNumero() {
        return this.numero
    }
    setNumero(numero: T) {
        this.numero = numero
    }

    //metodos
    public sortear(): string {
        return `para ${this.nombre} el ticket es ${this.numero}`
    }
}

let sorteo = new Sorteo<number>("Martin")//el T sera number y el numero sera number
sorteo.setNumero(7)
console.log(sorteo.sortear())