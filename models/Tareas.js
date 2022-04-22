const mongoose = require('mongoose');

const tareasSchema = new mongoose.Schema({
    creador:{type:String },
    fecha:{type:String },
    tarea:{type:String },
    estado:{type:String }
})
const Tareas = mongoose.model('tareas',tareasSchema);

module.exports = Tareas;

