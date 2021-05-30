const express = require('express');
const app = express();

const router = express.Router();

// Librería para mongoDB:
var mongoose = require('mongoose');


//importar las rutas:
const indexRoutes = require('./routes/index');

// acceso a vars de entorno global para poder recibir el puerto que el proveedor conceda.
const port = process.env.PORT || 3000;

// middleware:
app.use(express.static(__dirname + '/public'));


app.use(express.urlencoded({ extended: false })); //entiende los datos que vi




