//fechas en JavaScript (lo mas usado)

console.log("fechas");
//instanciar una fecha
let fecha = new Date();
console.log(fecha);

//fecha en año-mes-dia (forma iso)
//fecha = new Date("2021-05-01");
//console.log(fecha);

//traer año
console.log(fecha.getFullYear());

//traer mes
console.log(fecha.getMonth()); //los meses los genera como un arreglo por lo tanto estan indexados

//podemos setear los valores de la fecha
fecha.setFullYear(2029); //seteamos el año actual por el 2029
console.log(fecha);



//forma short(03/15/2020)
//forma long(mar/05/2020)
