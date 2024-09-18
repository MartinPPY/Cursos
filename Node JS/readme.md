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