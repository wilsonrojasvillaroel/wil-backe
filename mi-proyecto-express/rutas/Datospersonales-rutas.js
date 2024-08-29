const { datospersoales } = require("../controladores/datospersonales-controles")

const express=requiere("espress")
const router =express.Router()

const {datospersonalesLista,datosPersonalesCreate} =require ("./../controladores/DatosPersonales-contoles")

router.get("/",datospersonalesLista)
router.post("/",datosPersonalesCreate)

module.exports = router
