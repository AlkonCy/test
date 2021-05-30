
const mongoose = requiere('mongoose');

const Schema = mongoose.Schema;

const BancoSchema = newShema({
    Banco: String, // Banco
    Dinero: BigInt64Array, // Dinero
    Descripcion: String, // Descripcion
    
});

module.exports = mongoose.model('Banco', BancoSchema);