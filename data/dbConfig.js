const knex = require('knex');

const knexConfig = {
  client: "sqlite3", //database driver
  connection: { //this connection property can be an object or a string
    filename: './data/produce.db3' // This pathway needs to be written from the perspective of the root of the project file
  },
  useNullAsDefault: true, //This is something only required for SQLite
};

// this db variable represents a live connection to the database
const db = knex(knexConfig);

module.exports = db;