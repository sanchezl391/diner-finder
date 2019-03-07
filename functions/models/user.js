const Sequelize = require('sequelize');
const sequelize = require('../services/database');

const user = sequelize.define('user', {
	googleId: {
		type: Sequelize.STRING, 
		autoIncrement: false,
		allowNull: false,
	}, id: {
		type: Sequelize.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	}
});

module.exports = user;