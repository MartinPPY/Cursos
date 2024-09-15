//esto es para manejar multiples promesas concatenadas
//forma de trabajar promesas
//async: hacer que la funcion sea asicrona y await para esperar a que la promesa se cumpla

//creacion de promesas
let promesa1 = new Promise((response, reject) => {
    setTimeout(() => {
        let objeto = {
            status: 200,
            desc: "Informacion recibida"
        }
        response(objeto);
        reject("valio madres info no recibida");
    }, 3000);
});
let promesa2 = new Promise((response, reject) => {
    setTimeout(() => {
        let objeto = {
            status: 200,
            desc: "Informacion recibida con 4s"
        }
        response(objeto);
        reject("valio madres info no recibida");
    }, 4000);
});
let promesa3 = new Promise((response, reject) => {
    setTimeout(() => {
        let objeto = {
            status: 200,
            desc: "Informacion recibida con 7s"
        }
        response(objeto);
        reject("valio madres info no recibida");
    }, 7000);
});

//funcion asicrona
async function resolverPromesas(){
    let respuestaPromesa1 = await promesa1; //await espera a que se resuelva la promesa 1
    console.log(respuestaPromesa1);
    let respuestaPromesa2 = await promesa2;
    console.log(respuestaPromesa2);
    let respuestaPromesa3 = await promesa3;
    console.log(respuestaPromesa3);
}

resolverPromesas();