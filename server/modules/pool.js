// PG CONFIG SETUP
const pg = require('pg');
const Pool = pg.Pool;
const config = {
  database: 'game_library', //name of database
  host: 'localhost',
  port: 5432, //default for postgres
  max: 10, //Max connections to DB
  idleTimeoutMillis: 50000
};

const pool = new Pool(config);

pool.on('connect', (client) => {
    console.log('posgresql connected!');
  });
  
  pool.on('error', (err, client) => {
    console.log('Unexpected Error on Postgresql', err);
    process.exit(-1);
  });
  
  module.exports = pool;