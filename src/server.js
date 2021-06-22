require('dotenv').config()
const cors = require('cors')
const express = require('express')
const programmingLanguagesRouter = require('./routes/programmingLanguages');
const db = require('./services/db')
const programmingLanguagesModel = require('./models/programmingLanguages')
const app = express()
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send("Hello world")
})
app.use('/programming-languages', programmingLanguagesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({'message': err.message});
  return;
});
app.listen(process.env.PORT, async () => 
{
  console.log('Listening on: ' + process.env.PORT)
  // const result = await db.query(programmingLanguagesModel.deleteRowsQuery)
  // console.log(result)
})