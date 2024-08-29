const{ Roles}=require("./../ modelos/conexion")

async function rolesLista(req,res) {
    const roles=await Roles.findAll()
    res.send(roles)
}
async function rolesCreate(req,res) {
    const Roles=await Roles.Create({nombre:"franco",})
    
}
module.exports={rolesLista,rolesCreate}