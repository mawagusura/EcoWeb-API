const Sequelize = require('sequelize');
var exports = module.exports = {};

const DbUrl = process.env.DATABASE_URL || "postgresql://postgres:admin@localhost:5432/postgres"
exports.sequelize = new Sequelize(DbUrl);


