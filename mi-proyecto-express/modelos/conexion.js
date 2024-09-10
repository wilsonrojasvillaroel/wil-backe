const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/wil') // Example for postgres



const Usuario =  sequelize.define("Usuario",{
  nombre:{
    type:DataTypes.STRING,
    allowNull:false
  },
  contrasenia:{
    type:DataTypes.STRING,
    allowNull:false
  }

})
const DatosPersonales =  sequelize.define("DatosPersonales",{
  ci:{
    type:DataTypes.STRING,
    allowNull:false
  },
  telefono:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  Correo:{
    type:DataTypes.STRING,
    allowNull:false
  },
  FechaNacimiento:{
    type:DataTypes.DATEONLY,
    allowNull:false
  },
  Domicilio:{
    type:DataTypes.STRING,
    allowNull:false
  }
})
const DatosAcademicos= sequelize.define("DatosAcademicos",{
GradoAcademico:{
  type:DataTypes.STRING,
  allowNull:false
},
AreaEspecializacion:{
  type:DataTypes.STRING,
  allowNull:false
},
Grado:{
  type:DataTypes.STRING,
  allowNull:false
}
})
const HistorialContrasenia= sequelize.define("Historialcontrasenia",{
  contrasenia:{
    type:DataTypes.STRING,
    allowNull:false
  },
})
const Rol_Usuario= sequelize.define("Rol_Usuario",{
  RolesUsuario_id:{
    type:DataTypes.STRING,
    allowNull:false
  },
})
const Roles= sequelize.define("Roles",{

  Nombre_Rol:{
    type:DataTypes.STRING,
    allowNull:false
  },
})
Usuario.belongsToMany(Roles, { through: 'RolUsuario' });
Roles.belongsToMany(Usuario, { through: 'RolUsuario' });

Usuario.hasMany(HistorialContrasenia);
HistorialContrasenia.belongsTo(Usuario);

Usuario.hasOne(DatosAcademicos);
DatosAcademicos.belongsTo(Usuario);

Usuario.hasOne(DatosPersonales);
DatosPersonales.belongsTo(Usuario);

async function probarconnexion(){
  try {
    await sequelize.sync({force:true})
       sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
   
  
  }
  
  module.exports={probarconnexion,sequelize,Usuario,Roles,HistorialContrasenia,DatosAcademicos,DatosPersonales}