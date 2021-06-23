const tableName = 'schedules';
const createTableQuery = `
CREATE TABLE IF NOT EXISTS ${tableName}
(
  id            INT NOT NULL auto_increment ,
  batch_id      INT NOT NULL,
  start_time    DATETIME NOT NULL,
  end_time      DATETIME NOT NULL,
  duration      INT NOT NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  updated_at    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (id),
  FOREIGN KEY (batch_id)
        REFERENCES batches (id)
        ON DELETE CASCADE
)
`;
const insertDummyDataQuery = `
INSERT INTO ${tableName} 
(batch_id, start_time, end_time, duration)
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
  createTableQuery,
  insertDummyDataQuery,
  dropTableQuery,
  deleteRowsQuery,
};
