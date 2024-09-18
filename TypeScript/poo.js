"use strict";
class Pelicula {
    //constructor
    constructor(nombre, protagonistas, actores) {
        this.nombre = nombre;
        this.protagonistas = protagonistas;
        this.actores = actores;
    }
    //metodos
    proyectar() {
        console.log(`la pelicula: ${this.nombre} esta siendo proyectada`);
    }
}
//instanciar clase mediante objeto
const pelicula = new Pelicula("Avengers", ["Iron Man", "Thor", "Cap America"], ["Nose los actores xd"]);
pelicula.proyectar();
