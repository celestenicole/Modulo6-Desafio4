const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "TU_PASSWORD",
  database: "likeme",
  port: 5432,
});

module.exports = pool;
