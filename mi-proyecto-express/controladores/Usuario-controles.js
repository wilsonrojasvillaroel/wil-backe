const router = require("../rutas/Usuario-rutas")
const { Usuario, DatosPersonales, DatosAcademicos } = require("./../modelos/conexion")


async function usuariosLista(req, res) {
    const usuario = await Usuario.findAll({

        include: [

            {
                model: DatosPersonales,
                attributes: ["ci", "telefono", "Correo", "FechaNacimiento", "Domicilio"]
            },
            {
                model: DatosAcademicos,
                attributes: ["GradoAcademico", "AreaEspecializacion", "Grado"]
            }
        ]




    })
    console.log(usuario)


    res.send(usuario)

}
async function usuarioCreate(req, res) {


    console.log(req.body)
    

    const usuario = await Usuario.create({ nombre: req.body.nombre, contrasenia: req.body.contrasenia })
    const datospersonales = await DatosPersonales.create({ ci: req.body.ci, telefono: req.body.telefono, Correo: req.body.correo, FechaNacimiento: req.body.fechanacimiento, Domicilio: req.body.domicilio, UsuarioId: usuario.id })
    const datosacademicos = await DatosAcademicos.create({ GradoAcademico: req.body.gradoacademico, AreaEspecializacion: req.body.areaespecializacion, Grado: req.body.grado, UsuarioId: usuario.id })
    res.send("alegria")
    

}
async function actualizarUsuario(req, res) {
    const body = req.body

    const idParams = req - params.id
    const [actualizarUsuario] = await Usuario.update({
        firstName: body.firstName,
        lastName: body.lastName,
        password: body.password,
        ci: body.ci
    })
}
async function eliminarUsuario(req, res) {
    const body = req.body

    const idParams = req - params.id
    const [eliminarusuario] = await Usuario.update({
        firstName: body.firstName,
        lastName: body.lastName,
        password: body.password,
        ci: body.ci
    })
}


module.exports = { usuariosLista, usuarioCreate, actualizarUsuario, eliminarUsuario, Usuario }