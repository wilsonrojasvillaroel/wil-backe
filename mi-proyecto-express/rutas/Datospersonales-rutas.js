

const express=require("express")
const router =express.Router()

const {datospersonalesLista,datosPersonalesCreate} =require ("./../controladores/DatosPersonales-contoles")

router.get("/",datospersonalesLista)
router.post("/",datosPersonalesCreate)

module.exports = router
