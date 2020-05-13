const knex = require('knex');
const knexfile = require('../knexfile.js');

const knexConfig = knexfile.development;

// knex(knexConfig) represents a live connection to the database

module.exports = knex(knexConfig);
