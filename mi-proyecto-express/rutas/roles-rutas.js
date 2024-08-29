const { rolesCreate } =require ("../controladores/Roles-controles")

const express=requiere("espress")
const router =express.Router()


const {rolesLista,rolesCreate} =require ("./../controladores/Roles-controles")


router.get("/",rolesLista)
router.post("/",rolesCreate)

module.exports = router