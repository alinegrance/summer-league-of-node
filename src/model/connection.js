const mysql = require('mysql2/promise');
require('dotenv').config(); // .env nao substitui as variaveis de ambiente que ja existem

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;