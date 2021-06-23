const tableName = 'schedule_teacher';
const createTableQuery = `
CREATE TABLE IF NOT EXISTS ${tableName}
(
  id            INT NOT NULL auto_increment ,
  schedule_id   INT NOT NULL,
  teacher_id    INT NOT NULL,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  updated_at    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (id),
  FOREIGN KEY (schedule_id)
  REFERENCES schedules (id)
  ON DELETE CASCADE,
  FOREIGN KEY (teacher_id)
  REFERENCES teachers (id)
  ON DELETE CASCADE,
  UNIQUE (schedule_id, teacher_id)
)
`;
const insertDummyDataQuery = `
INSERT INTO ${tableName} 
(schedule_id, teacher_id)
VALUES 
(3, 1),
(3, 2),
(1, 1),
(1, 2)
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
