const mysql = require('mysql');


const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vluapp'
})

module.exports = dbConnection;