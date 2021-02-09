require("dotenv").config();
const knex = require("knex");

const config = {
  client: "pg",
  connection: {
    connectionString:
    process.env.DATABASE_URL || `postgres://${process.env.USER}:${process.env.PW}@127.0.0.1:5432/todo`,
    ssl: process.env.HAS_SSL ? { rejectUnauthorized: false } : undefined,
  },
  searchPath: "public",
  migrations: {
    directory: __dirname + '/db/migrations',
  },
  seeds: {
    directory: __dirname + '/db/seeds'
  }
};

const db = knex(config);

module.exports = db;