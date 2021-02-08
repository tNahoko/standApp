require("dotenv").config();
const knex = require("knex");

const { CLIENT, DATABASE_URL, USER, PW, HAS_SSL } = process.env

const config = {
  client: CLIENT,
  connection: {
    connectionString:
      DATABASE_URL || `postgres://${USER}:${PW}@127.0.0.1:5432/todo`,
    ssl: HAS_SSL ? { rejectUnauthorized: false } : undefined,
  },
  searchPath: "public",
  migrations: {
    tableName: 'knex_migrations'
  }
};

const db = knex(config);

module.exports = db;