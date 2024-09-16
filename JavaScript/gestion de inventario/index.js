let apiKey = '8bcb7442206c623a57c9f17a022a8e20';
let difKelvin = 273.15;
const urlBase = 'https://api.openweathermap.org/data/2.5/weather?q=';



document.querySelector("button").addEventListener("click", () => {
    const cuidad = document.querySelector("input").value;
    if (cuidad) {
        mostrarDatosCiudad(cuidad);
    }
});

function mostrarDatosCiudad(cuidad) {
    fetch(`${urlBase}${cuidad}&appid=${apiKey}`)
        .then(response => response.json())
        .then(response => traerDatos(response))
}

function traerDatos(datos) {
    let country = document.querySelector("#country");
    let temp = document.querySelector("#temp");
    let desc = document.querySelector("#desc");
    let gradosC = datos.main.temp - difKelvin

    country.textContent = `Pais: ${datos.name}`;
    temp.textContent = `Temperatura: ${gradosC.toFixed(1)}C°`;
    desc.textContent = `Descripción: ${datos.weather[0].description}`
}
