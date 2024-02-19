const express = require("express");
require('dotenv').config();
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require("./middlewares/errorHandler");

// Configuracion Middleware con el Servidor de Autorización 
const autenticacion = auth({
  audience: process.env.OAUTH_AUDIENCE,
  issuerBaseURL: process.env.OAUTH_URL,
  tokenSigningAlg: "RS256",
});

const app = express();
app.use(express.json());

// Importamos los Router
const librosRouter = require("./routes/libros");
const usuariosRouter = require("./routes/usuarios");

//Configuramos el middleware de autenticacion
app.use("/api/usuarios", autenticacion,  usuariosRouter);
app.use("/api/libros", autenticacion,  librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});

module.exports = app;