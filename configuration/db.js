const Sequelize = require('sequelize');
const { DB } = require('./config');

const sequelize = new Sequelize(
  DB.dbname, DB.username, DB.password, {
  host: DB.databaseurl,
  port: DB.port,
  dialect: 'mysql',
  pool: {
    max: DB.pool.max,
    min: DB.pool.min,
    acquire: DB.pool.acquire,
    idle: DB.pool.idle,
  },
});
module.exports = sequelize;
