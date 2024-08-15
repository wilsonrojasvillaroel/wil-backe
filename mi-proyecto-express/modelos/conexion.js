const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:1234@localhost:5432/wil') // Example for postgres

function probarconnexion(){
try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}

module.exports=probarconnexion