import mysql from 'mysql';

var connection = mysql.createConnection({
  host: 'remotemysql.com',
  user: 'V7nz74RlH4',
  password: process.env.PASSWORD,
  database: 'V7nz74RlH4',
  multipleStatements: true
});

connection.connect();

export {
  connection
}  