// Update with your config settings.
const dotenv = require('dotenv');
dotenv.load();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_URI,
      database: process.env.MYSQL_DEV_DB,
      user: process.env.MYSQL_MASTER_USER,
      password: process.env.MYSQL_MASTER_PASS
    },
    pool: {
      max: 1,
      min: 1
    }
  }
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 5,
  //     max: 20
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};