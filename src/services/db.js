const mysql = require('mysql2/promise')
const dbConfig = require('../config/dbConfig')
let connection
async function query(sql, params) {
  if (!connection) {
    connection = await mysql.createConnection(dbConfig)
  }
  const [results] = await connection.execute(sql, params)
  return results;
}
module.exports = {
  query 
}