const probarconnexion=require( './modelos/conexion')
const express = require('express')
const Usuario = require('./rutas/Usuario-rutas')


const app = express()
const port = 3000
probarconnexion()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.use("/Usuario",Usuario)
app.listen(port,()=>{
  console.log("conexion app listening on port "${port})


})
