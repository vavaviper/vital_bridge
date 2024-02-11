// models/User.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Adjust the path as necessary

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  // Additional model options
});

module.exports = User;
