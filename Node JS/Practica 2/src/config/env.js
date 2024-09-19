//manejo de variables de entorno

//importar dotenv y env-var
import { config } from "dotenv"
import pkg from 'env-var'
const { get } = pkg //para usar get de la nueba forma se debe hacer este paso

//configurar las variables de entorno
config()
//dar propiedades a las variables de entorno(string, number etc)
export const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}


//exportar objeto con las especificaciones de las variables(string,number etc)


