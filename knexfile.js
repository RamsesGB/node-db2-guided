// Update with your config settings.

module.exports = {
  development: {
    client: 'sqlite3', //database driver
    connection: {
      //this connection property can be an object or a string
      filename: './data/market.db3', // This pathway needs to be written from the perspective of the root of the project file
    },
    useNullAsDefault: true, //This is something only required for SQLite
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
