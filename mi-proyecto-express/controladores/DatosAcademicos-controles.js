const{ DatosAcademicos}=require("./../ modelos/conexion")

async function datosacademicosLista(req,res) {
    const datosacademicos=await DatosAcademicos.findAll()
    res.send(datosacademicos)
}
async function datosacademicosCreate(req,res) {
    const datosacademicos=await DatosAcademicos.Create({GradoAcademico:"juancito",AreaEspecializacion:"123",grado:""})
    
}
module.exports={datosacademicosLista,datosacademicosCreate}