const mongoose = require('mongoose');

// const connectionString =
//   'mongodb+srv://Vinny:12345@nodeexpress.a3iqb.mongodb.net/TsMng?retryWrites=true&w=majority';

const coonectDb = (uri) => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log('db conected sucessfully');
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = coonectDb;
