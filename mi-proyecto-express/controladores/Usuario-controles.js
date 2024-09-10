const{ Usuario, DatosPersonales}=require("./../modelos/conexion")
 
async function usuariosLista(req,res) {
    const usuario=await Usuario.findAll()
    res.send(usuario)

    const array=[nombre,contrasenia,ci,telefono,correo,fechanacimiento,domicilio];
    const resultado = array.join();
}
/*function EliminarUauarios*/
async function usuarioCreate(req,res) {

    console.log(req.body)

    console.log(req.body.nombre)
    console.log(req.body.contrasenia)

    console.log(req.body.ci)
    console.log(req.body.telefono)
    console.log(req.body.correo)
    console.log(req.body.fechanacimiento)
    console.log(req.body.domicilio)
    
    
    
    



    const usuario=await Usuario.create({nombre:req.body.nombre,contrasenia:req.body.contrasenia})
    const datospersonales=await DatosPersonales.create({ci:req.body.ci,telefono:req.body.telefono,Correo:req.body.correo,FechaNacimiento:req.body.fechanacimiento,Domicilio:req.body.domicilio})
    


    res.send("alegria")
    
}




module.exports={usuariosLista,usuarioCreate,Usuario}