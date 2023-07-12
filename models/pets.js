const { Sequelize, DataTypes } = require('sequelize');

// Create a new Sequelize instance
const sequelize = new Sequelize('petsdb', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

const Pet = sequelize.define('Pet', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  category: {
    type: DataTypes.JSONB,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photoUrls: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: true,
  },
  tags: {
    type: DataTypes.ARRAY(DataTypes.JSONB),
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Pet;
