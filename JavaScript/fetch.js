//esto nos sirve para consmir una api, o para que un front-end se comunique con un backend
//jsonplaceholder es una api falsa para probar weas jsjsjsj

//como consumir una api con fetch
/*
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
*/

//que es un json?
//se usa para intercambiar informacion en forma de objetos

//como consumir correctamente una api

let urlBase = 'https://jsonplaceholder.typicode.com'; //creacion de la url de la api
let query = 'comments?postId=5';
//GET
//fetch(`${urlBase}/${query}`) //el fetch de forma default es GET
//.then(response => response.json())
//.then(json => console.log(json))


//POST:ENVIAR INFORMACION

let requestBody = {//creamos el dato para enviar
    title: "Ricardo qlo feo",
    body: "Fea tu cara qla xdxdxd",
    userId: 1
}

fetch(`${urlBase}/posts`, {//colocar un objeto como segundo parametro

    method: 'POST',//metodo a escoger
    headers: {
        'ContentType': 'aplication/jason; charset=UTF-8'
    },//se pueden mandar otras cosas
    body: JSON.stringify(requestBody)
})
    .then(response => response.json())
    .then(json => console.log(json))


//PUT:EDITAR INFORMACION
let posteo = 5;
let requestBody2 = {//creamos el dato para enviar
    id: 3,
    title: "Ricardo qlo feo",
    body: "Fea tu cara qla xdxdxd",
    userId: 1
}

fetch(`${urlBase}/posts/${posteo}`, {

    method: 'PUT',//metodo a escoger
    headers: {
        'ContentType': 'aplication/jason; charset=UTF-8'
    },//se pueden mandar otras cosas
    body: JSON.stringify(requestBody2)
})
    .then(response => response.json())
    .then(json => console.log(json))


//PATCH:EDITAR EDITAR INFORMACION(UN ATRIBUTO)


//DELETE: BOORAR ITEM



