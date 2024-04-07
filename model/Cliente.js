const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clienteSchema = new Schema ({
    nombre: String,
    apellidos: String,
    ciudad: String
},{versionkey:false})

module.exports = mongoose.model('clientes', clienteSchema)