const mongoose = require("mongoose");

const UsuarioSchema = new mongoose.Schema(
    {
        nombre: String,
        email: String,
        // Agrega aquí cualquier otro campo que necesites para los usuarios
    },
    { collection: "usuarios" }
);

const Usuario = mongoose.model("Usuario", UsuarioSchema);

module.exports = Usuario;
