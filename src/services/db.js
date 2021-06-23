const mysql = require('mysql2/promise');
const dbConfig = require('../config/dbConfig');
let connection;
async function query(sql, params) {
  if (!connection) {
    connection = await mysql.createConnection(dbConfig);
    await connection.execute(`SET SESSION time_zone = '+5:30'`);
  }
  const [results] = await connection.execute(sql, params);
  return results;
}
module.exports = {
  query,
};
