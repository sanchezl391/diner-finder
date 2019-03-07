const keys = require('../config/keys');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(keys.dbName, keys.dbUsername, keys.dbPassword, {
	dialect: 'mysql',
    host: '127.0.0.1',
    operatorsAliases: false
});

console.log('exporting sequelize');

module.exports = sequelize;