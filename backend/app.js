
const express = require('express');
const imageRoutes = require('./routes/imageRoutes');
const { Sequelize } = require('sequelize');
const sequelize = require('./database/db');
const cors = require('cors');
const app = express();
require('dotenv').config({ path: 'cred.env' });
app.use(cors());

const PORT = 3001;
const {
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  
} = process.env;
app.use(express.json());

app.use('/images', imageRoutes);

const sequelizeInstance = new Sequelize(
  DB_NAME,
  DB_USER,
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'mysql',
  }
);

sequelizeInstance
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');

    sequelizeInstance.sync().then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
