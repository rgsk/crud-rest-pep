const tableName = 'batches';
const columns = {
  id: 'id',
  name: 'name',
  start_date: 'start_date',
  duration: 'duration',
  created_at: 'created_at',
  updated_at: 'updated_at',
};
const createTableQuery = `
CREATE TABLE IF NOT EXISTS ${tableName}
(
  ${columns.id}            INT NOT NULL auto_increment ,
  ${columns.name}          VARCHAR(255) NOT NULL,
  ${columns.start_date}    DATE NOT NULL,
  ${columns.duration}      VARCHAR(255) NOT NULL,
  ${columns.created_at}    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  ${columns.updated_at}    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (id)
)
`;
const insertDummyDataQuery = `
INSERT INTO batches 
(${columns.name}, ${columns.start_date}, ${columns.duration})
VALUES 
('c++', '2021-6-12', '3 months'),
('java', '2021-7-1', '2 months'),
('python', '2021-8-4', '4 months'),
('mern stack', '2021-9-8', '6 months'),
('placement', '2021-10-29', '7 months')
`;
const dropTableQuery = `
DROP TABLE ${tableName}
`;
const deleteRowsQuery = `
DELETE FROM ${tableName}
`;
module.exports = {
  tableName,
  columns,
  createTableQuery,
  insertDummyDataQuery,
  dropTableQuery,
  deleteRowsQuery,
};
