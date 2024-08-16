const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/wil') // Example for postgres



const User =  sequelize.define("user",{
  nombre:{
    type:DataTypes.STRING,
    allowNull:false
  },
  contraseña:{
    type:DataTypes.STRING,
    allowNull:false
  }

})
const DatosPersonales =  sequelize.define("DatosPersonales",{
  ci:{
    type:DataTypes.INET,
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
    type:DataTypes.BOOLEAN,
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
const HistorialContraseña= sequelize.define("Historial contraseña",{
  contraseña:{
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
  Roles_id:{
    type:DataTypes.STRING,
    allowNull:false
  },
  Nombre_Rol:{
    type:DataTypes.STRING,
    allowNull:false
  },
})

async function probarconnexion(){
  try {
    await sequelize.sync({force:true})
       sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
    
  
  }
  module.exports=probarconnexion