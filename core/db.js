const { Sequelize } = require('sequelize');

class DBConnection {
  constructor() {
    this.sequelize = new Sequelize('petsdb', 'root', '', {
      host: 'localhost',
      dialect: 'mysql',
    });
  }
}

module.exports = DBConnection;
