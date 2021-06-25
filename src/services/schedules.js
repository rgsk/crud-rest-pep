const db = require('./db');
const { tableName, columns } = require('../models/schedules');

async function getMultiple() {
  const rows = await db.query(`SELECT * FROM ${tableName}`);
  return rows;
}
async function getSingle(id) {
  const rows = await db.query(`SELECT * FROM ${tableName} WHERE id = ?`, [id]);
  if (rows.length == 0) {
    return {
      message: `in table ${tableName} entry with given id doesn't exist`,
    };
  }

  return rows[0];
}
async function create(schedule) {
  const result = await db.query(
    `INSERT INTO ${tableName} 
    (
      ${columns.batch_id}, ${columns.title}, 
      ${columns.start_time}, ${columns.end_time},
      ${columns.duration}
    ) 
    VALUES 
    (?, ?, ?, ?, ?)`,
    [
      schedule.batch_id,
      schedule.title || '(No title)',
      schedule.start_time,
      schedule.end_time,
      schedule.duration,
    ]
  );

  if (result.affectedRows) {
    const rows = await db.query(
      `SELECT *
      FROM ${tableName} WHERE id = ?`,
      [result.insertId]
    );
    return {
      message: `new entry created in table ${tableName} successfully`,
      entry: rows[0],
    };
  } else {
    return { message: `Error in create for table ${tableName}` };
  }
}
async function update(id, schedule) {
  const result = await db.query(
    `UPDATE ${tableName} 
    SET  ${columns.batch_id}=?, ${columns.title}=?, 
    ${columns.start_time}=?, ${columns.end_time}=?,
    ${columns.duration}=?
    WHERE id=?`,
    [
      schedule.batch_id,
      schedule.title || '(No title)',
      schedule.start_time,
      schedule.end_time,
      schedule.duration,
      id,
    ]
  );

  if (result.affectedRows) {
    const rows = await db.query(
      `SELECT * 
      FROM ${tableName} WHERE id = ?`,
      [id]
    );
    return {
      message: `${tableName} updated successfully`,
      entry: rows[0],
    };
  } else {
    return { message: `Error in updating ${tableName}` };
  }
}
async function remove(id) {
  const result = await db.query(`DELETE FROM ${tableName} WHERE id=?`, [id]);

  let message = `Error in deleting from ${tableName}`;

  if (result.affectedRows) {
    message = `delete op in table ${tableName} successfull`;
  }

  return { message };
}

module.exports = { getMultiple, getSingle, create, update, remove };
