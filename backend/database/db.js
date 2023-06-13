const { Sequelize } = require('sequelize');
require('dotenv').config({ path: 'cred.env' }); 


const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  
} = process.env;


const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
});


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = sequelize;
