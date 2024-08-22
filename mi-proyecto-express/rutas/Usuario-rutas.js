const { usuarioCreate } = require("../controladores/Usuario-controles")

const express=requiere("espress")
const router =express.Router()

const {usuariosLista,usuarioCreate} =require ("./../controladores/Usuario-controles")

const {rolesLista,rolesCreate} =require ("./../controladores/Roles-controles")

const {historialcontraseniaLista,historialcontrasniaCreate} =require ("./../controladores/Historialcontrasenia-controles")

const {datospersonalesLista,datosPersonalesCreate} =require ("./../controladores/DatosPersonales-contoles")

const {datosacademicosLista,datosacademicosCreate} =require ("./../controladores/DatosAcademicos-controles")

router.get("/",usuariosLista)
router.post("/",usuarioCreate)

router.get("/",rolesLista)
router.post("/",rolesCreate)

router.get("/",historialcontraseniaLista)
router.post("/",historialcontrasniaCreate)

router.get("/",datospersonalesLista)
router.post("/",datosPersonalesCreate)

router.get("/",datosacademicosLista)
router.post("/",datosacademicosCreate)

module.exports = router