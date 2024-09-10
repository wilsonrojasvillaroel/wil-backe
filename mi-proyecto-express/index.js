const {probarconnexion}=require( './modelos/conexion')
const express = require('express')
const Usuariorutas= require('./rutas/Usuario-rutas')
const  DatosAcademicosrutas = require('./rutas/DatosAcademicos-rutas')
const Datospersonalesrutas = require('./rutas/Datospersonales-rutas')
const Historialcontraseniarutas = require('./rutas/Historialcontrasenia-rutas')
const Rolesrutas = require("./rutas/Roles-rutas")
const cors=require("cors");

const app = express()

app.use(cors());
app.use(express.urlencoded({bodyparser:true}))
app.use(express.json());

const port = 3000
probarconnexion()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/Usuario",Usuariorutas)
app.use("/Roles",Rolesrutas)
app.use("/Historialcontraseniarutas",Historialcontraseniarutas)
app.use("/Datospersonales",Datospersonalesrutas)
app.use("/DatosAcademicos",DatosAcademicosrutas)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

})
