const tableName = 'batches';
const createTableQuery = `
CREATE TABLE IF NOT EXISTS ${tableName}
(
  id            INT NOT NULL auto_increment ,
  name          VARCHAR(255) NOT NULL,
  start_date    DATE NOT NULL,
  duration      VARCHAR(255) NOT NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  updated_at    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (id)
)
`;
const insertDummyDataQuery = `
INSERT INTO batches 
(name, start_date, duration)
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
  createTableQuery,
  insertDummyDataQuery,
  dropTableQuery,
  deleteRowsQuery,
};
