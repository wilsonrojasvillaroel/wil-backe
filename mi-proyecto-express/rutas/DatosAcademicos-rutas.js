const { datosacademicosCreate } = require("../controladores/DatosAcademicos-controles")

const express=requiere("espress")
const router =express.Router()

const {datosacademicosLista,datosacademicosCreate} =require ("./../controladores/DatosAcademicos-controles")

router.get("/",datospersonalesLista)
router.post("/",datosPersonalesCreate)

router.get("/",datosacademicosLista)
router.post("/",datosacademicosCreate)

module.exports = router