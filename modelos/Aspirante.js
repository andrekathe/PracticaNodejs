const mongoose = require('mongoose');

let AspiranteSchema = new mongoose.Schema({
    idAspirante: Number,
    tipoDocumento: String,
    documentoIdentificacion: Number,
    nombres: String,
    apellidos: String,
    direccion: String,
    correoElectronico: String,
    telefonoFijo: Number,
    telefonoCelular: Number,
    sitioWeb: String,
    descripcion: String
});

module.exports = mongoose.model('aspirante', AspiranteSchema, 'Aspirantes');