const{ Usuario}=require("./../modelos/conexion")
 
async function usuariosLista(req,res) {
    const usuario=await Usuario.findAll()
    res.send(usuario)
}
async function usuarioCreate(req,res) {

    console.log(req.body)

    console.log(req.body.nombre)
    console.log(req.body.contrasenia)
    



    const usuario=await Usuario.create({nombre:req.body.nombre,contrasenia:req.body.contrasenia})

    res.send("alegria")
    
}




module.exports={usuariosLista,usuarioCreate,Usuario}