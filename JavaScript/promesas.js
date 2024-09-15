//una promesa es como un try-catch de manera asicrona
//es un objeto que permite realizar tareas asincronas

//instanciar promesa
let promesa = new Promise((response,reject)=>{
    let respuesta = "Respuesta del backend"
    //response si salio todo positivo
    response(respuesta);
    //reject si salio mal
    reject("valio madres");
});

//utilizar promesa
promesa.then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})

//utilizando setTimeOut
let promesa1 = new Promise((response,reject)=>{
    setTimeout(() => {
        let objeto = {
            respuesta: 200,
            description:"MENSAJE RECIBIDO!"
        }
        //response(objeto);
        reject("NO RECIBIDO");
        
    }, 3000);
})

promesa1.then(resp=>{
    console.log(resp.respuesta);
}).catch(err=>{
    console.log(err);
})

