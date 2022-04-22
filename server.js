// Creacion del servidor con node con el comando npm init -
//  npm i express --save    para crear el entorno de express
require('dotenv').config()
const express = require('express')
require('./config/database')
const cors = require("cors")
const PORT = 4000 /* Aquí corre la app */
const Router = require('./routes/routes')
const app = express()


app.use(cors())
app.use("/api", Router)


app.listen(PORT, () => console.log('Server ready on PORT' + PORT))