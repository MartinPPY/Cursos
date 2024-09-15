//esto es para mostrar execptions

try {
    console.log("Programa pasado por try");
    throw ("error inesperado"); //throw es para arrojar un error personalizado
} catch (error) {
    console.log("Pasando por catch");
    console.log(error);
} finally {//se ejecuta simpre si es try o catch
    console.log("pasando por finnaly");
}

//el try catch se usa para manejar codigo sincrono y NO ASINCRONO!!!