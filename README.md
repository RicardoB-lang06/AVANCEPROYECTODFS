# AVANCEPROYECTODFS
Avance del proyecto, con backend enfocado a una sola entidad.
Para poder ejecutar el código hay que instalar express y tener node.js.
Comandos:
npm init (Dar enter a todo)
npm install express
npm install --save -dev nodemon

Y posteriormente poner el siguiente script en el documento JSON:
{
  "name": "avanceproyectodfs",
  "version": "1.0.0",
  "description": "",
  "license": "ISC",
  "author": "",
  "type": "commonjs",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js"
  },
  "dependencies": {
    "express": "^5.2.1",
    "nodemon": "^3.1.11"
  }
}
