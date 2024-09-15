//un calbacks es una funcion que se pasa a otra funcion
function mostrarConsola(algo){
    console.log(algo);
}

function calcula(num1,num2,callback){
    let suma = num1 + num2;
    callback(suma);//en la funcion calcula se ejecuta la funcion mostrarConsola!
}

calcula(1,3,mostrarConsola);//calcula recibira dos numeros y una funcion