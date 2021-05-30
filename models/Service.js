
const mongoose = requiere('mongoose');

const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
      Servicio: String,
      Nombre: String,
      Tamaño: String,
      Sistema_Operativo: String,
      PhpMyAdmin: String,

});

module.exports = mongoose.model('Servicio',ServiceSchema);    