const mysql = require('mysql2/promise')
const dbConfig = require('../config/dbConfig')
let connection
(async () => {
  connection = await mysql.createConnection(dbConfig)
})()
async function query(sql, params) {
  const [results] = await connection.execute(sql, params)
  return results;
}
module.exports = {
  query
}