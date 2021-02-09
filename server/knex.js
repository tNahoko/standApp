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
};

const db = knex(config);

module.exports = db;