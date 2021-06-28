require('dotenv')
  .config();
const { DB_USER, DB_PASSWORD, DB_DIALECT, DB_HOST, DB_NAME } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT
  },
  test: {
    username: "root",
    password: "root",
    database: "test",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: DB_DIALECT
  }
}
