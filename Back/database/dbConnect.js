const mysql = require('mysql');


const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '0939872615',
  database: 'vluapp'
})

module.exports = dbConnection;