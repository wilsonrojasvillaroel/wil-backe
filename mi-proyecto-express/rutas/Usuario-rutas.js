

const express=require("express")
const router =express.Router()

const {usuariosLista,usuarioCreate} =require ("./../controladores/Usuario-controles")

router.get("/",usuariosLista)
router.post("/",usuarioCreate)


module.exports = router