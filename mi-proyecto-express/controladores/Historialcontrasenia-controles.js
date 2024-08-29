const{HistorialContrasenia}=require("./../ modelos/conexion")

async function historialcontraseniaLista(req,res) {
    const historialcontrasenia=await HistorialContrasenia.findAll()
    res.send(historialcontrasenia)
}
async function historialcontrasniaCreate(req,res) {
    const HistorialContrasenia=await HistorialContrasenia.Create({nombre:"juancito",contrasenia:"123"})
    
}
module.exports={historialcontraseniaLista,historialcontrasniaCreate}