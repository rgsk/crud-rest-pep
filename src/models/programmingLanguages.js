const tableName = 'programming_languages'
const createTableQuery = 
`
CREATE TABLE IF NOT EXISTS ${tableName}
(
  id            INT(11) NOT NULL auto_increment ,
  name          VARCHAR(255) NOT NULL ,
  released_year INT NOT NULL ,
  githut_rank   INT NULL ,
  pypl_rank     INT NULL ,
  tiobe_rank    INT NULL ,
  created_at    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  updated_at    DATETIME on UPDATE CURRENT_TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
  PRIMARY KEY (id),
  UNIQUE idx_name_unique (name(255))
)
engine = innodb charset=utf8mb4 COLLATE utf8mb4_general_ci
`
const insertDummyDataQuery = 
`
INSERT INTO ${tableName}(id,name,released_year,githut_rank,pypl_rank,tiobe_rank) 
VALUES 
(1,'JavaScript',1995,1,3,7),
(2,'Python',1991,2,1,3),
(3,'Java',1995,3,2,2),
(4,'TypeScript',2012,7,10,42),
(5,'C#',2000,9,4,5),
(6,'PHP',1995,8,6,8),
(7,'C++',1985,5,5,4),
(8,'C',1972,10,5,1),
(9,'Ruby',1995,6,15,15),
(10,'R',1993,33,7,9),
(11,'Objective-C',1984,18,8,18),
(12,'Swift',2015,16,9,13),
(13,'Kotlin',2011,15,12,40),
(14,'Go',2009,4,13,14),
(15,'Rust',2010,14,16,26),
(16,'Scala',2004,11,17,34)
`
const dropTableQuery = 
`
DROP TABLE ${tableName}
`
const deleteRowsQuery = 
`
DELETE FROM ${tableName}
`
module.exports = {
  tableName,
  createTableQuery,
  insertDummyDataQuery,
  dropTableQuery,deleteRowsQuery
}