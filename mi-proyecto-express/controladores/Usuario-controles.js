const{ Usuario}=require("./../ modelos/conexion")
 
async function usuariosLista(req,res) {
    const usuario=await Usuario.findAll()
    res.send(usuario)
}
async function usuarioCreate(req,res) {
    const Usuario=await Usuario.Create({nombre:"juancito",contrasenia:"123"})
    
}




module.exports={usuariosLista,usuarioCreate}