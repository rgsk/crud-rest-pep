const db = require('./db');
const { tableName, columns } = require('../models/schedule_teacher');
const commonServices = require('./common');

module.exports = {
  ...commonServices(tableName, columns),
  deleteEntriesWithScheduleId: async (schedule_id) => {
    const result = await db.query(
      `DELETE FROM ${tableName} 
      WHERE ${columns.schedule_id} = ?
    `,
      [schedule_id]
    );
    let message = `Error in deleting from ${tableName}`;

    if (result.affectedRows) {
      message = `delete op in table ${tableName} successfull`;
    }

    return { message };
  },
};
