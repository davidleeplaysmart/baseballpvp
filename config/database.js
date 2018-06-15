const Sequelize = require('sequelize');

const sequelize =new Sequelize('sqlite:./baseball.db.sqlite');

module.exports.sequelize = sequelize;