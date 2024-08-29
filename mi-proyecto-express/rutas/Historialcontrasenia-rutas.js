const { historialcontrasniaCreate } =require("../controladores/Historialcontrasenia-controles")

const express=requiere("espress")
const router =express.Router()

const {historialcontraseniaLista,historialcontrasniaCreate} =require ("./../controladores/Historialcontrasenia-controles")

router.get("/",historialcontraseniaLista)
router.post("/",historialcontrasniaCreate)

module.exports = router