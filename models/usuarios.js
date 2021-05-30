const mongoose = requiere('mongoose');

const Schema = mongoose.Schema;

// esquema db

const usuariosSchema = new Schema ({

    nombre: String,
    Apellido: String, //Apellido 
    Celular: String, //Celular
    Mision: String, //Mision
    email: String,  //Mision 


});

//exportar la coleccion alumnos

module.exports = mongoose.model('Usuarios', usuariosSchema);


     

     


     
