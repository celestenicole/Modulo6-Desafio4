Like Me – Backend (Parte I y Parte II)
Autor

Celeste Nicole Lluen Delgado

Descripción

Este proyecto corresponde al desarrollo del backend de la aplicación Like Me, realizado como parte de los desafíos Like Me (Parte I y Parte II).
El objetivo es implementar una API REST utilizando Express.js que permita gestionar publicaciones almacenadas en una base de datos PostgreSQL, incluyendo la creación de posts, la consulta de registros, la interacción mediante likes y la eliminación de publicaciones.

El servidor se comunica con la base de datos mediante el paquete pg y habilita CORS para permitir el consumo de sus rutas desde la aplicación cliente proporcionada como apoyo en el desafío.

Tecnologías utilizadas

Node.js v16

Express.js

PostgreSQL

pg

cors

JavaScript

Estructura del proyecto
Like_Me_Parte_I_II_Celeste_Lluen/
├── index.js
├── db.js
├── package.json
└── README.md

Requisitos previos

Node.js versión 16 o superior

PostgreSQL instalado y en ejecución

Base de datos likeme creada con la tabla posts

CREATE DATABASE likeme;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(25),
  img VARCHAR(1000),
  descripcion VARCHAR(255),
  likes INT
);

Instalación

Desde la terminal, ubicada en la raíz del proyecto, ejecutar:

npm install

Ejecución

Para iniciar el servidor, ejecutar:

npm start


El servidor se levanta en el puerto 3000:

http://localhost:3000

Rutas disponibles
GET /posts

Devuelve todas las publicaciones registradas en la tabla posts de la base de datos PostgreSQL en formato JSON.

POST /posts

Permite registrar una nueva publicación en la base de datos.

Ejemplo de body enviado en formato JSON:

{
  "titulo": "Publicación de ejemplo",
  "img": "https://url-de-imagen.com",
  "descripcion": "Descripción del post"
}


El campo likes se inicializa automáticamente en cero.

PUT /posts/:id

Permite actualizar un registro existente, incrementando la cantidad de likes de un post según su identificador (id).

DELETE /posts/:id

Permite eliminar una publicación de la base de datos utilizando su identificador (id).

Funcionamiento general

El servidor utiliza Express.js para la creación de rutas REST.

La conexión a PostgreSQL se realiza mediante un pool de conexiones configurado con el paquete pg.

Todas las consultas SQL se encuentran encapsuladas dentro de bloques try/catch para el manejo de errores.

Se habilita CORS para permitir la comunicación con la aplicación cliente de apoyo.

El proyecto se enfoca exclusivamente en el desarrollo backend, según lo indicado en el enunciado del desafío.

Conclusión

El proyecto cumple con todos los requerimientos establecidos en los desafíos Like Me (Parte I y Parte II), implementando correctamente una API REST con Express, la interacción con una base de datos PostgreSQL, el uso de CORS, y las operaciones necesarias para la gestión de publicaciones y likes.
