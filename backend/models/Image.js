const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Images = sequelize.define('images', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  headline: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subline: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  story: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
  },
  createdAt:{
    type: DataTypes.TIME,
  },
  updatedAt:{
    type: DataTypes.TIME,
  },
});
try {
 
  Images.sync();
  console.log('Images model synced successfully.');
} catch (error) {
  console.error('Error syncing Images model:', error);
}
module.exports = Images;

 