const db = require('./db');

function commonServices(tableName, columns) {
  return {
    getMultiple: async () => {
      const rows = await db.query(`SELECT * FROM ${tableName}`);
      return rows;
    },
    getSingle: async (id) => {
      const rows = await db.query(`SELECT * FROM ${tableName} WHERE id = ?`, [
        id,
      ]);
      if (rows.length == 0) {
        return {
          message: `in table ${tableName} entry with given id doesn't exist`,
        };
      }

      return {
        message: `fetched successfully`,
        entry: rows[0],
      };
    },
    create: async (entity, fallbackValues) => {
      const { str, arr } = insertStringAndArray(
        tableName,
        entity,
        fallbackValues
      );
      const result = await db.query(str, arr);

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
    },
    update: async (id, entity, fallbackValues) => {
      const { str, arr } = updateStringAndArray(
        tableName,
        entity,
        fallbackValues
      );
      arr.push(id);
      const result = await db.query(str, arr);

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
    },
    remove: async (id) => {
      const result = await db.query(`DELETE FROM ${tableName} WHERE id=?`, [
        id,
      ]);

      let message = `Error in deleting from ${tableName}`;

      if (result.affectedRows) {
        message = `delete op in table ${tableName} successfull`;
      }

      return { message };
    },
  };
}
const cutLast = (str, n) => {
  return str.slice(0, str.length - n);
};
const insertStringAndArray = (tableName, columns, fallbacks) => {
  arr = [];
  let str = `INSERT INTO ${tableName} (`;
  for (let v in columns) {
    str += v + ', ';
    arr.push(columns[v] || fallbacks[v]);
  }
  str = cutLast(str, 2);
  str += `) VALUES (`;
  for (let _ in columns) {
    str += '?, ';
  }
  str = cutLast(str, 2);
  str += ')';

  return {
    str,
    arr,
  };
};
const updateStringAndArray = (tableName, columns, fallbacks) => {
  let str = `UPDATE ${tableName} SET `;
  const arr = [];
  for (let v in columns) {
    str += `${v}=?, `;
    arr.push(columns[v] || fallbacks[v]);
  }
  str = cutLast(str, 2);
  str += ' WHERE id=?';
  return {
    str,
    arr,
  };
};
module.exports = commonServices;
