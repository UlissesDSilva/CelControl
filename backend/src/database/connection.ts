import knex from 'knex';
require('dotenv').config()

const connection = knex({
  client: process.env.DB_CLIENT,
  version: process.env.DB_VERSION,
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE    
  },
  useNullAsDefault: true
});

export default connection;