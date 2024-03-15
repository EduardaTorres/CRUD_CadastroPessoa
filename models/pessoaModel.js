const { Sequelize, DataTypes } = require('sequelize');
const db = require('../infrastructure/db');

module.exports = db.define('Pessoa', {

  Nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Telefone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  DataNascimento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  CPF: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Status: {
    type: DataTypes.ENUM,
    values:['COMPLETED', 'ACTIVE'],
    allowNull: false,
    defaultValue: 'ACTIVE'
  }
  
});
