require('dotenv').config();

const dbName = String(process.env.DB_NAME);
if (!dbName) throw new Error('You must specify a DB_NAME env variable.');

module.exports = {
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV || 'development',
  DB: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    databaseurl: process.env.DB_HOST,
    dbname: dbName,
    port: process.env.POST,
    pool: {
      max: Number(process.env.POOL_MAX),
      min: Number(process.env.POOL_MIN),
      acquire: process.env.POOL_ACQUIRE,
      idle: process.env.POOL_IDLE,
    },
  },
};
