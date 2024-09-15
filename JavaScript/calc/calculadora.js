const btnClean = document.querySelector(".clean");
const pantalla = document.querySelector(".pantalla");
const btnNumbers = document.querySelectorAll(".number");
const suma = document.querySelector(".sum");
const resta = document.querySelector(".rest");
const total = document.querySelector(".calcula");

btnClean.addEventListener("click",()=>{
    pantalla.value = "";
});


suma.addEventListener("click",()=>{
    pantalla.value = pantalla.value + "+";
});

resta.addEventListener("click",()=>{
    pantalla.value = pantalla.value + "-";
});

total.addEventListener("click",()=>{
    let resultado = eval(pantalla.value);
    pantalla.value = resultado;
});

btnNumbers.forEach(function(btn,index){
    btn.addEventListener("click",()=>{
        pantalla.value = pantalla.value + btn.innerText;
    });
});

