const tableName = 'teachers';
const columns = {
  id: 'id',
  name: 'name',
  created_at: 'created_at',
  updated_at: 'updated_at',
};
const createTableQuery = `
CREATE TABLE IF NOT EXISTS ${tableName}
(
  ${columns.id}            INT NOT NULL auto_increment ,
  ${columns.name}          VARCHAR(255) NOT NULL,
  ${columns.created_at}    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  ${columns.updated_at}    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (id)
)
`;
const insertDummyDataQuery = `
INSERT INTO ${tableName} 
(${columns.name})
VALUES 
('Sumeet Malik'),
('Rahul Gupta'),
('Mehak Gupta')
`;
const dropTableQuery = `
DROP TABLE ${tableName}
`;
const deleteRowsQuery = `
DELETE FROM ${tableName}
`;
module.exports = {
  tableName,
  createTableQuery,
  insertDummyDataQuery,
  dropTableQuery,
  deleteRowsQuery,
};
