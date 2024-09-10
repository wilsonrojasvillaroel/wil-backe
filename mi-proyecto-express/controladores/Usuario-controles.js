const{ Usuario, DatosPersonales, DatosAcademicos}=require("./../modelos/conexion")
 
async function usuariosLista(req,res) {
    const usuario=await Usuario.findAll({

        include:[

            {
                model:DatosPersonales,
                attributes:["ci","telefono","Correo","FechaNacimiento","Domicilio"]
            },
            {
                model:DatosAcademicos,
                attributes:["GradoAcademico","AreaEspecializacion","Grado"]
            }
        ]




    })
      /* {includes:
        {
        model:DatosPersonales
        attributes:["ci","telefono","Correo","FechaNacimiento","Domicilio"]}
       }
       {
        model:DatosAcademicos
        attributes:["GradoAcademico","AreaEspecializacion","Grado"]}
        
    
      )}*/
    
        
    
 
    res.send(usuario)

} 

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
    const datospersonales=await DatosPersonales.create({ci:req.body.ci,telefono:req.body.telefono,Correo:req.body.correo,FechaNacimiento:req.body.fechanacimiento,Domicilio:req.body.domicilio,UsuarioId:usuario.id})
    const datosacademicos=await DatosAcademicos.create({GradoAcademico:req.body.gradoacademico,AreaEspecializacion:req.body.areaespecializacion,Grado:req.body.grado,UsuarioId:usuario.id})
    res.send("alegria")
    
}




module.exports={usuariosLista,usuarioCreate,Usuario}