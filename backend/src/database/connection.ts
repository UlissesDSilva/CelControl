import knex from 'knex';
const configuration = require('../../knexfile');

const config = process.env.NODE_ENV === 'dev'? configuration.development : configuration.production; 

const connection = knex(config);

export default connection;