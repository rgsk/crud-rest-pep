const tableName = 'teachers';
const createTableQuery = `
CREATE TABLE IF NOT EXISTS ${tableName}
(
  id            INT NOT NULL auto_increment ,
  name          VARCHAR(255) NOT NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  updated_at    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (id)
)
`;
const insertDummyDataQuery = `
INSERT INTO ${tableName} 
(name)
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
