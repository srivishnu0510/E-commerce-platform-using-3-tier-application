const mysql = require("mysql2");

const db = mysql.createPool({
  host: process.env.DB_HOST,   // RDS endpoint
  user: process.env.DB_USER,   // admin
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

module.exports = db;
