//los eventos en js funcionan como un listener
//para ejecutar una accion ya sea en el programa
//como en un archivo html

//evento click
document.querySelector("h1").addEventListener("click",()=>{
    document.querySelector("h1").innerText= Date();
});