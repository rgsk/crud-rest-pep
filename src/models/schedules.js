const tableName = 'schedules';
const columns = {
  id: 'id',
  batch_id: 'batch_id',
  title: 'title',
  start_time: 'start_time',
  end_time: 'end_time',
  duration: 'duration',
  created_at: 'created_at',
  updated_at: 'updated_at',
};
const createTableQuery = `
CREATE TABLE IF NOT EXISTS ${tableName}
(
  ${columns.id}            INT NOT NULL auto_increment ,
  ${columns.batch_id}      INT NOT NULL,
  ${columns.title}         VARCHAR(255),
  ${columns.start_time}    DATETIME NOT NULL,
  ${columns.end_time}      DATETIME NOT NULL,
  ${columns.duration}      INT NOT NULL,
  ${columns.created_at}    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  ${columns.updated_at}    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (id),
  FOREIGN KEY (batch_id)
        REFERENCES batches (id)
        ON DELETE CASCADE
)
`;
const insertDummyDataQuery = `
INSERT INTO ${tableName} 
( ${columns.batch_id}, ${columns.start_time}, ${columns.end_time}, ${columns.duration})
VALUES 
(1, '2021-6-12 05:00:00', '2021-6-12 06:00:00', 3600),
(1, '2021-6-13 05:00:00', '2021-6-13 06:00:00', 3600),
(2, '2021-6-14 05:00:00', '2021-6-14 06:00:00', 3600),
(2, '2021-6-15 05:00:00', '2021-6-15 06:00:00', 3600),
(2, '2021-6-16 05:00:00', '2021-6-16 06:00:00', 3600)
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
