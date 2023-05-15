const pgp = require("pg-promise")();
require("dotenv").config();

// connection obj; cn short for connection
//will pass an object with the necessary information to connect our server with our database, using the variable name in your .env file
const cn = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
    user: process.env.PG_USER,
  };
  
  const db = pgp(cn);

module.exports = db;