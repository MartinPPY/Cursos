inicio del curso de Node Js que usa JavaScript y tambien usa TypeScript
Node js es un entorno de JS para ejecutarlo desde el servidor, podemos realizar funciones
asincronas, es como un django pero JS

- Permite crear servidores web y APIS
- Permite ejecutar codigo asincrono y manejar multiples solicitudes sin bloquear el hilo principal
- Permite desarrollar aplicaciones en tiempo real como chats, multijugador, notificaciones ETC
- Permite manejar paquetes y dependencias que permite compartir codigo de terceros

como ejecutar un proyecto node js:
- npm init

en el json que se genera estan todas las configuraciones del proyecto, en el apartado de scripts
podemos ocnfigurarlo para ver que archivo sera el ejecutbale o cambiar ciertas cosas para produccion
testeo o desarrollo, por ejemplo en build se prepara la app para el entorno de producción

- start: desarrollo o produccion
- dev: desarrollo
- build: producción

creacion de la carpeta source, es muy comun en los proyectos, tambien podemos generar un mensaje desde la consola con echo

Nodemon: permite actualizar los cambios en el proyecto, se instala como dependencia en el package.json utilizando
el siguiente comando:

- npm i nodemon --save -dev

Nodemon se utiliza solamente en el ambiente de desarrollo y no producción. Para ejecutar nodemon en la terminal
se utiliza el siguiente comando:

- npm run dev 
depende de la configuracion en el archivo json, a que me refiero que en scripts, "dev" debe estar de la siguiente
manera:
- "dev": "nodemon src/index.js"

Para realizar importaciones y exportaciones debemos colocar en el json:
- "type" : "module"

**Variables de entorno**
podemos tener variables de entorno de desarrollo colocando un archivo .env en la raiz del proyecto
esto es muy importante pero tambien muy peligroso, cuando se suba a un repositorio no se deben de subir
que se coloca en el .env?

- el puerto asi : PORT = numero del puerto

para que el index.js o main pueda caputar la informacion de .env se debe de usar un package llamado dotenv usando:
- npm i dotenv

para ser mas estrictos podemos usar otra libreria que se llama envar para instalarlo se usa:
- npm i env-var

**Herrmaientas para las practicas**

- express.js: propociona una capa para manejar solicitudes http y rutas, y configurar middlewares

- mongoDB: base de datos noSQL que almacena datos en documentos JSON

- Mongoose es una biblioteca para el modelado de datos para NodeJS, es para interactuar con mongo

- Railway: plataforma en la nube que sirve para alojar base de datos y gestion de entornos

- docker: sistema de contenedores

- Body-Parcer: es un middleware de express permite acceder a los datos en el cuerpo de una solicitud http en formato JSON,
  url codificada o datos sin procesar
  
**middleware**
Un middleware en NodeJS es una funcion que se ejecuta entre una solicitud y una respuesta, hace que sea mas flexible manejar diversas
tareas y funcionalidades





