const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectdb = require('./db/connect');
require('dotenv').config();
const port = 5000;

// middleware
app.use(express.static('./public'));
app.use(express.json());

// routes

app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectdb(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (err) {
    console.log(err);
  }
};
start();
