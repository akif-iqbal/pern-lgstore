const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "AKIF_123",
    host: "localhost",
    port: 5432,
    database: "lg"
});

module.exports = pool;