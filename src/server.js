require('dotenv').config();
const cors = require('cors');
const express = require('express');
const schedulesRouter = require('./routes/schedules');
const batchesRouter = require('./routes/batches');
const teachersRouter = require('./routes/teachers');
const db = require('./services/db');
const batchesModel = require('./models/batches');
const schedulesModel = require('./models/schedules');
const teachersModel = require('./models/teachers');
const scheduleTeacherModel = require('./models/schedule_teacher');
const app = express();
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});
app.use('/schedules', schedulesRouter);
app.use('/batches', batchesRouter);
app.use('/teachers', teachersRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });
  return;
});
app.listen(process.env.PORT, async () => {
  console.log('Listening on: ' + process.env.PORT);
  try {
    // resetDB();
  } catch (err) {
    console.log(err.message);
  }
});
const resetDB = async () => {
  try {
    await dropAllTables();
    await createAllTables();
    await insertDummyDataAllTables();
  } catch (err) {
    console.log(err.message);
  }
};
const dropAllTables = async () => {
  try {
    await db.query(scheduleTeacherModel.dropTableQuery);
    await db.query(teachersModel.dropTableQuery);
    await db.query(schedulesModel.dropTableQuery);
    await db.query(batchesModel.dropTableQuery);
  } catch (err) {
    console.log(err.message);
  }
};
const createAllTables = async () => {
  try {
    await db.query(batchesModel.createTableQuery);
    await db.query(schedulesModel.createTableQuery);
    await db.query(teachersModel.createTableQuery);
    await db.query(scheduleTeacherModel.createTableQuery);
  } catch (err) {
    console.log(err.message);
  }
};
const insertDummyDataAllTables = async () => {
  try {
    await db.query(batchesModel.insertDummyDataQuery);
    await db.query(schedulesModel.insertDummyDataQuery);
    await db.query(teachersModel.insertDummyDataQuery);
    await db.query(scheduleTeacherModel.insertDummyDataQuery);
  } catch (err) {
    console.log(err.message);
  }
};
