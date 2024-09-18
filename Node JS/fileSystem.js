//file system sirve para leer y escribir archivos

//forma antigua del import
const fs=required('fs');
//console.log(fs)

//importar un texto y leerlo
const texto = fs.readFileSync("prueba.txt","utf-8");
console.log(texto);

