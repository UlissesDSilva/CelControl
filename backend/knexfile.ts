import path from 'path';
require('dotenv').config()

module.exports = {
  development: {
    client: process.env.DB_CLIENT,
    version: process.env.DB_VERSION,
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE    
    },

    migrations: {
      directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },

    seeds: {
      directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },

    useNullAsDefault: true,
  },
};