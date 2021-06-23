const db = require('./db');
const model = require('../models/programmingLanguages');
async function getMultiple() {
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM ${model.tableName}`
  );
  return rows;
}
async function getSingle(id) {
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM ${model.tableName} WHERE id = ?`,
    [id]
  );
  if (rows.length == 0) {
    return {
      message: "Programming language with given id doesn't exist",
    };
  }
  return rows[0];
}
async function create(programmingLanguage) {
  const result = await db.query(
    `INSERT INTO ${model.tableName} 
    (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    VALUES 
    (?, ?, ?, ?, ?)`,
    [
      programmingLanguage.name,
      programmingLanguage.released_year,
      programmingLanguage.githut_rank,
      programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank,
    ]
  );

  if (result.affectedRows) {
    const rows = await db.query(
      `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
      FROM ${model.tableName} WHERE id = ?`,
      [result.insertId]
    );
    return {
      message: 'Programming language updated successfully',
      language: rows[0],
    };
  } else {
    return { message: 'Error in updating programming language' };
  }
}
async function update(id, programmingLanguage) {
  const result = await db.query(
    `UPDATE ${model.tableName} 
    SET name=?, released_year=?, githut_rank=?, 
    pypl_rank=?, tiobe_rank=? 
    WHERE id=?`,
    [
      programmingLanguage.name,
      programmingLanguage.released_year,
      programmingLanguage.githut_rank,
      programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank,
      id,
    ]
  );

  if (result.affectedRows) {
    const rows = await db.query(
      `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
      FROM ${model.tableName} WHERE id = ?`,
      [id]
    );
    return {
      message: 'Programming language updated successfully',
      language: rows[0],
    };
  } else {
    return { message: 'Error in updating programming language' };
  }
}
async function remove(id) {
  const result = await db.query(`DELETE FROM ${model.tableName} WHERE id=?`, [
    id,
  ]);

  let message = 'Error in deleting programming language';

  if (result.affectedRows) {
    message = 'Programming language deleted successfully';
  }

  return { message };
}

module.exports = { getMultiple, getSingle, create, update, remove };
