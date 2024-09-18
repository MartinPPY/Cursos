class Pelicula { //clases siempre inicial en mayuscula

    //atributos
    nombre?: string//el ? indica que el valor no esta inicializado
    protagonistas?: string[]
    actores?: string[]

    //constructor
    constructor(nombre: string, protagonistas: string[], actores: string[]) {
        this.nombre = nombre
        this.protagonistas = protagonistas
        this.actores = actores
    }

    //metodos
    proyectar(): void {
        console.log(`la pelicula: ${this.nombre} esta siendo proyectada`);
    }


}

//instanciar clase mediante objeto
const pelicula = new Pelicula("Avengers", ["Iron Man", "Thor", "Cap America"], ["Nose los actores xd"])

pelicula.proyectar()
