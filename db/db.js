const { Pool } = require("pg");
require("dotenv").config();
const pool = new Pool({
  host: "db",
  port: 5432,
  user: "user",
  password: process.env.dbPassword,
  database: "dockerTest",
});

module.exports = pool;
