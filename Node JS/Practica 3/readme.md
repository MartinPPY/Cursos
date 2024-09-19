creacion de un crud usando mongo db, esto incluiria carpeta de modelos usando moogose
rutas usando express entre otras cosas mas. en este proyecto cambia un poco la manera
de levantar un servidor, se excluyen carpetas como services y config. Como ahora vamos
a usar una base de datos en el .env del proyecto debemos colocar las credenciales que
vamos a usar en nuestra base de datos mongo db, las cuales son las siguientes
- MONGO_USER
- MONGO_PASSWORD
- MONGO_DB_NAME
- MONGO_URL

En la carpeta "models" iran como los modelos para la base de datos y en las "rutas" los metodos
http que serian GET,POST,PUT,PATCH,DELETE

Mongoose es un modelador, es un esquema para mongo db. esto es para reflejar los modelos en la
base de datos, se trabajaria con book.models.js

el body parcer es para parsear cuando se reciba el post

crear un docker_compose.yml

para levantar la base de datos de docker
- docker compose up -d


dependencias:
- express
- type/express
- nodemon
- mongoose
- bodyParcer