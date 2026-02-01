# AVANCEPROYECTODFS
Avance del proyecto, con backend enfocado a una sola entidad.
Para poder ejecutar el código hay que instalar express y tener node.js.
Documentación en postman: https://ricardobarandacisneros-8251113.postman.co/documentation/51906899-aecbc44e-8569-4c13-a293-59ac0454a038/publish?workspaceId=b77fd813-c6d6-4e39-89c1-56c9578354f0&authFlowId=a5b89d64-4ab2-474b-b5bb-da0b246f262d](https://documenter.getpostman.com/view/51906899/2sBXVoATdU)
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
