TypeScript es el lenguaje tipado de JavaScript, no se coloca en el HTML
sino mas bien es que se compila en un js, existe un comando para vincular
un archivo TS con un JS y es:
- tsc "nombre del archivo".ts

Modo observador: observa los cambios en el archivo TypeScript y genera los cambios en el JS vinculado
para activar el modo observador para un solo archivo
- tsc "nombre del archivo".ts -w
Para observar todos los archivos debe iniciar un proyecto TS, para iniciar el proyecto es:
- tsc -init
y ahora para observar mas de un archivo TS debemos poner
- tsc -w