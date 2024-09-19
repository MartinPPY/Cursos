//importar las variables de entorno
import { envs } from "./config/env.js";
//importar funcion startServer del server.js
import { startServer } from "./server/server.js";



//creacion del metodo main
const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}

//funcion acognita y asicrona
(async () => {
    main()
})()//estos parametros es para llamar a la funcion