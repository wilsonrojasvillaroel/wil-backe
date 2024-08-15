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